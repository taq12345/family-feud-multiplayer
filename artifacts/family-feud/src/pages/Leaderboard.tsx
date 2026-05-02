import { SEO } from "../components/SEO";
import { useLocation } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import {
  ArrowLeft,
  Trophy,
  Crown,
  Medal,
  Award,
  Sparkles,
  Target,
  XCircle,
  CheckCircle2,
  Zap,
  Swords,
  Star,
} from "lucide-react";
import { playClickSound } from "../lib/sounds";

type Player = {
  rank: number;
  username: string;
  avatarGradient: string;
  initials: string;
  gamesWon: number;
  gamesLost: number;
  roundsWon: number;
  roundsLost: number;
  correctGuesses: number;
  wrongGuesses: number;
  steals: number;
  totalPoints: number;
};

const dummyPlayers: Player[] = [
  {
    rank: 1,
    username: "TriviaKing",
    avatarGradient: "from-amber-400 via-yellow-500 to-orange-500",
    initials: "TK",
    gamesWon: 142,
    gamesLost: 38,
    roundsWon: 587,
    roundsLost: 213,
    correctGuesses: 1843,
    wrongGuesses: 421,
    steals: 67,
    totalPoints: 24750,
  },
  {
    rank: 2,
    username: "SurveyQueen",
    avatarGradient: "from-slate-300 via-slate-400 to-slate-500",
    initials: "SQ",
    gamesWon: 118,
    gamesLost: 42,
    roundsWon: 502,
    roundsLost: 247,
    correctGuesses: 1612,
    wrongGuesses: 389,
    steals: 54,
    totalPoints: 21420,
  },
  {
    rank: 3,
    username: "FastFingers",
    avatarGradient: "from-amber-700 via-orange-700 to-rose-700",
    initials: "FF",
    gamesWon: 96,
    gamesLost: 51,
    roundsWon: 423,
    roundsLost: 268,
    correctGuesses: 1387,
    wrongGuesses: 412,
    steals: 43,
    totalPoints: 18640,
  },
];

const formatNumber = (n: number) => n.toLocaleString();

function Avatar({ gradient, initials, size = "md" }: { gradient: string; initials: string; size?: "md" | "lg" }) {
  const sizeClasses = size === "lg" ? "w-16 h-16 text-xl" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${sizeClasses} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white shadow-lg ring-2 ring-white/10 shrink-0`}
    >
      {initials}
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-black shadow-md">
        <Crown className="w-4 h-4" />
      </span>
    );
  }
  if (rank === 2) {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 text-black shadow-md">
        <Medal className="w-4 h-4" />
      </span>
    );
  }
  if (rank === 3) {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-700 to-orange-800 text-white shadow-md">
        <Award className="w-4 h-4" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm font-bold">
      {rank}
    </span>
  );
}

export default function Leaderboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="Leaderboard"
        description="See the top Friendly Feud players ranked by games won, rounds won, correct guesses, steals, and total points. Coming soon."
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
            onClick={() => {
              playClickSound();
              setLocation("/");
            }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Leaderboard</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 inline-flex items-center gap-3 flex-wrap justify-center">
            <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Climb the ranks, rack up points, and prove you're the ultimate survey-savvy player. Global leaderboards
            launch soon.
          </p>
        </section>

        <section aria-labelledby="leaderboard-heading">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 id="leaderboard-heading" className="text-sm font-bold tracking-wider uppercase text-slate-500">
              Top Players · Preview
            </h2>
            <span className="text-[10px] sm:text-xs text-slate-600 italic">Sample data</span>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[900px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left px-4 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      Rank
                    </th>
                    <th className="text-left px-4 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      Player
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline">Games W</span>
                        <span className="sm:hidden">GW</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <XCircle className="w-3.5 h-3.5 text-rose-400" />
                        <span className="hidden sm:inline">Games L</span>
                        <span className="sm:hidden">GL</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <Target className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline">Rounds W</span>
                        <span className="sm:hidden">RW</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <Target className="w-3.5 h-3.5 text-rose-400" />
                        <span className="hidden sm:inline">Rounds L</span>
                        <span className="sm:hidden">RL</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline">Correct</span>
                        <span className="sm:hidden">✓</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <XCircle className="w-3.5 h-3.5 text-rose-400" />
                        <span className="hidden sm:inline">Wrong</span>
                        <span className="sm:hidden">✗</span>
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <Swords className="w-3.5 h-3.5 text-purple-400" />
                        Steals
                      </span>
                    </th>
                    <th className="px-3 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        Points
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dummyPlayers.map((p, idx) => (
                    <tr
                      key={p.username}
                      className={`border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors ${
                        idx === 0 ? "bg-amber-500/[0.04]" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <RankBadge rank={p.rank} />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar gradient={p.avatarGradient} initials={p.initials} />
                          <div className="min-w-0">
                            <div className="font-bold text-white truncate">{p.username}</div>
                            <div className="text-[11px] text-slate-500">
                              {Math.round((p.gamesWon / (p.gamesWon + p.gamesLost)) * 100)}% win rate
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center text-emerald-300 font-semibold tabular-nums">
                        {formatNumber(p.gamesWon)}
                      </td>
                      <td className="px-3 py-4 text-center text-rose-300/80 font-semibold tabular-nums">
                        {formatNumber(p.gamesLost)}
                      </td>
                      <td className="px-3 py-4 text-center text-slate-200 font-semibold tabular-nums">
                        {formatNumber(p.roundsWon)}
                      </td>
                      <td className="px-3 py-4 text-center text-slate-400 font-semibold tabular-nums">
                        {formatNumber(p.roundsLost)}
                      </td>
                      <td className="px-3 py-4 text-center text-slate-200 font-semibold tabular-nums">
                        {formatNumber(p.correctGuesses)}
                      </td>
                      <td className="px-3 py-4 text-center text-slate-400 font-semibold tabular-nums">
                        {formatNumber(p.wrongGuesses)}
                      </td>
                      <td className="px-3 py-4 text-center text-purple-300 font-semibold tabular-nums">
                        {formatNumber(p.steals)}
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-200 font-bold tabular-nums">
                          {formatNumber(p.totalPoints)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-slate-600 mt-4 italic">
            Player accounts and global stat tracking are on the way. Names and stats above are illustrative only.
          </p>
        </section>

        <section className="mt-12 grid gap-3 sm:grid-cols-3" aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className="sr-only">
            What's coming
          </h2>
          {[
            {
              icon: Zap,
              title: "Live Rankings",
              desc: "Updated in real-time after every game",
            },
            {
              icon: Trophy,
              title: "Seasonal Resets",
              desc: "Fresh competition every month",
            },
            {
              icon: Sparkles,
              title: "Player Profiles",
              desc: "Custom avatars and full stat history",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">{title}</h3>
                  <p className="text-slate-400 text-xs mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
