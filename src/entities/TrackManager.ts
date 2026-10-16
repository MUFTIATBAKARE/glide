import * as THREE from 'three';

export interface DataPacket {
  mesh: THREE.Group;
  gemMesh: THREE.Mesh;
  ringMesh: THREE.Mesh;
  position: THREE.Vector3;
  collected: boolean;
}

export interface TrackSegment {
  index: number;
  startZ: number;
  endZ: number;
  startX: number;
  endX: number;
  startY: number;
  endY: number;
  width: number;
  meshGroup: THREE.Group;
  packets: DataPacket[];
  geometries: THREE.BufferGeometry[];
  materials: THREE.Material[];
}

export class TrackManager {
  private scene: THREE.Scene;
  private segments: TrackSegment[] = [];
  private segmentLength: number = 20.0;
  private maxVisibleSegments: number = 22;
  private currentSegmentIndex: number = 0;

  // Track cursor tracking for procedural generation
  private cursorX: number = 0;
  private cursorY: number = 0;
  private cursorZ: number = 15.0; // Start slightly behind origin so marble starts on track

  // Shared reusable materials/geometries for high performance
  private packetGemGeo: THREE.OctahedronGeometry;
  private packetRingGeo: THREE.TorusGeometry;
  private packetMaterial: THREE.MeshStandardMaterial;
  private packetRingMaterial: THREE.MeshBasicMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Pre-allocate shared geometries for collectible packets to keep draw calls low
    this.packetGemGeo = new THREE.OctahedronGeometry(0.38, 0);
    this.packetRingGeo = new THREE.TorusGeometry(0.55, 0.04, 8, 20);

    this.packetMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });

    this.packetRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0077,
      wireframe: true,
    });

    this.initInitialTrack();
  }

  /**
   * Generates safe starting segments followed by procedural courses.
   */
  private initInitialTrack(): void {
    // Generate initial flat straight runway
    for (let i = 0; i < 5; i++) {
      this.createSegment({
        forceStraight: true,
        forceFlat: true,
        spawnPackets: i > 1,
      });
    }

    // Fill remaining view distance
    while (this.segments.length < this.maxVisibleSegments) {
      this.createNextProceduralSegment();
    }
  }

  /**
   * Procedurally generates the next track segment with turns, drops, and packet lanes.
   */
  private createNextProceduralSegment(): void {
    const isTurn = Math.random() < 0.45;
    const isDrop = Math.random() < 0.35;

    let deltaX = 0;
    let deltaY = 0;

    if (isTurn) {
      // Gentle curve left or right (-3.5 to +3.5)
      const turnAmount = (Math.random() * 2 - 1) * 3.5;
      deltaX = turnAmount;

      // Keep track centered within reasonable bounds (-14 to +14)
      if (this.cursorX + deltaX > 14) deltaX = -Math.abs(deltaX);
      if (this.cursorX + deltaX < -14) deltaX = Math.abs(deltaX);
    }

    if (isDrop) {
      // Elevation drop (sloping downwards)
      deltaY = -(Math.random() * 2.5 + 1.2);
    } else if (Math.random() < 0.2 && this.cursorY < -10) {
      // Occasional gentle elevation rise if we dropped deep
      deltaY = Math.random() * 1.5;
    }

    this.createSegment({
      deltaX,
      deltaY,
      spawnPackets: Math.random() < 0.75,
    });
  }

  /**
   * Constructs a track segment mesh and registers its geometries and materials.
   */
  private createSegment(options: {
    forceStraight?: boolean;
    forceFlat?: boolean;
    deltaX?: number;
    deltaY?: number;
    spawnPackets?: boolean;
  }): void {
    const startX = this.cursorX;
    const startY = this.cursorY;
    const startZ = this.cursorZ;

    const deltaX = options.forceStraight ? 0 : options.deltaX || 0;
    const deltaY = options.forceFlat ? 0 : options.deltaY || 0;
    const endX = startX + deltaX;
    const endY = startY + deltaY;
    const endZ = startZ - this.segmentLength;

    const width = 8.5;
    const meshGroup = new THREE.Group();
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const packets: DataPacket[] = [];

    // --- 1. Road Surface (Custom Quad Mesh connecting start to end) ---
    const roadGeo = new THREE.BufferGeometry();
    const halfW = width / 2;

    const vertices = new Float32Array([
      startX - halfW, startY, startZ, // 0: Top-left
      startX + halfW, startY, startZ, // 1: Top-right
      endX - halfW, endY, endZ,     // 2: Bottom-left

      startX + halfW, startY, startZ, // 1
      endX + halfW, endY, endZ,     // 3: Bottom-right
      endX - halfW, endY, endZ,     // 2
    ]);

    const normals = new Float32Array([
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
    ]);

    const uvs = new Float32Array([
      0, 0,
      1, 0,
      0, 1,

      1, 0,
      1, 1,
      0, 1,
    ]);

    roadGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    roadGeo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    roadGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 3));
    geometries.push(roadGeo);

    // Dark cyber runway surface material
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x090f1d,
      roughness: 0.35,
      metalness: 0.8,
    });
    materials.push(roadMat);

    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    meshGroup.add(roadMesh);

    // --- 2. Neon Cyber Side Rails / Curbs ---
    const railMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });
    materials.push(railMat);

    const leftRailGeo = this.createRailGeometry(
      new THREE.Vector3(startX - halfW, startY + 0.12, startZ),
      new THREE.Vector3(endX - halfW, endY + 0.12, endZ),
      0.15
    );
    geometries.push(leftRailGeo);
    const leftRailMesh = new THREE.Mesh(leftRailGeo, railMat);
    meshGroup.add(leftRailMesh);

    const rightRailGeo = this.createRailGeometry(
      new THREE.Vector3(startX + halfW, startY + 0.12, startZ),
      new THREE.Vector3(endX + halfW, endY + 0.12, endZ),
      0.15
    );
    geometries.push(rightRailGeo);
    const rightRailMesh = new THREE.Mesh(rightRailGeo, railMat);
    meshGroup.add(rightRailMesh);

    // Center dash light stripe
    const centerStripeMat = new THREE.MeshBasicMaterial({
      color: 0xff0077,
      transparent: true,
      opacity: 0.6,
    });
    materials.push(centerStripeMat);

    const centerStripeGeo = this.createRailGeometry(
      new THREE.Vector3(startX, startY + 0.04, startZ),
      new THREE.Vector3(endX, endY + 0.04, endZ),
      0.08
    );
    geometries.push(centerStripeGeo);
    const centerStripeMesh = new THREE.Mesh(centerStripeGeo, centerStripeMat);
    meshGroup.add(centerStripeMesh);

    // --- 3. Collectible Data Packets ---
    if (options.spawnPackets) {
      // Pick 1-3 packets along the segment
      const packetCount = Math.floor(Math.random() * 3) + 1;
      const lanes = [-2.2, 0, 2.2]; // Left, center, right lanes
      const laneOffset = lanes[Math.floor(Math.random() * lanes.length)];

      for (let p = 0; p < packetCount; p++) {
        const t = (p + 1) / (packetCount + 1);
        const pX = startX + deltaX * t + laneOffset;
        const pY = startY + deltaY * t + 0.75;
        const pZ = startZ - this.segmentLength * t;

        const packetGroup = new THREE.Group();
        packetGroup.position.set(pX, pY, pZ);

        const gem = new THREE.Mesh(this.packetGemGeo, this.packetMaterial);
        const ring = new THREE.Mesh(this.packetRingGeo, this.packetRingMaterial);

        packetGroup.add(gem);
        packetGroup.add(ring);
        meshGroup.add(packetGroup);

        packets.push({
          mesh: packetGroup,
          gemMesh: gem,
          ringMesh: ring,
          position: new THREE.Vector3(pX, pY, pZ),
          collected: false,
        });
      }
    }

    this.scene.add(meshGroup);

    const segment: TrackSegment = {
      index: this.currentSegmentIndex++,
      startZ,
      endZ,
      startX,
      endX,
      startY,
      endY,
      width,
      meshGroup,
      packets,
      geometries,
      materials,
    };

    this.segments.push(segment);

    // Advance generation cursor
    this.cursorX = endX;
    this.cursorY = endY;
    this.cursorZ = endZ;
  }

  /**
   * Helper to build a continuous rectangular beam between two 3D points.
   */
  private createRailGeometry(start: THREE.Vector3, end: THREE.Vector3, thickness: number): THREE.BufferGeometry {
    const dir = new THREE.Vector3().subVectors(end, start);
    const length = dir.length();
    const boxGeo = new THREE.BoxGeometry(thickness, thickness, length);

    // Center and orient box
    boxGeo.translate(0, 0, length / 2);

    const dummy = new THREE.Object3D();
    dummy.position.copy(start);
    dummy.lookAt(end);
    dummy.updateMatrix();

    boxGeo.applyMatrix4(dummy.matrix);
    return boxGeo;
  }

  /**
   * Updates track animations (packet spinning/floating) and recycles off-screen segments.
   */
  public update(marbleZ: number, delta: number, elapsed: number): void {
    // 1. Animate collectible Data Packets
    for (const segment of this.segments) {
      for (const packet of segment.packets) {
        if (!packet.collected) {
          packet.gemMesh.rotation.y += delta * 3.5;
          packet.gemMesh.rotation.x += delta * 1.5;
          packet.ringMesh.rotation.z += delta * 2.2;
          packet.ringMesh.rotation.x = Math.PI / 2 + Math.sin(elapsed * 3.0) * 0.2;
          packet.mesh.position.y = packet.position.y + Math.sin(elapsed * 4.0 + packet.position.z) * 0.12;
        }
      }
    }

    // 2. Recycle segments that have passed behind the player
    // A segment is behind when its endZ is greater than marbleZ + 30
    while (this.segments.length > 0 && this.segments[0].endZ > marbleZ + 30.0) {
      this.recycleOldestSegment();
    }

    // 3. Ensure we always maintain maxVisibleSegments ahead of the marble
    while (this.segments.length < this.maxVisibleSegments) {
      this.createNextProceduralSegment();
    }
  }

  /**
   * Safely disposes and removes the oldest segment from memory and scene.
   */
  private recycleOldestSegment(): void {
    const oldest = this.segments.shift();
    if (!oldest) return;

    this.scene.remove(oldest.meshGroup);

    // Explicitly dispose all geometries and materials to keep GPU memory flat
    for (const geo of oldest.geometries) {
      geo.dispose();
    }
    for (const mat of oldest.materials) {
      mat.dispose();
    }

    // Clear child objects
    while (oldest.meshGroup.children.length > 0) {
      const child = oldest.meshGroup.children[0];
      oldest.meshGroup.remove(child);
    }
  }

  /**
   * Query the track profile at a given Z position.
   */
  public getTrackAt(z: number): { x: number; y: number; width: number; exists: boolean } {
    for (const seg of this.segments) {
      // Note: track advances in negative Z, so startZ is greater than endZ
      if (z <= seg.startZ && z >= seg.endZ) {
        const t = (seg.startZ - z) / (seg.startZ - seg.endZ);
        const x = THREE.MathUtils.lerp(seg.startX, seg.endX, t);
        const y = THREE.MathUtils.lerp(seg.startY, seg.endY, t);
        return { x, y, width: seg.width, exists: true };
      }
    }
    return { x: 0, y: 0, width: 8.5, exists: false };
  }

  /**
   * Evaluates marble position on the track, checks track boundaries, and collects data packets.
   */
  public checkMarbleStatus(
    marblePos: THREE.Vector3,
    marbleRadius: number
  ): { isOnTrack: boolean; trackY: number; collectedPackets: number } {
    const trackInfo = this.getTrackAt(marblePos.z);
    let collectedPackets = 0;

    if (!trackInfo.exists) {
      // Marble is past track bounds
      return { isOnTrack: false, trackY: marblePos.y, collectedPackets: 0 };
    }

    const halfW = trackInfo.width / 2;
    const lateralDist = Math.abs(marblePos.x - trackInfo.x);
    const isOnTrack = lateralDist <= halfW;

    // Check packet pickups in nearby segments
    const pickupRadius = marbleRadius + 0.7;
    for (const seg of this.segments) {
      if (Math.abs(seg.startZ - marblePos.z) < this.segmentLength * 1.5) {
        for (const packet of seg.packets) {
          if (!packet.collected) {
            const dist = marblePos.distanceTo(packet.mesh.position);
            if (dist < pickupRadius) {
              packet.collected = true;
              packet.mesh.visible = false;
              collectedPackets++;
            }
          }
        }
      }
    }

    return {
      isOnTrack,
      trackY: trackInfo.y,
      collectedPackets,
    };
  }

  /**
   * Resets the entire track back to start configuration.
   */
  public reset(): void {
    while (this.segments.length > 0) {
      this.recycleOldestSegment();
    }

    this.currentSegmentIndex = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.cursorZ = 15.0;

    this.initInitialTrack();
  }

  /**
   * Full teardown of track manager and shared resources.
   */
  public dispose(): void {
    this.reset();
    this.packetGemGeo.dispose();
    this.packetRingGeo.dispose();
    this.packetMaterial.dispose();
    this.packetRingMaterial.dispose();
  }
}
