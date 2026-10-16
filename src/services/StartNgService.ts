export interface PlayerStyle {
  primaryColor: string; // hex #rrggbb -> marble inner core & laser trail
  secondaryColor: string; // hex #rrggbb -> outer containment rings / shield
  skinColor: string; // hex #rrggbb -> orbiting satellite telemetry nodes
  hairColor: string; // hex #rrggbb -> satellite telemetry nodes
  hat?: string; // e.g. 'crown', 'visor', 'none'
  accessory?: string; // e.g. 'glasses', 'backpack', 'none'
}

export interface StartNgUser {
  name: string;
  account: string;
  face: string;
  guest?: boolean;
  style: PlayerStyle;
}

export interface LeaderboardStats {
  distance: number;
  packets: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  account: string;
  face?: string;
  color?: string;
  stats: LeaderboardStats;
}

export const MOCK_GUEST_PLAYER: StartNgUser = {
  name: 'Cyber Runner',
  account: 'guest_runner',
  face: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%230b1326'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2300f0ff' stroke-width='2'/><circle cx='24' cy='28' r='4' fill='%2300f0ff'/><circle cx='40' cy='28' r='4' fill='%2300f0ff'/><path d='M 22 42 Q 32 50 42 42' stroke='%23ff0077' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",
  guest: true,
  style: {
    primaryColor: '#00f0ff',
    secondaryColor: '#ff0077',
    skinColor: '#ffd1a4',
    hairColor: '#00e5ff',
    hat: 'crown',
    accessory: 'glasses',
  },
};

export const MOCK_LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'NeonPhantom',
    account: 'phantom',
    color: '#ff0077',
    face: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%231a0933'/><circle cx='32' cy='32' r='28' fill='none' stroke='%23ff0077' stroke-width='2'/><polygon points='32,16 42,44 22,44' fill='%23ff0077'/></svg>",
    stats: { distance: 18450, packets: 342 },
  },
  {
    rank: 2,
    name: 'PulseDrifter',
    account: 'drifter',
    color: '#00f0ff',
    face: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%23062629'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2300f0ff' stroke-width='2'/><circle cx='32' cy='32' r='12' fill='%2300f0ff'/></svg>",
    stats: { distance: 14220, packets: 280 },
  },
  {
    rank: 3,
    name: 'ByteVector',
    account: 'vector',
    color: '#39ff14',
    face: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%231a2010'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2339ff14' stroke-width='2'/><rect x='22' y='22' width='20' height='20' fill='%2339ff14'/></svg>",
    stats: { distance: 11090, packets: 195 },
  },
];

export class StartNgService {
  private static instance: StartNgService;
  private readonly connectUrl = 'https://start.ng/connect';
  private readonly targetOrigin = 'https://start.ng';
  private iframe: HTMLIFrameElement | null = null;
  private isIframeReady = false;
  private pendingInitPromise: Promise<void> | null = null;

  public currentPlayer: StartNgUser | null = null;
  private playerChangeListeners: Array<(player: StartNgUser) => void> = [];

  public get isReady(): boolean {
    return this.isIframeReady;
  }

  private constructor() {
    this.initIframe();
    this.initEventListeners();
  }

  public static getInstance(): StartNgService {
    if (!StartNgService.instance) {
      StartNgService.instance = new StartNgService();
    }
    return StartNgService.instance;
  }

  /**
   * Initializes the hidden communication iframe targeting start.ng/connect
   */
  private initIframe(): Promise<void> {
    if (this.pendingInitPromise) {
      return this.pendingInitPromise;
    }

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return Promise.resolve();
    }

    this.pendingInitPromise = new Promise<void>((resolve) => {
      // Check if iframe already exists in DOM
      const existing = document.getElementById('startng-connect-frame') as HTMLIFrameElement | null;
      if (existing) {
        this.iframe = existing;
        this.isIframeReady = true;
        resolve();
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.id = 'startng-connect-frame';
      iframe.src = this.connectUrl;
      iframe.title = 'start.ng communication bridge';
      iframe.setAttribute('aria-hidden', 'true');
      iframe.tabIndex = -1;
      iframe.style.position = 'fixed';
      iframe.style.top = '-9999px';
      iframe.style.left = '-9999px';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.style.opacity = '0';
      iframe.style.pointerEvents = 'none';
      iframe.style.border = 'none';

      let resolved = false;
      const onReady = () => {
        if (!resolved) {
          resolved = true;
          this.isIframeReady = true;
          resolve();
        }
      };

      iframe.onload = onReady;
      iframe.onerror = onReady;

      // Ensure we don't hang if iframe load is blocked by sandbox or network
      setTimeout(onReady, 1200);

      const appendIframe = () => {
        if (document.body) {
          document.body.appendChild(iframe);
          this.iframe = iframe;
        } else {
          window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(iframe);
            this.iframe = iframe;
          });
        }
      };

      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', appendIframe);
      } else {
        appendIframe();
      }
    });

    return this.pendingInitPromise;
  }

  /**
   * Re-check user identity on focus and visibilitychange events.
   */
  private initEventListeners(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('focus', () => {
      this.whoAmI().catch(() => {});
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.whoAmI().catch(() => {});
      }
    });
  }

  /**
   * Subscribe to player updates. Returns an unsubscribe function.
   */
  public onPlayerChange(listener: (player: StartNgUser) => void): () => void {
    this.playerChangeListeners.push(listener);
    if (this.currentPlayer) {
      try {
        listener(this.currentPlayer);
      } catch (err) {
        console.error('Error invoking player change listener:', err);
      }
    }
    return () => {
      this.playerChangeListeners = this.playerChangeListeners.filter((l) => l !== listener);
    };
  }

  private notifyPlayerChange(player: StartNgUser): void {
    this.currentPlayer = player;
    for (const listener of this.playerChangeListeners) {
      try {
        listener(player);
      } catch (err) {
        console.error('Error in onPlayerChange listener:', err);
      }
    }
  }

  /**
   * Builds the sign-in URL redirecting back to current location.
   */
  public getSignInUrl(): string {
    const returnTo = encodeURIComponent(window.location.origin + window.location.pathname);
    return `https://start.ng/?return_to=${returnTo}`;
  }

  /**
   * Core postMessage handshake helper with requestId correlation.
   */
  public async askStartNg<T = any>(payload: Record<string, any>, expectedType: string, timeoutMs = 1800): Promise<T> {
    await this.initIframe();

    return new Promise<T>((resolve, reject) => {
      const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      let timer: number | null = null;

      const messageHandler = (event: MessageEvent) => {
        // Accept messages matching origin or during development
        if (event.origin !== this.targetOrigin && !window.location.hostname.match(/localhost|127\.0\.0\.1/)) {
          return;
        }

        const data = event.data;
        if (!data || typeof data !== 'object') return;

        // Correlate via requestId or expected response type
        if (data.requestId === requestId || data.type === expectedType) {
          cleanup();
          resolve(data as T);
        }
      };

      const cleanup = () => {
        if (timer !== null) {
          clearTimeout(timer);
          timer = null;
        }
        window.removeEventListener('message', messageHandler);
      };

      window.addEventListener('message', messageHandler);

      timer = window.setTimeout(() => {
        cleanup();
        // Resolve with fallback / rejection on timeout
        reject(new Error(`Timeout waiting for response to ${payload.type} (requestId: ${requestId})`));
      }, timeoutMs);

      try {
        if (this.iframe && this.iframe.contentWindow) {
          this.iframe.contentWindow.postMessage({ ...payload, requestId }, '*');
        } else {
          // If no iframe, trigger timeout immediately
          cleanup();
          reject(new Error('start.ng bridge iframe not available'));
        }
      } catch (err) {
        cleanup();
        reject(err);
      }
    });
  }

  /**
   * Authenticates or identifies the active player via startng:whoami
   * Seamlessly falls back to guest or mock data when on localhost or offline.
   */
  public async whoAmI(): Promise<StartNgUser> {
    try {
      const response = await this.askStartNg<{ type: string; user?: StartNgUser; guest?: boolean }>(
        { type: 'startng:whoami' },
        'startng:user',
        1500
      );

      if (response && response.user) {
        this.notifyPlayerChange(response.user);
        return response.user;
      }
    } catch {
      // Expected on localhost, sandbox, or offline: fall back seamlessly to guest / mock data
    }

    // Check localStorage for local testing player override
    const localSaved = this.loadLocalUser();
    const fallbackUser = localSaved || MOCK_GUEST_PLAYER;

    this.notifyPlayerChange(fallbackUser);
    return fallbackUser;
  }

  /**
   * Saves game score upon round over for signed-in players.
   */
  public async saveScore(distance: number, packets: number): Promise<{ success: boolean }> {
    const stats = {
      distance: Math.floor(Math.max(0, distance)),
      packets: Math.floor(Math.max(0, packets)),
    };

    // Save locally for guest / offline mode
    this.recordLocalScore(stats);

    if (this.currentPlayer?.guest) {
      return { success: true };
    }

    try {
      await this.askStartNg(
        { type: 'startng:score', stats },
        'startng:scoreSaved',
        2500
      );
      return { success: true };
    } catch {
      return { success: false };
    }
  }

  /**
   * Fetches the top scores from start.ng or local fallback.
   */
  public async getLeaderboard(limit = 10): Promise<LeaderboardEntry[]> {
    try {
      const response = await this.askStartNg<{ type: string; leaderboard: LeaderboardEntry[] }>(
        { type: 'startng:leaderboard', limit },
        'startng:leaderboardData',
        2000
      );

      if (response && Array.isArray(response.leaderboard)) {
        return response.leaderboard.slice(0, limit);
      }
    } catch {
      // Fall through to local fallback
    }

    return this.getLocalLeaderboard(limit);
  }

  // Local storage helpers for seamless offline/localhost functionality
  private loadLocalUser(): StartNgUser | null {
    try {
      const saved = localStorage.getItem('glide_mock_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  private recordLocalScore(stats: LeaderboardStats): void {
    try {
      const scoresKey = 'glide_local_scores';
      const raw = localStorage.getItem(scoresKey);
      const scores: LeaderboardStats[] = raw ? JSON.parse(raw) : [];
      scores.push(stats);
      scores.sort((a, b) => b.distance - a.distance);
      localStorage.setItem(scoresKey, JSON.stringify(scores.slice(0, 50)));
    } catch {
      // Local storage unavailable or full
    }
  }

  private getLocalLeaderboard(limit: number): LeaderboardEntry[] {
    try {
      const raw = localStorage.getItem('glide_local_scores');
      if (raw) {
        const scores: LeaderboardStats[] = JSON.parse(raw);
        if (scores.length > 0) {
          const user = this.currentPlayer || MOCK_GUEST_PLAYER;
          const merged: LeaderboardEntry[] = [
            ...MOCK_LEADERBOARD_DATA,
            ...scores.map((s, idx) => ({
              rank: idx + 4,
              name: user.name,
              account: user.account,
              face: user.face,
              color: user.style?.primaryColor || '#00f0ff',
              stats: s,
            })),
          ];
          merged.sort((a, b) => b.stats.distance - a.stats.distance);
          return merged.slice(0, limit).map((entry, index) => ({
            ...entry,
            rank: index + 1,
          }));
        }
      }
    } catch {
      // Ignore
    }
    return MOCK_LEADERBOARD_DATA.slice(0, limit);
  }
}

export const startNgService = StartNgService.getInstance();
