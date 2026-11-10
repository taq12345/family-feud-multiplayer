import { useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Shuffle, Sparkles, Tv2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContentPageLayout } from "../components/ContentPageLayout";
import { AdUnit } from "../components/AdSense";
import { QuestionBoard, SUGGESTED_POINTS_NOTE } from "../components/QuestionBoard";
import { playClickSound } from "../lib/sounds";
import { canonicalUrl } from "../lib/site";
import { QUESTION_COUNT, QUESTION_THEMES, type ThemeQuestion } from "../content/questionThemes";

// How many boards from each theme are shown on this index page. The full
// list lives on the theme's own page, so the two never duplicate each other
// in bulk.
const SAMPLE_SIZE = 3;

const ALL_QUESTIONS: { theme: string; item: ThemeQuestion }[] = QUESTION_THEMES.flatMap((t) =>
  t.questions.map((item) => ({ theme: t.name, item })),
);

const linkClass = "text-amber-400 hover:text-amber-300 underline underline-offset-2";

export default function Questions() {
  const [random, setRandom] = useState<{ theme: string; item: ThemeQuestion } | null>(null);
  const lastRandomIdx = useRef(-1);

  const pickRandomQuestion = () => {
    playClickSound();
    let idx = Math.floor(Math.random() * ALL_QUESTIONS.length);
    if (idx === lastRandomIdx.current) idx = (idx + 1) % ALL_QUESTIONS.length;
    lastRandomIdx.current = idx;
    setRandom(ALL_QUESTIONS[idx]);
  };

  return (
    <ContentPageLayout kicker="Survey Questions">
      <SEO
        title="Family Feud Questions & Answers With Points"
        description={`${QUESTION_COUNT} original Family Feud-style survey questions with answers, suggested points and host notes, in themed lists for Christmas, Halloween, kids, work, food and more.`}
        canonical={canonicalUrl("/questions")}
      />

      <article>
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
            Survey Questions &amp; Answers
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {QUESTION_COUNT} survey questions we wrote for Family Feud-style game nights, each with a ranked answer
            board, suggested points and a note for the host. They are free to use at parties, in classrooms and
            at team events.
          </p>
        </header>

        <AdUnit slot="articleTop" className="mb-8" />

        <section className="mb-8" aria-labelledby="themes-heading">
          <h2 id="themes-heading" className="text-xl font-bold text-white mb-1">
            Browse by theme
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            Eight lists of twelve boards each, written for a specific occasion or crowd.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUESTION_THEMES.map((t) => (
              <Link
                key={t.slug}
                href={`/questions/${t.slug}`}
                onClick={() => playClickSound()}
                className="rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] p-4 transition-all"
              >
                <span className="block text-sm font-semibold text-white leading-snug">{t.h1}</span>
                <span className="block text-xs text-slate-500 mt-1">{t.questions.length} questions</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8" aria-labelledby="points-heading">
          <h2 id="points-heading" className="text-xl font-bold text-white mb-3">
            How the points on these boards work
          </h2>
          <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              On a television survey show, the points are the number of people out of a hundred who gave each
              answer. We have not surveyed anyone for these lists. We wrote each question, listed the answers we
              expect a room to say from most to least likely, and gave them suggested points that add up to 100.
            </p>
            <p>
              The weighting follows the shape that makes a board fun to play: one answer most people think of
              first, two or three solid middle answers, and one or two that are hard to find. If your group
              disagrees with a ranking, change it. The game works with any points as long as the host announces
              them before the round.
            </p>
            <p>
              The online game is separate from these lists. Its classic mode draws on its own bank of survey
              boards, and its Custom mode generates a board on any topic you type.
            </p>
          </div>
        </section>

        <div className="mb-8 rounded-2xl bg-white/[0.03] border border-amber-500/20 overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
                <Shuffle className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h2 className="font-bold text-white text-base">Random question</h2>
                <p className="text-xs text-slate-500">Pull one board from all {QUESTION_COUNT}</p>
              </div>
            </div>
            <button
              onClick={pickRandomQuestion}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm shadow-[0_0_16px_rgba(251,191,36,0.3)] transition-all active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5" />
              {random ? "Try another" : "Pick one"}
            </button>
          </div>
          {random && (
            <div className="border-t border-white/5">
              <p className="px-5 pt-3 text-[10px] uppercase tracking-wider text-amber-400/80 font-semibold">
                {random.theme}
              </p>
              {/* key remounts the <details> so a new pick always starts closed */}
              <QuestionBoard key={random.item.q} item={random.item} />
            </div>
          )}
        </div>

        <section aria-labelledby="samples-heading">
          <h2 id="samples-heading" className="text-xl font-bold text-white mb-1">
            Sample boards from each list
          </h2>
          <p className="text-slate-400 text-sm mb-4">{SUGGESTED_POINTS_NOTE}</p>
          <div className="space-y-4">
            {QUESTION_THEMES.map((t) => (
              <section
                key={t.slug}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden"
                aria-labelledby={`sample-${t.slug}`}
              >
                <div className="px-5 pt-4">
                  <h3 id={`sample-${t.slug}`} className="font-bold text-white text-base">
                    {t.name}
                  </h3>
                </div>
                <div className="divide-y divide-white/5">
                  {t.questions.slice(0, SAMPLE_SIZE).map((item) => (
                    <QuestionBoard key={item.q} item={item} />
                  ))}
                </div>
                <div className="border-t border-white/5 px-5 py-3">
                  <Link
                    href={`/questions/${t.slug}`}
                    onClick={() => playClickSound()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
                  >
                    All {t.questions.length} {t.name.toLowerCase()} questions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </section>

        <AdUnit slot="articleBottom" className="mt-10" />

        <section className="mt-10" aria-labelledby="write-your-own-heading">
          <h2 id="write-your-own-heading" className="text-xl font-bold text-white mb-2">
            Write your own
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A good survey question has four to eight answers that cluster around one obvious favourite. Our
            guide on{" "}
            <Link
              href="/blog/how-to-write-family-feud-survey-questions"
              onClick={() => playClickSound()}
              className={linkClass}
            >
              writing Family Feud survey questions
            </Link>{" "}
            walks through the formula with worked examples, and the{" "}
            <Link href="/rules" onClick={() => playClickSound()} className={linkClass}>
              rules page
            </Link>{" "}
            explains how points, strikes and steals work once you play them.
          </p>
        </section>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-5 sm:p-6 text-center">
          <p className="text-amber-300 font-semibold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Want the game to run itself?
          </p>
          <p className="text-slate-400 text-sm mb-4">
            Create a free room and play online with friends. The timer, strikes, steals and scoring are handled
            for you, and no sign-up is needed.
          </p>
          <Link
            href="/"
            onClick={() => playClickSound()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all"
          >
            <Tv2 className="w-4 h-4" />
            Play Now — It's Free
          </Link>
        </div>

        <p className="mt-10 text-[10px] text-slate-700 text-center leading-relaxed">
          The questions, answers and host notes on this page were written by Friendly Feud and are free to use
          at your own game night. Point values are suggestions, not survey results. "Family Feud" is a
          registered trademark of Fremantle. Friendly Feud is an independent fan project and is not affiliated
          with or endorsed by Fremantle or any related entity.
        </p>
      </article>
    </ContentPageLayout>
  );
}
