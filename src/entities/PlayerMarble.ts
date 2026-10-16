import * as THREE from 'three';
import { PlayerStyle } from '../services/StartNgService';

export interface MarbleInputState {
  steerLeft: boolean;
  steerRight: boolean;
  accelerate: boolean;
  brake: boolean;
  touchSteerRatio: number; // -1 to 1 based on touch position or swipe
  isTouching: boolean;
}

export class PlayerMarble {
  public mesh: THREE.Group;
  public radius: number = 0.75;

  // Visual sub-meshes
  private coreMesh: THREE.Mesh;
  private coreMaterial: THREE.MeshStandardMaterial;

  private outerRingsGroup: THREE.Group;
  private ring1Material: THREE.MeshStandardMaterial;
  private ring2Material: THREE.MeshBasicMaterial;

  private satellitesGroup: THREE.Group;
  private satellite1Mesh: THREE.Mesh;
  private satellite2Mesh: THREE.Mesh;
  private sat1Material: THREE.MeshStandardMaterial;
  private sat2Material: THREE.MeshStandardMaterial;

  private hatGroup: THREE.Group;
  private accessoryGroup: THREE.Group;

  // Particle Trail
  private trailPoints: THREE.Points;
  private trailGeometry: THREE.BufferGeometry;
  private trailMaterial: THREE.PointsMaterial;
  private trailPositions: Float32Array;
  private trailAlphas: Float32Array;
  private trailSizes: Float32Array;
  private maxTrailParticles: number = 180;
  private trailHeadIndex: number = 0;
  private trailSpawnTimer: number = 0;

  // Physics & Kinematics
  public position: THREE.Vector3 = new THREE.Vector3(0, 0.75, 0);
  public velocity: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  public currentTrackSpeed: number = 24.0;
  public lateralBoundary: number = 4.2;

  private lateralSpeed: number = 18.0;
  private lateralDamping: number = 12.0;
  private targetTilt: number = 0;
  private currentTilt: number = 0;

  // Input controller
  private inputState: MarbleInputState = {
    steerLeft: false,
    steerRight: false,
    accelerate: false,
    brake: false,
    touchSteerRatio: 0,
    isTouching: false,
  };

  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundKeyUp: (e: KeyboardEvent) => void;
  private boundPointerDown: (e: PointerEvent) => void;
  private boundPointerMove: (e: PointerEvent) => void;
  private boundPointerUp: (e: PointerEvent) => void;

  private activeStyle: PlayerStyle;
  private sceneRef: THREE.Scene;

  constructor(scene: THREE.Scene, initialStyle?: Partial<PlayerStyle>) {
    this.sceneRef = scene;
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Default styling
    this.activeStyle = {
      primaryColor: initialStyle?.primaryColor || '#00f0ff',
      secondaryColor: initialStyle?.secondaryColor || '#ff0077',
      skinColor: initialStyle?.skinColor || '#ffd1a4',
      hairColor: initialStyle?.hairColor || '#00e5ff',
      hat: initialStyle?.hat || 'crown',
      accessory: initialStyle?.accessory || 'backpack',
    };

    // 1. Procedural Core Sphere
    const coreGeo = new THREE.SphereGeometry(this.radius, 32, 24);
    this.coreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.activeStyle.primaryColor),
      emissive: new THREE.Color(this.activeStyle.primaryColor),
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
    });
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMaterial);
    this.mesh.add(this.coreMesh);

    // 2. Outer Containment Rings
    this.outerRingsGroup = new THREE.Group();

    // Equatorial Ring
    const ring1Geo = new THREE.TorusGeometry(1.05, 0.04, 16, 64);
    this.ring1Material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.activeStyle.secondaryColor),
      emissive: new THREE.Color(this.activeStyle.secondaryColor),
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, this.ring1Material);
    this.outerRingsGroup.add(ring1);

    // Polar Gimbal Ring
    const ring2Geo = new THREE.TorusGeometry(1.15, 0.03, 16, 64);
    this.ring2Material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(this.activeStyle.secondaryColor),
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const ring2 = new THREE.Mesh(ring2Geo, this.ring2Material);
    ring2.rotation.x = Math.PI / 2;
    this.outerRingsGroup.add(ring2);

    this.mesh.add(this.outerRingsGroup);

    // 3. Orbiting Satellite Telemetry Nodes (skinColor & hairColor)
    this.satellitesGroup = new THREE.Group();
    const satGeo = new THREE.SphereGeometry(0.12, 16, 16);

    this.sat1Material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.activeStyle.skinColor),
      emissive: new THREE.Color(this.activeStyle.skinColor),
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });
    this.satellite1Mesh = new THREE.Mesh(satGeo, this.sat1Material);
    this.satellite1Mesh.position.set(1.35, 0, 0);
    this.satellitesGroup.add(this.satellite1Mesh);

    this.sat2Material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.activeStyle.hairColor),
      emissive: new THREE.Color(this.activeStyle.hairColor),
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });
    this.satellite2Mesh = new THREE.Mesh(satGeo, this.sat2Material);
    this.satellite2Mesh.position.set(-1.35, 0, 0);
    this.satellitesGroup.add(this.satellite2Mesh);

    this.mesh.add(this.satellitesGroup);

    // 4. Procedural Attachments (Hat & Accessory)
    this.hatGroup = new THREE.Group();
    this.accessoryGroup = new THREE.Group();
    this.mesh.add(this.hatGroup);
    this.mesh.add(this.accessoryGroup);
    this.buildAttachments();

    // 5. Dynamic Laser Trail Particle System
    this.trailPositions = new Float32Array(this.maxTrailParticles * 3);
    this.trailAlphas = new Float32Array(this.maxTrailParticles);
    this.trailSizes = new Float32Array(this.maxTrailParticles);

    // Initialize all off-screen / inactive
    for (let i = 0; i < this.maxTrailParticles; i++) {
      this.trailPositions[i * 3 + 0] = 0;
      this.trailPositions[i * 3 + 1] = -100;
      this.trailPositions[i * 3 + 2] = 0;
      this.trailAlphas[i] = 0.0;
      this.trailSizes[i] = 0.0;
    }

    this.trailGeometry = new THREE.BufferGeometry();
    this.trailGeometry.setAttribute('position', new THREE.BufferAttribute(this.trailPositions, 3));
    this.trailGeometry.setAttribute('alpha', new THREE.BufferAttribute(this.trailAlphas, 1));

    // Procedural circular glow texture for trail points
    const particleTexture = this.createParticleTexture();

    this.trailMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(this.activeStyle.primaryColor),
      size: 0.45,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.trailPoints = new THREE.Points(this.trailGeometry, this.trailMaterial);
    this.trailPoints.frustumCulled = false;
    scene.add(this.trailPoints);
    scene.add(this.mesh);

    // Bind Controls
    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundKeyUp = this.handleKeyUp.bind(this);
    this.boundPointerDown = this.handlePointerDown.bind(this);
    this.boundPointerMove = this.handlePointerMove.bind(this);
    this.boundPointerUp = this.handlePointerUp.bind(this);

    this.attachEventListeners();
  }

  /**
   * Builds procedural attachments based on player hat and accessory styles.
   */
  private buildAttachments(): void {
    // Clear previous attachment objects
    while (this.hatGroup.children.length > 0) {
      const child = this.hatGroup.children[0] as THREE.Mesh;
      child.geometry?.dispose();
      this.hatGroup.remove(child);
    }
    while (this.accessoryGroup.children.length > 0) {
      const child = this.accessoryGroup.children[0] as THREE.Mesh;
      child.geometry?.dispose();
      this.accessoryGroup.remove(child);
    }

    // --- HAT ATTACHMENT ---
    // 'crown' => Spiked halo ring hovering above the marble
    if (this.activeStyle.hat === 'crown' || !this.activeStyle.hat) {
      const haloGeo = new THREE.TorusGeometry(0.55, 0.035, 8, 32);
      const haloMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.activeStyle.secondaryColor),
        emissive: new THREE.Color(this.activeStyle.secondaryColor),
        emissiveIntensity: 0.6,
        metalness: 0.9,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.rotation.x = Math.PI / 2;
      haloMesh.position.y = 0.92;
      this.hatGroup.add(haloMesh);

      // Add 6 crown spikes around the halo
      const spikeGeo = new THREE.ConeGeometry(0.06, 0.22, 5);
      const spikeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.activeStyle.primaryColor),
        emissive: new THREE.Color(this.activeStyle.primaryColor),
        emissiveIntensity: 0.4,
      });
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const spike = new THREE.Mesh(spikeGeo, spikeMat);
        spike.position.set(Math.cos(angle) * 0.55, 1.05, Math.sin(angle) * 0.55);
        this.hatGroup.add(spike);
      }
    } else if (this.activeStyle.hat === 'visor') {
      // Front curved visor shield
      const visorGeo = new THREE.TorusGeometry(0.72, 0.06, 8, 24, Math.PI * 0.65);
      const visorMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.activeStyle.primaryColor),
        emissive: new THREE.Color(this.activeStyle.primaryColor),
        emissiveIntensity: 0.8,
        roughness: 0.1,
      });
      const visorMesh = new THREE.Mesh(visorGeo, visorMat);
      visorMesh.rotation.y = -Math.PI * 0.325;
      visorMesh.position.set(0, 0.15, -0.4);
      this.hatGroup.add(visorMesh);
    }

    // --- ACCESSORY ATTACHMENT ---
    // 'backpack' => Dual rear thruster pack
    if (this.activeStyle.accessory === 'backpack' || !this.activeStyle.accessory) {
      const thrusterGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.45, 12);
      const thrusterMat = new THREE.MeshStandardMaterial({
        color: 0x1a2233,
        metalness: 0.9,
        roughness: 0.2,
      });
      const flareMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.activeStyle.primaryColor),
      });

      // Left Thruster
      const leftThruster = new THREE.Mesh(thrusterGeo, thrusterMat);
      leftThruster.rotation.x = Math.PI / 2;
      leftThruster.position.set(-0.35, 0.1, 0.65);
      this.accessoryGroup.add(leftThruster);

      const leftNozzle = new THREE.Mesh(new THREE.RingGeometry(0.04, 0.14, 12), flareMat);
      leftNozzle.position.set(-0.35, 0.1, 0.88);
      this.accessoryGroup.add(leftNozzle);

      // Right Thruster
      const rightThruster = new THREE.Mesh(thrusterGeo, thrusterMat);
      rightThruster.rotation.x = Math.PI / 2;
      rightThruster.position.set(0.35, 0.1, 0.65);
      this.accessoryGroup.add(rightThruster);

      const rightNozzle = new THREE.Mesh(new THREE.RingGeometry(0.04, 0.14, 12), flareMat);
      rightNozzle.position.set(0.35, 0.1, 0.88);
      this.accessoryGroup.add(rightNozzle);
    } else if (this.activeStyle.accessory === 'glasses') {
      // Dual optical lenses in front
      const lensGeo = new THREE.TorusGeometry(0.16, 0.03, 8, 20);
      const lensMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.activeStyle.secondaryColor),
        emissive: new THREE.Color(this.activeStyle.secondaryColor),
        emissiveIntensity: 0.5,
      });

      const leftLens = new THREE.Mesh(lensGeo, lensMat);
      leftLens.position.set(-0.25, 0.2, -0.72);
      this.accessoryGroup.add(leftLens);

      const rightLens = new THREE.Mesh(lensGeo, lensMat);
      rightLens.position.set(0.25, 0.2, -0.72);
      this.accessoryGroup.add(rightLens);
    }
  }

  /**
   * Procedural radial glow texture for the particle trail (zero external assets).
   */
  private createParticleTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(0, 240, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }

  /**
   * Dynamically applies new player styling (colors, hat, accessory).
   */
  public updateStyle(style: Partial<PlayerStyle>): void {
    if (style.primaryColor) {
      this.activeStyle.primaryColor = style.primaryColor;
      this.coreMaterial.color.set(style.primaryColor);
      this.coreMaterial.emissive.set(style.primaryColor);
      this.trailMaterial.color.set(style.primaryColor);
    }
    if (style.secondaryColor) {
      this.activeStyle.secondaryColor = style.secondaryColor;
      this.ring1Material.color.set(style.secondaryColor);
      this.ring1Material.emissive.set(style.secondaryColor);
      this.ring2Material.color.set(style.secondaryColor);
    }
    if (style.skinColor) {
      this.activeStyle.skinColor = style.skinColor;
      this.sat1Material.color.set(style.skinColor);
      this.sat1Material.emissive.set(style.skinColor);
    }
    if (style.hairColor) {
      this.activeStyle.hairColor = style.hairColor;
      this.sat2Material.color.set(style.hairColor);
      this.sat2Material.emissive.set(style.hairColor);
    }
    if (style.hat !== undefined) {
      this.activeStyle.hat = style.hat;
    }
    if (style.accessory !== undefined) {
      this.activeStyle.accessory = style.accessory;
    }

    this.buildAttachments();
  }

  /**
   * Main per-frame update handling physics, controls, animations, and particle emissions.
   */
  public update(delta: number, elapsed: number, forwardDeltaZ: number = 0): void {
    // 1. Process Input into Steering Direction (-1 to 1)
    let steerDir = 0;
    if (this.inputState.steerLeft) steerDir -= 1;
    if (this.inputState.steerRight) steerDir += 1;

    // Merge with mobile touch steer ratio
    if (this.inputState.isTouching) {
      steerDir += this.inputState.touchSteerRatio;
      steerDir = Math.max(-1, Math.min(1, steerDir));
    }

    // 2. Lateral Physics (Velocity, Acceleration, Damping)
    const targetLateralVelocity = steerDir * this.lateralSpeed;
    this.velocity.x += (targetLateralVelocity - this.velocity.x) * Math.min(delta * this.lateralDamping, 1.0);

    this.position.x += this.velocity.x * delta;

    // Enforce track boundaries
    if (this.position.x < -this.lateralBoundary) {
      this.position.x = -this.lateralBoundary;
      this.velocity.x = 0;
    } else if (this.position.x > this.lateralBoundary) {
      this.position.x = this.lateralBoundary;
      this.velocity.x = 0;
    }

    // Forward travel displacement
    this.position.z += forwardDeltaZ;

    // Sync mesh position
    this.mesh.position.copy(this.position);

    // 3. Dynamic Bank/Tilt & Rolling Physics
    // Lateral steering tilt
    this.targetTilt = (-this.velocity.x / this.lateralSpeed) * 0.45;
    this.currentTilt += (this.targetTilt - this.currentTilt) * Math.min(delta * 10, 1.0);

    this.mesh.rotation.z = this.currentTilt;
    this.mesh.rotation.y = this.currentTilt * 0.5;

    // Rolling forward rotation on inner core
    const rollSpeed = forwardDeltaZ !== 0 ? Math.abs(forwardDeltaZ) / this.radius : delta * 12.0;
    this.coreMesh.rotation.x -= rollSpeed;

    // Gimbal ring animations
    this.outerRingsGroup.rotation.x += delta * 1.8;
    this.outerRingsGroup.rotation.y += delta * 2.2;

    // Satellite orbital animations
    const orbitSpeed = elapsed * 3.5;
    this.satellitesGroup.rotation.y = orbitSpeed;
    this.satellitesGroup.rotation.x = Math.sin(elapsed * 1.5) * 0.35;

    // 4. Update Particle Trail
    this.updateTrail(delta);
  }

  /**
   * Spawns and updates the dynamic neon particle trail behind the marble.
   */
  private updateTrail(delta: number): void {
    this.trailSpawnTimer += delta;

    // Spawn 2 particles periodically
    if (this.trailSpawnTimer >= 0.02) {
      this.trailSpawnTimer = 0;

      // Spawn near marble center or thrusters
      for (let s = 0; s < 2; s++) {
        const idx = this.trailHeadIndex;
        const offsetSpread = (Math.random() - 0.5) * 0.25;

        this.trailPositions[idx * 3 + 0] = this.position.x + offsetSpread;
        this.trailPositions[idx * 3 + 1] = this.position.y + (Math.random() - 0.5) * 0.15;
        this.trailPositions[idx * 3 + 2] = this.position.z + 0.65; // Behind the marble

        this.trailAlphas[idx] = 1.0;
        this.trailHeadIndex = (this.trailHeadIndex + 1) % this.maxTrailParticles;
      }
    }

    // Age existing particles
    for (let i = 0; i < this.maxTrailParticles; i++) {
      if (this.trailAlphas[i] > 0) {
        this.trailAlphas[i] -= delta * 3.2; // Fade out rate
        if (this.trailAlphas[i] <= 0) {
          this.trailAlphas[i] = 0;
          this.trailPositions[i * 3 + 1] = -100; // Move offscreen
        } else {
          // Drift backwards gently
          this.trailPositions[i * 3 + 2] += delta * 1.5;
        }
      }
    }

    (this.trailGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  }

  // --- Keyboard & Touch Listeners ---
  private attachEventListeners(): void {
    window.addEventListener('keydown', this.boundKeyDown);
    window.addEventListener('keyup', this.boundKeyUp);
    window.addEventListener('pointerdown', this.boundPointerDown, { passive: false });
    window.addEventListener('pointermove', this.boundPointerMove, { passive: false });
    window.addEventListener('pointerup', this.boundPointerUp);
    window.addEventListener('pointercancel', this.boundPointerUp);
  }

  private removeEventListeners(): void {
    window.removeEventListener('keydown', this.boundKeyDown);
    window.removeEventListener('keyup', this.boundKeyUp);
    window.removeEventListener('pointerdown', this.boundPointerDown);
    window.removeEventListener('pointermove', this.boundPointerMove);
    window.removeEventListener('pointerup', this.boundPointerUp);
    window.removeEventListener('pointercancel', this.boundPointerUp);
  }

  private handleKeyDown(e: KeyboardEvent): void {
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        this.inputState.steerLeft = true;
        break;
      case 'ArrowRight':
      case 'KeyD':
        this.inputState.steerRight = true;
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        this.inputState.accelerate = true;
        break;
      case 'ArrowDown':
      case 'KeyS':
        this.inputState.brake = true;
        break;
    }
  }

  private handleKeyUp(e: KeyboardEvent): void {
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        this.inputState.steerLeft = false;
        break;
      case 'ArrowRight':
      case 'KeyD':
        this.inputState.steerRight = false;
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        this.inputState.accelerate = false;
        break;
      case 'ArrowDown':
      case 'KeyS':
        this.inputState.brake = false;
        break;
    }
  }

  private handlePointerDown(e: PointerEvent): void {
    // Ignore clicks on HUD/UI elements
    if ((e.target as HTMLElement)?.closest?.('.glide-profile-card, button, a')) {
      return;
    }
    this.inputState.isTouching = true;
    this.updatePointerRatio(e.clientX);
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.inputState.isTouching) return;
    this.updatePointerRatio(e.clientX);
  }

  private handlePointerUp(): void {
    this.inputState.isTouching = false;
    this.inputState.touchSteerRatio = 0;
  }

  private updatePointerRatio(clientX: number): void {
    const width = window.innerWidth;
    const center = width / 2;
    // Normalized distance from screen center: -1.0 (far left) to 1.0 (far right)
    const ratio = (clientX - center) / (center * 0.75);
    this.inputState.touchSteerRatio = Math.max(-1, Math.min(1, ratio));
  }

  /**
   * Resets marble position, velocity, and particle trail.
   */
  public reset(spawnPos: THREE.Vector3 = new THREE.Vector3(0, 0.75, 0)): void {
    this.position.copy(spawnPos);
    this.velocity.set(0, 0, 0);
    this.currentTilt = 0;
    this.targetTilt = 0;
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(0, 0, 0);

    for (let i = 0; i < this.maxTrailParticles; i++) {
      this.trailPositions[i * 3 + 1] = -100;
      this.trailAlphas[i] = 0;
    }
    (this.trailGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  }

  /**
   * Clean disposal of Three.js geometries, materials, particles, and listeners.
   */
  public dispose(): void {
    this.removeEventListeners();

    if (this.mesh.parent) {
      this.mesh.parent.remove(this.mesh);
    }
    this.sceneRef.remove(this.mesh);
    this.sceneRef.remove(this.trailPoints);

    this.coreMesh.geometry.dispose();
    this.coreMaterial.dispose();

    this.ring1Material.dispose();
    this.ring2Material.dispose();

    this.satellite1Mesh.geometry.dispose();
    this.sat1Material.dispose();
    this.sat2Material.dispose();

    this.trailGeometry.dispose();
    this.trailMaterial.dispose();
    if (this.trailMaterial.map) {
      this.trailMaterial.map.dispose();
    }
  }
}
