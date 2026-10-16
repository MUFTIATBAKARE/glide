export type UpdateCallback = (delta: number, elapsed: number) => void;
export type RenderCallback = () => void;
export type ResizeCallback = (width: number, height: number) => void;

export interface GameLoopCallbacks {
  onUpdate?: UpdateCallback;
  onRender?: RenderCallback;
  onResize?: ResizeCallback;
}

export class GameLoop {
  private isRunning: boolean = false;
  private animationFrameId: number | null = null;
  private lastTime: number = 0;
  private totalElapsed: number = 0;
  private maxDelta: number = 0.1; // Safety clamp (100ms) to prevent simulation explosions on tab switch

  private onUpdate?: UpdateCallback;
  private onRender?: RenderCallback;
  private onResize?: ResizeCallback;

  private boundHandleResize: () => void;

  constructor(callbacks: GameLoopCallbacks = {}) {
    this.onUpdate = callbacks.onUpdate;
    this.onRender = callbacks.onRender;
    this.onResize = callbacks.onResize;

    this.boundHandleResize = this.handleWindowResize.bind(this);
    window.addEventListener('resize', this.boundHandleResize, { passive: true });
  }

  /**
   * Starts the animation loop.
   */
  public start(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.lastTime = performance.now();
    this.animationFrameId = requestAnimationFrame(this.tick.bind(this));
  }

  /**
   * Stops/pauses the animation loop.
   */
  public stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Main per-frame tick.
   */
  private tick(currentTime: number): void {
    if (!this.isRunning) return;

    // Calculate delta time in seconds, clamped for hardware and tab-switch safety
    const rawDelta = (currentTime - this.lastTime) / 1000;
    const delta = Math.min(Math.max(rawDelta, 0), this.maxDelta);
    this.lastTime = currentTime;
    this.totalElapsed += delta;

    if (this.onUpdate) {
      this.onUpdate(delta, this.totalElapsed);
    }

    if (this.onRender) {
      this.onRender();
    }

    this.animationFrameId = requestAnimationFrame(this.tick.bind(this));
  }

  /**
   * Resize event handler.
   */
  private handleWindowResize(): void {
    if (this.onResize) {
      this.onResize(window.innerWidth, window.innerHeight);
    }
  }

  /**
   * Clean teardown removing all listeners and stopping the loop.
   */
  public dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.boundHandleResize);
    this.onUpdate = undefined;
    this.onRender = undefined;
    this.onResize = undefined;
  }
}
