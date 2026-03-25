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

export function playTickSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "square", 880, now, 0.06, 0.12, 820);
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

/** Short “board flip” ding when a survey answer is revealed (e.g. end-of-round stagger). */
export function playAnswerRevealSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, "sine", 784, now, 0.08, 0.2);
  playTone(ctx, "sine", 1047, now + 0.06, 0.1, 0.18);
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

export function playApplauseSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // Simulate applause with rapid noise bursts that swell then fade
  for (let i = 0; i < 18; i++) {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.06, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let s = 0; s < data.length; s++) data[s] = (Math.random() * 2 - 1) * 0.8;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    src.connect(gain);
    gain.connect(ctx.destination);
    const t = now + i * 0.11;
    const envelope = i < 9 ? (i + 1) / 9 : (18 - i) / 9;
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.22 * envelope, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    src.start(t);
    src.stop(t + 0.1);
  }
  // Triumphant fanfare on top
  const fanfare = [523, 659, 784, 1047];
  fanfare.forEach((freq, i) => playTone(ctx, "sine", freq, now + i * 0.13, 0.25, 0.18));
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
