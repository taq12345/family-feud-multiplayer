import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useParams } from "wouter";
import { useGameSocket, GameStateData, ChatMsg } from "../hooks/useGameSocket";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Send, Tv2, AlertTriangle, Trophy, Zap, Users, Crown, LogOut } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";

function StrikeDisplay({ strikes }: { strikes: number }) {
  return (
    <div className="flex gap-2 justify-center">
      {[0, 1, 2].map(i => (
        <div key={i} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xl transition-all duration-300 ${i < strikes ? "bg-red-600 border-red-500 text-white scale-110" : "bg-blue-900 border-blue-700 text-blue-600"}`}>
          {i < strikes ? "✗" : ""}
        </div>
      ))}
    </div>
  );
}

function AnswerBoard({ question, answers }: { question: string; answers: Array<{ text: string | null; points: number | null; revealed: boolean; index: number }> }) {
  return (
    <div className="bg-blue-950 rounded-2xl p-4 border-2 border-yellow-500/40 shadow-xl">
      <div className="text-center mb-4 text-yellow-300 font-bold text-lg px-2 leading-tight">{question}</div>
      <div className="grid gap-2">
        {answers.map((a, i) => (
          <div key={i} className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-500 ${a.revealed ? "bg-blue-700 border-blue-500 shadow-glow" : "bg-blue-900 border-blue-800"}`}>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-yellow-500 text-black text-sm font-bold flex items-center justify-center">{i + 1}</div>
              <span className="font-semibold text-white">{a.revealed ? a.text : "???????????"}</span>
            </div>
            <div className={`text-lg font-bold ${a.revealed ? "text-yellow-400" : "text-blue-700"}`}>
              {a.revealed ? a.points : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreBoard({ team1Name, team2Name, team1Score, team2Score, playingTeam, roundPoints }: {
  team1Name: string; team2Name: string; team1Score: number; team2Score: number; playingTeam: 1 | 2 | null; roundPoints: number;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className={`rounded-xl p-3 text-center border-2 transition-all ${playingTeam === 1 ? "bg-red-800 border-red-500 shadow-lg" : "bg-red-950 border-red-900"}`}>
        <div className="text-xs text-red-300 font-semibold truncate">{team1Name}</div>
        <div className="text-2xl font-extrabold text-white">{team1Score}</div>
        {playingTeam === 1 && <div className="text-xs text-yellow-400 font-bold">PLAYING</div>}
      </div>
      <div className="rounded-xl p-3 text-center bg-yellow-900/40 border-2 border-yellow-600">
        <div className="text-xs text-yellow-300 font-semibold">POT</div>
        <div className="text-2xl font-extrabold text-yellow-400">{roundPoints}</div>
        <div className="text-xs text-yellow-600">pts</div>
      </div>
      <div className={`rounded-xl p-3 text-center border-2 transition-all ${playingTeam === 2 ? "bg-blue-700 border-blue-400 shadow-lg" : "bg-blue-950 border-blue-900"}`}>
        <div className="text-xs text-blue-300 font-semibold truncate">{team2Name}</div>
        <div className="text-2xl font-extrabold text-white">{team2Score}</div>
        {playingTeam === 2 && <div className="text-xs text-yellow-400 font-bold">PLAYING</div>}
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
  const [buzzedPlayer, setBuzzedPlayer] = useState<string | null>(null);
  const [faceoffCountdown, setFaceoffCountdown] = useState<number | null>(null);
  const [roundCountdown, setRoundCountdown] = useState<number | null>(null);
  const [leaveConfirmOpen, setLeaveConfirmOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ playerName: string; answer: string }>>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const showNotification = useCallback((msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const { startGame, buzzIn, faceoffAnswer, submitAnswer, sendChat, nextRound, passToOpponent, leaveRoom, deleteRoom } = useGameSocket(
    roomId,
    playerName,
    team,
    {
      onGameState: setGameState,
      onChatMessage: (msg) => setChatMessages(prev => [...prev.slice(-99), msg]),
      onChatHistory: (msgs) => setChatMessages(msgs),
      onPlayerJoined: (data) => showNotification(`${data.playerName} joined Team ${data.team}`),
      onPlayerLeft: (data) => showNotification(`${data.playerName} left the room`),
      onBuzzedIn: (data) => {
        setBuzzedPlayer(data.playerName);
        showNotification(`🔔 ${data.playerName} buzzed in!`);
        setTimeout(() => setBuzzedPlayer(null), 8000);
      },
      onAnswerCorrect: (data) => showNotification(`✅ ${data.playerName}: "${gameState?.currentQuestion?.answers[data.answerIndex]?.text}" — ${data.points} pts`),
      onAnswerWrong: (data) => {
        showNotification(`❌ ${data.playerName}: "${data.answer}" — Wrong answer!`);
        setWrongAnswers(prev => [...prev.slice(-9), { playerName: data.playerName, answer: data.answer }]);
      },
      onStrike: (data) => showNotification(`❌ STRIKE ${data.strikes}/3!`),
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
        showNotification(`👑 ${data.hostName} is now the host`);
      },
    }
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Clear wrong-answer log at the start of each new round
  useEffect(() => {
    setWrongAnswers([]);
  }, [gameState?.currentRound, gameState?.status === "faceoff"]);

  // Local 8s countdown for face-off answer window
  useEffect(() => {
    if (gameState?.status === "faceoff" && buzzedPlayer && buzzedPlayer === playerName) {
      setFaceoffCountdown(8);
      const interval = setInterval(() => {
        setFaceoffCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setFaceoffCountdown(null);
    }
  }, [gameState?.status, buzzedPlayer, playerName]);

  const myPlayer = gameState?.players.find(p => p.name === playerName);
  const isHost = myPlayer?.isHost ?? false;
  const isMyTeamPlaying = gameState?.playingTeam === team;
  const isMyTeamStealing = gameState?.status === "stealing" && gameState?.playingTeam !== team;
  const canAnswer = (gameState?.status === "playing" && isMyTeamPlaying) ||
    (gameState?.status === "stealing" && isMyTeamStealing);
  const canBuzz = gameState?.status === "faceoff";
  const canFaceoff = gameState?.status === "faceoff" && buzzedPlayer === playerName;

  const team1Count = gameState?.players.filter(p => p.team === 1).length ?? 0;
  const team2Count = gameState?.players.filter(p => p.team === 2).length ?? 0;
  const canStartGame = team1Count > 0 && team2Count > 0;
  const startGameTooltip = !canStartGame
    ? team1Count === 0 && team2Count === 0
      ? "Both teams need at least 1 player."
      : team1Count === 0
        ? "Team 1 needs at least 1 player."
        : "Team 2 needs at least 1 player."
    : "";

  // Local 15s countdown for normal/steal answers
  useEffect(() => {
    const active =
      gameState &&
      (gameState.status === "playing" || gameState.status === "stealing") &&
      canAnswer;
    if (active) {
      setRoundCountdown(15);
      const interval = setInterval(() => {
        setRoundCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setRoundCountdown(null);
    }
  }, [gameState?.status, canAnswer]);

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
    if (gameState?.status === "faceoff") {
      faceoffAnswer(answerInput);
    } else {
      submitAnswer(answerInput);
    }
    setAnswerInput("");
    setRoundCountdown(null);
  }

  if (!gameState) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Connecting to game...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white flex flex-col">
      {/* Header */}
      <div className="bg-blue-950 border-b border-blue-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tv2 className="w-6 h-6 text-yellow-400" />
          <span className="font-bold text-yellow-400 text-lg">Family Feud</span>
          <Badge className="bg-blue-800 text-blue-200 text-xs">Room: {roomId}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-300" />
          <span className="text-sm text-blue-300">{gameState.players.length} players</span>
          {isHost && <Crown className="w-4 h-4 text-yellow-400" title="You are the host" />}
          <div className="flex items-center gap-2 ml-2">
            {isHost && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDeleteConfirmOpen(true)}
                className="border-red-800 text-red-400 hover:bg-red-900/40 hover:text-red-300 hover:border-red-600"
              >
                <LogOut className="w-3.5 h-3.5 mr-1" /> Delete Room
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLeaveConfirmOpen(true)}
              className="border-red-800 text-red-400 hover:bg-red-900/40 hover:text-red-300 hover:border-red-600"
            >
              <LogOut className="w-3.5 h-3.5 mr-1" /> Leave
            </Button>
          </div>
        </div>
      </div>

      {/* Notification banner */}
      {notification && (
        <div className="bg-yellow-500 text-black text-center py-2 px-4 font-bold text-sm animate-in slide-in-from-top z-50">
          {notification}
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Main game area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Round info */}
          <div className="text-center mb-3 text-blue-300 text-sm">
            Round {gameState.currentRound} of {gameState.totalRounds} •{" "}
            <span className={`font-bold ${gameState.status === "faceoff" ? "text-green-400" : gameState.status === "playing" ? "text-yellow-400" : gameState.status === "stealing" ? "text-orange-400" : gameState.status === "between_rounds" ? "text-purple-400" : "text-blue-300"}`}>
              {gameState.status === "waiting" ? "Waiting to start" :
               gameState.status === "faceoff" ? "FACE-OFF!" :
               gameState.status === "playing" ? `${gameState.playingTeam === 1 ? gameState.team1Name : gameState.team2Name} is playing` :
               gameState.status === "stealing" ? "STEAL CHANCE!" :
               gameState.status === "between_rounds" ? "Round Over" :
               gameState.status === "finished" ? "GAME OVER" : gameState.status}
            </span>
          </div>

          <ScoreBoard
            team1Name={gameState.team1Name}
            team2Name={gameState.team2Name}
            team1Score={gameState.team1Score}
            team2Score={gameState.team2Score}
            playingTeam={gameState.playingTeam}
            roundPoints={gameState.roundPoints}
          />

          {/* Strikes */}
          {(gameState.status === "playing" || gameState.status === "stealing") && (
            <div className="mb-4">
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

          {/* Wrong answers this round – visible to all */}
          {wrongAnswers.length > 0 && (
            <div className="mt-3 bg-red-950/60 border border-red-800 rounded-xl p-3">
              <div className="text-xs text-red-400 font-bold uppercase tracking-wide mb-2">Wrong Answers This Round</div>
              <div className="space-y-1">
                {wrongAnswers.map((w, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-red-300 font-semibold">{w.playerName}:</span>
                    <span className="text-white">{w.answer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Game controls */}
          <div className="mt-4 space-y-3">
            {/* Waiting to start */}
            {gameState.status === "waiting" && (
              <div className="text-center bg-blue-900/50 rounded-xl p-6 border border-blue-700">
                <p className="text-blue-300 mb-4">
                  {isHost ? "You are the host. Start the game when everyone is ready!" : "Waiting for the host to start the game..."}
                </p>
                <div className="mb-4">
                  <h3 className="text-yellow-400 font-bold mb-2">Players</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2].map(t => (
                      <div key={t} className={`rounded-lg p-2 border ${t === 1 ? "bg-red-950 border-red-800" : "bg-blue-950 border-blue-800"}`}>
                        <div className={`text-xs font-bold mb-1 ${t === 1 ? "text-red-400" : "text-blue-400"}`}>
                          {t === 1 ? gameState.team1Name : gameState.team2Name}
                        </div>
                        {gameState.players.filter(p => p.team === t).map(p => (
                          <div key={p.id} className="text-xs text-white flex items-center gap-1">
                            {p.isHost && <Crown className="w-3 h-3 text-yellow-400" />}
                            {p.name}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {isHost && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-block">
                        <Button
                          onClick={startGame}
                          disabled={!canStartGame}
                          className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/40 disabled:text-black/60 text-black font-bold px-8"
                        >
                          <Zap className="w-4 h-4 mr-2" /> Start Game!
                        </Button>
                      </span>
                    </TooltipTrigger>
                    {!canStartGame && (
                      <TooltipContent side="top">
                        {startGameTooltip}
                      </TooltipContent>
                    )}
                  </Tooltip>
                )}
              </div>
            )}

            {/* Face-off phase */}
            {gameState.status === "faceoff" && (
              <div className="space-y-2">
                {buzzedPlayer ? (
                  <div className="text-center text-yellow-400 font-bold mb-2">
                    {buzzedPlayer} buzzed in!
                    {buzzedPlayer === playerName && faceoffCountdown !== null && (
                      <span className="ml-2 text-xs text-yellow-200">
                        ({faceoffCountdown}s to answer)
                      </span>
                    )}
                  </div>
                ) : (
                  <Button onClick={buzzIn} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xl py-6">
                    🔔 BUZZ IN!
                  </Button>
                )}
                {(buzzedPlayer === playerName || canFaceoff) && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Give your answer..."
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
                      autoFocus
                    />
                    <Button type="submit" className="bg-green-600 hover:bg-green-500 font-bold">Answer</Button>
                  </form>
                )}
              </div>
            )}

            {/* Playing phase */}
            {gameState.status === "playing" && (
              <div className="space-y-2">
                {canAnswer && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Your answer..."
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
                      autoFocus
                    />
                    <Button type="submit" className="bg-green-600 hover:bg-green-500 font-bold">Answer</Button>
                  </form>
                )}
                {canAnswer && roundCountdown !== null && (
                  <div className="text-center text-xs text-yellow-300">
                    You have {roundCountdown}s to answer.
                  </div>
                )}
                {!canAnswer && (
                  <div className="text-center text-blue-400 bg-blue-900/40 rounded-lg py-3 text-sm">
                    {isMyTeamPlaying ? "Your turn! Give your answer above" : `Waiting for ${gameState.playingTeam === 1 ? gameState.team1Name : gameState.team2Name} to answer...`}
                  </div>
                )}
                {isHost && (
                  <Button variant="outline" onClick={passToOpponent} className="w-full border-orange-700 text-orange-400 hover:bg-orange-900/20">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Add Strike / Pass to Opponent
                  </Button>
                )}
              </div>
            )}

            {/* Steal phase */}
            {gameState.status === "stealing" && (
              <div className="space-y-2">
                <div className="text-center bg-orange-900/50 border border-orange-700 rounded-xl p-3">
                  <p className="text-orange-400 font-bold text-lg">🎯 STEAL CHANCE!</p>
                  <p className="text-orange-200 text-sm">{gameState.playingTeam !== team ? "Your team can steal the points!" : "Other team gets a steal chance!"}</p>
                </div>
                {isMyTeamStealing && (
                  <form onSubmit={handleAnswer} className="flex gap-2">
                    <Input
                      placeholder="Your steal answer..."
                      value={answerInput}
                      onChange={e => setAnswerInput(e.target.value)}
                      className="bg-orange-900/30 border-orange-700 text-white placeholder:text-orange-400"
                      autoFocus
                    />
                    <Button type="submit" className="bg-orange-600 hover:bg-orange-500 font-bold">Steal!</Button>
                  </form>
                )}
                {isMyTeamStealing && roundCountdown !== null && (
                  <div className="text-center text-xs text-orange-200 mt-1">
                    You have {roundCountdown}s to steal.
                  </div>
                )}
              </div>
            )}

            {/* Between rounds */}
            {gameState.status === "between_rounds" && (
              <div className="text-center bg-blue-900/50 rounded-xl p-6 border border-blue-700">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-400 font-bold text-lg mb-4">Round Complete!</p>
                {isHost && (
                  <Button onClick={nextRound} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">
                    {gameState.currentRound >= gameState.totalRounds ? "See Final Scores" : "Next Round →"}
                  </Button>
                )}
                {!isHost && <p className="text-blue-300 text-sm">Waiting for host to start next round...</p>}
              </div>
            )}

            {/* Game over */}
            {gameState.status === "finished" && (
              <div className="text-center bg-blue-900/50 rounded-xl p-6 border border-yellow-500">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-3" />
                <h2 className="text-2xl font-extrabold text-yellow-400 mb-2">GAME OVER!</h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-red-950 border border-red-800 rounded-xl p-4">
                    <div className="text-red-300 font-bold">{gameState.team1Name}</div>
                    <div className="text-3xl font-extrabold text-white">{gameState.team1Score}</div>
                  </div>
                  <div className="bg-blue-950 border border-blue-800 rounded-xl p-4">
                    <div className="text-blue-300 font-bold">{gameState.team2Name}</div>
                    <div className="text-3xl font-extrabold text-white">{gameState.team2Score}</div>
                  </div>
                </div>
                <p className="text-yellow-300 font-bold text-xl mb-4">
                  🏆 {gameState.team1Score > gameState.team2Score ? gameState.team1Name : gameState.team1Score < gameState.team2Score ? gameState.team2Name : "TIE"} Wins!
                </p>
                <Button onClick={() => setLocation("/")} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                  Back to Lobby
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Chat panel */}
        <div className="w-72 border-l border-blue-800 flex flex-col bg-blue-950/80">
          <div className="px-3 py-2 border-b border-blue-800 flex items-center gap-2">
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 font-semibold text-sm">Live Chat</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {chatMessages.length === 0 && (
              <p className="text-blue-600 text-xs text-center mt-4">No messages yet. Say hello!</p>
            )}
            {chatMessages.map((msg, i) => (
              <div key={i} className="text-sm">
                <span className={`font-bold ${msg.playerName === playerName ? "text-yellow-400" : "text-blue-300"}`}>
                  {msg.playerName}:
                </span>
                <span className="text-white ml-1">{msg.message}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendChat} className="p-3 border-t border-blue-800 flex gap-2">
            <Input
              placeholder="Message..."
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-500 text-sm h-8"
            />
            <Button type="submit" size="sm" className="bg-blue-700 hover:bg-blue-600 h-8 w-8 p-0">
              <Send className="w-3 h-3" />
            </Button>
          </form>
        </div>
      </div>

      {/* Leave confirmation dialog */}
      <Dialog open={leaveConfirmOpen} onOpenChange={setLeaveConfirmOpen}>
        <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-red-400 flex items-center gap-2">
              <LogOut className="w-5 h-5" /> Leave Room?
            </DialogTitle>
            <DialogDescription className="text-blue-300">
              Are you sure you want to leave? Your spot will be freed up for others.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-2">
            <Button
              variant="outline"
              className="flex-1 border-blue-700 text-blue-300 hover:bg-blue-900/40"
              onClick={() => setLeaveConfirmOpen(false)}
            >
              Stay
            </Button>
            <Button
              className="flex-1 bg-red-700 hover:bg-red-600 text-white font-bold"
              onClick={handleLeave}
            >
              <LogOut className="w-4 h-4 mr-1" /> Leave
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete room confirmation dialog (host only) */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-red-400 flex items-center gap-2">
              <LogOut className="w-5 h-5" /> Delete Room?
            </DialogTitle>
            <DialogDescription className="text-blue-300">
              This will remove the room for all players and send everyone back to the lobby.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-2">
            <Button
              variant="outline"
              className="flex-1 border-blue-700 text-blue-300 hover:bg-blue-900/40"
              onClick={() => setDeleteConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-red-700 hover:bg-red-600 text-white font-bold"
              onClick={() => {
                deleteRoom();
                setDeleteConfirmOpen(false);
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
