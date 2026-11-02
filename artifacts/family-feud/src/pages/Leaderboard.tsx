import { useEffect, useState } from "react";
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
  Loader2,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  RefreshCw,
} from "lucide-react";
import { playClickSound } from "../lib/sounds";

type MultiplayerRow = {
  userId: string;
  nickname: string;
  avatarUrl: string | null;
  gamesWon: number;
  gamesLost: number;
  roundsWon: number;
  roundsLost: number;
  correctGuesses: number;
  wrongGuesses: number;
  successfulSteals: number;
  totalPoints: number;
};

type SoloRow = {
  userId: string;
  nickname: string;
  avatarUrl: string | null;
  correctGuesses: number;
  wrongGuesses: number;
  totalPoints: number;
};

type Mode = "multiplayer" | "solo";

const formatNumber = (n: number) => n.toLocaleString();

const GRADIENTS = [
  "from-amber-400 via-yellow-500 to-orange-500",
  "from-slate-300 via-slate-400 to-slate-500",
  "from-amber-700 via-orange-700 to-rose-700",
  "from-blue-400 via-indigo-500 to-purple-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-rose-400 via-pink-500 to-fuchsia-600",
  "from-violet-400 via-purple-500 to-indigo-600",
  "from-orange-400 via-red-500 to-pink-600",
];

function gradientFor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return GRADIENTS[h % GRADIENTS.length];
}

function initialsFor(name: string): string {
  const n = name.trim();
  if (!n) return "?";
  const parts = n.split(/[-_\s]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return n.slice(0, 2).toUpperCase();
}

function Avatar({
  name,
  avatarUrl,
  size = "md",
}: {
  name: string;
  avatarUrl: string | null;
  size?: "md" | "lg";
}) {
  const sizeClasses = size === "lg" ? "w-16 h-16 text-xl" : "w-10 h-10 text-sm";
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className={`${sizeClasses} rounded-full object-cover ring-2 ring-white/10 shrink-0`}
      />
    );
  }
  return (
    <div
      className={`${sizeClasses} rounded-full bg-gradient-to-br ${gradientFor(name)} flex items-center justify-center font-bold text-white shadow-lg ring-2 ring-white/10 shrink-0`}
    >
      {initialsFor(name)}
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

type MultiSortKey =
  | "totalPoints"
  | "gamesWon"
  | "gamesLost"
  | "roundsWon"
  | "roundsLost"
  | "correctGuesses"
  | "wrongGuesses"
  | "successfulSteals";
type SoloSortKey = "totalPoints" | "correctGuesses" | "wrongGuesses";
type SortKey = MultiSortKey;
type SortDir = "asc" | "desc";

export default function Leaderboard() {
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("multiplayer");
  const [multiRows, setMultiRows] = useState<MultiplayerRow[] | null>(null);
  const [soloRows, setSoloRows] = useState<SoloRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("totalPoints");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [refreshing, setRefreshing] = useState(false);

  function handleSort(key: SortKey) {
    playClickSound();
    if (sortKey === key) {
      setSortDir(d => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  function handleModeChange(next: Mode) {
    if (next === mode) return;
    playClickSound();
    setMode(next);
    // Reset sort to "Points desc" so users land on the most useful default
    // for whichever board they switched into.
    setSortKey("totalPoints");
    setSortDir("desc");
  }

  async function fetchLeaderboard(nextMode: Mode, force = false) {
    const haveData = nextMode === "multiplayer" ? multiRows !== null : soloRows !== null;
    if (!force && haveData) return;

    setError(null);
    if (force) setRefreshing(true);
    const res = await fetch(`/api/leaderboard?mode=${nextMode}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const list = Array.isArray(data?.leaderboard) ? data.leaderboard : [];
    if (nextMode === "multiplayer") setMultiRows(list);
    else setSoloRows(list);
  }

  // Fetch the current mode's leaderboard if we don't already have it cached.
  useEffect(() => {
    const haveData = mode === "multiplayer" ? multiRows !== null : soloRows !== null;
    if (haveData) return;
    let cancelled = false;
    fetchLeaderboard(mode)
      .catch(err => {
        if (cancelled) return;
        console.error("[leaderboard] fetch failed", err);
        setError("Couldn't load the leaderboard. Try again in a moment.");
        if (mode === "multiplayer") setMultiRows([]);
        else setSoloRows([]);
      });
    return () => {
      cancelled = true;
    };
  }, [mode, multiRows, soloRows]);

  async function handleRefresh() {
    playClickSound();
    try {
      await fetchLeaderboard(mode, true);
    } catch (err) {
      console.error("[leaderboard] refresh failed", err);
      setError("Couldn't refresh the leaderboard. Try again in a moment.");
    } finally {
      setRefreshing(false);
    }
  }

  const rows: (MultiplayerRow | SoloRow)[] | null =
    mode === "multiplayer" ? multiRows : soloRows;
  const loading = rows === null;
  const isEmpty = !loading && rows && rows.length === 0;

  const sortedRows = rows
    ? [...rows].sort((a, b) => {
        // sortKey may not exist on solo rows (e.g. gamesWon); fall back to 0.
        const av = (a as Record<string, number>)[sortKey] ?? 0;
        const bv = (b as Record<string, number>)[sortKey] ?? 0;
        const diff = bv - av;
        const primary = sortDir === "desc" ? diff : -diff;
        if (primary !== 0) return primary;
        if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
        return a.nickname.localeCompare(b.nickname);
      })
    : null;

  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) {
      return <ArrowUpDown className="w-3 h-3 text-slate-600 opacity-60" />;
    }
    return sortDir === "desc" ? (
      <ArrowDown className="w-3 h-3 text-amber-400" />
    ) : (
      <ArrowUp className="w-3 h-3 text-amber-400" />
    );
  }

  function SortableTh({
    k,
    label,
    shortLabel,
    icon,
  }: {
    k: SortKey;
    label: string;
    shortLabel?: string;
    icon: React.ReactNode;
  }) {
    const active = sortKey === k;
    return (
      <th
        className={`px-3 py-4 font-semibold text-xs tracking-wider uppercase select-none ${
          active ? "text-amber-300" : "text-slate-400"
        }`}
      >
        <button
          type="button"
          onClick={() => handleSort(k)}
          className="inline-flex items-center gap-1.5 justify-center w-full hover:text-white transition-colors cursor-pointer"
          aria-label={`Sort by ${label}`}
          aria-sort={active ? (sortDir === "desc" ? "descending" : "ascending") : "none"}
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
          {shortLabel && <span className="sm:hidden">{shortLabel}</span>}
          <SortIcon k={k} />
        </button>
      </th>
    );
  }

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="Leaderboard"
        description="See the top Friendly Feud players ranked by games won, rounds won, correct guesses, steals, and total points."
        canonical="https://friendlyfeud.fun/leaderboard/"
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 inline-flex items-center gap-3 flex-wrap justify-center">
            <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Climb the ranks, rack up points, and prove you're the ultimate survey-savvy player. Stats are tracked
            for registered players only.
          </p>
        </section>

        <section aria-labelledby="leaderboard-heading">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
            <h2 id="leaderboard-heading" className="text-sm font-bold tracking-wider uppercase text-slate-500">
              Top Players
            </h2>
            <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => handleModeChange("multiplayer")}
                className={`px-4 sm:px-5 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  mode === "multiplayer"
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-pressed={mode === "multiplayer"}
              >
                Multiplayer
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("solo")}
                className={`px-4 sm:px-5 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  mode === "solo"
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-pressed={mode === "solo"}
              >
                Solo
              </button>
            </div>
            <button
              type="button"
              onClick={() => void handleRefresh()}
              disabled={refreshing}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white shadow-[0_0_16px_rgba(16,185,129,0.35)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              aria-label="Refresh leaderboard"
              title="Refresh leaderboard"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>
            {!loading && rows && rows.length > 0 && (
              <span className="text-[10px] sm:text-xs text-slate-600 ml-auto">
                {rows.length} player{rows.length === 1 ? "" : "s"}
              </span>
            )}
          </div>

          {error && (
            <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
            {loading ? (
              <div className="flex items-center justify-center py-16 text-slate-400">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Loading leaderboard…
              </div>
            ) : isEmpty ? (
              <div className="text-center py-16 px-6">
                <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4 opacity-60" />
                <h3 className="text-lg font-bold text-white mb-2">No ranked players yet</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  {mode === "multiplayer"
                    ? "Sign in, lock in your nickname, and play a multiplayer game to be the first on the board."
                    : "Sign in, lock in your nickname, and play a solo game to be the first on the board."}
                </p>
              </div>
            ) : mode === "multiplayer" ? (
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
                      <SortableTh k="gamesWon" label="Games W" shortLabel="GW" icon={<Trophy className="w-3.5 h-3.5 text-emerald-400" />} />
                      <SortableTh k="gamesLost" label="Games L" shortLabel="GL" icon={<XCircle className="w-3.5 h-3.5 text-rose-400" />} />
                      <SortableTh k="roundsWon" label="Rounds W" shortLabel="RW" icon={<Target className="w-3.5 h-3.5 text-emerald-400" />} />
                      <SortableTh k="roundsLost" label="Rounds L" shortLabel="RL" icon={<Target className="w-3.5 h-3.5 text-rose-400" />} />
                      <SortableTh k="correctGuesses" label="Correct" shortLabel="✓" icon={<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />} />
                      <SortableTh k="wrongGuesses" label="Wrong" shortLabel="✗" icon={<XCircle className="w-3.5 h-3.5 text-rose-400" />} />
                      <SortableTh k="successfulSteals" label="Steals" icon={<Swords className="w-3.5 h-3.5 text-purple-400" />} />
                      <SortableTh k="totalPoints" label="Points" icon={<Star className="w-3.5 h-3.5 text-amber-400" />} />
                    </tr>
                  </thead>
                  <tbody>
                    {(sortedRows as MultiplayerRow[]).map((p, idx) => {
                      const rank = idx + 1;
                      const totalGames = p.gamesWon + p.gamesLost;
                      const winRate = totalGames > 0 ? Math.round((p.gamesWon / totalGames) * 100) : null;
                      return (
                        <tr
                          key={p.userId}
                          className={`border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors ${
                            rank === 1 ? "bg-amber-500/[0.04]" : ""
                          }`}
                        >
                          <td className="px-4 py-4">
                            <RankBadge rank={rank} />
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar name={p.nickname} avatarUrl={p.avatarUrl} />
                              <div className="min-w-0">
                                <div className="font-bold text-white truncate">{p.nickname}</div>
                                {winRate !== null && (
                                  <div className="text-[11px] text-slate-500">{winRate}% win rate</div>
                                )}
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
                            {formatNumber(p.successfulSteals)}
                          </td>
                          <td className="px-3 py-4 text-center">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-200 font-bold tabular-nums">
                              {formatNumber(p.totalPoints)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[520px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="text-left px-4 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                        Rank
                      </th>
                      <th className="text-left px-4 py-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">
                        Player
                      </th>
                      <SortableTh k="correctGuesses" label="Correct" shortLabel="✓" icon={<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />} />
                      <SortableTh k="wrongGuesses" label="Wrong" shortLabel="✗" icon={<XCircle className="w-3.5 h-3.5 text-rose-400" />} />
                      <SortableTh k="totalPoints" label="Points" icon={<Star className="w-3.5 h-3.5 text-amber-400" />} />
                    </tr>
                  </thead>
                  <tbody>
                    {(sortedRows as SoloRow[]).map((p, idx) => {
                      const rank = idx + 1;
                      const totalGuesses = p.correctGuesses + p.wrongGuesses;
                      const accuracy = totalGuesses > 0 ? Math.round((p.correctGuesses / totalGuesses) * 100) : null;
                      return (
                        <tr
                          key={p.userId}
                          className={`border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors ${
                            rank === 1 ? "bg-amber-500/[0.04]" : ""
                          }`}
                        >
                          <td className="px-4 py-4">
                            <RankBadge rank={rank} />
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar name={p.nickname} avatarUrl={p.avatarUrl} />
                              <div className="min-w-0">
                                <div className="font-bold text-white truncate">{p.nickname}</div>
                                {accuracy !== null && (
                                  <div className="text-[11px] text-slate-500">{accuracy}% accuracy</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-center text-slate-200 font-semibold tabular-nums">
                            {formatNumber(p.correctGuesses)}
                          </td>
                          <td className="px-3 py-4 text-center text-slate-400 font-semibold tabular-nums">
                            {formatNumber(p.wrongGuesses)}
                          </td>
                          <td className="px-3 py-4 text-center">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-200 font-bold tabular-nums">
                              {formatNumber(p.totalPoints)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <p className="text-center text-xs text-slate-600 mt-4 italic">
            {mode === "multiplayer"
              ? "Stats only count for registered players in multiplayer games (2+ players)."
              : "Stats only count for registered players in solo games."}
          </p>
        </section>

        <section className="mt-12 grid gap-3 sm:grid-cols-3" aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className="sr-only">
            What's coming
          </h2>
          {[
            { icon: Zap, title: "Live Rankings", desc: "Updated in real-time after every game" },
            { icon: Trophy, title: "Seasonal Resets", desc: "Fresh competition every month" },
            { icon: Sparkles, title: "Player Profiles", desc: "Custom avatars and full stat history" },
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
