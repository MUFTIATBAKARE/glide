import * as THREE from 'three';
import { SceneManager } from './engine/SceneManager';
import { GameLoop } from './engine/GameLoop';
import { startNgService } from './services/StartNgService';
import { soundFx } from './services/SoundFx';
import { ProfileCard } from './ui/ProfileCard';
import { GameHud } from './ui/GameHud';
import { GameOverModal } from './ui/GameOverModal';
import { InstructionsModal } from './ui/InstructionsModal';
import { PlayerMarble } from './entities/PlayerMarble';
import { TrackManager } from './entities/TrackManager';

type GameState = 'PLAYING' | 'FALLING' | 'GAMEOVER' | 'PAUSED';

function initApp(): void {
  const container = document.getElementById('app') ?? document.body;

  // Initialize Scene, Camera, and WebGL Renderer
  const sceneManager = new SceneManager({ container });

  // Add ambient and directional cyber lighting
  const ambientLight = new THREE.AmbientLight(0x223344, 2.0);
  sceneManager.scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0x00f0ff, 3.2);
  keyLight.position.set(8, 16, 10);
  sceneManager.scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xff0077, 1.8);
  fillLight.position.set(-8, 10, -6);
  sceneManager.scene.add(fillLight);

  // Background atmospheric fog for cyber horizon
  sceneManager.scene.fog = new THREE.FogExp2(0x070913, 0.0075);

  // Initialize Entities & Subsystems
  const trackManager = new TrackManager(sceneManager.scene);
  const playerMarble = new PlayerMarble(sceneManager.scene);

  // Mount Floating Profile Card
  const profileCard = new ProfileCard(container);
  profileCard.mount();

  // Instructions Tutorial Modal
  const instructionsModal = new InstructionsModal({ container });

  // Game Loop State
  let gameState: GameState = 'PLAYING';
  let distance: number = 0;
  let packetsRouted: number = 0;
  let fallVelocityY: number = 0;
  const baseSpeed: number = 24.0;

  function openInstructions(): void {
    if (gameState === 'GAMEOVER') return;
    const prevGameState = gameState;
    gameState = 'PAUSED';
    soundFx.updateRollHum(0, false);
    instructionsModal.show(() => {
      gameState = prevGameState;
    });
  }

  // Mount In-Game HUD with Sound and Help triggers
  const gameHud = new GameHud({
    container,
    onHelpClick: () => {
      openInstructions();
    },
    onSoundToggle: () => {
      const isMuted = soundFx.toggleMute();
      return isMuted;
    },
  });

  const gameOverModal = new GameOverModal({ container });

  // Check first visit to show instructions overlay automatically
  const isFirstVisit = instructionsModal.checkFirstVisit(() => {
    gameState = 'PLAYING';
  });

  if (isFirstVisit) {
    gameState = 'PAUSED';
    soundFx.updateRollHum(0, false);
  }

  // Global keyboard shortcuts for HUD utilities (M = Mute, H = Help)
  const handleGlobalKeys = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    if (e.code === 'KeyM') {
      const isMuted = soundFx.toggleMute();
      gameHud.setSoundMuted(isMuted);
    } else if (e.code === 'KeyH' && !instructionsModal.isOpen()) {
      openInstructions();
    }
  };
  window.addEventListener('keydown', handleGlobalKeys);

  // Dynamic player custom styling
  const unsubscribePlayer = startNgService.onPlayerChange((player) => {
    if (player.style) {
      playerMarble.updateStyle(player.style);
    }
  });

  // Query player identity via start.ng bridge
  startNgService.whoAmI().catch((err) => {
    console.warn('Initial whoAmI fallback active:', err);
  });

  function restartGame(): void {
    distance = 0;
    packetsRouted = 0;
    fallVelocityY = 0;
    gameState = 'PLAYING';

    trackManager.reset();
    playerMarble.reset(new THREE.Vector3(0, 0.75, 0));

    gameHud.update(0, 0);
    gameHud.setVisible(true);

    soundFx.playStartChime();
  }

  // Game Loop setup
  const gameLoop = new GameLoop({
    onUpdate: (delta: number, elapsed: number) => {
      if (gameState === 'GAMEOVER' || gameState === 'PAUSED') {
        return;
      }

      // Dynamic speed progression as player travels further
      const speedMultiplier = 1 + Math.min(distance / 5000, 0.6);
      const currentSpeed = baseSpeed * speedMultiplier;

      if (gameState === 'PLAYING') {
        const forwardDeltaZ = -currentSpeed * delta;
        distance += currentSpeed * delta;

        // Update kinematics and trail
        playerMarble.update(delta, elapsed, forwardDeltaZ);
        trackManager.update(playerMarble.position.z, delta, elapsed);

        // Check track collision and packet pickups
        const status = trackManager.checkMarbleStatus(playerMarble.position, playerMarble.radius);

        if (status.collectedPackets > 0) {
          packetsRouted += status.collectedPackets;
          soundFx.playPacketPickup();
        }

        if (status.isOnTrack) {
          // Snap/glide marble smoothly on track elevation
          const targetY = status.trackY + playerMarble.radius;
          playerMarble.position.y += (targetY - playerMarble.position.y) * Math.min(delta * 22, 1.0);
          soundFx.updateRollHum(currentSpeed, true);
        } else {
          // Marble fell off track boundary!
          gameState = 'FALLING';
          fallVelocityY = -2.0;
          soundFx.playFallOff();
        }

        gameHud.update(distance, packetsRouted);
      } else if (gameState === 'FALLING') {
        // Free-fall physics
        fallVelocityY -= 42 * delta;
        playerMarble.position.y += fallVelocityY * delta;

        const forwardDeltaZ = -currentSpeed * 0.4 * delta;
        playerMarble.update(delta, elapsed, forwardDeltaZ);
        trackManager.update(playerMarble.position.z, delta, elapsed);

        // Terminate run once dropped sufficiently
        if (playerMarble.position.y < -16.0) {
          gameState = 'GAMEOVER';
          gameHud.setVisible(false);
          soundFx.updateRollHum(0, false);
          gameOverModal.show(distance, packetsRouted, restartGame);
        }
      }

      // Dynamic Chase Camera following the marble
      const targetCamX = playerMarble.position.x * 0.45;
      const targetCamY = Math.max(playerMarble.position.y + 4.8, 3.5);
      const targetCamZ = playerMarble.position.z + 10.5;

      sceneManager.camera.position.x += (targetCamX - sceneManager.camera.position.x) * Math.min(delta * 8.0, 1.0);
      sceneManager.camera.position.y += (targetCamY - sceneManager.camera.position.y) * Math.min(delta * 8.0, 1.0);
      sceneManager.camera.position.z += (targetCamZ - sceneManager.camera.position.z) * Math.min(delta * 8.0, 1.0);

      sceneManager.camera.lookAt(
        playerMarble.position.x * 0.35,
        Math.max(playerMarble.position.y + 0.5, 0),
        playerMarble.position.z - 6.0
      );
    },
    onRender: () => {
      sceneManager.render();
    },
    onResize: (width: number, height: number) => {
      sceneManager.resize(width, height);
    },
  });

  gameLoop.start();

  // Support Vite Hot Module Replacement (HMR) teardown
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener('keydown', handleGlobalKeys);
      unsubscribePlayer();
      profileCard.destroy();
      gameHud.destroy();
      instructionsModal.destroy();
      gameOverModal.destroy();
      playerMarble.dispose();
      trackManager.dispose();
      gameLoop.dispose();
      sceneManager.dispose();
    });
  }
}

// Ensure DOM is ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
