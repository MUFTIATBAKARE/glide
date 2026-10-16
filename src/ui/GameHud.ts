export interface GameHudOptions {
  container?: HTMLElement;
  onHelpClick?: () => void;
  onSoundToggle?: () => boolean;
}

export class GameHud {
  private container: HTMLElement;
  private hudElement: HTMLDivElement | null = null;
  private distValueEl: HTMLElement | null = null;
  private pktValueEl: HTMLElement | null = null;
  private soundBtnEl: HTMLButtonElement | null = null;
  private helpBtnEl: HTMLButtonElement | null = null;

  private onHelpClick?: () => void;
  private onSoundToggle?: () => boolean;
  private isMuted: boolean = false;

  constructor(options: GameHudOptions = {}) {
    this.container = options.container || document.getElementById('app') || document.body;
    this.onHelpClick = options.onHelpClick;
    this.onSoundToggle = options.onSoundToggle;
    this.injectStyles();
    this.mount();
  }

  public mount(): void {
    if (this.hudElement) return;

    this.hudElement = document.createElement('div');
    this.hudElement.className = 'glide-hud-container';
    this.hudElement.innerHTML = `
      <div class="hud-stat hud-distance">
        <span class="hud-label">DISTANCE</span>
        <span class="hud-val" id="glide-hud-dist">0 <span class="hud-unit">m</span></span>
      </div>
      <div class="hud-stat hud-packets">
        <span class="hud-label">PACKETS</span>
        <span class="hud-val" id="glide-hud-pkts">0</span>
      </div>
      <div class="hud-controls">
        <button class="hud-btn hud-sound-btn" id="glide-sound-btn" title="Toggle Audio (M)" aria-label="Toggle Sound">
          <svg class="sound-on-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <svg class="sound-off-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:none;">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        </button>
        <button class="hud-btn hud-help-btn" id="glide-help-btn" title="How to Play" aria-label="How to Play">
          <span class="help-symbol">?</span>
        </button>
      </div>
    `;

    this.container.appendChild(this.hudElement);
    this.distValueEl = this.hudElement.querySelector('#glide-hud-dist');
    this.pktValueEl = this.hudElement.querySelector('#glide-hud-pkts');
    this.soundBtnEl = this.hudElement.querySelector('#glide-sound-btn');
    this.helpBtnEl = this.hudElement.querySelector('#glide-help-btn');

    this.soundBtnEl?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.onSoundToggle) {
        this.isMuted = this.onSoundToggle();
        this.updateSoundIcon();
      }
    });

    this.helpBtnEl?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.onHelpClick) {
        this.onHelpClick();
      }
    });
  }

  public setSoundMuted(muted: boolean): void {
    this.isMuted = muted;
    this.updateSoundIcon();
  }

  private updateSoundIcon(): void {
    if (!this.soundBtnEl) return;
    const onIcon = this.soundBtnEl.querySelector('.sound-on-icon') as HTMLElement | null;
    const offIcon = this.soundBtnEl.querySelector('.sound-off-icon') as HTMLElement | null;

    if (onIcon && offIcon) {
      onIcon.style.display = this.isMuted ? 'none' : 'block';
      offIcon.style.display = this.isMuted ? 'block' : 'none';
    }
  }

  public update(distance: number, packets: number): void {
    if (this.distValueEl) {
      this.distValueEl.innerHTML = `${Math.floor(distance).toLocaleString()} <span class="hud-unit">m</span>`;
    }
    if (this.pktValueEl) {
      this.pktValueEl.innerText = packets.toString();
    }
  }

  public setVisible(visible: boolean): void {
    if (this.hudElement) {
      this.hudElement.style.display = visible ? 'flex' : 'none';
    }
  }

  private injectStyles(): void {
    const styleId = 'glide-hud-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .glide-hud-container {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 100;
        display: flex;
        align-items: center;
        gap: 10px;
        pointer-events: none;
        user-select: none;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      }

      .hud-stat {
        background: rgba(10, 16, 32, 0.8);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 12px;
        padding: 8px 14px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      }

      .hud-distance {
        border-right: 3px solid #00f0ff;
      }

      .hud-packets {
        border-right: 3px solid #ff0077;
      }

      .hud-label {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #8da4be;
      }

      .hud-val {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
      }

      .hud-unit {
        font-size: 12px;
        color: #00f0ff;
      }

      .hud-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: auto;
      }

      .hud-btn {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(10, 16, 32, 0.8);
        border: 1px solid rgba(0, 240, 255, 0.35);
        color: #00f0ff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.2s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        padding: 0;
      }

      .hud-btn:hover {
        border-color: #00f0ff;
        background: rgba(0, 240, 255, 0.15);
        color: #ffffff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
        transform: translateY(-1px);
      }

      .hud-btn:active {
        transform: translateY(0);
      }

      .hud-help-btn {
        border-color: rgba(255, 0, 119, 0.4);
        color: #ff0077;
      }

      .hud-help-btn:hover {
        border-color: #ff0077;
        background: rgba(255, 0, 119, 0.15);
        color: #ffffff;
        box-shadow: 0 0 16px rgba(255, 0, 119, 0.4);
      }

      .help-symbol {
        font-size: 17px;
        font-weight: 900;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      @media (max-width: 600px) {
        .glide-hud-container {
          top: 10px;
          right: 10px;
          gap: 6px;
        }
        .hud-stat {
          padding: 6px 10px;
        }
        .hud-val {
          font-size: 15px;
        }
        .hud-btn {
          width: 32px;
          height: 32px;
        }
        .help-symbol {
          font-size: 15px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  public destroy(): void {
    if (this.hudElement && this.hudElement.parentElement) {
      this.hudElement.parentElement.removeChild(this.hudElement);
      this.hudElement = null;
    }
  }
}
