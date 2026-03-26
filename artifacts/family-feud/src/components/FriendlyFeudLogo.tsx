import { useId } from "react";
import { cn } from "../lib/utils";

type FriendlyFeudLogoProps = {
  className?: string;
};

type FriendlyFeudWordmarkProps = {
  className?: string;
  compact?: boolean;
};

const marqueeBulbs = [
  { cx: 18, cy: 22 },
  { cx: 24, cy: 17.5 },
  { cx: 32, cy: 15.5 },
  { cx: 40, cy: 17.5 },
  { cx: 46, cy: 22 },
  { cx: 18, cy: 41.5 },
  { cx: 24, cy: 46 },
  { cx: 32, cy: 48 },
  { cx: 40, cy: 46 },
  { cx: 46, cy: 41.5 },
];

export function FriendlyFeudLogo({ className }: FriendlyFeudLogoProps) {
  const id = useId();
  const shellGradientId = `${id}-shell`;
  const marqueeGradientId = `${id}-marquee`;
  const coreGradientId = `${id}-core`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-amber-200/25 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.98),rgba(29,78,216,0.95)_42%,rgba(8,15,40,1)_100%)] shadow-[0_0_18px_rgba(59,130,246,0.3),0_0_24px_rgba(251,191,36,0.16)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.18),transparent_48%),linear-gradient(145deg,rgba(255,255,255,0.16),transparent_45%)]" />
      <svg viewBox="0 0 64 64" className="relative z-10 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={shellGradientId} x1="10" y1="7" x2="54" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93C5FD" />
            <stop offset="0.45" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <radialGradient id={marqueeGradientId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 17) rotate(90) scale(30 36)">
            <stop stopColor="#FEF3C7" />
            <stop offset="0.72" stopColor="#FBBF24" />
            <stop offset="1" stopColor="#D97706" />
          </radialGradient>
          <linearGradient id={coreGradientId} x1="18" y1="20" x2="46" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="18" fill={`url(#${shellGradientId})`} />
        <rect x="5" y="5" width="54" height="54" rx="17" stroke="#F8FAFC" strokeOpacity="0.14" />
        <path
          d="M12 27.5C12 18.39 20.95 11 32 11C43.05 11 52 18.39 52 27.5C52 36.61 43.05 44 32 44C20.95 44 12 36.61 12 27.5Z"
          fill={`url(#${marqueeGradientId})`}
          stroke="#FDE68A"
          strokeOpacity="0.75"
        />
        <path
          d="M16 27.5C16 20.6 23.16 15 32 15C40.84 15 48 20.6 48 27.5C48 34.4 40.84 40 32 40C23.16 40 16 34.4 16 27.5Z"
          fill={`url(#${coreGradientId})`}
          stroke="#BFDBFE"
          strokeOpacity="0.7"
        />

        {marqueeBulbs.map((bulb, index) => (
          <circle
            key={`${bulb.cx}-${bulb.cy}-${index}`}
            cx={bulb.cx}
            cy={bulb.cy}
            r="2"
            fill="#FDE68A"
            fillOpacity="0.95"
          />
        ))}

        <path
          d="M23 22H31V25.5H26.5V29H30V32.5H26.5V37H23V22ZM34 22H42V25.5H37.5V29H41V32.5H37.5V37H34V22Z"
          fill="#FDE68A"
        />
        <path d="M21 47.5H43" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <circle cx="21" cy="47.5" r="2.25" fill="#60A5FA" />
        <circle cx="43" cy="47.5" r="2.25" fill="#60A5FA" />
      </svg>
    </div>
  );
}

export function FriendlyFeudWordmark({ className, compact = false }: FriendlyFeudWordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-start font-black uppercase leading-none",
        compact ? "gap-0 text-sm tracking-[0.16em]" : "gap-0.5 text-lg sm:text-xl tracking-[0.18em]",
        className,
      )}
    >
      <span className="bg-[linear-gradient(135deg,#dbeafe_0%,#60a5fa_55%,#2563eb_100%)] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(96,165,250,0.22)]">
        Friendly
      </span>
      <span className="bg-[linear-gradient(135deg,#fef3c7_0%,#fbbf24_45%,#f59e0b_100%)] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(251,191,36,0.24)]">
        Feud
      </span>
    </span>
  );
}
