export class GameHud {
  private container: HTMLElement;
  private hudElement: HTMLDivElement | null = null;
  private distValueEl: HTMLElement | null = null;
  private pktValueEl: HTMLElement | null = null;

  constructor(container?: HTMLElement) {
    this.container = container || document.getElementById('app') || document.body;
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
    `;

    this.container.appendChild(this.hudElement);
    this.distValueEl = this.hudElement.querySelector('#glide-hud-dist');
    this.pktValueEl = this.hudElement.querySelector('#glide-hud-pkts');
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
        gap: 12px;
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

      @media (max-width: 480px) {
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
