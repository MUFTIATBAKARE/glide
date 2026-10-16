export interface InstructionsModalOptions {
  container?: HTMLElement;
}

export class InstructionsModal {
  private container: HTMLElement;
  private modalElement: HTMLDivElement | null = null;
  private isModalOpen: boolean = false;
  private onCloseCallback: (() => void) | null = null;
  private boundKeyHandler: (e: KeyboardEvent) => void;
  private storageKey = 'hasSeenTutorial';

  constructor(options: InstructionsModalOptions = {}) {
    this.container = options.container || document.getElementById('app') || document.body;
    this.boundKeyHandler = this.handleKeyDown.bind(this);
    this.injectStyles();
  }

  /**
   * Checks if this is the player's first visit. If so, automatically opens the modal.
   * Returns true if the tutorial was shown.
   */
  public checkFirstVisit(onStart?: () => void): boolean {
    try {
      const hasSeen = localStorage.getItem(this.storageKey);
      if (!hasSeen) {
        this.show(onStart);
        return true;
      }
    } catch {
      // LocalStorage access failure fallback
    }
    return false;
  }

  public isOpen(): boolean {
    return this.isModalOpen;
  }

  /**
   * Opens the instructions modal and pauses the run.
   */
  public show(onClose?: () => void): void {
    if (this.isModalOpen) return;

    this.isModalOpen = true;
    this.onCloseCallback = onClose || null;
    window.addEventListener('keydown', this.boundKeyHandler);

    if (!this.modalElement) {
      this.modalElement = document.createElement('div');
      this.modalElement.className = 'glide-instructions-backdrop';
      this.container.appendChild(this.modalElement);
    }

    this.render();

    requestAnimationFrame(() => {
      this.modalElement?.classList.add('active');
    });
  }

  /**
   * Closes the instructions modal, flags tutorial as seen, and invokes resume callback.
   */
  public hide(): void {
    if (!this.isModalOpen) return;

    try {
      localStorage.setItem(this.storageKey, 'true');
    } catch {
      // LocalStorage error catch
    }

    this.isModalOpen = false;
    window.removeEventListener('keydown', this.boundKeyHandler);

    if (this.modalElement) {
      this.modalElement.classList.remove('active');
      setTimeout(() => {
        if (this.modalElement && this.modalElement.parentElement) {
          this.modalElement.parentElement.removeChild(this.modalElement);
          this.modalElement = null;
        }
      }, 250);
    }

    if (this.onCloseCallback) {
      const cb = this.onCloseCallback;
      this.onCloseCallback = null;
      cb();
    }
  }

  private render(): void {
    if (!this.modalElement) return;

    this.modalElement.innerHTML = `
      <div class="glide-instructions-card">
        <div class="instructions-header">
          <div class="header-tag">NEURAL INTERFACE // GLIDE</div>
          <button class="instructions-close-btn" id="glide-inst-close" aria-label="Close instructions">&times;</button>
        </div>

        <h2 class="instructions-title">HOW TO PLAY</h2>

        <div class="instructions-objective">
          <div class="obj-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00f0ff" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <p class="obj-text">
            <strong>OBJECTIVE:</strong> Route data through the grid, collect packets, and avoid the void.
          </p>
        </div>

        <div class="controls-grid">
          <!-- Desktop Controls -->
          <div class="control-box">
            <div class="control-badge">DESKTOP</div>
            <div class="keys-display">
              <div class="key-group">
                <span class="keycap">A</span>
                <span class="keycap">D</span>
              </div>
              <span class="keys-or">or</span>
              <div class="key-group">
                <span class="keycap">&larr;</span>
                <span class="keycap">&rarr;</span>
              </div>
            </div>
            <div class="control-desc">Steer Left &amp; Right</div>
          </div>

          <!-- Mobile Controls -->
          <div class="control-box">
            <div class="control-badge">MOBILE &amp; TOUCH</div>
            <div class="touch-display">
              <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#00f0ff" stroke-width="2">
                <path d="M10 16 L22 16" stroke-dasharray="2 2"/>
                <polyline points="14 12 10 16 14 20"/>
                <polyline points="18 12 22 16 18 20"/>
                <circle cx="16" cy="16" r="4" fill="#ff0077"/>
              </svg>
            </div>
            <div class="control-desc">Drag / Swipe Across Screen</div>
          </div>
        </div>

        <div class="legend-section">
          <div class="legend-item packet-legend">
            <div class="legend-icon packet-icon">
              <div class="gem-shape"></div>
            </div>
            <div class="legend-info">
              <span class="legend-name">DATA PACKETS</span>
              <span class="legend-detail">+Score &bull; Leaderboard Routing</span>
            </div>
          </div>

          <div class="legend-item void-legend">
            <div class="legend-icon void-icon">
              <div class="hazard-shape">&times;</div>
            </div>
            <div class="legend-info">
              <span class="legend-name">GRID BOUNDARIES</span>
              <span class="legend-detail">Instant Fall into the Void</span>
            </div>
          </div>
        </div>

        <button class="start-btn" id="glide-inst-start">
          <span class="btn-text">GOT IT / START</span>
          <span class="btn-sub">(Space / Enter)</span>
        </button>
      </div>
    `;

    // Wire click events
    this.modalElement.querySelector('#glide-inst-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hide();
    });

    this.modalElement.querySelector('#glide-inst-start')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hide();
    });

    // Close on backdrop tap
    this.modalElement.addEventListener('click', (e) => {
      if (e.target === this.modalElement) {
        this.hide();
      }
    });
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (!this.isModalOpen) return;

    if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.hide();
    }
  }

  private injectStyles(): void {
    const styleId = 'glide-instructions-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .glide-instructions-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(4, 7, 18, 0.88);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1100;
        opacity: 0;
        transition: opacity 0.25s ease;
        padding: 16px;
        pointer-events: auto;
      }

      .glide-instructions-backdrop.active {
        opacity: 1;
      }

      .glide-instructions-card {
        width: 100%;
        max-width: 500px;
        background: rgba(10, 16, 32, 0.96);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 20px;
        padding: 24px 26px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.75), 0 0 30px rgba(0, 240, 255, 0.18);
        display: flex;
        flex-direction: column;
        gap: 16px;
        transform: translateY(20px) scale(0.96);
        transition: transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .glide-instructions-backdrop.active .glide-instructions-card {
        transform: translateY(0) scale(1);
      }

      .instructions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header-tag {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #00f0ff;
        font-family: ui-monospace, monospace;
      }

      .instructions-close-btn {
        background: none;
        border: none;
        color: #8da4be;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        padding: 0 4px;
        transition: color 0.15s ease;
      }

      .instructions-close-btn:hover {
        color: #ffffff;
      }

      .instructions-title {
        font-size: 24px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
        text-shadow: 0 0 14px rgba(0, 240, 255, 0.4);
        margin: 0;
      }

      .instructions-objective {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(0, 240, 255, 0.08);
        border: 1px solid rgba(0, 240, 255, 0.22);
        border-radius: 12px;
        padding: 12px 14px;
      }

      .obj-icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .obj-text {
        font-size: 13px;
        line-height: 1.45;
        color: #d0e4f7;
        margin: 0;
      }

      .obj-text strong {
        color: #00f0ff;
        letter-spacing: 0.5px;
      }

      .controls-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .control-box {
        background: rgba(14, 23, 44, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 14px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
      }

      .control-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #8da4be;
        font-family: ui-monospace, monospace;
      }

      .keys-display {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .key-group {
        display: flex;
        gap: 4px;
      }

      .keycap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        background: #17243e;
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 6px;
        font-weight: 800;
        font-size: 13px;
        color: #00f0ff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }

      .keys-or {
        font-size: 11px;
        color: #8da4be;
      }

      .touch-display {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
      }

      .control-desc {
        font-size: 11.5px;
        font-weight: 600;
        color: #d0e4f7;
      }

      .legend-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(14, 23, 44, 0.55);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 10px;
        padding: 8px 10px;
      }

      .legend-icon {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .packet-icon {
        background: rgba(0, 240, 255, 0.15);
        border: 1px solid rgba(0, 240, 255, 0.4);
      }

      .gem-shape {
        width: 14px;
        height: 14px;
        background: #00f0ff;
        transform: rotate(45deg);
        box-shadow: 0 0 8px #00f0ff;
      }

      .void-icon {
        background: rgba(255, 0, 119, 0.15);
        border: 1px solid rgba(255, 0, 119, 0.4);
      }

      .hazard-shape {
        font-size: 18px;
        font-weight: 900;
        color: #ff0077;
        line-height: 1;
        text-shadow: 0 0 8px #ff0077;
      }

      .legend-info {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .legend-name {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #ffffff;
      }

      .legend-detail {
        font-size: 10px;
        color: #8da4be;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .start-btn {
        width: 100%;
        padding: 13px;
        background: linear-gradient(135deg, #00f0ff, #0077ff);
        color: #050a18;
        font-weight: 900;
        font-size: 14px;
        letter-spacing: 1px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
        transition: all 0.2s ease;
        margin-top: 4px;
      }

      .start-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 28px rgba(0, 240, 255, 0.55);
        background: linear-gradient(135deg, #33f3ff, #1a8cff);
      }

      .start-btn:active {
        transform: translateY(0);
      }

      .btn-sub {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.75;
      }

      @media (max-width: 480px) {
        .glide-instructions-card {
          padding: 18px 16px;
          gap: 12px;
        }
        .controls-grid, .legend-section {
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .instructions-title {
          font-size: 20px;
        }
        .keycap {
          width: 24px;
          height: 24px;
          font-size: 11px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  public destroy(): void {
    window.removeEventListener('keydown', this.boundKeyHandler);
    if (this.modalElement && this.modalElement.parentElement) {
      this.modalElement.parentElement.removeChild(this.modalElement);
      this.modalElement = null;
    }
  }
}
