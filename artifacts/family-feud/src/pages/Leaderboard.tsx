import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, RefreshCw, Trophy, Users, Target, Flame, Star, Crown, TrendingUp, Medal, Sparkles } from "lucide-react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";

export default function Leaderboard() {
  const [, setLocation] = useLocation();
  const [refreshing, setRefreshing] = useState(false);

  async function handleRefresh() {
    setRefreshing(true);
    try {
      // existing logic...
    } finally {
      setRefreshing(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="Leaderboard"
        description="See the top Friendly Feud players ranked by games won, rounds won, correct guesses, steals, and total points."
        canonical="https://friendlyfeud.fun/leaderboard"
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <button
            onClick={() => setLocation("/")}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Leaderboard</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 inline-flex items-center gap-3 flex-wrap justify-center">
            <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>

          <div className="flex items-center gap-3 justify-center">
            <button
              type="button"
              onClick={() => void handleRefresh()}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 hover:text-white hover:bg-emerald-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-xs sm:text-sm font-semibold"
              aria-label="Refresh leaderboard"
              title="Refresh leaderboard"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
