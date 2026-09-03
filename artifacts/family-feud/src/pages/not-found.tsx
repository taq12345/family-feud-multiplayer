import { Link } from "wouter";
import { SEO } from "../components/SEO";
import { FriendlyFeudLogo } from "../components/FriendlyFeudLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070d1f] text-white flex items-center justify-center px-4">
      <SEO title="Page Not Found" noindex />
      <div className="text-center max-w-md">
        <FriendlyFeudLogo className="w-14 h-14 mx-auto mb-5" />
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-slate-300 mt-2 font-semibold">That page doesn't exist.</p>
        <p className="text-slate-500 text-sm mt-1">
          Game rooms expire once everyone leaves, so an old invite link may land here.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          >
            Back to the lobby
          </Link>
          <Link
            href="/rules"
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            How to play
          </Link>
        </div>
      </div>
    </div>
  );
}
