import { useMemo, useState } from "react";
import { SignIn } from "@clerk/react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Trophy, BarChart3, ShieldCheck, Sparkles } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const NICKNAME_PATTERN = /^[A-Za-z0-9_-]{2,16}$/;

export default function SignInPage() {
  const [, setLocation] = useLocation();
  const [showSignIn, setShowSignIn] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [showBackToLobby] = useState(true);

  // Always show the guest-first view initially.
  // The Clerk widget is only revealed when the user explicitly clicks
  // "Sign in or create a free account".
  const renderSignIn = showSignIn;

  function backToGuestView() {
    try { sessionStorage.removeItem("cameFromLobby"); } catch { /* ignore */ }
    setShowSignIn(false);
    setShowBackToLobby(false);
  }

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
        {!renderSignIn ? (
          <>
            {/* Headline */}
            <div className="text-center max-w-md">
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Jump straight in
              </h1>
              <p className="text-slate-400 mt-2 text-sm">
                Pick a nickname and start playing. No sign-up required.
              </p>
            </div>

            {/* Guest form — primary action */}
            <form
              onSubmit={handleGuestSubmit}
              className="w-[420px] max-w-full bg-gradient-to-br from-[#15203a] to-[#0d1525] border border-amber-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(251,191,36,0.12)] space-y-4"
            >
              <div>
                <Label className="text-slate-200 text-sm font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Choose your nickname
                </Label>
                <Input
                  value={guestName}
                  onChange={(e) => { setGuestName(e.target.value); if (error) setError(null); }}
                  placeholder="e.g. SurveySays"
                  maxLength={16}
                  autoFocus
                  className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-12 text-base"
                />
                <p className="text-[11px] text-slate-500 mt-1.5">
                  2–16 characters: letters, numbers, _ or -
                </p>
              </div>
              {error && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                disabled={submitting || !guestName.trim()}
                className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-12 text-base shadow-[0_0_20px_rgba(251,191,36,0.3)] border-0 disabled:opacity-50"
              >
                {submitting ? "Checking…" : "Play as guest"}
              </Button>
            </form>

            {/* Sign-in upsell */}
            <div className="w-[420px] max-w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-white mb-3">
                Want more? Sign in for free.
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="text-white font-medium">Lock in your nickname</span>
                    {" "}— reserved across the whole site, no impostors.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="text-white font-medium">Climb the leaderboard</span>
                    {" "}— compete with players worldwide.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="text-white font-medium">Track your stats</span>
                    {" "}— wins, streaks, and progress saved across devices.
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowSignIn(true)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(236,72,153,0.35)] border-0 transition-all"
              >
                Sign in or create a free account
              </button>
            </div>
          </>
        ) : (
          <>
            <SignIn
              routing="path"
              path={`${basePath}/sign-in`}
              signUpUrl={`${basePath}/sign-up`}
              fallbackRedirectUrl={basePath || "/"}
              appearance={{ elements: { badge: "hidden", logoBox: "hidden" } }}
            />
            <button
              onClick={backToGuestView}
              className="text-sm text-slate-400 hover:text-white underline-offset-2 hover:underline"
            >
              ← Continue as guest instead
            </button>
          </>
        )}
      </div>
    </div>
  );
}
