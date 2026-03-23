let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    try {
      audioCtx = new AudioContext();
    } catch {
      return null;
    }
  }
  return audioCtx;
}

function playTone(
  ctx: AudioContext,
  type: OscillatorType,
  freq: number,
  startTime: number,
  duration: number,
  peakGain: number,
  freqEnd?: number
): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  if (freqEnd !== undefined) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, startTime + duration);
  }
  gain.gain.setValueAtTime(peakGain, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function playClickSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 1200, now, 0.08, 0.18, 600);
}

export function playJoinSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 440, now, 0.14, 0.22);
  playTone(ctx, "sine", 660, now + 0.13, 0.18, 0.22);
  playTone(ctx, "sine", 880, now + 0.27, 0.22, 0.20);
}

export function playPlayerJoinSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 523, now, 0.12, 0.18);
  playTone(ctx, "sine", 784, now + 0.11, 0.16, 0.18);
}

export function playPlayerLeaveSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 784, now, 0.12, 0.15);
  playTone(ctx, "sine", 440, now + 0.11, 0.18, 0.15, 330);
}

export function playBuzzerSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sawtooth", 160, now, 0.45, 0.38, 120);
}

export function playCorrectSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 523, now, 0.12, 0.25);
  playTone(ctx, "sine", 659, now + 0.11, 0.12, 0.25);
  playTone(ctx, "sine", 1047, now + 0.22, 0.22, 0.25);
}

export function playRoundStartSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [330, 415, 523, 659, 784];
  notes.forEach((freq, i) => {
    playTone(ctx, "sine", freq, now + i * 0.09, 0.13, 0.22);
  });
}

export function playRoundEndSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 523, now, 0.15, 0.20);
  playTone(ctx, "sine", 659, now + 0.14, 0.15, 0.20);
  playTone(ctx, "sine", 784, now + 0.28, 0.15, 0.20);
  playTone(ctx, "sine", 1047, now + 0.42, 0.30, 0.22);
}
