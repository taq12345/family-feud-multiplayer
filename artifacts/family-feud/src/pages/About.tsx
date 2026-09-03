import { SEO } from "../components/SEO";
import { useLocation, Link } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import {
  ArrowLeft,
  Heart,
  Globe,
  Users,
  Sparkles,
  Zap,
  Database,
  Scale,
  Mail,
  BookOpen,
  Code2,
} from "lucide-react";
import { playClickSound } from "../lib/sounds";
import { AdUnit } from "../components/AdSense";
import { canonicalUrl } from "../lib/site";

const CONTACT_EMAIL = "talhaahmadqureshi@gmail.com";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="About Friendly Feud"
        description="Learn about Friendly Feud, a free Family Feud-style multiplayer survey game: how it works, where the 8,700+ questions come from, how answers are judged, and who builds it."
        canonical={canonicalUrl("/about")}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Friendly Feud",
          url: canonicalUrl("/about"),
          mainEntity: {
            "@type": "Organization",
            name: "Friendly Feud",
            url: "https://friendlyfeud.fun",
            email: CONTACT_EMAIL,
            founder: { "@type": "Person", name: "Talha Qureshi" },
          },
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
              A free, browser-based Family Feud-style survey game built by one independent developer
              for game nights, classrooms and remote teams.
            </p>
          </header>

          <AdUnit slot="articleTop" className="mb-10" />

          <section className="mb-10" aria-labelledby="what-heading">
            <h2 id="what-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              What is Friendly Feud?
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Friendly Feud is a free online multiplayer quiz game inspired by the classic TV show
                Family Feud. Two teams compete to guess the most popular answers to survey questions —
                "Name something people do when they're bored", "Name a popular pizza topping" — racing a
                25-second clock and each other for points. There is no download and no sign-up: you open
                the site, choose a nickname, create a room and share the link.
              </p>
              <p>
                The project started as a way to play a Feud night with family and friends spread across
                different cities. Existing options were either paid, clunky on phones, or needed someone
                to act as a full-time host reading cards. Friendly Feud automates the host: it reveals
                answers, counts strikes, runs the steal and keeps score, so everyone gets to play.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="how-heading">
            <h2 id="how-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              How a game works
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                A host creates a room with 2 to 10 rounds and a player limit of up to 10. Players join
                through the invite link and pick a team. Each round opens with a <strong className="text-white">Face-Off</strong> between
                one player from each side; the first correct answer wins control of the board. The
                controlling team then takes turns revealing answers — three wrong guesses (strikes) hand
                the other team a single <strong className="text-white">Steal</strong> attempt for the whole pot. When the final round ends,
                the team with the most banked points wins.
              </p>
              <p>
                Prefer to play alone? <strong className="text-white">Solo mode</strong> runs the same boards, timer and judge for one
                player, and is the easiest way to learn the rhythm of survey answers. The full rules,
                including timing and edge cases, are on the{" "}
                <Link href="/rules" onClick={() => playClickSound()} className="text-amber-400 hover:underline">How to Play</Link> page.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-400" />
              Where the questions come from
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                The classic mode draws from a curated bank of more than 8,700 survey-style questions,
                each with a ranked answer board and point values in the style of the television format.
                Questions are cleaned and de-duplicated before they enter the bank, and a sample of them
                is published on the{" "}
                <Link href="/questions" onClick={() => playClickSound()} className="text-amber-400 hover:underline">Survey Questions</Link>{" "}
                page for anyone to use at their own game night.
              </p>
              <p>
                The <strong className="text-white">Custom Questions</strong> option (currently in beta) generates a fresh survey board on
                any topic you type — "things that go wrong on a camping trip", "our office" — using an AI
                model. Custom boards are created on demand and are best previewed in Solo mode before a
                big event.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="judging-heading">
            <h2 id="judging-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              How answers are judged
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Arguments about whether "telly" counts as "watch TV" are half the fun of the show and none
                of the fun online, so every guess is checked in three layers: an exact match against the
                board, a synonym and word-stem match, and finally an AI judge for anything ambiguous. The
                same rules apply to both teams, instantly, on every turn.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              Key features
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Users, title: "Real-time multiplayer", desc: "Up to 10 players per room with live scoring, strikes, steals and built-in chat." },
                { icon: Globe, title: "Free and web-based", desc: "No download or registration. Works on desktop, tablet and mobile browsers." },
                { icon: Sparkles, title: "8,700+ questions & AI rounds", desc: "A large classic bank plus generated boards on any topic." },
                { icon: Heart, title: "Optional accounts", desc: "Sign in to reserve your nickname and track stats on the leaderboard — never required to play." },
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

          <section className="mb-10" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-amber-400" />
              Who builds it
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Friendly Feud is designed, built and maintained by{" "}
                <strong className="text-white">Talha Qureshi</strong>, an independent software developer. It is a
                one-person project: the game engine, the answer judge, the question bank and the guides
                on this site are all written and maintained in-house, and player feedback goes straight
                to the person who can fix it.
              </p>
              <p>
                The site is free to play and is supported by advertising on its informational pages (never
                inside game rooms) and by optional contributions from players on{" "}
                <a
                  href="https://www.patreon.com/cw/talhaqureshi/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  Patreon
                </a>
                . A community{" "}
                <a
                  href="https://discord.gg/vug29JzN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  Discord server
                </a>{" "}
                is the place to find other players and suggest features.
              </p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="trademark-heading">
            <h2 id="trademark-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              A note on the name
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                "Family Feud" is a registered trademark of Fremantle. Friendly Feud is an independent fan
                project inspired by the survey-game format; it is not affiliated with, endorsed by, or
                sponsored by Fremantle or any broadcaster. No television footage, logos or copyrighted
                show material is used.
              </p>
            </div>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-400" />
              Get in touch
            </h2>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Found a bug, have a question idea, or want to use Friendly Feud for an event? Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline">{CONTACT_EMAIL}</a>{" "}
                or use the feedback form. Every message is read.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => { playClickSound(); setLocation("/feedback"); }}
                  className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 transition-all text-sm font-medium"
                >
                  Share Feedback
                </button>
                <button
                  onClick={() => { playClickSound(); setLocation("/blog"); }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                >
                  Read the Guides
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-600 px-4">
          <Link href="/" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Home</Link>
          <span>·</span>
          <Link href="/rules" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">How to Play</Link>
          <span>·</span>
          <Link href="/blog" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Guides</Link>
          <span>·</span>
          <Link href="/privacy" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
