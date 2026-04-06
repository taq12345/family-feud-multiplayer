import { SEO } from "../components/SEO";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useParams } from "wouter";
import { useGameSocket, createSoloGame, GameStateData, ChatMsg, CanonicalAnswerSlot } from "../hooks/useGameSocket";
import { getSocket } from "../lib/socket";
import { trackEvent } from "../lib/analytics";
import { Button } from "../components/ui/button";
import { playClickSound, playJoinSound, playBuzzerSound, playCorrectSound, playAnswerRevealSound, playRoundStartSound, playRoundEndSound, playPlayerJoinSound, playPlayerLeaveSound, playApplauseSound, playTickSound } from "../lib/sounds";
import { Input } from "../components/ui/input";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { Send, Trophy, Zap, Users, Crown, LogOut, MessageCircle, Gamepad2, Share2, Check, UserX, Wand2, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";

const REVEAL_STAGGER_MS = 2000;

function StrikeDisplay({ strikes }: { strikes: number }) {
  return (
    <div className="flex gap-2 sm:gap-3 justify-center">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-black text-lg sm:text-2xl transition-all duration-300 ${
            i < strikes
              ? "bg-red-500/20 border-2 border-red-500 text-red-400 scale-110 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              : "bg-white/5 border-2 border-white/10 text-transparent"
          }`}
        >
          {i < strikes ? "✗" : ""}
        </div>
      ))}
    </div>
  );
}

function AnswerBoard({ question, answers }: {
  question: string;
  answers: Array<{ text: string | null; points: number | null; revealed: boolean; index: number }>;
}) {
  return (
    <div className="h-full flex flex-col rounded-2xl bg-white/[0.03] border border-amber-500/25 shadow-[0_0_30px_rgba(251,191,36,0.08)] overflow-hidden">
      <div className="shrink-0 bg-gradient-to-r from-amber-500/15 to-amber-600/10 border-b border-amber-500/20 px-4 py-2 text-center">
        <p className="text-amber-300 font-bold text-sm sm:text-base leading-snug">{question}</p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-2 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-2 gap-1 content-start">
        {answers.map((a, i) => (
          <div
            key={i}
            className={`flex items-center justify-between gap-3 px-3 py-1.5 sm:py-2 rounded-xl border transition-all duration-500 ${
              a.revealed
                ? "bg-blue-500/20 border-blue-400/40 shadow-[0_0_12px_rgba(96,165,250,0.2)]"
                : "bg-white/[0.03] border-white/8"
            }`}
          >
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-all ${
                a.revealed
                  ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                  : "bg-white/10 text-slate-500"
              }`}>
                {i + 1}
              </div>
              <span className={`min-w-0 break-words leading-snug font-semibold text-sm ${a.revealed ? "text-white" : "text-slate-600"}`}>
                {a.revealed ? a.text : "— — — —"}
              </span>
            </div>
            <div className={`shrink-0 text-right text-sm font-bold ${a.revealed ? "text-amber-400" : "text-transparent"}`}>
              {a.revealed ? a.points : "0"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamRoster({ players, team1Name, team2Name, activePlayerName, isHost, myName, onKick }: {
  players: Array<{ name: string; team: 1 | 2; isHost: boolean; contributedPoints: number }>;
  team1Name: string; team2Name: string; activePlayerName: string | null;
  isHost: boolean; myName: string; onKick: (name: string) => void;
}) {
  const t1 = players.filter(p => p.team === 1);
  const t2 = players.filter(p => p.team === 2);
  return (
    <div className="grid grid-cols-2 gap-2 shrink-0">
      {([1, 2] as const).map(team => {
        const members = team === 1 ? t1 : t2;
        const name = team === 1 ? team1Name : team2Name;
        const color = team === 1
          ? { border: "border-rose-500/20", label: "text-rose-400", dot: "bg-rose-400", active: "bg-rose-500/20 border-rose-500/30 text-rose-300" }
          : { border: "border-blue-500/20", label: "text-blue-400", dot: "bg-blue-400", active: "bg-blue-500/20 border-blue-500/30 text-blue-300" };
        return (
          <div key={team} className={`rounded-xl bg-white/[0.02] border ${color.border} p-2`}>
            <div className={`text-[9px] font-bold uppercase tracking-widest ${color.label} mb-1.5 truncate`}>{name}</div>
            <div className="flex flex-wrap gap-1">
              {members.length === 0 && <div className="text-[10px] text-slate-600 italic">No players</div>}
              {members.map(p => {
                const isActive = p.name === activePlayerName;
                return (
                  <div key={p.name} className={`inline-flex items-center gap-1 text-[10px] rounded-full px-1.5 py-0.5 border ${isActive ? color.active : "border-white/5 text-slate-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${color.dot} ${isActive ? "opacity-100" : "opacity-30"}`} />
                    <span className="font-medium max-w-[60px] truncate">{p.name}</span>
                    <span className={`rounded-full px-1 py-0.5 text-[9px] font-bold tabular-nums ${isActive ? "bg-black/20 text-white/90" : "bg-white/5 text-slate-300"}`}>
                      {p.contributedPoints ?? 0} pts
                    </span>
                    {p.isHost && <span className="text-amber-400 text-[9px] leading-none shrink-0">👑</span>}
                    {isHost && p.name !== myName && !p.isHost && (
                      <button
                        title="Kick"
                        onClick={() => onKick(p.name)}
                        className="text-red-500/60 hover:text-red-400 transition-colors shrink-0 leading-none"
                      >
                        <UserX className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScoreBoard({ team1Name, team2Name, team1Score, team2Score, playingTeam, roundPoints }: {
  team1Name: string; team2Name: string; team1Score: number; team2Score: number;
  playingTeam: 1 | 2 | null; roundPoints: number;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 shrink-0">
      <div className={`rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-2.5 sm:py-2 text-center border transition-all duration-300 ${
        playingTeam === 1
          ? "bg-rose-500/20 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
          : "bg-white/[0.03] border-white/8"
      }`}>
        <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wide truncate mb-0.5">{team1Name}</div>
        <div className="text-xl sm:text-2xl font-black text-white leading-none">{team1Score}</div>
        {playingTeam === 1 && (
          <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30">
            <span className="w-1 h-1 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-wider">Playing</span>
          </div>
        )}
      </div>

      <div className="rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-2.5 sm:py-2 text-center bg-amber-500/10 border border-amber-500/25 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
        <div className="text-[9px] sm:text-[10px] text-amber-500/70 font-semibold uppercase tracking-wide mb-0.5">Pot</div>
        <div className="inline-flex items-baseline gap-1 justify-center">
          <span className="text-xl sm:text-2xl font-black text-amber-400 leading-none">{roundPoints}</span>
          <span className="text-[10px] sm:text-xs text-amber-600 font-semibold uppercase tracking-wide">pts</span>
        </div>
      </div>

      <div className={`rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-2.5 sm:py-2 text-center border transition-all duration-300 ${
        playingTeam === 2
          ? "bg-blue-500/20 border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          : "bg-white/[0.03] border-white/8"
      }`}>
        <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wide truncate mb-0.5">{team2Name}</div>
        <div className="text-xl sm:text-2xl font-black text-white leading-none">{team2Score}</div>
        {playingTeam === 2 && (
          <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30">
            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">Playing</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GameRoom() {
  const params = useParams<{ roomId: string }>();
  const [, setLocation] = useLocation();
  const roomId = params.roomId;

  const searchParams = new URLSearchParams(window.location.search);
  const playerName = searchParams.get("name") ?? localStorage.getItem("playerName") ?? "Guest";
  const teamParam = parseInt(searchParams.get("team") ?? "1");
  const team = (teamParam === 2 ? 2 : 1) as 1 | 2;
  const roomNameFromQuery = searchParams.get("roomName")?.trim() ?? "";

  const [gameState, setGameState] = useState<GameStateData | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  const [notification, setNotification] = useState<string | null>(null);
  const [localContributionPoints, setLocalContributionPoints] = useState<Record<string, number>>({});
  const [faceoffCountdown, setFaceoffCountdown] = useState<number | null>(null);
  const [roundCountdown, setRoundCountdown] = useState<number | null>(null);
  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState<number | null>(null);
  const [leaveConfirmOpen, setLeaveConfirmOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [customQuestionsOpen, setCustomQuestionsOpen] = useState(false);
  const [customTopic, setCustomTopic] = useState("");
  const [customQuestionsLoading, setCustomQuestionsLoading] = useState(false);
  const [customQuestionsError, setCustomQuestionsError] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [mobileTab, setMobileTab] = useState<"game" | "chat">("game");
  const [unreadChats, setUnreadChats] = useState(0);
  const [fallbackRoomName, setFallbackRoomName] = useState<string>(roomNameFromQuery);
  const [verifyingAnswer, setVerifyingAnswer] = useState(false);
  const [stealAttempt, setStealAttempt] = useState<{ playerName: string; answer: string; correct: boolean } | null>(null);
  const [currentStealGuess, setCurrentStealGuess] = useState<{ playerName: string; answer: string } | null>(null);
  const [lastRoundResult, setLastRoundResult] = useState<{ winningTeam: 1 | 2; points: number } | null>(null);
  const [soloReplayOpen, setSoloReplayOpen] = useState(false);
  const [soloReplayRounds, setSoloReplayRounds] = useState(4);
  const [soloReplayMode, setSoloReplayMode] = useState<"classic" | "custom">("classic");
  const [soloReplayTopic, setSoloReplayTopic] = useState("");
  const [soloReplayError, setSoloReplayError] = useState<string | null>(null);
  const [soloReplayLoading, setSoloReplayLoading] = useState(false);
  const [boardRevealStagger, setBoardRevealStagger] = useState<{
    canonical: CanonicalAnswerSlot[];
    visible: Set<number>;
  } | null>(null);
  const pendingCanonicalRef = useRef<CanonicalAnswerSlot[] | null>(null);
  const didRequestLeaveRef = useRef(false);
  const betweenRoundsRevealInitRef = useRef(false);
  const lastRevealBaselineRef = useRef<Set<number>>(new Set());
  const revealStaggerTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const pendingWrongRef = useRef<{ answer: string; playerName: string } | null>(null);
  const joinSoundPlayedRef = useRef(false);
  const prevStatusRef = useRef<string | null>(null);
  const answerInputRef = useRef<HTMLInputElement>(null);
  const localContributionPointsRef = useRef<Record<string, number>>({});

  const getPlayerContribution = useCallback((player: { name: string; contributedPoints?: number }) => {
    const key = player.name.trim().toLowerCase();
    return Math.max(player.contributedPoints ?? 0, localContributionPointsRef.current[key] ?? 0);
  }, []);

  const showNotification = useCallback((msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const handleSoloReplay = () => {
    if (soloReplayMode === "custom") {
      const trimmed = soloReplayTopic.trim();
      if (trimmed.length < 2) {
        setSoloReplayError("Please enter a valid topic (at least 2 characters).");
        return;
      }
    }
    setSoloReplayError(null);
    setSoloReplayLoading(true);
    playClickSound();
    createSoloGame(
      playerName,
      soloReplayRounds,
      soloReplayMode === "custom" ? soloReplayTopic.trim() : undefined,
      (newRoomId) => {
        setSoloReplayLoading(false);
        setSoloReplayOpen(false);
        setLocation(`/room/${newRoomId}?name=${encodeURIComponent(playerName)}&team=1`);
      },
      (error) => {
        setSoloReplayLoading(false);
        setSoloReplayError(error);
      }
    );
  };

  function clearRevealStaggerTimers() {
    revealStaggerTimersRef.current.forEach(clearTimeout);
    revealStaggerTimersRef.current = [];
  }

  function startBoardRevealStagger(canonical: CanonicalAnswerSlot[], baseline: Set<number>) {
    clearRevealStaggerTimers();
    const queue = canonical.map(c => c.index).filter(i => !baseline.has(i)).sort((a, b) => a - b);
    if (queue.length === 0) {
      setBoardRevealStagger(null);
      return;
    }
    setBoardRevealStagger({ canonical, visible: new Set(baseline) });

    const revealChain = (remaining: number[]) => {
      if (remaining.length === 0) {
        setBoardRevealStagger(null);
        return;
      }
      const t = setTimeout(() => {
        const idx = remaining[0];
        playAnswerRevealSound();
        setBoardRevealStagger(prev => {
          if (!prev) return null;
          const next = new Set(prev.visible);
          next.add(idx);
          return { canonical: prev.canonical, visible: next };
        });
        revealChain(remaining.slice(1));
      }, REVEAL_STAGGER_MS);
      revealStaggerTimersRef.current.push(t);
    };
    revealChain(queue);
  }

  const { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions, cancelCustomQuestions, setPendingAnswer, clearPendingAnswer } = useGameSocket(
    roomId,
    playerName,
    team,
    {
      onGameState: (state) => {
        if (!joinSoundPlayedRef.current) {
          joinSoundPlayedRef.current = true;
          playJoinSound();
        }
        const shouldResetLocalContributions =
          state.team1Score === 0 &&
          state.team2Score === 0 &&
          state.roundPoints === 0 &&
          state.currentRound <= 1 &&
          (state.status === "waiting" || state.status === "faceoff");

        if (shouldResetLocalContributions && Object.keys(localContributionPointsRef.current).length > 0) {
          localContributionPointsRef.current = {};
          setLocalContributionPoints({});
        }

        setGameState({
          ...state,
          players: state.players.map(player => ({
            ...player,
            contributedPoints: shouldResetLocalContributions
              ? 0
              : getPlayerContribution(player),
          })),
        });

        // Between-rounds board reveal: do not rely on round_over arriving before game_state —
        // build canonical answers from game_state when the ref is empty (socket order / reconnect).
        if (state.status === "between_rounds" && state.currentQuestion && !betweenRoundsRevealInitRef.current) {
          const fromPending = pendingCanonicalRef.current;
          pendingCanonicalRef.current = null;
          const canonical: CanonicalAnswerSlot[] =
            fromPending ??
            state.currentQuestion.answers.map((a, i) => ({
              index: i,
              text: a.text ?? "",
              points: a.points ?? 0,
            }));
          const baseline = new Set(lastRevealBaselineRef.current);
          const queue = canonical.map(c => c.index).filter(i => !baseline.has(i)).sort((a, b) => a - b);
          betweenRoundsRevealInitRef.current = true;
          if (queue.length > 0) {
            startBoardRevealStagger(canonical, baseline);
          }
        } else if (
          (state.status === "faceoff" || state.status === "playing" || state.status === "stealing") &&
          state.currentQuestion
        ) {
          const s = new Set<number>();
          state.currentQuestion.answers.forEach((a, i) => {
            if (a.revealed) s.add(i);
          });
          lastRevealBaselineRef.current = s;
        }
      },
      onChatMessage: (msg) => {
        setChatMessages(prev => [...prev.slice(-99), msg]);
        setUnreadChats(prev => mobileTab === "game" ? prev + 1 : 0);
      },
      onChatHistory: (msgs) => {
        // chat_history is only sent on join/reconnect — safe to clear the verifying overlay
        // here so a reconnect mid-answer doesn't leave the player permanently blocked.
        setVerifyingAnswer(false);
        setChatMessages(msgs);
      },
      onPlayerJoined: (data) => {
        playPlayerJoinSound();
        showNotification(`${data.playerName} joined Team ${data.team}`);
        setChatMessages(prev => [
          ...prev.slice(-99),
          {
            playerName: data.playerName,
            message: "has joined the room",
            createdAt: new Date().toISOString(),
          },
        ]);
        setUnreadChats(prev => (mobileTab === "game" ? prev + 1 : 0));
      },
      onPlayerLeft: (data) => {
        playPlayerLeaveSound();
        showNotification(`${data.playerName} left the room`);
        setChatMessages(prev => [
          ...prev.slice(-99),
          {
            playerName: data.playerName,
            message: "has left the room",
            createdAt: new Date().toISOString(),
          },
        ]);
        setUnreadChats(prev => (mobileTab === "game" ? prev + 1 : 0));
      },
      onPlayerKicked: (data) => {
        playPlayerLeaveSound();
        showNotification(`${data.playerName} was kicked`);
        setChatMessages(prev => [
          ...prev.slice(-99),
          {
            playerName: data.playerName,
            message: `was kicked by the host ${data.hostName}`,
            createdAt: new Date().toISOString(),
          },
        ]);
        setUnreadChats(prev => (mobileTab === "game" ? prev + 1 : 0));
      },
      onAnswerCorrect: (data) => {
        setVerifyingAnswer(false);
        clearPendingAnswer();
        const key = data.playerName.trim().toLowerCase();
        const nextContributionPoints = (localContributionPointsRef.current[key] ?? 0) + data.points;
        localContributionPointsRef.current = {
          ...localContributionPointsRef.current,
          [key]: nextContributionPoints,
        };
        setLocalContributionPoints(localContributionPointsRef.current);
        lastRevealBaselineRef.current = new Set([...lastRevealBaselineRef.current, data.answerIndex]);
        setGameState(prev => prev ? {
          ...prev,
          currentQuestion: prev.currentQuestion ? {
            ...prev.currentQuestion,
            answers: prev.currentQuestion.answers.map(answer =>
              answer.index === data.answerIndex
                ? {
                    ...answer,
                    text: data.answerText,
                    points: data.points,
                    revealed: true,
                  }
                : answer
            ),
          } : prev.currentQuestion,
          players: prev.players.map(player =>
            player.name === data.playerName
              ? {
                  ...player,
                  contributedPoints: Math.max(player.contributedPoints ?? 0, data.contributedPoints ?? 0, nextContributionPoints),
                }
              : player
          ),
        } : prev);
        playCorrectSound();
        const displayed = data.playedAnswer || data.answerText;
        showNotification(`✅ ${data.playerName}: "${displayed}" — ${data.points} pts`);
        // Synthetic chat message (italic, green)
        setChatMessages(prev => [...prev.slice(-99), {
          playerName: data.playerName,
          message: `correctly guessed "${displayed}"`,
          createdAt: new Date().toISOString(),
          type: "system-correct" as const,
        }]);
        // Capture correct steal for the between-rounds summary
        if (gameState?.status === "stealing") {
          setStealAttempt({ playerName: data.playerName, answer: displayed, correct: true });
        }
      },
      onAnswerWrong: (data) => {
        setVerifyingAnswer(false);
        clearPendingAnswer();
        playBuzzerSound();
        // Synthetic chat message (italic, red) — pushed immediately so it's always visible
        setChatMessages(prev => [...prev.slice(-99), {
          playerName: data.playerName,
          message: `wrongly guessed "${data.answer}"`,
          createdAt: new Date().toISOString(),
          type: "system-wrong" as const,
        }]);
        pendingWrongRef.current = { answer: data.answer, playerName: data.playerName };
        // If no strike event arrives within 150ms (faceoff / failed steal), show simple toast
        setTimeout(() => {
          if (pendingWrongRef.current) {
            showNotification(`❌ ${pendingWrongRef.current.playerName}: "${pendingWrongRef.current.answer}" — Wrong!`);
            pendingWrongRef.current = null;
          }
        }, 150);
        // Capture failed steal for the between-rounds summary
        if (gameState?.status === "stealing") {
          setStealAttempt({ playerName: data.playerName, answer: data.answer, correct: false });
        }
      },
      onStrike: (data) => {
        if (pendingWrongRef.current) {
          showNotification(`❌ ${pendingWrongRef.current.playerName}: "${pendingWrongRef.current.answer}" — Strike ${data.strikes}/3!`);
          pendingWrongRef.current = null;
        } else {
          showNotification(`⚡ Strike ${data.strikes}/3!`);
        }
      },
      onStealChance: (data) => {
        setCurrentStealGuess(null);
        showNotification(`🎯 Team ${data.team} gets a steal chance!`);
      },
      onStealGuess: (data) => setCurrentStealGuess({ playerName: data.playerName, answer: data.answer }),
      onRoundOver: (data) => {
        setLastRoundResult({ winningTeam: data.winningTeam, points: data.points });
        playRoundEndSound();
        const message = isSolo
