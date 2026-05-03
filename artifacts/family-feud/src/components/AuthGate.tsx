import { useEffect, useRef, useState } from "react";
import { Show, useUser, useClerk } from "@clerk/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CheckCircle2, AlertCircle, Loader2, LogOut, User as UserIcon, LogIn, Camera } from "lucide-react";
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
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) { setMe(null); return; }
    let cancelled = false;
    const refetch = () => {
      fetch("/api/users/me", { credentials: "include" })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => { if (!cancelled) setMe(data); })
        .catch(() => {});
    };
    refetch();
    // Refetch when the nickname is set elsewhere (e.g. NicknameSetupDialog)
    // so the header pill updates immediately without a page reload.
    window.addEventListener("nickname:set", refetch);
    window.addEventListener("avatar:set", refetch);
    return () => {
      cancelled = true;
      window.removeEventListener("nickname:set", refetch);
      window.removeEventListener("avatar:set", refetch);
    };
  }, [user?.id]);

  // Auto-dismiss avatar errors after 5s so the dropdown stays clean.
  useEffect(() => {
    if (!avatarError) return;
    const t = setTimeout(() => setAvatarError(null), 5000);
    return () => clearTimeout(t);
  }, [avatarError]);

  async function handleAvatarFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    // Reset the input so the same file can be re-selected later if needed.
    e.target.value = "";
    if (!file || !user) return;

    if (!file.type.startsWith("image/")) {
      setAvatarError("Please choose an image file (JPG, PNG, GIF, or WebP).");
      return;
    }
    // Clerk caps profile images at 10 MB.
    const MAX_BYTES = 10 * 1024 * 1024;
    if (file.size > MAX_BYTES) {
      setAvatarError("Image is too large. Max size is 10 MB.");
      return;
    }

    setAvatarError(null);
    setAvatarUploading(true);
    try {
      // Clerk hosts the image and updates user.imageUrl.
      await user.setProfileImage({ file });
      // Mirror the new URL into our DB so the leaderboard / game rooms see it.
      await fetch("/api/users/me/sync-avatar", { method: "POST", credentials: "include" });
      // Refresh local Clerk + /me state so the header pill updates instantly.
      await user.reload();
      try {
        window.dispatchEvent(new CustomEvent("avatar:set"));
      } catch { /* ignore */ }
    } catch (err) {
      console.error("[avatar] upload failed", err);
      setAvatarError("Couldn't update profile picture. Try again.");
    } finally {
      setAvatarUploading(false);
    }
  }

  function triggerAvatarPicker() {
    playClickSound();
    setAvatarError(null);
    fileInputRef.current?.click();
  }

  async function handleSignOut() {
    playClickSound();
    try {
      localStorage.removeItem("playerName");
      // Treat sign-out as a fresh-visitor reset so the sign-in screen
      // returns to its guest-first view.
      sessionStorage.removeItem("cameFromLobby");
    } catch { /* ignore */ }
    try {
      await signOut({ redirectUrl: `${basePath}/sign-in` });
    } catch (err) {
      console.error("[signOut] failed", err);
      window.location.href = `${basePath}/sign-in`;
    }
  }

  return (
    <>
      <Show when="signed-out">
        <button
          onClick={() => {
            playClickSound();
            try { sessionStorage.setItem("cameFromLobby", "1"); } catch { /* ignore */ }
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              onClick={() => playClickSound()}
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
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="bg-[#0d1525]/95 backdrop-blur-xl border border-white/10 text-white min-w-[220px] z-[60]"
          >
            <DropdownMenuLabel className="px-3 py-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-normal">
                Signed in as
              </p>
              <p className="text-amber-400 font-bold truncate text-sm mt-0.5">
                {me?.nickname ?? "—"}
              </p>
              {user?.primaryEmailAddress?.emailAddress && (
                <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                  {user.primaryEmailAddress.emailAddress}
                </p>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem
              disabled={avatarUploading}
              onSelect={(e) => { e.preventDefault(); triggerAvatarPicker(); }}
              className="text-slate-200 focus:text-white focus:bg-white/10 cursor-pointer"
            >
              {avatarUploading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Camera className="w-4 h-4 mr-2" />
              )}
              {avatarUploading ? "Uploading…" : "Change profile picture"}
            </DropdownMenuItem>
            {avatarError && (
              <p className="px-3 pb-2 -mt-1 text-[11px] text-red-400 leading-tight">
                {avatarError}
              </p>
            )}
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem
              onSelect={(e) => { e.preventDefault(); void handleSignOut(); }}
              className="text-slate-200 focus:text-white focus:bg-white/10 cursor-pointer"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Hidden file picker — opened by the "Change profile picture" item.
            `accept="image/*"` lets phones surface camera + gallery options. */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarFileChange}
        />
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
      // Notify other components (e.g. AuthHeaderButton) to refresh.
      try {
        window.dispatchEvent(
          new CustomEvent("nickname:set", { detail: { nickname: data.nickname } }),
        );
      } catch { /* ignore */ }
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
