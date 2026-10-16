import * as THREE from 'three';

export interface SceneManagerOptions {
  container?: HTMLElement;
  fov?: number;
  near?: number;
  far?: number;
}

export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public container: HTMLElement;

  constructor(options: SceneManagerOptions = {}) {
    this.container = options.container || document.getElementById('app') || document.body;

    // Initialize 3D Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070913);

    // Isometric / Chase angle camera setup
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    const aspect = width / height;

    this.camera = new THREE.PerspectiveCamera(
      options.fov ?? 55,
      aspect,
      options.near ?? 0.1,
      options.far ?? 1000
    );

    // Chase / angled perspective: elevated and tilted towards path
    this.camera.position.set(0, 7, 12);
    this.camera.lookAt(0, 0, 0);

    // WebGLRenderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });

    this.renderer.setSize(width, height);
    // Pixel ratio clamped to Math.min(window.devicePixelRatio, 2) for hardware performance safety
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.domElement.classList.add('glide-canvas');

    this.container.appendChild(this.renderer.domElement);
  }

  /**
   * Updates camera aspect ratio and renderer viewport on window/container resize.
   */
  public resize(width?: number, height?: number): void {
    const w = width ?? this.container.clientWidth ?? window.innerWidth;
    const h = height ?? this.container.clientHeight ?? window.innerHeight;

    if (h === 0) return;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  /**
   * Renders the current scene from the perspective camera.
   */
  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Cleanly teardown and dispose of renderer and canvas elements.
   */
  public dispose(): void {
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}
