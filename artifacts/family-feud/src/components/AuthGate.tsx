import { useEffect, useState } from "react";
import { Show, useUser, useClerk } from "@clerk/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CheckCircle2, AlertCircle, Loader2, LogOut, User as UserIcon, LogIn } from "lucide-react";
import { useLocation } from "wouter";
import { playClickSound } from "../lib/sounds";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

interface MeResponse {
  id: string;
  nickname: string | null;
  hasNickname: boolean;
  email?: string | null;
  avatarUrl?: string | null;
}

const NICKNAME_PATTERN = /^[A-Za-z0-9_-]{2,16}$/;

/**
 * Header button that becomes:
 *   - "Sign in" when signed-out (navigates to /sign-in)
 *   - User avatar / nickname pill + dropdown with "Sign out" when signed-in
 */
export function AuthHeaderButton({ onLogin }: { onLogin?: () => void }) {
  const [, setLocation] = useLocation();
  const { signOut } = useClerk();
  const { user, isLoaded } = useUser();
  const [me, setMe] = useState<MeResponse | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!user) { setMe(null); return; }
    fetch("/api/users/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setMe(data))
      .catch(() => {});
  }, [user?.id]);

  return (
    <>
      <Show when="signed-out">
        <button
          onClick={() => {
            playClickSound();
            onLogin?.();
            setLocation("/sign-in");
          }}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm shadow-[0_0_16px_rgba(251,191,36,0.3)] hover:shadow-[0_0_22px_rgba(251,191,36,0.5)] transition-all"
          title="Sign in"
          aria-label="Sign in"
        >
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Sign in</span>
        </button>
      </Show>
      <Show when="signed-in">
        <div className="relative">
          <button
            onClick={() => { playClickSound(); setMenuOpen((o) => !o); }}
            className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            title="Account"
            aria-label="Account menu"
          >
            {user?.imageUrl ? (
              <img src={user.imageUrl} alt="" className="w-7 h-7 rounded-full" />
            ) : (
              <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-amber-400" />
              </span>
            )}
            <span className="hidden sm:inline text-xs text-amber-400 font-semibold pr-1 max-w-[100px] truncate">
              {me?.nickname ?? "Setup…"}
            </span>
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 mt-2 z-40 w-56 rounded-xl bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500">Signed in as</p>
                  <p className="text-amber-400 font-bold truncate">{me?.nickname ?? "—"}</p>
                  {user?.primaryEmailAddress?.emailAddress && (
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {user.primaryEmailAddress.emailAddress}
                    </p>
                  )}
                </div>
                <button
                  onClick={async () => {
                    playClickSound();
                    setMenuOpen(false);
                    // Clear cached guest nickname so the user isn't auto-logged
                    // back in as a guest using their registered nickname.
                    try { localStorage.removeItem("playerName"); } catch { /* ignore */ }
                    try {
                      await signOut({ redirectUrl: `${basePath}/sign-in` });
                    } catch (err) {
                      console.error("[signOut] failed", err);
                      // Hard fallback so the UI never gets stuck.
                      window.location.href = `${basePath}/sign-in`;
                    }
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </Show>
      {!isLoaded && null}
    </>
  );
}

/**
 * Forces a freshly-signed-in user to choose a permanent nickname before they can play.
 * Mounted near the root; only renders when signed-in AND no nickname yet.
 */
export function NicknameSetupDialog({
  onSet,
}: {
  onSet?: (nickname: string) => void;
}) {
  const { isSignedIn, isLoaded } = useUser();
  const [me, setMe] = useState<MeResponse | null>(null);
  const [meChecked, setMeChecked] = useState(false);
  const [nick, setNick] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Load /me whenever auth changes
  useEffect(() => {
    if (!isLoaded || !isSignedIn) { setMe(null); setMeChecked(false); return; }
    let cancelled = false;
    fetch("/api/users/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: MeResponse | null) => {
        if (cancelled) return;
        setMe(data);
        setMeChecked(true);
        if (data?.nickname) onSet?.(data.nickname);
      })
      .catch(() => { if (!cancelled) setMeChecked(true); });
    return () => { cancelled = true; };
  }, [isLoaded, isSignedIn]);

  // Live availability check
  useEffect(() => {
    if (!nick) { setAvailable(null); setChecking(false); return; }
    if (!NICKNAME_PATTERN.test(nick)) {
      setAvailable(false); setChecking(false); return;
    }
    setChecking(true);
    const t = setTimeout(() => {
      fetch(`/api/users/check-nickname?name=${encodeURIComponent(nick)}`)
        .then((r) => r.json())
        .then((data) => {
          setAvailable(!!data.available);
          if (!data.available && data.reason) setError(data.reason);
          else setError(null);
        })
        .catch(() => setAvailable(null))
        .finally(() => setChecking(false));
    }, 350);
    return () => clearTimeout(t);
  }, [nick]);

  const open = !!(isLoaded && isSignedIn && meChecked && me && !me.hasNickname);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!NICKNAME_PATTERN.test(nick)) {
      setError("Nicknames must be 2–16 characters: letters, numbers, _ or -");
      return;
    }
    if (available === false) return;
    setSubmitting(true); setError(null);
    try {
      const res = await fetch("/api/users/me/nickname", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ nickname: nick }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not save nickname");
        setSubmitting(false);
        return;
      }
      // Mirror to localStorage so the rest of the lobby uses it
      localStorage.setItem("playerName", data.nickname);
      setMe((prev) => (prev ? { ...prev, nickname: data.nickname, hasNickname: true } : prev));
      onSet?.(data.nickname);
    } catch {
      setError("Network error. Try again.");
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => { /* not closeable */ }}>
      <DialogContent
        className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white max-w-md shadow-2xl [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Choose your permanent nickname
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <p className="text-sm text-slate-400">
            This nickname will be linked to your account and{" "}
            <strong className="text-amber-400">cannot be changed later</strong>.
            Choose carefully — 2-16 characters, letters/numbers/_/-.
          </p>
          <div>
            <Label className="text-slate-300 text-sm font-medium">Nickname</Label>
            <div className="relative mt-1">
              <Input
                placeholder="e.g. SurveySays"
                value={nick}
                onChange={(e) => { setNick(e.target.value); setError(null); }}
                maxLength={16}
                autoFocus
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 pr-9"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                {checking && <Loader2 className="w-4 h-4 animate-spin text-slate-400" />}
                {!checking && nick && available === true && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {!checking && nick && available === false && <AlertCircle className="w-4 h-4 text-red-400" />}
              </span>
            </div>
          </div>
          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          <Button
            type="submit"
            disabled={submitting || checking || available !== true}
            className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold h-11 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all border-0 disabled:opacity-50"
          >
            {submitting ? "Saving…" : "Lock in nickname"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { basePath };
