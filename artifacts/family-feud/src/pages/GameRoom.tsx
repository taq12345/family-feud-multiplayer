import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useParams } from "wouter";
import { useGameSocket, GameStateData, ChatMsg } from "../hooks/useGameSocket";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Send, Tv2, AlertTriangle, Trophy, Zap, Users, Crown, LogOut, MessageCircle, Gamepad2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";

function StrikeDisplay({ strikes }: { strikes: number }) {
  return (
    <div className="flex gap-3 justify-center">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-2xl transition-all duration-300 ${
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
    <div className="rounded-2xl bg-white/[0.03] border border-amber-500/25 shadow-[0_0_30px_rgba(251,191,36,0.08)] overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500/15 to-amber-600/10 border-b border-amber-500/20 px-4 py-3 text-center">
        <p className="text-amber-300 font-bold text-base sm:text-lg leading-snug">{question}</p>
      </div>
      <div className="p-3 grid gap-1.5">
        {answers.map((a, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all duration-500 ${
              a.revealed
                ? "bg-blue-500/20 border-blue-400/40 shadow-[0_0_12px_rgba(96,165,250,0.2)]"
                : "bg-white/[0.03] border-white/8"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-all ${
                a.revealed
                  ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                  : "bg-white/10 text-slate-500"
              }`}>
                {i + 1}
              </div>
              <span className={`font-semibold text-sm ${a.revealed ? "text-white" : "text-slate-600"}`}>
                {a.revealed ? a.text : "— — — — —"}
              </span>
            </div>
            <div className={`text-base font-bold ${a.revealed ? "text-amber-400" : "text-transparent"}`}>
              {a.revealed ? a.points : "0"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamRoster({ players, team1Name, team2Name, myName }: {
  players: Array<{ name: string; team: 1 | 2; isHost: boolean }>;
  team1Name: string; team2Name: string; myName: string | null;
}) {
  const t1 = players.filter(p => p.team === 1);
  const t2 = players.filter(p => p.team === 2);
  return (
    <div className="grid grid-cols-2 gap-2 mb-3">
      {([1, 2] as const).map(team => {
        const members = team === 1 ? t1 : t2;
        const name = team === 1 ? team1Name : team2Name;
        const color = team === 1
          ? { border: "border-rose-500/20", label: "text-rose-400", dot: "bg-rose-400", you: "bg-rose-500/20 border-rose-500/30 text-rose-300" }
          : { border: "border-blue-500/20", label: "text-blue-400", dot: "bg-blue-400", you: "bg-blue-500/20 border-blue-500/30 text-blue-300" };
        return (
          <div key={team} className={`rounded-xl bg-white/[0.02] border ${color.border} p-2`}>
            <div className={`text-[9px] font-bold uppercase tracking-widest ${color.label} mb-1.5 truncate`}>{name}</div>
            <div className="space-y-1">
              {members.length === 0 && <div className="text-[10px] text-slate-600 italic">No players</div>}
              {members.map(p => (
                <div key={p.name} className={`flex items-center gap-1.5 text-[11px] rounded-md px-1.5 py-0.5 ${p.name === myName ? `border ${color.you}` : "text-slate-300"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${color.dot} ${p.name === myName ? "opacity-100" : "opacity-40"}`} />
                  <span className="truncate font-medium">{p.name}</span>
                  {p.isHost && <span className="ml-auto text-amber-400 text-[9px]">👑</span>}
                </div>
              ))}
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
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className={`rounded-2xl p-3 text-center border transition-all duration-300 ${
        playingTeam === 1
          ? "bg-rose-500/20 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
          : "bg-white/[0.03] border-white/8"
      }`}>
        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide truncate mb-1">{team1Name}</div>
        <div className="text-3xl font-black text-white">{team1Score}</div>
        {playingTeam === 1 && (
          <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30">
            <span className="w-1 h-1 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-wider">Playing</span>
          </div>
        )}
      </div>

      <div className="rounded-2xl p-3 text-center bg-amber-500/10 border border-amber-500/25 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
        <div className="text-[10px] text-amber-500/70 font-semibold uppercase tracking-wide mb-1">Pot</div>
        <div className="text-3xl font-black text-amber-400">{roundPoints}</div>
        <div className="text-[10px] text-amber-600 mt-1">pts</div>
      </div>

      <div className={`rounded-2xl p-3 text-center border transition-all duration-300 ${
        playingTeam === 2
          ? "bg-blue-500/20 border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          : "bg-white/[0.03] border-white/8"
      }`}>
        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide truncate mb-1">{team2Name}</div>
        <div className="text-3xl font-black text-white">{team2Score}</div>
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

  const [gameState, setGameState] = useState<GameStateData | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  const [notification, setNotification] = useState<string | null>(null);
  const [faceoffCountdown, setFaceoffCountdown] = useState<number | null>(null);
  const [roundCountdown, setRoundCountdown] = useState<number | null>(null);
  const [leaveConfirmOpen, setLeaveConfirmOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<"game" | "chat">("game");
  const [unreadChats, setUnreadChats] = useState(0);
  const [verifyingAnswer, setVerifyingAnswer] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const pendingWrongRef = useRef<{ answer: string; playerName: string } | null>(null);

  const showNotification = useCallback((msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, passToOpponent, leaveRoom, deleteRoom } = useGameSocket(
    roomId,
    playerName,
    team,
    {
      onGameState: setGameState,
      onChatMessage: (msg) => {
        setChatMessages(prev => [...prev.slice(-99), msg]);
        setUnreadChats(prev => mobileTab === "game" ? prev + 1 : 0);
      },
      onChatHistory: (msgs) => setChatMessages(msgs),
      onPlayerJoined: (data) => showNotification(`${data.playerName} joined Team ${data.team}`),
      onPlayerLeft: (data) => showNotification(`${data.playerName} left the room`),
      onAnswerCorrect: (data) => {
        setVerifyingAnswer(false);
        showNotification(`✅ ${data.playerName}: "${data.answerText}" — ${data.points} pts`);
      },
      onAnswerWrong: (data) => {
        setVerifyingAnswer(false);
        pendingWrongRef.current = { answer: data.answer, playerName: data.playerName };
        // If no strike event arrives within 150ms (faceoff / failed steal), show simple toast
        setTimeout(() => {
          if (pendingWrongRef.current) {
            showNotification(`❌ ${pendingWrongRef.current.playerName}: "${pendingWrongRef.current.answer}" — Wrong!`);
            pendingWrongRef.current = null;
          }
        }, 150);
      },
      onStrike: (data) => {
        if (pendingWrongRef.current) {
          showNotification(`❌ ${pendingWrongRef.current.playerName}: "${pendingWrongRef.current.answer}" — Strike ${data.strikes}/3!`);
          pendingWrongRef.current = null;
        } else {
          showNotification(`⚡ Strike ${data.strikes}/3!`);
        }
      },
      onStealChance: (data) => showNotification(`🎯 Team ${data.team} gets a steal chance!`),
      onRoundOver: (data) => showNotification(`🏆 Team ${data.winningTeam} wins the round! +${data.points} pts`),
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
      onFaceoffNoWinner: () => {
        showNotification("⏱ No winner in the face-off — moving to next round!");
      },
      onKickedInactive: (data) => {
        sessionStorage.setItem("kickedMessage", `You were removed due to being idle for ${data.idleMinutes} minute${data.idleMinutes === 1 ? "" : "s"}.`);
        setLocation("/");
      },
    }
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // 15s faceoff countdown — restarts whenever the designated player changes
  useEffect(() => {
    if (gameState?.status === "faceoff" && gameState?.faceoffDesignatedPlayerName) {
      setFaceoffCountdown(15);
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
  }, [gameState?.status, gameState?.faceoffDesignatedPlayerName]);

  const myPlayer = gameState?.players.find(p => p.name === playerName);
  const isHost = myPlayer?.isHost ?? false;
  const isMyTeamPlaying = gameState?.playingTeam === team;
  const isMyTeamStealing = gameState?.status === "stealing" && gameState?.playingTeam !== team;
  const canAnswer = (gameState?.status === "playing" && isMyTeamPlaying) ||
    (gameState?.status === "stealing" && isMyTeamStealing);
  const isMyTurnToFaceoff = gameState?.status === "faceoff" &&
    gameState?.faceoffDesignatedPlayerName === playerName;

  const team1Count = gameState?.players.filter(p => p.team === 1).length ?? 0;
  const team2Count = gameState?.players.filter(p => p.team === 2).length ?? 0;
  const canStartGame = team1Count > 0 && team2Count > 0;
  const startGameTooltip = !canStartGame
    ? team1Count === 0 && team2Count === 0 ? "Both teams need at least 1 player."
      : team1Count === 0 ? "Team 1 needs at least 1 player."
      : "Team 2 needs at least 1 player."
    : "";

  // Local 15s countdown for normal/steal answers
  useEffect(() => {
    const active = gameState && (gameState.status === "playing" || gameState.status === "stealing") && canAnswer;
    if (active) {
      setRoundCountdown(15);
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
  }, [gameState?.status, gameState?.strikes, gameState?.roundPoints, canAnswer]);

  function handleLeave() {
    leaveRoom();
    setLocation("/");
  }

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
    if (isMyTurnToFaceoff) {
      setFaceoffCountdown(null);
      faceoffAnswer(answerInput);
    } else {
      submitAnswer(answerInput);
    }
    setAnswerInput("");
    setRoundCountdown(null);
  }

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

  return (
    <div className="h-svh overflow-hidden bg-[#070d1f] text-white flex flex-col">
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
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_12px_rgba(251,191,36,0.4)] shrink-0">
            <Tv2 className="w-4 h-4 text-black" />
          </div>
          <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent hidden xs:inline uppercase">
            Family Feud
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono">
            {roomId}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="hidden xs:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 mr-1">
            <Users className="w-3 h-3 text-slate-400" />
            <span className="text-xs text-slate-400">{gameState.players.length}</span>
            {isHost && <Crown className="w-3 h-3 text-amber-400 ml-0.5" />}
          </div>
          {isHost && (
            <button
              onClick={() => setDeleteConfirmOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-xs font-medium"
            >
              <LogOut className="w-3.5 h-3.5" />
              Delete Room
            </button>
          )}
          <button
            onClick={() => setLeaveConfirmOpen(true)}
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

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Main game area */}
        <div className={`flex-1 overflow-y-auto p-3 md:p-4 space-y-3 ${mobileTab === "chat" ? "hidden md:block" : "block"}`}>

          {/* Round info bar */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="text-xs text-slate-500 font-medium">
              Round {gameState.currentRound}/{gameState.totalRounds}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className={`text-xs font-bold uppercase tracking-wide ${statusColor}`}>{statusLabel}</span>
          </div>

          <ScoreBoard
            team1Name={gameState.team1Name}
            team2Name={gameState.team2Name}
            team1Score={gameState.team1Score}
            team2Score={gameState.team2Score}
            playingTeam={gameState.playingTeam}
            roundPoints={gameState.roundPoints}
          />

          {gameState.status !== "waiting" && (
            <TeamRoster
              players={gameState.players}
              team1Name={gameState.team1Name}
              team2Name={gameState.team2Name}
              myName={playerName}
            />
          )}

          {/* Strikes */}
          {(gameState.status === "playing" || gameState.status === "stealing") && (
            <div className="py-1">
              <StrikeDisplay strikes={gameState.strikes} />
            </div>
          )}

          {/* Answer board */}
          {gameState.currentQuestion && (
            <AnswerBoard
              question={gameState.currentQuestion.question}
              answers={gameState.currentQuestion.answers}
            />
          )}

          {/* Game controls */}
          <div className="space-y-2">

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
                          {p.name}
                        </div>
                      ))}
                      {gameState.players.filter(p => p.team === t).length === 0 && (
                        <div className="text-xs text-slate-600 italic">No players yet</div>
                      )}
                    </div>
                  ))}
                </div>
                {isHost && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex justify-center">
                        <Button
                          onClick={startGame}
                          disabled={!canStartGame}
                          className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 disabled:opacity-40 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
                        >
                          <Zap className="w-4 h-4 mr-2" /> Start Game!
                        </Button>
                      </span>
                    </TooltipTrigger>
                    {!canStartGame && <TooltipContent side="top">{startGameTooltip}</TooltipContent>}
                  </Tooltip>
                )}
              </div>
            )}

            {/* Face-off */}
            {gameState.status === "faceoff" && (
              <div className="space-y-3">
                {/* Who is guessing banner */}
                {gameState.faceoffDesignatedPlayerName ? (
                  <div className={`rounded-xl border p-3 text-center ${
                    gameState.faceoffTurn === 1
                      ? "bg-rose-500/10 border-rose-500/25"
                      : "bg-blue-500/10 border-blue-500/25"
                  }`}>
                    <p className={`font-bold text-sm ${gameState.faceoffTurn === 1 ? "text-rose-400" : "text-blue-400"}`}>
                      🎯 {gameState.faceoffDesignatedPlayerName === playerName
                        ? "Your turn to guess!"
                        : `${gameState.faceoffDesignatedPlayerName}'s turn to guess`}
                      {faceoffCountdown !== null && (
                        <span className="ml-2 text-xs opacity-70">({faceoffCountdown}s)</span>
                      )}
                    </p>
                  </div>
                ) : null}

                {/* Input: only for the designated player */}
                {isMyTurnToFaceoff && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Give your answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 h-11"
                      autoFocus
                      disabled={verifyingAnswer}
                    />
                    <Button type="submit" disabled={verifyingAnswer} className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-11 px-4 border-0">
                      {verifyingAnswer ? "…" : "Answer"}
                    </Button>
                  </form>
                )}

                {/* Waiting message for others */}
                {!isMyTurnToFaceoff && gameState.faceoffDesignatedPlayerName && (
                  <p className="text-center text-slate-500 text-xs">
                    {gameState.faceoffTurn === team
                      ? `Waiting for ${gameState.faceoffDesignatedPlayerName} to answer for your team…`
                      : `Waiting for the other team to answer…`}
                  </p>
                )}
              </div>
            )}

            {/* Playing */}
            {gameState.status === "playing" && (
              <div className="space-y-2">
                {canAnswer && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Your answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 h-11"
                      autoFocus
                    />
                    <Button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-11 px-4 border-0">
                      Answer
                    </Button>
                  </form>
                )}
                {canAnswer && roundCountdown !== null && (
                  <p className="text-center text-xs text-amber-400/70">{roundCountdown}s remaining</p>
                )}
                {!canAnswer && (
                  <div className="rounded-xl bg-white/[0.03] border border-white/8 py-3 px-4 text-center text-sm text-slate-500">
                    {isMyTeamPlaying
                      ? "Your team is answering…"
                      : `Waiting for ${gameState.playingTeam === 1 ? gameState.team1Name : gameState.team2Name}…`}
                  </div>
                )}
                {isHost && (
                  <button
                    onClick={passToOpponent}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 text-sm font-semibold hover:bg-orange-500/15 transition-all"
                  >
                    <AlertTriangle className="w-4 h-4" /> Add Strike / Pass to Opponent
                  </button>
                )}
              </div>
            )}

            {/* Stealing */}
            {gameState.status === "stealing" && (
              <div className="space-y-2">
                <div className="rounded-xl bg-orange-500/10 border border-orange-500/25 p-4 text-center">
                  <p className="text-orange-400 font-black text-xl">🎯 STEAL CHANCE!</p>
                  <p className="text-orange-300/70 text-sm mt-1">
                    {gameState.playingTeam !== team ? "Your team can steal the points!" : "Other team gets a steal chance!"}
                  </p>
                </div>
                {isMyTeamStealing && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Your steal answer…"
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="flex-1 bg-orange-500/10 border-orange-500/25 text-white placeholder:text-orange-400/50 focus:border-orange-500/50 h-11"
                      autoFocus
                    />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-400 text-black font-bold h-11 px-4 border-0">
                      Steal!
                    </Button>
                  </form>
                )}
                {isMyTeamStealing && roundCountdown !== null && (
                  <p className="text-center text-xs text-orange-400/70">{roundCountdown}s remaining</p>
                )}
              </div>
            )}

            {/* Between rounds */}
            {gameState.status === "between_rounds" && (
              <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-6 text-center">
                <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-2 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
                <p className="text-white font-bold text-lg mb-4">Round Complete!</p>
                {isHost ? (
                  <Button
                    onClick={nextRound}
                    className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
                  >
                    {gameState.currentRound >= gameState.totalRounds ? "See Final Scores →" : "Next Round →"}
                  </Button>
                ) : (
                  <p className="text-slate-500 text-sm">Waiting for host to continue…</p>
                )}
              </div>
            )}

            {/* Game over */}
            {gameState.status === "finished" && (
              <div className="rounded-2xl bg-white/[0.03] border border-amber-500/25 p-6 text-center">
                <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
                <h2 className="text-2xl font-black bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-4">GAME OVER!</h2>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="rounded-xl bg-rose-500/10 border border-rose-500/20 p-4">
                    <div className="text-xs text-rose-400 font-semibold mb-1">{gameState.team1Name}</div>
                    <div className="text-4xl font-black text-white">{gameState.team1Score}</div>
                  </div>
                  <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
                    <div className="text-xs text-blue-400 font-semibold mb-1">{gameState.team2Name}</div>
                    <div className="text-4xl font-black text-white">{gameState.team2Score}</div>
                  </div>
                </div>
                <p className="text-amber-400 font-bold text-lg mb-4">
                  🏆 {gameState.team1Score > gameState.team2Score ? gameState.team1Name
                    : gameState.team1Score < gameState.team2Score ? gameState.team2Name
                    : "It's a tie"} {gameState.team1Score !== gameState.team2Score ? "wins!" : "!"}
                </p>
                <Button
                  onClick={() => setLocation("/")}
                  className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold px-8 h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  Back to Lobby
                </Button>
              </div>
            )}

          </div>
        </div>

        {/* Chat panel */}
        <div className={`${mobileTab === "chat" ? "flex" : "hidden"} md:flex w-full md:w-64 lg:w-72 border-l border-white/5 flex-col bg-black/30 backdrop-blur-sm`}>
          <div className="px-3 py-2.5 border-b border-white/5 flex items-center gap-2 shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Live Chat</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {chatMessages.length === 0 && (
              <p className="text-slate-600 text-xs text-center mt-6">No messages yet. Say hello!</p>
            )}
            {chatMessages.map((msg, i) => {
              const senderTeam = gameState?.players.find(p => p.name === msg.playerName)?.team;
              const nameColor = senderTeam === 1 ? "text-rose-400" : senderTeam === 2 ? "text-blue-400" : "text-slate-400";
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
      </div>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden flex border-t border-white/5 bg-black/50 backdrop-blur-xl shrink-0 relative z-10">
        <button
          onClick={() => setMobileTab("game")}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold transition-colors border-t-2 ${
            mobileTab === "game" ? "text-amber-400 border-amber-400" : "text-slate-500 border-transparent"
          }`}
        >
          <Gamepad2 className="w-5 h-5" />
          Game
        </button>
        <button
          onClick={() => { setMobileTab("chat"); setUnreadChats(0); }}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold transition-colors relative border-t-2 ${
            mobileTab === "chat" ? "text-amber-400 border-amber-400" : "text-slate-500 border-transparent"
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          Chat
          {unreadChats > 0 && (
            <span className="absolute top-2 right-[calc(50%-14px)] bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
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
    </div>
  );
}
