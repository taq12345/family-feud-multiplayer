import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "./FriendlyFeudLogo";
import { playClickSound } from "../lib/sounds";

const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/rules", label: "How to Play" },
  { href: "/questions", label: "Survey Questions" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/feedback", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

/**
 * Shared chrome for informational pages (blog, guides): background, header
 * with a back button, a constrained main column and a crawlable footer nav.
 */
export function ContentPageLayout({
  kicker,
  children,
  maxWidth = "max-w-4xl",
}: {
  /** Small uppercase label under the wordmark, e.g. "Guides". */
  kicker: string;
  children: ReactNode;
  maxWidth?: string;
}) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className={`${maxWidth} mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3`}>
          <Link
            href="/"
            onClick={() => playClickSound()}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <Link href="/" onClick={() => playClickSound()} className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">{kicker}</p>
            </div>
          </Link>
        </div>
      </header>

      <main className={`relative z-10 ${maxWidth} w-full mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1`}>
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-600 px-4"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => playClickSound()}
              className={`transition-colors ${location === href ? "text-slate-400" : "hover:text-slate-400"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-[10px] text-slate-700 mt-3 px-4">
          © {new Date().getFullYear()} Friendly Feud · "Family Feud" is a registered trademark of
          Fremantle. Friendly Feud is an independent fan project and is not affiliated with Fremantle.
        </p>
      </footer>
    </div>
  );
}
