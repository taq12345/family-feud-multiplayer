import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Heart, Github, Globe, Users, Sparkles, Zap } from "lucide-react";
import { playClickSound } from "../lib/sounds";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO 
        title="About Friendly Feud" 
        description="Learn about Friendly Feud, a free Family Feud-style multiplayer survey game built to bring friends and family together for game night fun." 
        canonical="https://friendlyfeud.fun/about"
        schema={{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Friendly Feud",
    "url": "https://friendlyfeud.fun"
  }
}}
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
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
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">About Us</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              About Friendly Feud
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              A free, open-source multiplayer survey game built for fun, friendship, and fierce competition.
            </p>
          </header>

          <section className="mb-10" aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              What is Friendly Feud?
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Friendly Feud is a free online multiplayer quiz game inspired by classic TV game show formats. Two teams compete to guess the most popular survey answers, racing against the clock and each other for points.
              </p>
              <p>
                Whether you're playing with friends, family, or strangers online, Friendly Feud brings the energy, laughs, and friendly competition that make game nights unforgettable.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Key Features
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Users, title: "Multiplayer", desc: "Play with friends or join public rooms" },
                { icon: Sparkles, title: "Real-Time", desc: "Live gameplay with instant feedback" },
                { icon: Globe, title: "Free & Web-Based", desc: "No download or registration needed" },
                { icon: Heart, title: "Community Driven", desc: "Share custom questions with other players" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-sm">{title}</h3>
                      <p className="text-slate-400 text-xs mt-1">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10" aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-400" />
              Our Mission
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                We believe games bring people together. Friendly Feud is built to be accessible, fun, and fair for everyone — whether you're a casual player or a competitive spirit.
              </p>
              <p>
                This is a community project, and we welcome feedback, suggestions, and ideas from our players. Help us make Friendly Feud even better!
              </p>
            </div>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-400" />
              Get Involved
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have feedback? Found a bug? Want to contribute? We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => { playClickSound(); setLocation("/feedback"); }}
                  className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 transition-all text-sm font-medium"
                >
                  Share Feedback
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
