import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useListRooms, useCreateRoom } from "@workspace/api-client-react";
import { Room } from "@workspace/api-client-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Users, Plus, RefreshCw, Tv2, Trophy } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    waiting: "bg-green-600 text-white",
    playing: "bg-yellow-500 text-black",
    finished: "bg-gray-500 text-white",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] ?? "bg-gray-500 text-white"}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
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

export default function Lobby() {
  const [, setLocation] = useLocation();
  const [nickname, setNickname] = useState(() => localStorage.getItem("playerName") ?? "");
  const [nicknameDialogOpen, setNicknameDialogOpen] = useState(() => !localStorage.getItem("playerName"));
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [joinTeam, setJoinTeam] = useState<1 | 2>(1);
  const [joinRoomId, setJoinRoomId] = useState<string | null>(null);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [joinRoomPlayers, setJoinRoomPlayers] = useState<Array<{ id: string; name: string; team: 1 | 2; isHost: boolean }> | null>(null);

  const [form, setForm] = useState({
    name: "",
    hostName: localStorage.getItem("playerName") ?? "",
    team1Name: "Team 1",
    team2Name: "Team 2",
    maxPlayers: 10,
    totalRounds: 5,
  });

  const { data: rooms, isLoading, refetch } = useListRooms({
    query: { refetchInterval: 5000 },
  });

  const createRoom = useCreateRoom();

  useEffect(() => {
    if (nickname) {
      localStorage.setItem("playerName", nickname);
      setForm(f => ({ ...f, hostName: nickname }));
    }
  }, [nickname]);

  useEffect(() => {
    const id = setInterval(() => refetch(), 5000);
    return () => clearInterval(id);
  }, [refetch]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !nickname) return;
    setCreateError(null);

    const taken = await checkNickname(nickname);
    if (taken) {
      setCreateError(`Nickname "${nickname}" is already in use. Change it first.`);
      return;
    }

    createRoom.mutate({ data: { ...form, hostName: nickname, maxPlayers: 10 } }, {
      onSuccess: (room) => {
        localStorage.setItem("playerName", nickname);
        setCreateOpen(false);
        setLocation(`/room/${room.id}?name=${encodeURIComponent(nickname)}&team=1`);
      },
      onError: (err: unknown) => {
        const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error;
        setCreateError(msg ?? "Failed to create room.");
      },
    });
  }

  async function handleJoin(roomId: string) {
    setJoinRoomId(roomId);
    setJoinDialogOpen(true);
    setJoinRoomPlayers(null);
    try {
      const res = await fetch(`/api/rooms/${roomId}/players`);
      if (res.ok) {
        const data = await res.json();
        setJoinRoomPlayers(data);
      }
    } catch {
      // ignore fetch errors, dialog will still allow joining
    }
  }

  async function confirmJoin() {
    if (!joinRoomId || !nickname) return;
    setJoinError(null);

    const taken = await checkNickname(nickname);
    if (taken) {
      setJoinError(`Nickname "${nickname}" is already in use. Change it first.`);
      return;
    }

    localStorage.setItem("playerName", nickname);
    setJoinDialogOpen(false);
    setLocation(`/room/${joinRoomId}?name=${encodeURIComponent(nickname)}&team=${joinTeam}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Header */}
      <div className="bg-blue-950 border-b border-blue-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <Tv2 className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-yellow-400 tracking-wide uppercase">Family Feud</h1>
              <p className="text-blue-300 text-xs hidden sm:block">Online Multiplayer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {nickname && (
              <span className="text-xs sm:text-sm text-blue-300 hidden xs:inline mr-1 sm:mr-2">
                Playing as <span className="font-semibold text-yellow-400">{nickname}</span>
              </span>
            )}
            <Button variant="outline" size="sm" onClick={() => refetch()} className="border-blue-600 text-blue-200 hover:bg-blue-800 px-2 sm:px-3">
              <RefreshCw className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Dialog open={createOpen} onOpenChange={v => { setCreateOpen(v); if (!v) setCreateError(null); }}>
              <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                  <Plus className="w-4 h-4 mr-1" /> Create Room
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-yellow-400 text-xl">Create a Game Room</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreate} className="space-y-4">
                  <div>
                    <Label className="text-blue-200">Room Name</Label>
                    <Input
                      placeholder="e.g. Family Game Night"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
                      required
                    />
                  </div>
                  <div className="text-sm text-blue-300">
                    You will host this game as{" "}
                    <span className="font-semibold text-yellow-400">{nickname}</span>. Max players are fixed at{" "}
                    <span className="font-semibold">10</span> per room.
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-blue-200">Team 1 Name</Label>
                      <Input
                        value={form.team1Name}
                        onChange={e => setForm(f => ({ ...f, team1Name: e.target.value }))}
                        className="bg-blue-900 border-blue-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-blue-200">Team 2 Name</Label>
                      <Input
                        value={form.team2Name}
                        onChange={e => setForm(f => ({ ...f, team2Name: e.target.value }))}
                        className="bg-blue-900 border-blue-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-blue-200">Rounds</Label>
                      <Input
                        type="number"
                        min={1}
                        max={10}
                        value={form.totalRounds}
                        onChange={e => setForm(f => ({ ...f, totalRounds: parseInt(e.target.value) || 5 }))}
                        className="bg-blue-900 border-blue-700 text-white"
                      />
                    </div>
                  </div>
                  {createError && (
                    <p className="text-red-400 text-sm font-semibold">{createError}</p>
                  )}
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold" disabled={createRoom.isPending}>
                    {createRoom.isPending ? "Creating..." : "Create Room"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        <div className="mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-300" />
          <h2 className="text-lg font-bold text-blue-100">Available Rooms</h2>
          {rooms && <span className="text-blue-400 text-sm">({rooms.length} rooms)</span>}
        </div>

        {isLoading ? (
          <div className="text-center text-blue-300 py-16">Loading rooms...</div>
        ) : !Array.isArray(rooms) || !rooms.length ? (
          <div className="text-center py-16 bg-blue-900/40 rounded-2xl border border-blue-800">
            <Tv2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <p className="text-blue-300 text-lg">No rooms available</p>
            <p className="text-blue-400 text-sm mt-1">Be the first to create one!</p>
            <Button onClick={() => setCreateOpen(true)} className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
              <Plus className="w-4 h-4 mr-1" /> Create Room
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room: Room) => (
              <Card key={room.id} className="bg-blue-900/60 border-blue-700 hover:bg-blue-900/80 transition-all hover:border-yellow-500/50 cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg">{room.name}</CardTitle>
                    <StatusBadge status={room.status} />
                  </div>
                  <CardDescription className="text-blue-300">Host: {room.hostName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-blue-300 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {room.playerCount}/{room.maxPlayers} players
                    </div>
                    <div className="text-sm text-blue-300">
                      Round {room.currentRound}/{room.totalRounds}
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="flex gap-2 mb-3">
                    <div className="flex-1 bg-red-900/50 border border-red-700 rounded-lg p-2 text-center">
                      <div className="text-xs text-red-300">{room.team1Name}</div>
                      <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                        <Trophy className="w-3 h-3 text-yellow-400" />{room.team1Score}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-400 text-xs font-bold">VS</div>
                    <div className="flex-1 bg-blue-800/60 border border-blue-600 rounded-lg p-2 text-center">
                      <div className="text-xs text-blue-300">{room.team2Name}</div>
                      <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                        <Trophy className="w-3 h-3 text-yellow-400" />{room.team2Score}
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                    disabled={room.status === "finished" || room.playerCount >= room.maxPlayers}
                    onClick={() => handleJoin(room.id)}
                  >
                    {room.status === "finished" ? "Finished" : room.playerCount >= room.maxPlayers ? "Full" : "Join Game"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Join dialog */}
      <Dialog open={joinDialogOpen} onOpenChange={v => { setJoinDialogOpen(v); if (!v) setJoinError(null); }}>
        <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-yellow-400">Join Game</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-blue-300">
                You are joining as{" "}
                <span className="font-semibold text-yellow-400">{nickname}</span>.
              </p>
            </div>
            <div>
              <Label className="text-blue-200">Choose Team</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setJoinTeam(1)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    joinTeam === 1
                      ? "border-red-500 bg-red-900/50 text-white"
                      : "border-blue-700 bg-blue-900/30 text-blue-300 hover:border-red-700"
                  }`}
                >
                  <div className="font-semibold">Team 1</div>
                  <div className="mt-2 space-y-1 text-xs">
                    {joinRoomPlayers
                      ? joinRoomPlayers.filter(p => p.team === 1).map(p => (
                        <div key={p.id} className="flex items-center gap-1">
                          {p.isHost && <span className="text-yellow-400 font-bold">★</span>}
                          <span className={joinTeam === 1 ? "text-white" : "text-blue-200"}>{p.name}</span>
                        </div>
                      ))
                      : <div className="text-blue-400 italic">Loading…</div>}
                    {joinRoomPlayers && joinRoomPlayers.filter(p => p.team === 1).length === 0 && (
                      <div className="text-blue-400 italic">No players yet</div>
                    )}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setJoinTeam(2)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    joinTeam === 2
                      ? "border-blue-400 bg-blue-700/50 text-white"
                      : "border-blue-700 bg-blue-900/30 text-blue-300 hover:border-blue-500"
                  }`}
                >
                  <div className="font-semibold">Team 2</div>
                  <div className="mt-2 space-y-1 text-xs">
                    {joinRoomPlayers
                      ? joinRoomPlayers.filter(p => p.team === 2).map(p => (
                        <div key={p.id} className="flex items-center gap-1">
                          {p.isHost && <span className="text-yellow-400 font-bold">★</span>}
                          <span className={joinTeam === 2 ? "text-white" : "text-blue-200"}>{p.name}</span>
                        </div>
                      ))
                      : <div className="text-blue-400 italic">Loading…</div>}
                    {joinRoomPlayers && joinRoomPlayers.filter(p => p.team === 2).length === 0 && (
                      <div className="text-blue-400 italic">No players yet</div>
                    )}
                  </div>
                </button>
              </div>
            </div>
            {joinError && (
              <p className="text-red-400 text-sm font-semibold">{joinError}</p>
            )}
            <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold" onClick={confirmJoin} disabled={!nickname.trim()}>
              Join Game
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Nickname dialog shown on first visit */}
      <Dialog open={nicknameDialogOpen} onOpenChange={() => {}}>
        <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-yellow-400">Choose a Nickname</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-blue-300">
              Pick the name you want to use in all games. You can change it later by refreshing the page.
            </p>
            <div>
              <Label className="text-blue-200">Nickname</Label>
              <Input
                autoFocus
                placeholder="Enter your nickname"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
              />
            </div>
            {nicknameError && (
              <p className="text-red-400 text-sm font-semibold">{nicknameError}</p>
            )}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
              disabled={!nickname.trim()}
              onClick={async () => {
                if (!nickname.trim()) return;
                const trimmed = nickname.trim();
                setNicknameError(null);
                const taken = await checkNickname(trimmed);
                if (taken) {
                  setNicknameError(`"${trimmed}" is already taken. Pick a different nickname.`);
                  return;
                }
                setNickname(trimmed);
                localStorage.setItem("playerName", trimmed);
                setNicknameDialogOpen(false);
              }}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
