import { SEO } from "../components/SEO";
import AdsterraWidget from "../components/AdsterraWidget";
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
          ? `🏆 Round complete! +${data.points} pts`
          : `🏆 Team ${data.winningTeam} wins the round! +${data.points} pts`;
        showNotification(message);
        // If game_state already ran between_rounds (stagger started), do not stash stale canonical for the next round.
        if (!betweenRoundsRevealInitRef.current) {
          pendingCanonicalRef.current = data.canonicalAnswers ?? null;
        }
      },
      onRoomDeleted: () => {
        showNotification("Room was deleted by host.");
        setTimeout(() => setLocation("/"), 800);
      },
      onJoinRejected: (data) => {
        showNotification(`Rejected: ${data.reason}`);
        setTimeout(() => setLocation("/"), 1200);
      },
      onHostChanged: (data) => {
        if (data.hostName === playerName) {
          showNotification(`👑 You are now the host!`);
        } else {
          showNotification(`👑 ${data.hostName} is now the host`);
        }
      },
      onFaceoffNoWinner: (data) => {
        showNotification("⏱ No winner in the face-off — moving to next round!");
        if (!betweenRoundsRevealInitRef.current) {
          pendingCanonicalRef.current = data.canonicalAnswers ?? null;
        }
      },
      onKickedInactive: (data) => {
        sessionStorage.setItem("kickedMessage", `You were removed due to being idle for ${data.idleMinutes} minute${data.idleMinutes === 1 ? "" : "s"}.`);
        setLocation("/");
      },
      onKicked: () => {
        sessionStorage.setItem("kickedMessage", "You were removed from the room by the host.");
        setLocation("/");
      },
      onCustomQuestionsError: (data) => {
        setCustomQuestionsError(data.message);
        setCustomQuestionsLoading(false);
      },
      onNextRoundError: (data) => {
        showNotification(`⚠️ ${data.message}`);
      },
    }
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Keep a resilient room-name fallback for cases where socket state arrives without roomName.
  useEffect(() => {
    const socketRoomName = gameState?.roomName?.trim();
    if (socketRoomName) {
      setFallbackRoomName(socketRoomName);
      return;
    }

    if (!roomId) return;
    let cancelled = false;
    fetch(`/api/rooms/${roomId}`)
      .then(async res => {
        if (!res.ok) return null;
        return res.json() as Promise<{ name?: string }>;
      })
      .then(data => {
        const apiRoomName = data?.name?.trim();
        if (!cancelled && apiRoomName) setFallbackRoomName(apiRoomName);
      })
      .catch(() => {
        // Ignore; UI keeps existing fallback text.
      });

    return () => {
      cancelled = true;
    };
  }, [roomId, gameState?.roomName]);

  // Auto-close the custom questions dialog when the game transitions away from waiting
  useEffect(() => {
    if (gameState?.status && gameState.status !== "waiting") {
      setCustomQuestionsOpen(false);
      setCustomQuestionsLoading(false);
    }
  }, [gameState?.status]);

  const handleGenerateCustomQuestions = useCallback(() => {
    const topic = customTopic.trim();
    if (!topic) return;
    setCustomQuestionsError(null);
    setCustomQuestionsLoading(true);
    generateCustomQuestions(topic);
  }, [customTopic, generateCustomQuestions]);

  // Clear steal attempt summary and live guess when a new round's faceoff begins
  useEffect(() => {
    if (gameState?.status === "faceoff") {
      setStealAttempt(null);
      setCurrentStealGuess(null);
      setLastRoundResult(null);
    }
    if (gameState?.status === "between_rounds") {
      setCurrentStealGuess(null);
    }
  }, [gameState?.status]);

  // End client-side board stagger when leaving between-rounds
  useEffect(() => {
    if (gameState?.status !== "between_rounds") {
      clearRevealStaggerTimers();
      setBoardRevealStagger(null);
      betweenRoundsRevealInitRef.current = false;
    }
  }, [gameState?.status]);

  // Play round-start sound when status transitions TO faceoff (not on initial mount)
  useEffect(() => {
    const current = gameState?.status ?? null;
    if (current === "faceoff" && prevStatusRef.current !== null && prevStatusRef.current !== "faceoff") {
      playRoundStartSound();
    }
    prevStatusRef.current = current;
  }, [gameState?.status]);

  // 25s faceoff countdown — visible to ALL players; restarts whenever the designated player changes.
  // Uses the server-provided faceoffTimerStartedAt so rejoin/mid-round joins resume from real time.
  useEffect(() => {
    if (gameState?.status === "faceoff" && gameState?.faceoffDesignatedPlayerName) {
      const startedAt = gameState.faceoffTimerStartedAt ?? Date.now();
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const initial = Math.max(0, 25 - elapsed);
      setFaceoffCountdown(initial);
      if (initial === 0) return;
      const interval = setInterval(() => {
        setFaceoffCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setFaceoffCountdown(null);
      return undefined;
    }
  }, [gameState?.status, gameState?.faceoffDesignatedPlayerName, gameState?.faceoffTimerStartedAt]);

  const myPlayer = gameState?.players.find(p => p.name === playerName);
  const isSolo = gameState?.isSolo ?? false;
  const isHost = myPlayer?.isHost ?? false;
  const myTeam = myPlayer?.team ?? null;
  const isMyTeamPlaying = gameState?.playingTeam === team;
  const isMyTeamStealing = gameState?.status === "stealing" && gameState?.playingTeam !== team;
  const isMyTurnToPlay = (gameState?.status === "playing" && isMyTeamPlaying &&
      gameState?.playingDesignatedPlayerName === playerName) ||
    (gameState?.status === "stealing" && isMyTeamStealing &&
      gameState?.playingDesignatedPlayerName === playerName);
  const isMyTurnToFaceoff = gameState?.status === "faceoff" &&
    gameState?.faceoffDesignatedPlayerName === playerName;

  const team1Count = gameState?.players.filter(p => p.team === 1).length ?? 0;
  const team2Count = gameState?.players.filter(p => p.team === 2).length ?? 0;
  const mvpPlayers = useMemo<GameStateData["players"]>(() => {
    if (!gameState?.players.length) return [];
    const topScore = Math.max(...gameState.players.map(p => p.contributedPoints ?? 0));
    return gameState.players.filter(p => (p.contributedPoints ?? 0) === topScore);
  }, [gameState?.players, localContributionPoints]);
  const mvpScore = mvpPlayers[0]?.contributedPoints ?? 0;
  const renderMvpNames = (separatorClassName: string) =>
    mvpPlayers.map((player, index) => (
      <span key={`${player.name}-${player.team}`}>
        {index > 0 && <span className={separatorClassName}>, </span>}
        <span className={player.team === 1 ? "text-rose-300" : "text-blue-300"}>{player.name}</span>
      </span>
    ));
  const canStartGame = team1Count > 0 && team2Count > 0;
  const startGameTooltip = !canStartGame
    ? team1Count === 0 && team2Count === 0 ? "Both teams need at least 1 player."
      : team1Count === 0 ? "Team 1 needs at least 1 player."
      : "Team 2 needs at least 1 player."
    : "";

  // Local 25s countdown for normal/steal answers — runs for all players; restarts on rotation.
  // Uses the server-provided roundTimerStartedAt so rejoin/mid-round joins resume from real time.
  useEffect(() => {
    const active = gameState && (gameState.status === "playing" || gameState.status === "stealing") && gameState.playingDesignatedPlayerName !== null;
    if (active) {
      const startedAt = gameState!.roundTimerStartedAt ?? Date.now();
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const initial = Math.max(0, 25 - elapsed);
      setRoundCountdown(initial);
      if (initial === 0) return;
      const interval = setInterval(() => {
        setRoundCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setRoundCountdown(null);
      return undefined;
    }
  }, [gameState?.status, gameState?.strikes, gameState?.roundPoints, gameState?.playingDesignatedPlayerName, gameState?.roundTimerStartedAt]);

  // Tick sound for the last 5 seconds of any active countdown
  useEffect(() => {
    const active = faceoffCountdown ?? roundCountdown;
    if (active !== null && active <= 5 && active > 0) {
      playTickSound();
    }
  }, [faceoffCountdown, roundCountdown]);

  // Play applause when game-over screen first appears
  useEffect(() => {
    if (!gameState) return;
    const isGameOver = gameState.status === "between_rounds" && gameState.currentRound >= gameState.totalRounds;
    if (isGameOver) playApplauseSound();
  }, [gameState?.status, gameState?.currentRound, gameState?.totalRounds]);

  // 60s auto-advance countdown shown during between_rounds (not on game over).
  // Use the server-provided betweenRoundsStartedAt timestamp so the countdown
  // resumes from the correct remaining time on rejoin instead of resetting to 60.
  useEffect(() => {
    if (!gameState) return;
    const isGameOver = gameState.currentRound >= gameState.totalRounds;
    if (gameState.status === "between_rounds" && !isGameOver) {
      const startedAt = gameState.betweenRoundsStartedAt ?? Date.now();
      const elapsedSec = Math.floor((Date.now() - startedAt) / 1000);
      const initial = Math.max(0, 60 - elapsedSec);
      setAutoAdvanceCountdown(initial);
      if (initial === 0) return;
      const interval = setInterval(() => {
        setAutoAdvanceCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setAutoAdvanceCountdown(null);
      return undefined;
    }
  }, [gameState?.status, gameState?.currentRound, gameState?.totalRounds, gameState?.betweenRoundsStartedAt]);

  // Auto-focus + auto-select the answer box whenever it becomes this player's turn
  useEffect(() => {
    if (verifyingAnswer) return;
    if (!(isMyTurnToFaceoff || isMyTurnToPlay)) return;

    const t = setTimeout(() => {
      const el = answerInputRef.current;
      if (!el) return;

      el.focus();

      // Highlight the whole value so the user can immediately overwrite it.
      const len = el.value?.length ?? 0;
      if (typeof el.setSelectionRange === "function") {
        el.setSelectionRange(0, len);
      }
      if (typeof el.select === "function") {
        el.select();
      }
    }, 50);

    return () => clearTimeout(t);
  }, [isMyTurnToFaceoff, isMyTurnToPlay, verifyingAnswer]);

  function handleLeave() {
    didRequestLeaveRef.current = true;
    leaveRoom();
    setLocation("/");
  }

  // Catch-all: always notify the server when leaving the game room page,
  // regardless of how navigation happens (button click, browser back, redirect, etc.)
  useEffect(() => {
    const currentRoomId = roomId;
    return () => {
      if (currentRoomId && !didRequestLeaveRef.current) {
        getSocket().emit("leave_room", { roomId: currentRoomId });
      }
    };
  }, [roomId]);

  function handleSendChat(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendChat(chatInput);
    setChatInput("");
  }

  function handleAnswer(e: React.FormEvent) {
    e.preventDefault();
    if (!answerInput.trim()) return;
    setVerifyingAnswer(true);
    trackEvent("answer_submitted", {
      game_mode: gameState?.isSolo ? "solo" : "multiplayer",
    });
    // Store the answer so it can be re-emitted automatically if the socket drops
    // before the server responds with answer_correct or answer_wrong.
    setPendingAnswer(answerInput, isMyTurnToFaceoff ? "faceoff" : "submit");
    if (isMyTurnToFaceoff) {
      setFaceoffCountdown(null);
      faceoffAnswer(answerInput);
    } else {
      submitAnswer(answerInput);
    }
    setAnswerInput("");
    setRoundCountdown(null);
  }

  const answerBoardAnswers = useMemo(() => {
    if (!gameState?.currentQuestion) return null;
    if (gameState.status === "between_rounds" && boardRevealStagger) {
      const { canonical, visible } = boardRevealStagger;
      return canonical.map(c => ({
        index: c.index,
        text: visible.has(c.index) ? c.text : null,
        points: visible.has(c.index) ? c.points : null,
        revealed: visible.has(c.index),
      }));
    }
    return gameState.currentQuestion.answers;
  }, [gameState, boardRevealStagger]);

  if (!gameState) {
    return (
      <div className="h-svh bg-[#070d1f] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
          <p className="text-slate-400 text-sm">Connecting to game…</p>
        </div>
      </div>
    );
  }

  const statusLabel =
    isSolo && gameState.status === "playing" ? "Solo Play" :
    gameState.status === "waiting" ? "Waiting to start" :
    gameState.status === "faceoff" ? "FACE-OFF!" :
    gameState.status === "playing" ? `${gameState.playingTeam === 1 ? gameState.team1Name : gameState.team2Name} is playing` :
    gameState.status === "stealing" ? "STEAL CHANCE!" :
    gameState.status === "between_rounds" ? "Round Over" :
    gameState.status === "finished" ? "GAME OVER" : gameState.status;

  const statusColor =
    gameState.status === "faceoff" ? "text-emerald-400" :
    gameState.status === "playing" ? "text-amber-400" :
    gameState.status === "stealing" ? "text-orange-400" :
    gameState.status === "between_rounds" ? "text-purple-400" :
    gameState.status === "finished" ? "text-amber-400" : "text-slate-400";

  const displayRoomName = gameState.roomName?.trim() || fallbackRoomName || "Unnamed Room";

  return (
    <div className={`${isSolo ? "min-h-svh overflow-y-auto" : "h-svh overflow-hidden"} bg-[#070d1f] text-white flex flex-col`}>
      {/* Answer verification overlay */}
      {verifyingAnswer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="flex flex-col items-center gap-4 px-8 py-7 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(251,191,36,0.15)]">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-amber-400/10 flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-base">Checking your answer…</p>
              <p className="text-slate-400 text-xs mt-1">Consulting the judges</p>
            </div>
          </div>
        </div>
      )}

      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5 bg-black/40 backdrop-blur-xl px-3 py-2 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <FriendlyFeudLogo className="w-7 h-7 shrink-0" />
          <div className="min-w-0 flex flex-col">
            <FriendlyFeudWordmark compact />
            <span className="text-[10px] text-slate-400 truncate max-w-[180px] sm:max-w-[280px] sm:hidden" title={displayRoomName}>
              {displayRoomName}
            </span>
          </div>
          <span
            className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono truncate max-w-[220px]"
            title={displayRoomName}
          >
            {displayRoomName}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {playerName && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300">
                Playing as <span className="font-semibold text-amber-400">{playerName}</span>
              </span>
            </div>
          )}
          {!isSolo && (
            <div className="hidden xs:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 mr-1">
              <Users className="w-3 h-3 text-slate-400" />
              <span className="text-xs text-slate-400">{gameState.players.length}</span>
              {isHost && <Crown className="w-3 h-3 text-amber-400 ml-0.5" />}
            </div>
          )}
          {!isSolo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    playClickSound();
                    const url = `${window.location.origin}${import.meta.env.BASE_URL}?join=${roomId}`;
                    navigator.clipboard.writeText(url).then(() => {
                      setShareCopied(true);
                      setTimeout(() => setShareCopied(false), 2000);
                    });
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all text-xs font-medium ${
                    shareCopied
                      ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {shareCopied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{shareCopied ? "Copied!" : "Invite"}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Copy invite link</TooltipContent>
            </Tooltip>
          )}
          {isHost && !isSolo && (
            <button
              onClick={() => { playClickSound(); setDeleteConfirmOpen(true); }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-xs font-medium"
            >
              <LogOut className="w-3.5 h-3.5" />
              Delete Room
            </button>
          )}
          <button
            onClick={() => { playClickSound(); setLeaveConfirmOpen(true); }}
            title="Leave Room"
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-xs font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Leave</span>
          </button>
        </div>
      </header>

      {/* Notification toast — fixed overlay, never shifts layout */}
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="flex items-center gap-2.5 bg-[#0d1525]/90 backdrop-blur-xl border border-white/12 text-white text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-sm text-center whitespace-nowrap">
            {notification}
          </div>
        </div>
      )}

      <div className={`flex ${isSolo ? "h-[88vh] flex-none" : "flex-1 overflow-hidden"} relative z-10`}>
        {/* Main game area */}
        <div className={`flex-1 flex flex-col p-2 md:p-3 gap-2 overflow-hidden ${mobileTab === "chat" ? "hidden md:flex" : "flex"}`}>

          {/* Round info bar */}
          <div className="shrink-0 flex items-center justify-center gap-3 py-0.5">
            <span className="text-xs text-slate-500 font-medium">
              Round {gameState.currentRound}/{gameState.totalRounds}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className={`text-xs font-bold uppercase tracking-wide ${statusColor}`}>{statusLabel}</span>
          </div>

          {isSolo ? (
            <div className="shrink-0 flex items-center justify-center gap-3 py-2 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-amber-400/70 text-xs font-semibold uppercase tracking-wider">Your Score</span>
              <span className="text-2xl font-black text-amber-400">{gameState.team1Score}</span>
              <span className="text-amber-600 text-xs font-semibold">pts</span>
            </div>
          ) : (
            <ScoreBoard
              team1Name={gameState.team1Name}
              team2Name={gameState.team2Name}
              team1Score={gameState.team1Score}
              team2Score={gameState.team2Score}
              playingTeam={gameState.playingTeam}
              roundPoints={gameState.roundPoints}
            />
          )}

          {gameState.status !== "waiting" && !isSolo && (
            <TeamRoster
              players={gameState.players}
              team1Name={gameState.team1Name}
              team2Name={gameState.team2Name}
              activePlayerName={
                gameState.status === "faceoff" ? gameState.faceoffDesignatedPlayerName :
                (gameState.status === "playing" || gameState.status === "stealing") ? gameState.playingDesignatedPlayerName :
                null
              }
              isHost={isHost}
              myName={playerName}
              onKick={kickPlayer}
            />
          )}

          {/* Strikes */}
          {(gameState.status === "playing" || gameState.status === "stealing") && (
            <div className="shrink-0">
              <StrikeDisplay strikes={gameState.strikes} />
            </div>
          )}

          {/* Answer board — grows to fill remaining space */}
          {gameState.currentQuestion && answerBoardAnswers && (
            <div className={`min-h-0 ${isSolo ? "max-h-[38vh]" : "flex-1"}`}>
              <AnswerBoard
                question={gameState.currentQuestion.question}
                answers={answerBoardAnswers}
              />
            </div>
          )}

          {/* Game controls */}
          <div className="shrink-0 space-y-2">

            {/* Waiting to start */}
            {gameState.status === "waiting" && (
              <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
                <p className="text-slate-400 text-sm text-center mb-4">
                  {isHost ? "You're the host — start the game when everyone is ready!" : "Waiting for the host to start…"}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[1, 2].map(t => (
                    <div key={t} className={`rounded-xl p-3 border ${t === 1 ? "bg-rose-500/10 border-rose-500/20" : "bg-blue-500/10 border-blue-500/20"}`}>
                      <div className={`text-xs font-bold mb-2 uppercase tracking-wide ${t === 1 ? "text-rose-400" : "text-blue-400"}`}>
                        {t === 1 ? gameState.team1Name : gameState.team2Name}
                      </div>
                      {gameState.players.filter(p => p.team === t).map(p => (
                        <div key={p.id} className="flex items-center gap-1 text-xs text-slate-300 mb-0.5">
                          {p.isHost && <Crown className="w-3 h-3 text-amber-400 shrink-0" />}
                          <span className="truncate">{p.name}</span>
                          {isHost && p.name !== playerName && !p.isHost && (
                            <button
                              title="Kick"
                              onClick={() => kickPlayer(p.name)}
                              className="ml-auto px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-red-300 transition-all shrink-0"
                            >
                              <UserX className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                      {gameState.players.filter(p => p.team === t).length === 0 && (
                        <div className="text-xs text-slate-600 italic">No players yet</div>
                      )}
                    </div>
                  ))}
                </div>
                {isHost && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        playClickSound();
                        const url = `${window.location.origin}${import.meta.env.BASE_URL}?join=${roomId}`;
                        navigator.clipboard.writeText(url).then(() => {
                          setShareCopied(true);
                          setTimeout(() => setShareCopied(false), 2000);
                        });
                      }}
                      className={`flex items-center justify-center sm:justify-start gap-2 px-5 h-11 rounded-lg border font-bold text-sm transition-all ${
                        shareCopied
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.2)]"
                          : "bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-white/25"
                      }`}
                    >
                      {shareCopied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                      {shareCopied ? "Link Copied!" : "Invite Players"}
                    </button>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="w-full sm:w-auto">
                          <Button
                            onClick={startGame}
                            disabled={!canStartGame}
                            className="w-full sm:w-auto bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 disabled:opacity-40 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
                          >
                            <Zap className="w-4 h-4 mr-2" /> Classic Questions
                          </Button>
                        </span>
                      </TooltipTrigger>
                      {!canStartGame && <TooltipContent side="top">{startGameTooltip}</TooltipContent>}
                    </Tooltip>
                    <Button
                      onClick={() => {
                        playClickSound();
                        setCustomTopic("");
                        setCustomQuestionsError(null);
                        setCustomQuestionsOpen(true);
                      }}
                      disabled={!canStartGame}
                      className="w-full sm:w-auto bg-gradient-to-br from-pink-300 to-pink-400 hover:from-pink-200 hover:to-pink-300 disabled:opacity-40 text-pink-950 font-bold px-5 h-11 border-0 shadow-[0_0_16px_rgba(236,72,153,0.2)] transition-all"
                    >
                      <Wand2 className="w-4 h-4 mr-2" /> Custom Questions (Beta)
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Face-off */}
            {gameState.status === "faceoff" && (
              <div className="space-y-2">
                {/* Input: only for the designated player */}
                {isMyTurnToFaceoff && (
                  <form
                    onSubmit={handleAnswer}
                    className="flex gap-2 rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-2 shadow-[0_0_24px_rgba(16,185,129,0.2)]"
                  >
                    <Input
                      ref={answerInputRef}
                      placeholder="Give your answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-black/25 border-emerald-300/40 text-white placeholder:text-emerald-200/50 focus:border-emerald-300/70 h-11 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.15)]"
                      autoFocus
                      disabled={verifyingAnswer}
                    />
                    <Button
                      type="submit"
                      disabled={verifyingAnswer}
                      className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-11 px-4 border-0 shadow-[0_0_14px_rgba(16,185,129,0.45)]"
                    >
                      {verifyingAnswer ? "…" : "Answer"}
                    </Button>
                  </form>
                )}

                {/* Who is guessing banner */}
                {gameState.faceoffDesignatedPlayerName ? (
                  <div className={`rounded-xl border p-2 sm:p-3 text-center ${
                    gameState.faceoffTurn === 1
                      ? "bg-rose-500/10 border-rose-500/25"
                      : "bg-blue-500/10 border-blue-500/25"
                  }`}>
                    <p className={`font-bold text-sm ${gameState.faceoffTurn === 1 ? "text-rose-400" : "text-blue-400"}`}>
                      🎯 {gameState.faceoffDesignatedPlayerName === playerName
                        ? "Your turn to guess!"
                        : `${gameState.faceoffDesignatedPlayerName}'s turn to guess`}
                    </p>
                    {faceoffCountdown !== null && (
                      <p className={`text-3xl sm:text-4xl font-black tabular-nums mt-1 leading-none ${faceoffCountdown <= 5 ? "text-red-400" : faceoffCountdown <= 10 ? "text-amber-400" : "text-slate-300"}`}>
                        {faceoffCountdown}<span className="text-sm font-normal opacity-50 ml-0.5">s</span>
                      </p>
                    )}
                  </div>
                ) : null}

                {/* (removed) waiting message for other teams */}

                {/* Phase description — hidden on small screens to save space */}
                <div className="hidden sm:block rounded-xl bg-amber-500/8 border border-amber-500/20 px-4 py-2.5 text-center">
                  <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-0.5">⚡ Face-Off</p>
                  <p className="text-slate-400 text-xs">One player per team guesses. The first correct survey answer wins control for that team and moves them into Playing.</p>
                </div>
              </div>
            )}

            {/* Playing */}
            {gameState.status === "playing" && (
              <div className="space-y-2">
                {isMyTurnToPlay && (
                  <form
                    onSubmit={handleAnswer}
                    className="flex gap-2 rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-2 shadow-[0_0_24px_rgba(16,185,129,0.2)]"
                  >
                    <Input
                      ref={answerInputRef}
                      placeholder="Your answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-black/25 border-emerald-300/40 text-white placeholder:text-emerald-200/50 focus:border-emerald-300/70 h-11 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.15)]"
                      autoFocus
                      disabled={verifyingAnswer}
                    />
                    <Button
                      type="submit"
                      disabled={verifyingAnswer}
                      className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-11 px-4 border-0 shadow-[0_0_14px_rgba(16,185,129,0.45)]"
                    >
                      {verifyingAnswer ? "…" : "Answer"}
                    </Button>
                  </form>
                )}
                {/* Who's turn banner */}
                {gameState.playingDesignatedPlayerName && (
                  <div className={`rounded-xl border p-2 sm:p-3 text-center ${
                    gameState.playingTeam === 1
                      ? "bg-rose-500/10 border-rose-500/25"
                      : "bg-blue-500/10 border-blue-500/25"
                  }`}>
                    <p className={`font-bold text-sm ${gameState.playingTeam === 1 ? "text-rose-400" : "text-blue-400"}`}>
                      🎯 {gameState.playingDesignatedPlayerName === playerName
                        ? "Your turn to answer!"
                        : `${gameState.playingDesignatedPlayerName}'s turn to answer`}
                    </p>
                    {roundCountdown !== null && (
                      <p className={`text-3xl sm:text-4xl font-black tabular-nums mt-1 leading-none ${roundCountdown <= 5 ? "text-red-400" : roundCountdown <= 10 ? "text-amber-400" : "text-slate-300"}`}>
                        {roundCountdown}<span className="text-sm font-normal opacity-50 ml-0.5">s</span>
                      </p>
                    )}
                  </div>
                )}
                {/* Phase description — hidden on small screens to save space */}
                <div className={`hidden sm:block rounded-xl border px-4 py-2.5 text-center ${
                  isSolo
                    ? "bg-amber-500/8 border-amber-500/20"
                    : gameState.playingTeam === 1
                    ? "bg-rose-500/8 border-rose-500/20"
                    : "bg-blue-500/8 border-blue-500/20"
                }`}>
                  <p className={`font-bold text-xs uppercase tracking-wider mb-0.5 ${
                    isSolo
                      ? "text-amber-400"
                      : gameState.playingTeam === 1
                      ? "text-rose-400"
                      : "text-blue-400"
                  }`}>
                    {isSolo ? "🎮 Solo Mode" : `🏆 ${gameState.playingTeam === 1 ? gameState.team1Name : gameState.team2Name} is Playing`}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {isSolo
                      ? "Name the survey answers to score points. Get 3 wrong in a round and move to the next."
                      : "Name all the survey answers to score points. 3 wrong answers and the other team gets a steal!"}
                  </p>
                </div>
              </div>
            )}

            {/* Stealing */}
            {gameState.status === "stealing" && (
              <div className="space-y-2">
                <div className="rounded-xl bg-orange-500/10 border border-orange-500/25 p-2 sm:p-4 text-center">
                  <p className="text-orange-400 font-black text-lg sm:text-xl">🎯 STEAL CHANCE!</p>
                  <p className="text-orange-300/70 text-sm mt-0.5">
                    {gameState.playingDesignatedPlayerName === playerName
                      ? "It's your steal attempt!"
                      : <><span className="text-orange-200 font-semibold">{gameState.playingDesignatedPlayerName ?? "teammate"}</span> gets the steal attempt</>}
                  </p>
                  {roundCountdown !== null && (
                    <p className={`text-3xl sm:text-4xl font-black tabular-nums mt-1 leading-none ${roundCountdown <= 5 ? "text-red-400" : roundCountdown <= 10 ? "text-amber-400" : "text-orange-300"}`}>
                      {roundCountdown}<span className="text-sm font-normal opacity-50 ml-0.5">s</span>
                    </p>
                  )}
                </div>
                {currentStealGuess && (
                  <div className="rounded-xl bg-orange-500/15 border border-orange-400/40 p-3 text-center animate-pulse-once">
                    <p className="text-orange-300/70 text-xs uppercase tracking-widest mb-1">Steal guess submitted</p>
                    <p className="text-orange-100 font-bold text-lg">"{currentStealGuess.answer}"</p>
                    <p className="text-orange-400/70 text-xs mt-0.5">by {currentStealGuess.playerName}</p>
                  </div>
                )}
                {isMyTurnToPlay && !currentStealGuess && (
                  <form
                    onSubmit={handleAnswer}
                    className="flex gap-2 rounded-xl border border-orange-400/35 bg-orange-500/10 p-2 shadow-[0_0_24px_rgba(249,115,22,0.2)]"
                  >
                    <Input
                      ref={answerInputRef}
                      placeholder="Your steal answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-black/25 border-orange-400/40 text-white placeholder:text-orange-300/60 focus:border-orange-300/70 h-11 shadow-[inset_0_0_0_1px_rgba(249,115,22,0.15)]"
                      autoFocus
                      disabled={verifyingAnswer}
                    />
                    <Button
                      type="submit"
                      disabled={verifyingAnswer}
                      className="bg-orange-500 hover:bg-orange-400 text-black font-bold h-11 px-4 border-0 shadow-[0_0_14px_rgba(249,115,22,0.45)]"
                    >
                      {verifyingAnswer ? "…" : "Steal!"}
                    </Button>
                  </form>
                )}
              </div>
            )}

            {/* Between rounds */}
            {gameState.status === "between_rounds" && (() => {
              const isGameOver = gameState.currentRound >= gameState.totalRounds;
              return (
                <div className={`rounded-2xl p-3 text-center ${isGameOver ? "bg-white/[0.03] border border-amber-500/25" : "bg-white/[0.03] border border-white/8"}`}>
                  <Trophy className={`mx-auto mb-1 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)] ${isGameOver ? "w-8 h-8 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" : "w-8 h-8 text-amber-400"}`} />
                  {isGameOver ? (() => {
                    if (isSolo) {
                      return (
                        <>
                          <h2 className="text-xl font-black bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-1">Game Over!</h2>
                          <p className="text-slate-400 text-sm mb-2">Final Score: <span className="text-amber-400 font-black text-lg">{gameState.team1Score}</span> pts</p>
                        </>
                      );
                    }
                    const winningTeam = gameState.team1Score > gameState.team2Score ? 1
                      : gameState.team2Score > gameState.team1Score ? 2
                      : null;
                    const iWon = myTeam !== null && winningTeam === myTeam;
                    const isTie = winningTeam === null;
                    return (
                      <>
                        {iWon ? (
                          <h2 className="text-xl font-black bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent mb-2">YOU WIN! 🏆</h2>
                        ) : isTie ? (
                          <h2 className="text-xl font-black bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-2">IT'S A TIE!</h2>
                        ) : (
                          <h2 className="text-xl font-black bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-2">GAME OVER</h2>
                        )}
                      </>
                    );
                  })() : (
                    <>
                      <p className="text-white font-bold text-base mb-1">Round Complete!</p>
                      {autoAdvanceCountdown !== null && (
                        <p className="text-slate-500 text-xs mb-3">
                          Next round starts automatically in{" "}
                          <span className={`font-bold tabular-nums ${autoAdvanceCountdown <= 10 ? "text-amber-400" : "text-slate-400"}`}>
                            {autoAdvanceCountdown}s
                          </span>
                        </p>
                      )}
                      {myTeam !== null && lastRoundResult && (
                        <div
                          className={`rounded-lg border px-3 py-1.5 mb-2 text-xs ${
                            isSolo
                              ? "bg-amber-500/10 border-amber-500/25 text-amber-300"
                              : myTeam === 1
                              ? "bg-rose-500/10 border-rose-500/25 text-rose-300"
                              : "bg-blue-500/10 border-blue-500/25 text-blue-300"
                          }`}
                        >
                          <span className="font-semibold">{isSolo ? "You" : "Your Team"}</span>{" "}
                          got{" "}
                          <span className="font-black">
                            {lastRoundResult.winningTeam === myTeam ? lastRoundResult.points : 0}
                          </span>{" "}
                          point{(lastRoundResult.winningTeam === myTeam ? lastRoundResult.points : 0) === 1 ? "" : "s"} this round.
                        </div>
                      )}
                    </>
                  )}
                  {isGameOver && mvpPlayers.length > 0 && (
                    <div className="rounded-lg border border-amber-400/30 bg-amber-500/10 px-3 py-2 mb-2 sm:rounded-xl sm:px-4 sm:py-3 sm:mb-3">
                      <p className="sm:hidden text-[11px] text-amber-100 font-semibold leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300/80 mr-2">MVP</span>
                        {renderMvpNames("text-amber-200/70")}
                        <span className="text-amber-100"> - {mvpScore} pt{mvpScore === 1 ? "" : "s"}</span>
                      </p>
                      <div className="hidden sm:block">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300/80 mb-1">MVP</p>
                        <p className="text-amber-100 font-black text-lg leading-tight">
                          {renderMvpNames("text-amber-200/70")}
                        </p>
                        <p className="text-amber-300/80 text-xs mt-1 leading-snug">
                          {mvpPlayers.length > 1 ? "Top contributors" : "Top contributor"} with {mvpScore} point{mvpScore === 1 ? "" : "s"} for{" "}
                          {mvpPlayers.length > 1 ? "their teams" : "their team"}.
                        </p>
                      </div>
                    </div>
                  )}
                  {stealAttempt && (
                    <div className={`rounded-lg border px-3 py-1.5 mb-2 text-xs ${
                      stealAttempt.correct
                        ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-300"
                        : "bg-red-500/10 border-red-500/25 text-red-300"
                    }`}>
                      <span className="font-semibold">Steal attempt</span> by {stealAttempt.playerName}:{" "}
                      <span className="italic">"{stealAttempt.answer}"</span>{" "}
                      — {stealAttempt.correct ? "✅ Correct!" : "❌ Wrong!"}
                    </div>
                  )}
                  {isHost ? (
                    isGameOver ? (
                      isSolo ? (
                        <Button
                          onClick={() => { playClickSound(); setSoloReplayOpen(true); }}
                          className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
                        >
                          Play Again
                        </Button>
                      ) : (
                        <Button
                          onClick={restartGame}
                          disabled={!canStartGame}
                          className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Play Again
                        </Button>
                      )
                    ) : (
                      <Button
                        onClick={nextRound}
                        className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
                      >
                        Next Round →
                      </Button>
                    )
                  ) : (
                    <p className="text-slate-500 text-sm">
                      {isGameOver ? "Waiting for host to start a new game…" : ""}
                    </p>
                  )}
                </div>
              );
            })()}

          </div>

        </div>

        {/* Chat panel — hidden in solo mode */}
        {!isSolo && (
        <div className={`${mobileTab === "chat" ? "flex" : "hidden"} md:flex w-full md:w-64 lg:w-72 border-l border-white/5 flex-col bg-black/30 backdrop-blur-sm`}>
          <div className="px-3 py-2.5 border-b border-white/5 flex items-center gap-2 shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Live Chat</span>
          </div>
          <div className="shrink-0 overflow-hidden border-b border-white/5 flex items-center justify-center bg-black/20" style={{ height: 250 }}>
            <iframe
              srcDoc={`<!DOCTYPE html><html><head><style>*{margin:0;padding:0;overflow:hidden}body{background:transparent;display:flex;align-items:center;justify-content:center}</style></head><body><script>atOptions={'key':'7c3d49327fa4bdf90f0f7710de941992','format':'iframe','height':250,'width':300,'params':{}};<\/script><script src="https://www.highperformanceformat.com/7c3d49327fa4bdf90f0f7710de941992/invoke.js"><\/script></body></html>`}
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              style={{ width: 300, height: 250, border: "none", display: "block" }}
              title="Advertisement"
            />
          </div>
          <div className="shrink-0 overflow-hidden border-b border-white/5 flex items-center justify-center bg-black/20" style={{ height: 50 }}>
            <iframe
              srcDoc={`<!DOCTYPE html><html><head><style>*{margin:0;padding:0;overflow:hidden}body{background:transparent;display:flex;align-items:center;justify-content:center}</style></head><body><script>atOptions={'key':'a27b4847f4b5d00d63623929539b2b8a','format':'iframe','height':50,'width':320,'params':{}};<\/script><script src="https://www.highperformanceformat.com/a27b4847f4b5d00d63623929539b2b8a/invoke.js"><\/script></body></html>`}
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              style={{ width: 320, height: 50, border: "none", display: "block" }}
              title="Advertisement"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {chatMessages.length === 0 && (
              <p className="text-slate-600 text-xs text-center mt-6">No messages yet. Say hello!</p>
            )}
            {chatMessages.map((msg, i) => {
              const senderTeam = gameState?.players.find(p => p.name === msg.playerName)?.team;
              const nameColor = senderTeam === 1 ? "text-rose-400" : senderTeam === 2 ? "text-blue-400" : "text-slate-400";
              if (msg.type === "system-correct") {
                return (
                  <div key={i} className="text-xs leading-relaxed italic">
                    <span className={`font-bold ${nameColor}`}>{msg.playerName}</span>
                    <span className="text-emerald-400 ml-1">{msg.message}</span>
                  </div>
                );
              }
              if (msg.type === "system-wrong") {
                return (
                  <div key={i} className="text-xs leading-relaxed italic">
                    <span className={`font-bold ${nameColor}`}>{msg.playerName}</span>
                    <span className="text-red-400 ml-1">{msg.message}</span>
                  </div>
                );
              }
              return (
                <div key={i} className="text-xs leading-relaxed">
                  <span className={`font-bold ${nameColor}`}>
                    {msg.playerName}
                  </span>
                  <span className="text-slate-300 ml-1">{msg.message}</span>
                </div>
              );
            })}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendChat} className="p-2.5 border-t border-white/5 flex gap-2 shrink-0">
            <Input
              placeholder="Message…"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-600 text-xs h-9 focus:border-amber-500/40"
            />
            <Button type="submit" className="bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-400 h-9 w-9 p-0 shrink-0">
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </div>
        )}
      </div>

      {isSolo && (
        <div className="w-full">
          <AdsterraWidget />
        </div>
      )}

      {/* Mobile bottom tab bar — hidden in solo mode */}
      <div className={`${isSolo ? "hidden" : ""} md:hidden flex border-t border-white/5 bg-black/50 backdrop-blur-xl shrink-0 relative z-10`}>
        <button
          onClick={() => { playClickSound(); setMobileTab("game"); }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold transition-colors border-t-2 ${
            mobileTab === "game" ? "text-amber-400 border-amber-400" : "text-slate-500 border-transparent"
          }`}
        >
          <Gamepad2 className="w-4.5 h-4.5 shrink-0" />
          <span>Game</span>
        </button>
        <button
          onClick={() => { playClickSound(); setMobileTab("chat"); setUnreadChats(0); }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold transition-colors border-t-2 ${
            mobileTab === "chat" ? "text-amber-400 border-amber-400" : "text-slate-500 border-transparent"
          }`}
        >
          <MessageCircle className="w-4.5 h-4.5 shrink-0" />
          <span>Chat</span>
          {unreadChats > 0 && (
            <span className="inline-flex min-w-4 h-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white leading-none">
              {unreadChats > 9 ? "9+" : unreadChats}
            </span>
          )}
        </button>
      </div>

      {/* Dialogs */}
      {[
        {
          open: leaveConfirmOpen,
          onOpenChange: setLeaveConfirmOpen,
          title: "Leave Room?",
          desc: "Are you sure you want to leave? Your spot will be freed up for others.",
          confirmLabel: "Leave",
          onConfirm: handleLeave,
        },
        {
          open: deleteConfirmOpen,
          onOpenChange: setDeleteConfirmOpen,
          title: "Delete Room?",
          desc: "This will remove the room for all players and send everyone back to the lobby.",
          confirmLabel: "Delete",
          onConfirm: () => { deleteRoom(); setDeleteConfirmOpen(false); },
        },
      ].map(({ open, onOpenChange, title, desc, confirmLabel, onConfirm }) => (
        <Dialog key={title} open={open} onOpenChange={onOpenChange}>
          <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-red-400 font-bold flex items-center gap-2">
                <LogOut className="w-4 h-4" /> {title}
              </DialogTitle>
              <DialogDescription className="text-slate-400">{desc}</DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 mt-2">
              <Button
                variant="outline"
                className="flex-1 border-white/10 text-slate-300 hover:bg-white/5"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 font-bold"
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* Custom Questions Dialog */}
      <Dialog
        open={customQuestionsOpen}
        onOpenChange={(open) => {
          setCustomQuestionsOpen(open);
          if (!open && customQuestionsLoading) {
            cancelCustomQuestions();
            setCustomQuestionsLoading(false);
          }
        }}
      >
        <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-bold flex items-center gap-2 text-pink-300">
              <Wand2 className="w-4 h-4" /> Custom Questions (Beta)
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Enter a topic and AI will generate questions for your game.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-1">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Topic</label>
              <Input
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="e.g. Pizza, Space, Superheroes..."
                disabled={customQuestionsLoading}
                onKeyDown={(e) => { if (e.key === "Enter") handleGenerateCustomQuestions(); }}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-pink-400/50"
                maxLength={80}
              />
            </div>
            {customQuestionsError && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {customQuestionsError}
              </div>
            )}
            {customQuestionsLoading && (
              <div className="flex items-center gap-2.5 text-slate-300 text-sm bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
                <Loader2 className="w-4 h-4 animate-spin text-pink-400 shrink-0" />
                <span>Generating {gameState?.totalRounds} questions about "<span className="text-pink-300 font-medium">{customTopic}</span>"… <span className="text-slate-500">(may take up to a minute)</span></span>
              </div>
            )}
            <Button
              className="w-full bg-gradient-to-br from-pink-300 to-pink-400 hover:from-pink-200 hover:to-pink-300 text-pink-950 font-bold border-0 disabled:opacity-40"
              onClick={handleGenerateCustomQuestions}
              disabled={customQuestionsLoading || !customTopic.trim()}
            >
              {customQuestionsLoading ? "Generating…" : "Generate & Start"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Solo Play Again Dialog */}
      <Dialog
        open={soloReplayOpen}
        onOpenChange={(open) => {
          setSoloReplayOpen(open);
          if (!open) { setSoloReplayError(null); setSoloReplayLoading(false); }
        }}
      >
        <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-white font-bold">Play Again</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex bg-[#070d1f] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => { playClickSound(); setSoloReplayMode("classic"); setSoloReplayError(null); }}
                className={`flex-1 py-1.5 text-sm font-semibold rounded-md transition-all ${soloReplayMode === "classic" ? "bg-emerald-500/20 text-emerald-400 shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
              >
                Classic
              </button>
              <button
                onClick={() => { playClickSound(); setSoloReplayMode("custom"); setSoloReplayError(null); }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-sm font-semibold rounded-md transition-all ${soloReplayMode === "custom" ? "bg-pink-500/20 text-pink-400 shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
              >
                <Wand2 className="w-4 h-4" /> <span className="text-pink-400">Custom Topic</span>
              </button>
            </div>
            <div>
              <label className="text-slate-300 text-sm font-medium mb-2 block">Number of Rounds</label>
              <select
                value={soloReplayRounds}
                onChange={e => setSoloReplayRounds(parseInt(e.target.value))}
                className="w-full h-10 rounded-md bg-white/5 border border-white/10 text-white text-sm px-3 focus:outline-none focus:border-emerald-500/50"
                disabled={soloReplayLoading}
              >
                <option value={2} className="bg-[#0d1525]">2 rounds</option>
                <option value={4} className="bg-[#0d1525]">4 rounds</option>
                <option value={6} className="bg-[#0d1525]">6 rounds</option>
                <option value={8} className="bg-[#0d1525]">8 rounds</option>
                <option value={10} className="bg-[#0d1525]">10 rounds</option>
              </select>
            </div>
            {soloReplayMode === "custom" && (
              <div className="animate-in fade-in slide-in-from-top-2">
                <label className="text-pink-300/90 text-sm font-medium mb-2 flex items-center gap-1.5">
                  <Wand2 className="w-3.5 h-3.5" />
                  Custom Topic
                </label>
                <Input
                  placeholder="e.g. 90s Action Movies, Fast Food, etc."
                  value={soloReplayTopic}
                  onChange={e => setSoloReplayTopic(e.target.value)}
                  className="w-full bg-white/5 border-pink-500/30 text-white placeholder:text-slate-500 focus:border-pink-500/60 focus:ring-pink-500/20"
                  disabled={soloReplayLoading}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !soloReplayLoading) {
                      e.preventDefault();
                      handleSoloReplay();
                    }
                  }}
                />
              </div>
            )}
            {soloReplayError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-red-400 text-sm animate-in fade-in">
                {soloReplayError}
              </div>
            )}
            <Button
              onClick={handleSoloReplay}
              disabled={soloReplayLoading}
              className="w-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold border-0 shadow-[0_0_16px_rgba(16,185,129,0.25)] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] transition-all disabled:opacity-50"
            >
              {soloReplayLoading
                ? (soloReplayMode === "custom" ? <><Loader2 className="w-4 h-4 animate-spin inline mr-2" />Generating...</> : "Starting...")
                : "Start Game"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

