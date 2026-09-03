import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../content/blogPosts";
import { QUESTION_THEMES } from "../content/questionThemes";
import { playClickSound } from "../lib/sounds";

// Home-page FAQ structured data. Lives here (rather than in index.html) so it
// is emitted on "/" only and never duplicates the FAQ schema on /rules,
// /questions or the blog posts.
export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I play Family Feud online with friends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to friendlyfeud.fun, enter a nickname, and click 'Create Room'. Share the room link with your friends — they join instantly with no account needed. Split into two teams and race to guess the top survey answers to win.",
      },
    },
    {
      "@type": "Question",
      name: "Is Friendly Feud free to play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Friendly Feud is completely free. No account, no download, and no payment required — just open the site and start playing.",
      },
    },
    {
      "@type": "Question",
      name: "How many players can join a Family Feud game online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Up to 10 players can join a single room, and 1v1 games work too. You can also play solo to practice on your own.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to download anything to play Family Feud online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No download needed. Friendly Feud runs entirely in your web browser on any device — desktop, tablet, or mobile.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of questions are in the game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Friendly Feud includes over 8,700 classic survey-style questions with real point values. You can also use AI to generate a custom round on any topic you choose.",
      },
    },
    {
      "@type": "Question",
      name: "How are answers judged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each guess is checked in three layers: an exact match, a synonym and word-stem match, and finally an AI judge. Natural phrasings like 'sleeping' for 'sleep' are accepted automatically.",
      },
    },
  ],
};

const STEPS = [
  {
    n: "1",
    t: "Create a room",
    d: "Enter a nickname and create a private game room — choose 2 to 10 rounds and a player limit of up to 10.",
  },
  {
    n: "2",
    t: "Share the link",
    d: "Send the invite link to friends. They join instantly with no sign-up and pick a team.",
  },
  {
    n: "3",
    t: "Guess & win",
    d: "Win the Face-Off, clear the board before three strikes, steal from the other team, and bank the most points.",
  },
];

const FEATURES = [
  {
    t: "100% free, no account",
    d: "No payment, no download, and no registration — start playing in seconds on any device.",
  },
  {
    t: "Real-time multiplayer",
    d: "Up to 10 players per room with live scoring, a Face-Off, strikes, a steal round and built-in chat.",
  },
  {
    t: "8,700+ questions & AI rounds",
    d: "A huge bank of classic survey questions with real point values, plus AI-generated rounds on any topic.",
  },
  {
    t: "Fair answer judging",
    d: "Exact, synonym and AI matching accept natural phrasings, so nobody argues about whether 'telly' counts.",
  },
  {
    t: "Solo mode & leaderboard",
    d: "Practice alone with the same rules. Sign in (optional) to lock your nickname and track your stats.",
  },
  {
    t: "Plays anywhere",
    d: "Runs in any modern browser on desktop, tablet, or mobile — perfect for friends in different cities.",
  },
];

const USE_CASES = [
  {
    t: "Family game night",
    d: "Grandparents on a tablet, cousins on their phones, everyone on one board. Survey questions need no trivia knowledge, so every generation can score.",
    href: "/blog/how-to-host-a-virtual-family-feud-game-night",
  },
  {
    t: "Remote team building",
    d: "A two-round icebreaker takes ten minutes; custom topics about your own office turn it into a company tradition.",
    href: "/blog/family-feud-team-building-at-work",
  },
  {
    t: "Classrooms",
    d: "Run it on one screen or in small groups, then generate a review round on the unit you just taught.",
    href: "/blog/family-feud-in-the-classroom",
  },
  {
    t: "Parties & Discord nights",
    d: "Drop the invite link in the chat, split into teams, and settle who really knows what most people think.",
    href: "/blog/how-to-win-family-feud-strategy",
  },
];

function NavLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} onClick={() => playClickSound()} className={className}>
      {children}
    </Link>
  );
}

/**
 * The editorial part of the home page — what the game is, how it works, who
 * it is for, and answers to common questions. Rendered below the room list so
 * returning players get straight to the action while first-time visitors and
 * search engines get real content.
 */
export function HomeContent() {
  return (
    <section
      className="max-w-3xl mx-auto px-4 mb-12 mt-10"
      aria-labelledby="about-game-heading"
    >
      <h1
        id="about-game-heading"
        className="text-2xl sm:text-3xl font-extrabold text-white mb-4"
      >
        The Free Family Feud Game You Can Play Online With Friends
      </h1>
      <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Friendly Feud is the fastest way to play a Family Feud–style survey game online
          with friends — no download, no account, and no cost. Create a private room, share
          the link, and your friends join instantly from any device. Split into two teams and
          race to guess the top survey answers before the other side does. With 8,700+ classic
          questions and AI-powered custom rounds on any topic you choose, every game night
          plays out differently.
        </p>
        <p>
          The format is the one you know from television: a survey question, a board of hidden
          answers ranked by popularity, a Face-Off to decide who plays first, three strikes,
          and a steal. What makes it work online is that nobody needs to know trivia — the
          winning answer is simply what most people would say, which is why it works so well
          for mixed groups of ages and backgrounds.
        </p>
        <p>
          Everything runs in the browser, so there is nothing to install on a phone, tablet,
          or laptop. Open the site, pick a nickname, and start a room. Prefer to warm up first?
          Solo mode lets you play boards alone with the same rules and timer.
        </p>
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        How to Play in 3 Steps
      </h2>
      <ol className="grid gap-3 sm:grid-cols-3">
        {STEPS.map(({ n, t, d }) => (
          <li key={n} className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
            <span className="inline-flex w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold text-sm items-center justify-center mb-2">
              {n}
            </span>
            <p className="font-semibold text-white mb-1">{t}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{d}</p>
          </li>
        ))}
      </ol>
      <p className="text-sm text-slate-400 mt-4">
        New here? Read the{" "}
        <NavLink href="/rules" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
          full rules and scoring guide
        </NavLink>
        , browse{" "}
        <NavLink href="/questions" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
          free survey questions and answers
        </NavLink>
        , or learn{" "}
        <NavLink href="/blog/how-to-win-family-feud-strategy" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
          how to win
        </NavLink>
        .
      </p>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        Why Play Friendly Feud?
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {FEATURES.map(({ t, d }) => (
          <li key={t} className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
            <p className="font-semibold text-amber-400 mb-1">{t}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{d}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        Made for Every Kind of Game Night
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {USE_CASES.map(({ t, d, href }) => (
          <NavLink
            key={t}
            href={href}
            className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] p-4 transition-all flex flex-col"
          >
            <span className="font-semibold text-white mb-1">{t}</span>
            <span className="text-slate-400 text-sm leading-relaxed flex-1">{d}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-xs text-amber-400 group-hover:text-amber-300 font-semibold">
              Read the guide <ArrowRight className="w-3 h-3" />
            </span>
          </NavLink>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {homeFaqSchema.mainEntity.map((item) => (
          <details
            key={item.name}
            className="group rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-white select-none list-none">
              {item.name}
              <span className="text-slate-500 group-open:rotate-180 transition-transform ml-4 shrink-0">
                ▾
              </span>
            </summary>
            <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">
              {item.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        Free Survey Questions by Theme
      </h2>
      <p className="text-sm text-slate-400 mb-4">
        Need material for your own game night? Every list below is pulled from the same
        8,700-question bank the game uses, with real point values for each answer.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {QUESTION_THEMES.map((t) => (
          <li key={t.slug}>
            <NavLink
              href={`/questions/${t.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 px-4 py-3 transition-all"
            >
              <span>
                <span className="text-sm font-semibold text-slate-200 block">{t.h1}</span>
                <span className="text-xs text-slate-500">{t.questions.length} questions</span>
              </span>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-400 mt-3">
        <NavLink href="/questions" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
          Browse all survey questions →
        </NavLink>
      </p>

      <h2 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4">
        Latest Guides
      </h2>
      <ul className="space-y-2">
        {BLOG_POSTS.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <NavLink
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 px-4 py-3 transition-all"
            >
              <span className="text-sm font-semibold text-slate-200">{post.title}</span>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-400 mt-3">
        <NavLink href="/blog" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
          Browse all guides →
        </NavLink>
      </p>
    </section>
  );
}
