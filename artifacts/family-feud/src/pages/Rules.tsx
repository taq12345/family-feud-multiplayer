import { useLocation } from "wouter";
import { SEO } from "../components/SEO";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { Tv2, ArrowLeft, Users, Zap, Shield, Trophy, RotateCcw, Star, Clock, Target } from "lucide-react";
import { playClickSound } from "../lib/sounds";
import { AdUnit } from "../components/AdSense";
import { canonicalUrl } from "../lib/site";
import { BLOG_POSTS } from "../content/blogPosts";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the game use AI to judge answers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Answers are checked in three layers: exact match, stem/synonym matching, and an AI model as a final fallback. This means alternate phrasings and common synonyms are generally accepted."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a player disconnects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disconnected players are held in the game for up to 30 minutes. If they reconnect in time, they rejoin seamlessly. If the designated player disconnects, the turn passes to the next eligible player."
      }
    },
    {
      "@type": "Question",
      "name": "Can I play with just one person per team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — 1v1 is fully supported. The game will rotate back to the same player if they're the only one on their team."
      }
    },
    {
      "@type": "Question",
      "name": "Who controls when the next round starts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The host can advance to the next round manually after the between-round summary is shown. If the host doesn't act, the game auto-advances after 60 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a chat during the game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every room has a live chat panel visible on the right side (or in the Chat tab on mobile) so your group can talk while playing."
      }
    }
  ]
};

export default function Rules() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO 
        title="How to Play" 
        description="Learn how to play Friendly Feud — a free online Family Feud-style survey game. Full rules covering Face-Off, Playing phase, Steal, scoring, and tips to win." 
        canonical={canonicalUrl("/rules")}
        schema={faqSchema}
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
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">How to Play</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              How to Play Friendly Feud
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Friendly Feud is a free online multiplayer survey game inspired by Family Feud. Two teams compete to guess the most popular survey answers — fastest fingers and sharpest minds win!
            </p>
          </header>

          <AdUnit slot="articleTop" className="mb-10" />

          <section className="mb-10" aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              Game Overview
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Two teams compete across multiple rounds. In each round, players race to uncover the top survey answers to questions like <em>"Name something people do when they're bored"</em> or <em>"Name a popular pizza topping."</em>
              </p>
              <p>
                Each answer on the board has a point value. The team that banks the most points across all rounds wins the game.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="setup-heading">
            <h2 id="setup-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              Setting Up a Game
            </h2>
            <ol className="space-y-3">
              {[
                { step: "1", title: "Create or join a room", desc: "The host creates a game room, choosing team names, the number of rounds (1–10), and the player limit. Other players join by selecting their team." },
                { step: "2", title: "Fill the teams", desc: "Players join Team 1 or Team 2 from the lobby. There's no minimum — you can play 1v1 or with large groups." },
                { step: "3", title: "Host starts the game", desc: "Once everyone is in, the host hits Start Game. The first round begins immediately with a Face-Off." },
              ].map(({ step, title, desc }) => (
                <li key={step} className="flex gap-4 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold text-sm flex items-center justify-center shrink-0">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-0.5">{title}</p>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-10" aria-labelledby="round-heading">
            <h2 id="round-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-amber-400" />
              How a Round Works
            </h2>
            <p className="text-slate-400 text-sm mb-5">Each round has up to three phases: Face-Off, Playing, and Steal.</p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                <h3 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Phase 1 — Face-Off
                </h3>
                <ul className="text-slate-300 text-sm space-y-2 leading-relaxed">
                  <li>One player from each team takes turns answering the round's question.</li>
                  <li>The player who gives any correct survey answer <strong>wins the Face-Off</strong> for their team.</li>
                  <li>Their team gets to keep that revealed answer and moves to the Playing phase.</li>
                  <li>Each player has <strong>25 seconds</strong> to answer. If time runs out, the turn passes to the other team.</li>
                  <li>If no one answers correctly after several turns, the round is skipped and the board is revealed.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-5">
                <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Phase 2 — Playing
                </h3>
                <ul className="text-slate-300 text-sm space-y-2 leading-relaxed">
                  <li>The winning team's players take turns answering one at a time (round-robin rotation), skipping the Face-Off winner for the first turn.</li>
                  <li>Each correct answer reveals that item on the board and adds its points to the round's pot.</li>
                  <li>A wrong answer earns a <strong className="text-red-400">Strike ✗</strong>.</li>
                  <li>Three strikes end the Playing phase and trigger a Steal chance.</li>
                  <li>If the team reveals all answers before 3 strikes, they bank all the points immediately.</li>
                  <li>Each player has <strong>25 seconds</strong> per turn.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-orange-500/5 border border-orange-500/20 p-5">
                <h3 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Phase 3 — Steal (optional)
                </h3>
                <ul className="text-slate-300 text-sm space-y-2 leading-relaxed">
                  <li>After 3 strikes, the <strong>other team</strong> gets one collective steal attempt.</li>
                  <li>One designated player from the steal team must name any unrevealed answer.</li>
                  <li>If correct, that team <strong>steals all the points</strong> in the pot.</li>
                  <li>If wrong, the original playing team banks all the points instead.</li>
                  <li>The steal player also has <strong>25 seconds</strong> to answer.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="scoring-heading">
            <h2 id="scoring-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Scoring &amp; Winning
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Each answer on the board carries a point value — more popular answers are worth more points. The team that banks a round's points keeps them on the scoreboard.
              </p>
              <p>
                After all rounds are complete, the team with the <strong className="text-white">highest total score wins</strong>. The host can then restart the game with a fresh set of questions.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="tips-heading">
            <h2 id="tips-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              Tips &amp; Strategy
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { tip: "Start with the most common guess", detail: "Top-ranked answers are worth the most points, but in the Face-Off any correct survey answer wins control for your team." },
                { tip: "Think like a crowd", detail: "These are survey answers — think about what most people would say, not just what's technically correct." },
                { tip: "Use your team wisely", detail: "During the Playing phase, players rotate. Try to coordinate so players who know the topic answer at the right time." },
                { tip: "Save a backup for the Steal", detail: "If you're on the stealing team, spend a moment thinking of the most common remaining answer before committing." },
              ].map(({ tip, detail }) => (
                <div key={tip} className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                  <p className="font-semibold text-amber-400 text-sm mb-1">{tip}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit slot="articleBottom" className="mb-10" />

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Does the game use AI to judge answers?",
                  a: "Yes. Answers are checked in three layers: exact match, stem/synonym matching, and an AI model as a final fallback. This means alternate phrasings and common synonyms are generally accepted.",
                },
                {
                  q: "What happens if a player disconnects?",
                  a: "Disconnected players are held in the game for up to 30 minutes. If they reconnect in time, they rejoin seamlessly. If the designated player disconnects, the turn passes to the next eligible player.",
                },
                {
                  q: "Can I play with just one person per team?",
                  a: "Yes — 1v1 is fully supported. The game will rotate back to the same player if they're the only one on their team.",
                },
                {
                  q: "Who controls when the next round starts?",
                  a: "The host can advance to the next round manually after the between-round summary is shown. If the host doesn't act, the game auto-advances after 60 seconds.",
                },
                {
                  q: "Is there a chat during the game?",
                  a: "Yes. Every room has a live chat panel visible on the right side (or in the Chat tab on mobile) so your group can talk while playing.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-white select-none list-none">
                    {q}
                    <span className="text-slate-500 group-open:rotate-180 transition-transform ml-4 shrink-0">▾</span>
                  </summary>
                  <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="further-reading-heading">
            <h2 id="further-reading-heading" className="text-xl font-bold text-white mb-4">Go deeper</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {BLOG_POSTS.filter((p) =>
                ["family-feud-rules-explained", "how-to-win-family-feud-strategy", "how-to-host-a-virtual-family-feud-game-night"].includes(p.slug),
              ).map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  onClick={(e) => { e.preventDefault(); playClickSound(); setLocation(`/blog/${p.slug}`); }}
                  className="rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-4 flex flex-col transition-all"
                >
                  <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-semibold mb-1">{p.category}</span>
                  <span className="text-sm font-semibold text-white leading-snug">{p.title}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Need material to play with? Browse{" "}
              <a href="/questions" onClick={(e) => { e.preventDefault(); playClickSound(); setLocation("/questions"); }} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                free survey questions with point values
              </a>
              , including themed lists for Christmas, kids, work and more.
            </p>
          </section>

          <div className="mt-12 text-center">
            <button
              onClick={() => { playClickSound(); setLocation("/"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              <Tv2 className="w-4 h-4" />
              Play Now
            </button>
          </div>
        </article>

      </main>
    </div>
  );
}
