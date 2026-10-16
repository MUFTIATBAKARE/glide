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

  function triggerGameOver(reason: string = 'Unknown'): void {
    if (gameState === 'GAMEOVER') return;
    console.log('Game Over triggered by:', reason, 'at position:', playerMarble.position);
    gameState = 'GAMEOVER';
    gameHud.setVisible(false);
    soundFx.updateRollHum(0, false);
    gameOverModal.show(distance, packetsRouted, restartGame);
  }

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

      // Guard Delta Timing to avoid coordinate jumps after tab switching or momentary frame drops
      const safeDelta = Math.min(Math.max(delta, 0.0001), 0.1);

      // Dynamic speed progression as player travels further
      const speedMultiplier = 1 + Math.min(distance / 5000, 0.6);
      const currentSpeed = baseSpeed * speedMultiplier;

      if (gameState === 'PLAYING') {
        const forwardDeltaZ = -currentSpeed * safeDelta;
        distance += currentSpeed * safeDelta;

        // Query track ahead for dynamic turn centering
        const trackInfo = trackManager.getTrackAt(playerMarble.position.z);
        const trackCenterX = trackInfo.x;
        const trackWidth = trackInfo.width;

        // Update kinematics and trail relative to track bounds on turns
        playerMarble.update(safeDelta, elapsed, forwardDeltaZ, trackCenterX, trackWidth, true);
        trackManager.update(playerMarble.position.z, safeDelta, elapsed);

        // Check track collision and packet pickups
        const status = trackManager.checkMarbleStatus(playerMarble.position, playerMarble.radius);

        if (status.collectedPackets > 0) {
          packetsRouted += status.collectedPackets;
          soundFx.playPacketPickup();
        }

        if (status.isOnTrack) {
          // Snap/ground marble firmly on track surface (trackY + radius)
          playerMarble.position.y = status.trackY + playerMarble.radius;
          fallVelocityY = 0;
          soundFx.updateRollHum(currentSpeed, true);
        } else {
          // Marble steered off the track boundary
          gameState = 'FALLING';
          fallVelocityY = -2.0;
          soundFx.playFallOff();
        }

        // Safe margin fall check: only trigger Game Over if player drops below -12
        if (playerMarble.position.y < -12) {
          triggerGameOver('Y-position fall threshold exceeded in PLAYING state (Y < -12)');
          return;
        }

        gameHud.update(distance, packetsRouted);
      } else if (gameState === 'FALLING') {
        // Free-fall physics
        fallVelocityY -= 38 * safeDelta;
        playerMarble.position.y += fallVelocityY * safeDelta;

        const forwardDeltaZ = -currentSpeed * 0.4 * safeDelta;
        playerMarble.update(safeDelta, elapsed, forwardDeltaZ, 0, 8.5, false);
        trackManager.update(playerMarble.position.z, safeDelta, elapsed);

        // Safe margin: trigger Game Over only when dropped into the void below -12
        if (playerMarble.position.y < -12) {
          triggerGameOver('Fell into void (Y < -12)');
          return;
        }
      }

      // Camera directly follows the marble every frame (no lag or disappearing runner)
      const CAMERA_OFFSET_Z = 10.0;
      const CAMERA_OFFSET_Y = 5.2;

      sceneManager.camera.position.z = playerMarble.position.z + CAMERA_OFFSET_Z;
      sceneManager.camera.position.x = playerMarble.position.x * 0.3; // subtle horizontal damping
      sceneManager.camera.position.y = Math.max(playerMarble.position.y + CAMERA_OFFSET_Y, 3.5);
      sceneManager.camera.lookAt(
        playerMarble.position.x,
        playerMarble.position.y,
        playerMarble.position.z - 10.0
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
