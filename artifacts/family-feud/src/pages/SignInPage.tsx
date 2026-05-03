import { useMemo, useState } from "react";
import { SignIn } from "@clerk/react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, UserCircle2 } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const NICKNAME_PATTERN = /^[A-Za-z0-9_-]{2,16}$/;

export default function SignInPage() {
  const [, setLocation] = useLocation();
  const [showGuest, setShowGuest] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // "Back to lobby" only makes sense if the visitor already has a way back —
  // either they came from clicking the header sign-in button (cameFromLobby
  // sessionStorage flag) or they already have a guest nickname stored.
  const showBackToLobby = useMemo(() => {
    if (typeof window === "undefined") return false;
    try {
      return (
        !!localStorage.getItem("playerName") ||
        sessionStorage.getItem("cameFromLobby") === "1"
      );
    } catch {
      return false;
    }
  }, []);

  async function handleGuestSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = guestName.trim();
    if (!NICKNAME_PATTERN.test(name)) {
      setError("Nicknames must be 2–16 characters: letters, numbers, _ or -");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/users/check-nickname?name=${encodeURIComponent(name)}`,
      );
      const data = await res.json();
      if (!data.available) {
        setError(data.reason || "That nickname is taken.");
        setSubmitting(false);
        return;
      }
      try {
        localStorage.setItem("playerName", name);
        sessionStorage.removeItem("cameFromLobby");
      } catch { /* ignore */ }
      setLocation("/");
    } catch {
      setError("Couldn't check that nickname. Try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#070d1f] text-white flex flex-col">
      {showBackToLobby && (
        <div className="p-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to lobby
          </Link>
        </div>
      )}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 gap-6">
        <SignIn
          routing="path"
          path={`${basePath}/sign-in`}
          signUpUrl={`${basePath}/sign-up`}
          fallbackRedirectUrl={basePath || "/"}
        />

        {!showBackToLobby && !showGuest && (
          <div className="w-[420px] max-w-full text-center">
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] uppercase tracking-wider text-slate-500">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <button
              onClick={() => setShowGuest(true)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 font-semibold transition-all"
            >
              <UserCircle2 className="w-5 h-5 text-amber-400" />
              Continue as guest
            </button>
            <p className="text-xs text-slate-500 mt-3">
              Guests can play and join rooms, but their nickname isn't reserved
              and progress isn't saved across devices.
            </p>
          </div>
        )}

        {!showBackToLobby && showGuest && (
          <form
            onSubmit={handleGuestSubmit}
            className="w-[420px] max-w-full bg-[#0d1525] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Pick a guest nickname</h3>
              <button
                type="button"
                onClick={() => { setShowGuest(false); setGuestName(""); setError(null); }}
                className="text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
            <p className="text-xs text-slate-500">
              You can change this later. Registered nicknames are off-limits.
            </p>
            <div>
              <Label className="text-slate-300 text-sm font-medium">Nickname</Label>
              <Input
                value={guestName}
                onChange={(e) => { setGuestName(e.target.value); if (error) setError(null); }}
                placeholder="e.g. SurveySays"
                maxLength={16}
                autoFocus
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={submitting || !guestName.trim()}
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 shadow-[0_0_20px_rgba(251,191,36,0.3)] border-0 disabled:opacity-50"
            >
              {submitting ? "Checking…" : "Play as guest"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
