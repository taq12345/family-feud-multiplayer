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

export default function Lobby() {
  const [, setLocation] = useLocation();
  const [playerName, setPlayerName] = useState(() => localStorage.getItem("playerName") ?? "");
  const [createOpen, setCreateOpen] = useState(false);
  const [joinTeam, setJoinTeam] = useState<1 | 2>(1);
  const [joinRoomId, setJoinRoomId] = useState<string | null>(null);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [joinPlayerName, setJoinPlayerName] = useState(() => localStorage.getItem("playerName") ?? "");

  const [form, setForm] = useState({
    name: "",
    hostName: localStorage.getItem("playerName") ?? "",
    team1Name: "Team 1",
    team2Name: "Team 2",
    maxPlayers: 12,
    totalRounds: 5,
  });

  const { data: rooms, isLoading, refetch } = useListRooms({
    query: { refetchInterval: 5000 },
  });

  const createRoom = useCreateRoom();

  useEffect(() => {
    const id = setInterval(() => refetch(), 5000);
    return () => clearInterval(id);
  }, [refetch]);

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.hostName) return;

    createRoom.mutate({ data: form }, {
      onSuccess: (room) => {
        localStorage.setItem("playerName", form.hostName);
        setCreateOpen(false);
        setLocation(`/room/${room.id}?name=${encodeURIComponent(form.hostName)}&team=1`);
      },
    });
  }

  function handleJoin(roomId: string) {
    setJoinRoomId(roomId);
    setJoinDialogOpen(true);
  }

  function confirmJoin() {
    if (!joinRoomId || !joinPlayerName) return;
    localStorage.setItem("playerName", joinPlayerName);
    setJoinDialogOpen(false);
    setLocation(`/room/${joinRoomId}?name=${encodeURIComponent(joinPlayerName)}&team=${joinTeam}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Header */}
      <div className="bg-blue-950 border-b border-blue-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Tv2 className="w-8 h-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide uppercase">Family Feud</h1>
              <p className="text-blue-300 text-xs">Online Multiplayer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => refetch()} className="border-blue-600 text-blue-200 hover:bg-blue-800">
              <RefreshCw className="w-4 h-4 mr-1" /> Refresh
            </Button>
            <Dialog open={createOpen} onOpenChange={setCreateOpen}>
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
                  <div>
                    <Label className="text-blue-200">Your Name (Host)</Label>
                    <Input
                      placeholder="Your name"
                      value={form.hostName}
                      onChange={e => setForm(f => ({ ...f, hostName: e.target.value }))}
                      className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
                      required
                    />
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
                      <Label className="text-blue-200">Max Players</Label>
                      <Input
                        type="number"
                        min={2}
                        max={20}
                        value={form.maxPlayers}
                        onChange={e => setForm(f => ({ ...f, maxPlayers: parseInt(e.target.value) || 12 }))}
                        className="bg-blue-900 border-blue-700 text-white"
                      />
                    </div>
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
      <div className="max-w-6xl mx-auto px-4 py-8">
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
      <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
        <DialogContent className="bg-blue-950 border-blue-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-yellow-400">Join Game</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-blue-200">Your Name</Label>
              <Input
                placeholder="Enter your name"
                value={joinPlayerName}
                onChange={e => setJoinPlayerName(e.target.value)}
                className="bg-blue-900 border-blue-700 text-white placeholder:text-blue-400"
              />
            </div>
            <div>
              <Label className="text-blue-200">Choose Team</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setJoinTeam(1)}
                  className={`p-3 rounded-lg border-2 transition-all font-semibold ${joinTeam === 1 ? "border-red-500 bg-red-900/50 text-white" : "border-blue-700 bg-blue-900/30 text-blue-300 hover:border-red-700"}`}
                >
                  Team 1
                </button>
                <button
                  type="button"
                  onClick={() => setJoinTeam(2)}
                  className={`p-3 rounded-lg border-2 transition-all font-semibold ${joinTeam === 2 ? "border-blue-400 bg-blue-700/50 text-white" : "border-blue-700 bg-blue-900/30 text-blue-300 hover:border-blue-500"}`}
                >
                  Team 2
                </button>
              </div>
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold" onClick={confirmJoin} disabled={!joinPlayerName.trim()}>
              Join Game
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
