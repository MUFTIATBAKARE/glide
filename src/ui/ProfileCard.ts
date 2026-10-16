import { StartNgUser, startNgService } from '../services/StartNgService';

export class ProfileCard {
  private container: HTMLElement;
  private cardElement: HTMLDivElement | null = null;
  private unsubscribe: (() => void) | null = null;

  constructor(container?: HTMLElement) {
    this.container = container || document.getElementById('app') || document.body;
  }

  /**
   * Mounts the floating profile HUD card to the DOM and subscribes to player updates.
   */
  public mount(): void {
    if (this.cardElement) return;

    this.injectStyles();

    this.cardElement = document.createElement('div');
    this.cardElement.className = 'glide-profile-card';
    this.container.appendChild(this.cardElement);

    // Initial render with current state or loading placeholder
    if (startNgService.currentPlayer) {
      this.render(startNgService.currentPlayer);
    } else {
      this.renderLoading();
    }

    // Subscribe to real-time player updates
    this.unsubscribe = startNgService.onPlayerChange((player) => {
      this.render(player);
    });
  }

  /**
   * Update the card with given player data.
   */
  public update(player: StartNgUser): void {
    this.render(player);
  }

  private renderLoading(): void {
    if (!this.cardElement) return;
    this.cardElement.innerHTML = `
      <div class="profile-inner">
        <div class="avatar-shimmer"></div>
        <div class="info-group">
          <div class="name-shimmer"></div>
          <div class="handle-shimmer"></div>
        </div>
      </div>
    `;
  }

  private render(player: StartNgUser): void {
    if (!this.cardElement) return;

    const isGuest = Boolean(player.guest);
    const signInUrl = startNgService.getSignInUrl();
    const primaryColor = player.style?.primaryColor || '#00f0ff';
    const secondaryColor = player.style?.secondaryColor || '#ff0077';

    // Safe avatar fallback with single quotes inside SVG
    const fallbackAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='18' fill='%230e1629' stroke='%2300f0ff' stroke-width='2'/><circle cx='20' cy='15' r='7' fill='%2300f0ff'/><path d='M 8 34 Q 20 22 32 34' fill='%2300f0ff'/></svg>";
    let faceSrc = player.face ? player.face.trim() : '';
    if (!faceSrc) {
      faceSrc = fallbackAvatar;
    } else if (faceSrc.startsWith('data:image/svg+xml')) {
      faceSrc = faceSrc.replace(/"/g, "'");
    }

    this.cardElement.style.setProperty('--user-primary', primaryColor);
    this.cardElement.style.setProperty('--user-secondary', secondaryColor);

    this.cardElement.innerHTML = `
      <div class="profile-inner">
        <div class="avatar-wrapper">
          <img id="player-face" src="${faceSrc}" alt="${this.escapeHtml(player.name || 'Player')}" class="profile-avatar" />
          <div class="status-indicator ${isGuest ? 'guest' : 'online'}"></div>
        </div>
        <div class="info-group">
          <div class="name-row">
            <span class="player-name">${this.escapeHtml(player.name)}</span>
            <span class="user-badge ${isGuest ? 'badge-guest' : 'badge-pilot'}">
              ${isGuest ? 'GUEST' : 'PILOT'}
            </span>
          </div>
          <div class="player-account">@${this.escapeHtml(player.account)}</div>
        </div>
        ${
          isGuest
            ? `
          <a class="signin-button" href="${signInUrl}" target="_top" title="Sign in to save scores to leaderboard">
            <span class="signin-text">Sign In</span>
            <svg class="signin-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a.5.5 0 0 1 0-1h5A1.5 1.5 0 0 0 13 10.5v-5A1.5 1.5 0 0 0 11.5 4h-5a.5.5 0 0 1-.5-.5z"/>
              <path fill-rule="evenodd" d="M8.354 5.646a.5.5 0 0 1 0 .708L6.207 8.5H1.5a.5.5 0 0 1 0-1h4.707L8.354 5.646a.5.5 0 0 1 .708 0z"/>
            </svg>
          </a>
        `
            : ''
        }
      </div>
    `;

    // Handle avatar image error fallback
    const imgEl = this.cardElement.querySelector('#player-face') as HTMLImageElement | null;
    if (imgEl) {
      imgEl.onerror = () => {
        imgEl.onerror = null;
        imgEl.src = fallbackAvatar;
      };
    }
  }

  private escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
  }

  private injectStyles(): void {
    const styleId = 'glide-profile-card-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .glide-profile-card {
        --user-primary: #00f0ff;
        --user-secondary: #ff0077;
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 100;
        pointer-events: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      }

      .glide-profile-card .profile-inner {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 14px 8px 10px;
        background: rgba(10, 16, 30, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 240, 255, 0.28);
        border-radius: 40px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.45), 0 0 12px rgba(0, 240, 255, 0.12);
        transition: all 0.25s ease;
      }

      .glide-profile-card .profile-inner:hover {
        border-color: var(--user-primary);
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(0, 240, 255, 0.25);
      }

      .glide-profile-card .avatar-wrapper {
        position: relative;
        width: 42px;
        height: 42px;
        flex-shrink: 0;
      }

      .glide-profile-card .profile-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        background: #0d1527;
        border: 2px solid var(--user-primary);
        box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
      }

      .glide-profile-card .status-indicator {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 2px solid #0a101e;
      }

      .glide-profile-card .status-indicator.online {
        background-color: #39ff14;
        box-shadow: 0 0 6px #39ff14;
      }

      .glide-profile-card .status-indicator.guest {
        background-color: #ffaa00;
        box-shadow: 0 0 6px #ffaa00;
      }

      .glide-profile-card .info-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 90px;
      }

      .glide-profile-card .name-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .glide-profile-card .player-name {
        font-weight: 700;
        font-size: 13.5px;
        letter-spacing: 0.3px;
        color: #ffffff;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        white-space: nowrap;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .glide-profile-card .user-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.6px;
        padding: 1px 6px;
        border-radius: 10px;
        text-transform: uppercase;
      }

      .glide-profile-card .badge-guest {
        background: rgba(255, 170, 0, 0.18);
        color: #ffaa00;
        border: 1px solid rgba(255, 170, 0, 0.4);
      }

      .glide-profile-card .badge-pilot {
        background: rgba(0, 240, 255, 0.18);
        color: var(--user-primary);
        border: 1px solid rgba(0, 240, 255, 0.4);
      }

      .glide-profile-card .player-account {
        font-size: 11px;
        color: #8da4be;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        letter-spacing: 0.2px;
      }

      .glide-profile-card .signin-button {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 12px;
        margin-left: 6px;
        background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 119, 0.2));
        color: #00f0ff;
        text-decoration: none;
        border: 1px solid rgba(0, 240, 255, 0.5);
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.4px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-shadow: 0 0 6px rgba(0, 240, 255, 0.6);
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.15);
      }

      .glide-profile-card .signin-button:hover {
        background: linear-gradient(135deg, rgba(0, 240, 255, 0.35), rgba(255, 0, 119, 0.35));
        border-color: #00f0ff;
        color: #ffffff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
        transform: translateY(-1px);
      }

      .glide-profile-card .signin-button:active {
        transform: translateY(0);
      }

      .glide-profile-card .avatar-shimmer {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #152238;
      }

      .glide-profile-card .name-shimmer {
        width: 80px;
        height: 14px;
        background: #152238;
        border-radius: 4px;
        margin-bottom: 5px;
      }

      .glide-profile-card .handle-shimmer {
        width: 50px;
        height: 10px;
        background: #152238;
        border-radius: 4px;
      }

      @media (max-width: 480px) {
        .glide-profile-card {
          top: 10px;
          left: 10px;
        }
        .glide-profile-card .player-name {
          max-width: 90px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Cleans up card DOM and listeners.
   */
  public destroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
    if (this.cardElement && this.cardElement.parentElement) {
      this.cardElement.parentElement.removeChild(this.cardElement);
      this.cardElement = null;
    }
  }
}
