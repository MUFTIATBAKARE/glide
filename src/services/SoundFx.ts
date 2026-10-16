export class SoundFx {
  private static instance: SoundFx;
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;

  // Rolling hum sound synthesizer
  private rollOsc: OscillatorNode | null = null;
  private rollGain: GainNode | null = null;
  private rollFilter: BiquadFilterNode | null = null;

  private constructor() {
    // AudioContext will be initialized on first user gesture
    this.setupGestureUnlock();
  }

  public get audioUnlocked(): boolean {
    return this.isUnlocked;
  }

  public static getInstance(): SoundFx {
    if (!SoundFx.instance) {
      SoundFx.instance = new SoundFx();
    }
    return SoundFx.instance;
  }

  private initContext(): void {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    } catch (e) {
      console.warn('Web Audio API not supported on this platform:', e);
    }
  }

  private setupGestureUnlock(): void {
    const unlock = () => {
      this.initContext();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().then(() => {
          this.isUnlocked = true;
          this.initRollHum();
        }).catch(() => {});
      } else if (this.ctx) {
        this.isUnlocked = true;
        this.initRollHum();
      }
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('keydown', unlock, { once: true, passive: true });
    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('touchstart', unlock, { once: true, passive: true });
  }

  /**
   * Initializes continuous low-frequency cyber rolling drone
   */
  private initRollHum(): void {
    if (!this.ctx || this.rollOsc) return;

    try {
      this.rollOsc = this.ctx.createOscillator();
      this.rollOsc.type = 'triangle';
      this.rollOsc.frequency.setValueAtTime(65, this.ctx.currentTime);

      this.rollFilter = this.ctx.createBiquadFilter();
      this.rollFilter.type = 'lowpass';
      this.rollFilter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.rollGain = this.ctx.createGain();
      this.rollGain.gain.setValueAtTime(0, this.ctx.currentTime);

      this.rollOsc.connect(this.rollFilter);
      this.rollFilter.connect(this.rollGain);
      this.rollGain.connect(this.ctx.destination);

      this.rollOsc.start();
    } catch (err) {
      console.warn('Failed to start roll hum oscillator:', err);
    }
  }

  /**
   * Modulates roll humming pitch and volume based on marble speed and on-track status.
   */
  public updateRollHum(speed: number, isOnTrack: boolean): void {
    if (!this.ctx || !this.rollGain || !this.rollOsc || !this.rollFilter || this.isMuted) return;

    const now = this.ctx.currentTime;
    if (!isOnTrack || speed <= 0.1) {
      // Fade out rolling hum when in air, falling, or stopped
      this.rollGain.gain.setTargetAtTime(0, now, 0.05);
    } else {
      // Modulate frequency and amplitude with marble velocity
      const targetGain = Math.min(0.08, (speed / 30) * 0.07);
      const targetFreq = 55 + Math.min(50, (speed / 30) * 45);

      this.rollGain.gain.setTargetAtTime(targetGain, now, 0.08);
      this.rollOsc.frequency.setTargetAtTime(targetFreq, now, 0.08);
      this.rollFilter.frequency.setTargetAtTime(targetFreq * 2.5, now, 0.08);
    }
  }

  /**
   * Plays a high-energy two-tone cyber chime when collecting a Data Packet.
   */
  public playPacketPickup(): void {
    if (!this.ctx || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;

      // Primary tone (sine wave chirp)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, now); // A5
      osc1.frequency.exponentialRampToValueAtTime(1760, now + 0.14); // A6

      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.18);

      // Harmonized overtone (triangle)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1320, now + 0.03); // E6
      osc2.frequency.exponentialRampToValueAtTime(2200, now + 0.16);

      gain2.gain.setValueAtTime(0.12, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);

      osc2.start(now + 0.03);
      osc2.stop(now + 0.2);
    } catch (e) {
      // Audio playback safety catch
    }
  }

  /**
   * Plays a descending frequency drop dive when falling off the track.
   */
  public playFallOff(): void {
    if (!this.ctx || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;

      // Silence rolling hum immediately
      if (this.rollGain) {
        this.rollGain.gain.setValueAtTime(0, now);
      }

      // Descending saw frequency drop
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.85);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(90, now + 0.85);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.85);
    } catch (e) {
      // Safety catch
    }
  }

  /**
   * Quick start chime when restarting the game.
   */
  public playStartChime(): void {
    if (!this.ctx || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880]; // A major arpeggio

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.12, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.15);
      });
    } catch {
      // Audio safety catch
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.isMuted && this.rollGain && this.ctx) {
      this.rollGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }
}

export const soundFx = SoundFx.getInstance();
