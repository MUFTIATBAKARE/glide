import { LeaderboardEntry, startNgService } from '../services/StartNgService';

export interface GameOverModalOptions {
  container?: HTMLElement;
}

export class GameOverModal {
  private container: HTMLElement;
  private modalElement: HTMLDivElement | null = null;
  private onRestartCallback: (() => void) | null = null;
  private boundKeyHandler: (e: KeyboardEvent) => void;

  constructor(options: GameOverModalOptions = {}) {
    this.container = options.container || document.getElementById('app') || document.body;
    this.boundKeyHandler = this.handleKeyDown.bind(this);
    this.injectStyles();
  }

  /**
   * Displays the game over modal, submits scores to start.ng, and fetches leaderboard.
   */
  public async show(distance: number, packets: number, onRestart: () => void): Promise<void> {
    this.onRestartCallback = onRestart;
    window.addEventListener('keydown', this.boundKeyHandler);

    if (!this.modalElement) {
      this.modalElement = document.createElement('div');
      this.modalElement.className = 'glide-gameover-backdrop';
      this.container.appendChild(this.modalElement);
    }

    const roundedDist = Math.floor(Math.max(0, distance));

    // Submit score to start.ng
    startNgService.saveScore(roundedDist, packets).catch(() => {});

    // Render initial modal with loading state for leaderboard
    this.render(roundedDist, packets, null, true);

    // Fetch live leaderboard data from start.ng (or local fallback)
    try {
      const entries = await startNgService.getLeaderboard(10);
      this.render(roundedDist, packets, entries, false);
    } catch {
      this.render(roundedDist, packets, [], false);
    }
  }

  /**
   * Hides and removes the modal from view.
   */
  public hide(): void {
    window.removeEventListener('keydown', this.boundKeyHandler);
    if (this.modalElement) {
      this.modalElement.classList.remove('active');
      setTimeout(() => {
        if (this.modalElement && this.modalElement.parentElement) {
          this.modalElement.parentElement.removeChild(this.modalElement);
          this.modalElement = null;
        }
      }, 300);
    }
  }

  private render(
    distance: number,
    packets: number,
    leaderboard: LeaderboardEntry[] | null,
    loadingLeaderboard: boolean
  ): void {
    if (!this.modalElement) return;

    // Detect player's rank if available in leaderboard
    let playerRankText = 'SCORE TRANSMITTED';
    const currentUser = startNgService.currentPlayer;

    if (leaderboard && currentUser) {
      const match = leaderboard.find(
        (entry) =>
          entry.account === currentUser.account ||
          (entry.name === currentUser.name && entry.stats.distance <= distance)
      );
      if (match) {
        playerRankText = `NEW RANK: #${match.rank}`;
      } else if (leaderboard.length > 0 && distance >= leaderboard[leaderboard.length - 1].stats.distance) {
        playerRankText = 'TOP 10 PILOT!';
      }
    }

    this.modalElement.innerHTML = `
      <div class="glide-gameover-card">
        <div class="gameover-header">
          <div class="glitch-title" data-text="RUN TERMINATED">RUN TERMINATED</div>
          <div class="rank-tag">${playerRankText}</div>
        </div>

        <div class="stats-row">
          <div class="stat-box distance-box">
            <span class="stat-label">DISTANCE</span>
            <div class="stat-value">${distance.toLocaleString()} <span class="stat-unit">m</span></div>
          </div>
          <div class="stat-box packets-box">
            <span class="stat-label">PACKETS ROUTED</span>
            <div class="stat-value">${packets.toLocaleString()}</div>
          </div>
        </div>

        <div class="leaderboard-section">
          <div class="leaderboard-title">START.NG TOP PILOTS</div>
          <div class="leaderboard-table-container">
            ${
              loadingLeaderboard
                ? `<div class="leaderboard-loading">Retrieving telemetry data...</div>`
                : this.renderLeaderboardTable(leaderboard || [])
            }
          </div>
        </div>

        <button class="play-again-button" id="glide-play-again-btn">
          <span class="button-glow"></span>
          <span class="button-label">PLAY AGAIN</span>
          <span class="button-shortcut">(Space / Enter)</span>
        </button>
      </div>
    `;

    // Trigger active transition
    requestAnimationFrame(() => {
      this.modalElement?.classList.add('active');
    });

    const btn = this.modalElement.querySelector('#glide-play-again-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        this.triggerRestart();
      });
    }
  }

  private renderLeaderboardTable(entries: LeaderboardEntry[]): string {
    if (!entries || entries.length === 0) {
      return `<div class="no-records">No telemetry recorded yet. Be the first!</div>`;
    }

    const rows = entries
      .slice(0, 10)
      .map((entry, index) => {
        const rank = entry.rank || index + 1;
        const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';

        return `
          <div class="leaderboard-row ${rankClass}">
            <div class="row-rank">#${rank}</div>
            <div class="row-pilot">
              <span class="pilot-badge" style="background-color: ${entry.color || '#4b7bec'}">${(entry.name || '?').charAt(0).toUpperCase()}</span>
              <div class="pilot-details">
                <span class="pilot-name">${this.escapeHtml(entry.name)}</span>
                <span class="pilot-account">@${this.escapeHtml(entry.account)}</span>
              </div>
            </div>
            <div class="row-stat stat-dist">${entry.stats.distance.toLocaleString()}m</div>
            <div class="row-stat stat-pkts">${entry.stats.packets} pkts</div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="leaderboard-list">
        ${rows}
      </div>
    `;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      this.triggerRestart();
    }
  }

  private triggerRestart(): void {
    if (this.onRestartCallback) {
      const callback = this.onRestartCallback;
      this.onRestartCallback = null;
      this.hide();
      callback();
    }
  }

  private escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
  }

  private injectStyles(): void {
    const styleId = 'glide-gameover-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .glide-gameover-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(4, 7, 18, 0.88);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 16px;
        pointer-events: auto;
      }

      .glide-gameover-backdrop.active {
        opacity: 1;
      }

      .glide-gameover-card {
        width: 100%;
        max-width: 520px;
        background: rgba(10, 16, 32, 0.95);
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 20px;
        padding: 24px 28px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 240, 255, 0.2);
        display: flex;
        flex-direction: column;
        gap: 18px;
        transform: translateY(20px) scale(0.96);
        transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }

      .glide-gameover-backdrop.active .glide-gameover-card {
        transform: translateY(0) scale(1);
      }

      .gameover-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 240, 255, 0.2);
        padding-bottom: 12px;
      }

      .glitch-title {
        font-size: 22px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ff0077;
        text-shadow: 0 0 10px rgba(255, 0, 119, 0.6), 0 0 20px rgba(255, 0, 119, 0.3);
      }

      .rank-tag {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #00f0ff;
        background: rgba(0, 240, 255, 0.15);
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 12px;
        padding: 4px 10px;
        text-shadow: 0 0 6px rgba(0, 240, 255, 0.5);
      }

      .stats-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .stat-box {
        background: rgba(14, 23, 44, 0.75);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .distance-box {
        border-left: 3px solid #00f0ff;
      }

      .packets-box {
        border-left: 3px solid #ff0077;
      }

      .stat-label {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #8da4be;
      }

      .stat-value {
        font-size: 24px;
        font-weight: 800;
        color: #ffffff;
        font-family: ui-monospace, monospace;
      }

      .stat-unit {
        font-size: 14px;
        color: #00f0ff;
        font-weight: 600;
      }

      .leaderboard-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .leaderboard-title {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #8da4be;
      }

      .leaderboard-table-container {
        max-height: 180px;
        overflow-y: auto;
        border-radius: 8px;
        background: rgba(7, 12, 24, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .leaderboard-list {
        display: flex;
        flex-direction: column;
      }

      .leaderboard-row {
        display: grid;
        grid-template-columns: 36px 1fr 90px 70px;
        align-items: center;
        padding: 8px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        font-size: 12px;
      }

      .leaderboard-row:last-child {
        border-bottom: none;
      }

      .leaderboard-row.rank-1 {
        background: rgba(255, 215, 0, 0.08);
        color: #ffd700;
      }

      .leaderboard-row.rank-2 {
        background: rgba(192, 192, 192, 0.08);
        color: #e0e0e0;
      }

      .leaderboard-row.rank-3 {
        background: rgba(205, 127, 50, 0.08);
        color: #cd7f32;
      }

      .row-rank {
        font-weight: 800;
        font-family: ui-monospace, monospace;
      }

      .row-pilot {
        display: flex;
        align-items: center;
        gap: 8px;
        overflow: hidden;
      }

      .pilot-badge {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 11px;
        color: #ffffff;
        flex-shrink: 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }

      .pilot-details {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .pilot-name {
        font-weight: 600;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .pilot-account {
        font-size: 10px;
        color: #8da4be;
      }

      .row-stat {
        text-align: right;
        font-family: ui-monospace, monospace;
        font-size: 11px;
      }

      .stat-dist {
        color: #00f0ff;
      }

      .stat-pkts {
        color: #ff0077;
      }

      .leaderboard-loading, .no-records {
        padding: 24px;
        text-align: center;
        font-size: 12px;
        color: #8da4be;
      }

      .play-again-button {
        position: relative;
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #00f0ff, #0077ff);
        color: #050a18;
        font-weight: 900;
        font-size: 15px;
        letter-spacing: 1px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
        transition: all 0.2s ease;
      }

      .play-again-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 28px rgba(0, 240, 255, 0.6);
        background: linear-gradient(135deg, #33f3ff, #1a8cff);
      }

      .play-again-button:active {
        transform: translateY(0);
      }

      .button-shortcut {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.75;
      }

      @media (max-width: 480px) {
        .glide-gameover-card {
          padding: 18px 16px;
        }
        .leaderboard-row {
          grid-template-columns: 28px 1fr 70px 50px;
          font-size: 11px;
        }
        .stat-value {
          font-size: 20px;
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
