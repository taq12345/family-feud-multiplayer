import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Send, CheckCircle, MessageSquare } from "lucide-react";
import { playClickSound } from "../lib/sounds";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Feedback() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState(() => localStorage.getItem("playerName") ? "" : "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Feedback & Bug Reports – Friendly Feud";
    const metaDesc = document.querySelector('meta[name="description"]');
    const prev = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute("content", "Send feedback, report bugs, or share suggestions for Friendly Feud — the free online multiplayer quiz game.");
    return () => {
      document.title = "Friendly Feud – Free Online Multiplayer Quiz Game";
      metaDesc?.setAttribute("content", prev);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSuccess(true);
      setMessage("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); setLocation("/"); }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Feedback &amp; Bug Reports</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
            <MessageSquare className="w-7 h-7 text-amber-400" />
          </div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-2">
            Feedback &amp; Bug Reports
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Found a bug or have a suggestion? We'd love to hear from you. Fill out the form below and we'll get back to you.
          </p>
        </div>

        {success ? (
          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-8 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">Thanks for your feedback!</h2>
            <p className="text-slate-400 text-sm mb-6">We've received your message and will look into it.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => { playClickSound(); setSuccess(false); setEmail(""); }}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
              >
                Send another message
              </button>
              <button
                onClick={() => { playClickSound(); setLocation("/"); }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold transition-all text-sm shadow-[0_0_20px_rgba(251,191,36,0.25)]"
              >
                Back to lobby →
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-5">
              <div>
                <Label htmlFor="feedback-email" className="text-slate-300 text-sm font-medium block mb-1.5">
                  Your email address <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="feedback-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                />
                <p className="mt-1 text-xs text-slate-500">We'll only use this to follow up if needed.</p>
              </div>

              <div>
                <Label htmlFor="feedback-message" className="text-slate-300 text-sm font-medium block mb-1.5">
                  Your message <span className="text-red-400">*</span>
                </Label>
                <textarea
                  id="feedback-message"
                  placeholder="Describe the bug or share your idea…"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  minLength={5}
                  rows={6}
                  className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 px-3 py-2.5 text-sm resize-y transition-colors"
                />
                <p className="mt-1 text-xs text-slate-500">
                  {message.length > 0 && `${message.length} character${message.length !== 1 ? "s" : ""}`}
                </p>
              </div>

              {error && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/25 px-4 py-3 text-red-400 text-sm">
                  {error}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading || !email.trim() || !message.trim()}
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.25)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all border-0 h-11"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Sending…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Feedback
                </span>
              )}
            </Button>
          </form>
        )}
      </main>
    </div>
  );
}
