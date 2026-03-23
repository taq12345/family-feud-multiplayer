import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { playClickSound } from "../lib/sounds";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Users, Plus, RefreshCw, Tv2, Trophy, Zap, Lock, Pencil, X, BookOpen, MessageSquare } from "lucide-react";

interface Room {
  id: string;
  name: string;
  hostName: string;
  status: string;
  playerCount: number;
  maxPlayers: number;
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  currentRound: number;
  totalRounds: number;
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; cls: string }> = {
    waiting: { label: "Open", cls: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    playing: { label: "Live", cls: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  };
  const c = config[status] ?? config.playing;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${c.cls}`}>
      {status === "playing" && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
      {c.label}
    </span>
  );
}

async function checkNickname(name: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/nicknames/${encodeURIComponent(name.trim())}/check`);
    if (!res.ok) return false;
    const { taken } = await res.json();
    return taken as boolean;
  } catch {
    return false;
  }
}

async function fetchRooms(): Promise<Room[]> {
  const res = await fetch("/api/rooms");
  if (!res.ok) throw new Error("Failed to fetch rooms");
  return res.json();
}

async function createRoomApi(body: {
  name: string; hostName: string; team1Name: string;
  team2Name: string; maxPlayers: number; totalRounds: number;
}): Promise<Room> {
  const res = await fetch("/api/rooms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Failed to create room");
  return data;
}

export default function Lobby() {
  const [, setLocation] = useLocation();
  const [nickname, setNickname] = useState(() => localStorage.getItem("playerName") ?? "");
  const [nicknameDialogOpen, setNicknameDialogOpen] = useState(() => !localStorage.getItem("playerName"));
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [joinTeam, setJoinTeam] = useState<1 | 2>(1);
  const [joinRoomId, setJoinRoomId] = useState<string | null>(null);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [joinRoomPlayers, setJoinRoomPlayers] = useState<Array<{ id: string; name: string; team: 1 | 2; isHost: boolean }> | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInGame, setIsInGame] = useState(false);
  const [changeNicknameOpen, setChangeNicknameOpen] = useState(false);
  const [changeNicknameInput, setChangeNicknameInput] = useState("");
  const [changeNicknameError, setChangeNicknameError] = useState<string | null>(null);
  const [changeNicknameLoading, setChangeNicknameLoading] = useState(false);
  const [reconnectSlot, setReconnectSlot] = useState<{ roomId: string; team: 1 | 2 } | null>(null);

  const [kickedMessage, setKickedMessage] = useState<string | null>(null);
  // Holds the room ID from an invite link so we can open the join dialog AFTER the user sets a nickname
  const pendingInviteRoomId = useRef<string | null>(null);

  useEffect(() => {
    const msg = sessionStorage.getItem("kickedMessage");
    if (msg) {
      setKickedMessage(msg);
      sessionStorage.removeItem("kickedMessage");
    }
  }, []);

  // Auto-open join dialog when arriving via an invite link (?join=ROOM_ID)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inviteRoomId = params.get("join");
    if (!inviteRoomId) return;
    window.history.replaceState({}, "", window.location.pathname);
    if (localStorage.getItem("playerName")) {
      // Existing user — open join dialog immediately
      handleJoin(inviteRoomId);
    } else {
      // New user — wait until they set a nickname, then open join dialog
      pendingInviteRoomId.current = inviteRoomId;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form, setForm] = useState({
    name: "",
    team1Name: "Team 1",
    team2Name: "Team 2",
    totalRounds: 5,
    maxPlayers: 10,
  });

  const loadRooms = useCallback(async () => {
    try {
      const data = await fetchRooms();
      setRooms(data);
    } catch { /* ignore */ } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRooms();
    const id = setInterval(loadRooms, 5000);
    return () => clearInterval(id);
  }, [loadRooms]);

  useEffect(() => {
    if (nickname) localStorage.setItem("playerName", nickname);
  }, [nickname]);

  // Check whether the current nickname is active in a game room.
  // On the lobby page the user has no socket open, so "taken" → they're in a game elsewhere.
  useEffect(() => {
    if (!nickname) { setIsInGame(false); return; }
    let cancelled = false;
    checkNickname(nickname).then(taken => { if (!cancelled) setIsInGame(taken); });
    return () => { cancelled = true; };
  }, [nickname]);

  // Poll for an existing player slot so we can show "Reconnect" on the matching room card.
  useEffect(() => {
    if (!nickname) { setReconnectSlot(null); return; }
    let cancelled = false;
    async function checkSlot() {
      try {
        const res = await fetch(`/api/player-slots?nickname=${encodeURIComponent(nickname)}`);
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) setReconnectSlot(data); // null or { roomId, team }
        }
      } catch { /* ignore */ }
    }
    checkSlot();
    const id = setInterval(checkSlot, 5000);
    return () => { cancelled = true; clearInterval(id); };
  }, [nickname]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !nickname) return;
    setCreateError(null);
    setCreateLoading(true);
    try {
      const taken = await checkNickname(nickname);
      if (taken) { setCreateError(`Nickname "${nickname}" is already in use. Change it first.`); return; }
      const room = await createRoomApi({ ...form, hostName: nickname });
      localStorage.setItem("playerName", nickname);
      setCreateOpen(false);
      setLocation(`/room/${room.id}?name=${encodeURIComponent(nickname)}&team=1`);
    } catch (err) {
      setCreateError((err as Error).message ?? "Failed to create room.");
    } finally {
      setCreateLoading(false);
    }
  }

  async function handleJoin(roomId: string) {
    setJoinRoomId(roomId);
    setJoinDialogOpen(true);
    setJoinRoomPlayers(null);
    setJoinTeam(1);
    try {
      const res = await fetch(`/api/rooms/${roomId}/players`);
      if (res.ok) {
        const players: Array<{ id: string; name: string; team: 1 | 2; isHost: boolean }> = await res.json();
        setJoinRoomPlayers(players);
        const team1Count = players.filter(p => p.team === 1).length;
        const team2Count = players.filter(p => p.team === 2).length;
        setJoinTeam(team2Count < team1Count ? 2 : 1);
      }
    } catch { /* ignore */ }
  }

  async function handleChangeNickname() {
    if (!changeNicknameInput.trim()) return;
    const trimmed = changeNicknameInput.trim();
    setChangeNicknameError(null);
    setChangeNicknameLoading(true);
    try {
      const taken = await checkNickname(trimmed);
      if (taken) { setChangeNicknameError(`"${trimmed}" is already in use. Pick another.`); return; }
      setNickname(trimmed);
      localStorage.setItem("playerName", trimmed);
      setIsInGame(false);
      setChangeNicknameOpen(false);
      setChangeNicknameInput("");
    } finally {
      setChangeNicknameLoading(false);
    }
  }

  async function confirmJoin() {
    if (!joinRoomId || !nickname) return;
    setJoinError(null);
    const taken = await checkNickname(nickname);
    if (taken) { setJoinError(`Nickname "${nickname}" is already in use. Change it first.`); return; }
    localStorage.setItem("playerName", nickname);
    setJoinDialogOpen(false);
    setLocation(`/room/${joinRoomId}?name=${encodeURIComponent(nickname)}&team=${joinTeam}`);
  }

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      {/* Decorative background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      {/* Kicked-due-to-inactivity banner */}
      {kickedMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-3 fade-in duration-200 w-[calc(100vw-2rem)] max-w-md">
          <div className="flex items-center gap-3 bg-[#0d1525]/95 backdrop-blur-xl border border-amber-500/30 text-white text-sm font-medium px-4 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <span className="text-amber-400 shrink-0">⏱</span>
            <span className="flex-1">{kickedMessage}</span>
            <button
              onClick={() => { playClickSound(); setKickedMessage(null); }}
              className="shrink-0 text-slate-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              <Tv2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent uppercase">
                Friendly Feud
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block font-medium tracking-wider uppercase">Online Multiplayer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {nickname && (
              <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-300">
                  Playing as <span className="font-semibold text-amber-400">{nickname}</span>
                </span>
              </div>
            )}
            {nickname && (
              <span
                title={isInGame ? "Leave your current game before changing your nickname" : "Change nickname"}
                className="inline-flex"
              >
                <button
                  onClick={() => {
                    playClickSound();
                    setChangeNicknameInput("");
                    setChangeNicknameError(null);
                    setChangeNicknameOpen(true);
                  }}
                  disabled={isInGame}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-slate-400 pointer-events-auto"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </span>
            )}
            <button
              onClick={() => { playClickSound(); setLocation("/rules"); }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="How to Play"
            >
              <BookOpen className="w-4 h-4" />
            </button>
            <button
              onClick={() => { playClickSound(); setLocation("/feedback"); }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="Feedback & Bug Reports"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={() => { playClickSound(); loadRooms(); }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <Dialog open={createOpen} onOpenChange={v => { setCreateOpen(v); if (!v) setCreateError(null); }}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all border-0 px-3 sm:px-4">
                  <Plus className="w-4 h-4 sm:mr-1.5" />
                  <span className="hidden sm:inline">Create Room</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-md shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    Create a Game Room
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreate} className="space-y-4 mt-2">
                  <div>
                    <Label className="text-slate-300 text-sm font-medium">Room Name</Label>
                    <Input
                      placeholder="e.g. Family Game Night"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                      required
                    />
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300/80">
                    Hosting as <span className="font-bold text-amber-400">{nickname}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-slate-300 text-sm font-medium">Number of Rounds</Label>
                      <select
                        value={form.totalRounds}
                        onChange={e => setForm(f => ({ ...f, totalRounds: parseInt(e.target.value) }))}
                        className="mt-1 w-full h-10 rounded-md bg-white/5 border border-white/10 text-white text-sm px-3 focus:outline-none focus:border-amber-500/50"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(n => (
                          <option key={n} value={n} className="bg-[#0d1525]">{n} round{n !== 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label className="text-slate-300 text-sm font-medium">Max Players</Label>
                      <select
                        value={form.maxPlayers}
                        onChange={e => setForm(f => ({ ...f, maxPlayers: parseInt(e.target.value) }))}
                        className="mt-1 w-full h-10 rounded-md bg-white/5 border border-white/10 text-white text-sm px-3 focus:outline-none focus:border-amber-500/50"
                      >
                        {[2,3,4,5,6,7,8,9,10].map(n => (
                          <option key={n} value={n} className="bg-[#0d1525]">{n} players</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {createError && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{createError}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all border-0"
                    disabled={createLoading}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {createLoading ? "Creating…" : "Create Room"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
        <div className="mb-6">
          <a
            href="https://www.patreon.com/cw/talhaqureshi/membership"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF424D]/10 hover:bg-[#FF424D]/20 border border-[#FF424D]/30 hover:border-[#FF424D]/50 text-[#FF424D] font-semibold text-sm transition-all shadow-[0_0_16px_rgba(255,66,77,0.15)] hover:shadow-[0_0_24px_rgba(255,66,77,0.25)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z"/>
            </svg>
            Consider supporting :)
          </a>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-slate-400" />
            <h2 className="text-base font-semibold text-slate-200">Available Rooms</h2>
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-medium">
              {rooms.length}
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
            <p className="text-slate-500 text-sm">Loading rooms…</p>
          </div>
        ) : rooms.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Tv2 className="w-8 h-8 text-slate-600" />
            </div>
            <div className="text-center">
              <p className="text-slate-300 font-semibold">No rooms yet</p>
              <p className="text-slate-500 text-sm mt-1">Be the first to create one!</p>
            </div>
            <Button
              onClick={() => setCreateOpen(true)}
              className="bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] border-0"
            >
              <Plus className="w-4 h-4 mr-2" /> Create Room
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room: Room) => {
              const isFull = room.playerCount >= room.maxPlayers;
              const isReconnectRoom = reconnectSlot?.roomId === room.id;
              const canJoin = !isFull || isReconnectRoom;
              return (
                <div
                  key={room.id}
                  className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isReconnectRoom
                      ? "bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/8"
                      : "bg-white/[0.03] border-white/8 hover:border-amber-500/30 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="relative p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-white text-base leading-tight truncate">{room.name}</h3>
                      <StatusBadge status={room.status} />
                    </div>
                    <p className="text-xs text-slate-500 mb-4">Host: <span className="text-slate-400">{room.hostName}</span></p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="rounded-xl bg-rose-500/10 border border-rose-500/20 p-2.5 text-center">
                        <p className="text-[10px] text-rose-400 font-medium truncate">{room.team1Name}</p>
                        <p className="text-xl font-extrabold text-white mt-0.5">{room.team1Score}</p>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-center flex items-center justify-center">
                        <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">vs</span>
                      </div>
                      <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-2.5 text-center">
                        <p className="text-[10px] text-blue-400 font-medium truncate">{room.team2Name}</p>
                        <p className="text-xl font-extrabold text-white mt-0.5">{room.team2Score}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {room.playerCount}/{room.maxPlayers}
                        {isFull && !isReconnectRoom && <Lock className="w-3 h-3 text-slate-600 ml-1" />}
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Round {room.currentRound}/{room.totalRounds}
                      </div>
                    </div>

                    {isReconnectRoom ? (
                      <Button
                        className="w-full font-bold border-0 transition-all bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-black shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]"
                        onClick={() => {
                          playClickSound();
                          setLocation(`/room/${room.id}?name=${encodeURIComponent(nickname)}&team=${reconnectSlot!.team}`);
                        }}
                      >
                        ↩ Reconnect
                      </Button>
                    ) : (
                      <Button
                        className={`w-full font-bold border-0 transition-all ${
                          canJoin
                            ? "bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.25)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]"
                            : "bg-white/5 text-slate-500 cursor-not-allowed"
                        }`}
                        disabled={!canJoin}
                        onClick={() => handleJoin(room.id)}
                      >
                        {isFull ? "Room Full" : "Join Game →"}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Join dialog */}
      <Dialog open={joinDialogOpen} onOpenChange={v => { setJoinDialogOpen(v); if (!v) setJoinError(null); }}>
        <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white">Join Game</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-1">
            <p className="text-sm text-slate-400">
              Joining as <span className="font-semibold text-amber-400">{nickname}</span>
            </p>
            <div>
              <Label className="text-slate-300 text-sm font-medium mb-2 block">Choose Team</Label>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2].map(t => {
                  const isSelected = joinTeam === t;
                  const teamPlayers = joinRoomPlayers?.filter(p => p.team === t) ?? [];
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => { playClickSound(); setJoinTeam(t as 1 | 2); }}
                      className={`p-3 rounded-xl border-2 transition-all text-left ${
                        isSelected && t === 1 ? "border-rose-500 bg-rose-500/15" :
                        isSelected && t === 2 ? "border-blue-500 bg-blue-500/15" :
                        "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <div className={`text-xs font-bold mb-2 ${t === 1 ? "text-rose-400" : "text-blue-400"}`}>
                        Team {t}
                      </div>
                      <div className="space-y-1 min-h-[28px]">
                        {!joinRoomPlayers ? (
                          <div className="text-[11px] text-slate-500 italic">Loading…</div>
                        ) : teamPlayers.length === 0 ? (
                          <div className="text-[11px] text-slate-500 italic">No players yet</div>
                        ) : teamPlayers.map(p => (
                          <div key={p.id} className="flex items-center gap-1 text-[11px]">
                            {p.isHost && <span className="text-amber-400">★</span>}
                            <span className="text-slate-300">{p.name}</span>
                          </div>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {joinError && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{joinError}</p>}
            <Button
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
              onClick={confirmJoin}
              disabled={!nickname.trim()}
            >
              Join Game →
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Change Nickname dialog */}
      <Dialog open={changeNicknameOpen} onOpenChange={v => { setChangeNicknameOpen(v); if (!v) { setChangeNicknameError(null); setChangeNicknameInput(""); } }}>
        <DialogContent className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Change Nickname
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <p className="text-sm text-slate-400">
              Currently playing as <span className="font-semibold text-amber-400">{nickname}</span>. Enter a new name below.
            </p>
            <div>
              <Label className="text-slate-300 text-sm font-medium">New Nickname</Label>
              <Input
                autoFocus
                placeholder="Enter new nickname"
                value={changeNicknameInput}
                onChange={e => setChangeNicknameInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleChangeNickname(); }}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-11"
              />
            </div>
            {changeNicknameError && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{changeNicknameError}</p>
            )}
            <Button
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
              disabled={!changeNicknameInput.trim() || changeNicknameLoading}
              onClick={handleChangeNickname}
            >
              {changeNicknameLoading ? "Checking…" : "Save Nickname"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Nickname dialog */}
      <Dialog open={nicknameDialogOpen} onOpenChange={() => {}}>
        <DialogContent hideCloseButton className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Choose a Nickname
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <p className="text-sm text-slate-400">Pick the name you'll use in all games.</p>
            <div>
              <Label className="text-slate-300 text-sm font-medium">Nickname</Label>
              <Input
                autoFocus
                placeholder="Enter your nickname"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                onKeyDown={async e => {
                  if (e.key === "Enter") {
                    if (!nickname.trim()) return;
                    const trimmed = nickname.trim();
                    setNicknameError(null);
                    const taken = await checkNickname(trimmed);
                    if (taken) { setNicknameError(`"${trimmed}" is already taken. Pick another.`); return; }
                    setNickname(trimmed);
                    localStorage.setItem("playerName", trimmed);
                    setNicknameDialogOpen(false);
                    if (pendingInviteRoomId.current) {
                      handleJoin(pendingInviteRoomId.current);
                      pendingInviteRoomId.current = null;
                    }
                  }
                }}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-11"
              />
            </div>
            {nicknameError && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{nicknameError}</p>}
            <Button
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 border-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
              disabled={!nickname.trim()}
              onClick={async () => {
                if (!nickname.trim()) return;
                const trimmed = nickname.trim();
                setNicknameError(null);
                const taken = await checkNickname(trimmed);
                if (taken) { setNicknameError(`"${trimmed}" is already taken. Pick another.`); return; }
                setNickname(trimmed);
                localStorage.setItem("playerName", trimmed);
                setNicknameDialogOpen(false);
                if (pendingInviteRoomId.current) {
                  handleJoin(pendingInviteRoomId.current);
                  pendingInviteRoomId.current = null;
                }
              }}
            >
              Let's Play →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
