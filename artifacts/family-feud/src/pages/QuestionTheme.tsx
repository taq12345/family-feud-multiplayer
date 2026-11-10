import { Link, useParams } from "wouter";
import { Tv2, Lightbulb, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContentPageLayout } from "../components/ContentPageLayout";
import { AdUnit } from "../components/AdSense";
import { QuestionBoard, SUGGESTED_POINTS_NOTE } from "../components/QuestionBoard";
import { QUESTION_THEMES, QUESTION_THEMES_BY_SLUG } from "../content/questionThemes";
import { canonicalUrl, SITE_URL } from "../lib/site";
import { playClickSound } from "../lib/sounds";
import NotFound from "./not-found";

export default function QuestionTheme() {
  const { theme: slug } = useParams<{ theme: string }>();
  const theme = slug ? QUESTION_THEMES_BY_SLUG[slug] : undefined;

  if (!theme) return <NotFound />;

  const url = canonicalUrl(`/questions/${theme.slug}`);
  const others = QUESTION_THEMES.filter((t) => t.slug !== theme.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Survey Questions", item: canonicalUrl("/questions") },
          { "@type": "ListItem", position: 3, name: theme.name, item: url },
        ],
      },
    ],
  };

  return (
    <ContentPageLayout kicker="Survey Questions">
      <SEO title={theme.title} description={theme.description} canonical={url} schema={schema} />

      <article>
        <header className="mb-8">
          <p className="text-xs text-slate-500 mb-3">
            <Link href="/questions" onClick={() => playClickSound()} className="hover:text-slate-300">
              Survey Questions
            </Link>
            <span className="mx-2">/</span>
            <span className="text-amber-400/80 uppercase tracking-wider font-semibold">{theme.name}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-4">
            {theme.h1}
          </h1>
          <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {theme.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            {theme.questions.length} original questions · suggested points on every answer · free to use
            for your own game night
          </p>
        </header>

        <AdUnit slot="articleTop" className="mb-8" />

        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-5 text-center">
          <p className="text-slate-300 text-sm mb-3">
            Want the game to run itself? Create a free room and play online with friends. The timer,
            strikes, steals and scoring are handled for you.
          </p>
          <Link
            href="/"
            onClick={() => playClickSound()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
          >
            <Tv2 className="w-4 h-4" />
            Play Now — It's Free
          </Link>
        </div>

        <section aria-labelledby="questions-heading">
          <h2 id="questions-heading" className="text-xl font-bold text-white mb-4">
            {theme.name} survey questions
          </h2>
          <p className="text-sm text-slate-400 mb-4">{SUGGESTED_POINTS_NOTE}</p>
          <ol className="rounded-2xl bg-white/[0.03] border border-white/10 divide-y divide-white/5 overflow-hidden">
            {theme.questions.map((item, i) => (
              <li key={item.q}>
                <QuestionBoard item={item} number={i + 1} />
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="offline-heading">
          <h2 id="offline-heading" className="text-xl font-bold text-white mb-4">
            How to play these boards without a screen
          </h2>
          <ol className="space-y-2 pl-5 list-decimal marker:text-amber-400 marker:font-bold text-slate-300 text-sm sm:text-base leading-relaxed">
            <li>Split into two teams and pick a host, who keeps this page to themselves.</li>
            <li>
              The host reads a question. One player from each team answers; whoever names the higher-scoring
              answer wins control of the board for their team.
            </li>
            <li>
              That team takes turns guessing. Each answer on the board scores its points, and each miss is a
              strike.
            </li>
            <li>
              After three strikes the other team gets one guess to steal every point scored in the round. Most
              points after four boards wins.
            </li>
          </ol>
        </section>

        <AdUnit slot="articleBottom" className="my-10" />

        <section className="mt-10" aria-labelledby="tips-heading">
          <h2 id="tips-heading" className="text-xl font-bold text-white mb-4">
            Tips for hosting a {theme.name.toLowerCase()} round
          </h2>
          <ul className="space-y-3">
            {theme.tips.map((tip) => (
              <li key={tip} className="flex gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-300 text-sm leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-400 mt-4">
            New to the format? Read the{" "}
            <Link href="/rules" onClick={() => playClickSound()} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              full rules
            </Link>{" "}
            or our guide to{" "}
            <Link href="/blog/how-to-host-a-virtual-family-feud-game-night" onClick={() => playClickSound()} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              hosting a virtual game night
            </Link>
            .
          </p>
        </section>

        <section className="mt-10" aria-labelledby="more-themes-heading">
          <h2 id="more-themes-heading" className="text-lg font-bold text-white mb-4">More question lists</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/questions/${t.slug}`}
                onClick={() => playClickSound()}
                className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 px-4 py-3 transition-all"
              >
                <span>
                  <span className="text-sm font-semibold text-slate-200 block">{t.h1}</span>
                  <span className="text-xs text-slate-500">{t.questions.length} questions</span>
                </span>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-10 text-[10px] text-slate-700 text-center leading-relaxed">
          The questions, answers and host notes on this page were written by Friendly Feud and are free to
          use at your own game night. Point values are suggestions, not survey results. "Family Feud" is a
          registered trademark of Fremantle. Friendly Feud is an independent fan project and is not
          affiliated with or endorsed by Fremantle or any related entity.
        </p>
      </article>
    </ContentPageLayout>
  );
}
