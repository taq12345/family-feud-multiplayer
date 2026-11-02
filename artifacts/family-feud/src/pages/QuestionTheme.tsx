import { useState } from "react";
import { Link, useParams } from "wouter";
import { Tv2, Lightbulb, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContentPageLayout } from "../components/ContentPageLayout";
import { AdUnit } from "../components/AdSense";
import { QUESTION_THEMES, QUESTION_THEMES_BY_SLUG } from "../content/questionThemes";
import { canonicalUrl, SITE_URL } from "../lib/site";
import { playClickSound } from "../lib/sounds";
import NotFound from "./not-found";

export default function QuestionTheme() {
  const { theme: slug } = useParams<{ theme: string }>();
  const theme = slug ? QUESTION_THEMES_BY_SLUG[slug] : undefined;
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

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
      {
        "@type": "FAQPage",
        mainEntity: theme.questions.slice(0, 25).map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Top survey answers: ${q.a.map((a) => `${a.text} (${a.pts} pts)`).join(", ")}`,
          },
        })),
      },
    ],
  };

  const toggle = (i: number) => {
    playClickSound();
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
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
            {theme.questions.length} questions · every answer shows its survey point value · free to use for
            your own game night
          </p>
        </header>

        <AdUnit slot="articleTop" className="mb-8" />

        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-5 text-center">
          <p className="text-slate-300 text-sm mb-3">
            Want the game to run itself? Create a free room and play these boards with friends — timer,
            strikes, steals and scoring included.
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
          <ol className="rounded-2xl bg-white/[0.03] border border-white/10 divide-y divide-white/5 overflow-hidden">
            {theme.questions.map((item, i) => {
              const isOpen = revealed.has(i);
              return (
                <li key={item.q} className="px-5 py-4">
                  <button onClick={() => toggle(i)} className="w-full text-left group">
                    <h3 className="font-semibold text-sm sm:text-base text-slate-200 group-hover:text-amber-300 transition-colors">
                      <span className="text-amber-500/70 mr-2">{i + 1}.</span>
                      {item.q}
                    </h3>
                    <p className="text-xs text-amber-500/70 mt-1">
                      {isOpen ? "Hide answers ▴" : `Reveal ${item.a.length} answers ▾`}
                    </p>
                  </button>
                  {isOpen && (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {item.a.map((ans, aIdx) => (
                        <div
                          key={aIdx}
                          className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm flex items-center justify-between gap-2"
                        >
                          <span>
                            <span className="text-amber-400 font-bold mr-2">{aIdx + 1}.</span>
                            <span className="text-slate-300 capitalize">{ans.text}</span>
                          </span>
                          <span className="text-amber-400/80 font-mono text-xs font-bold whitespace-nowrap">{ans.pts} pts</span>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
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
          These survey questions are sourced from an open-source database and are free to use. "Family Feud"
          is a registered trademark of Fremantle. Friendly Feud is an independent fan project and is not
          affiliated with or endorsed by Fremantle or any related entity.
        </p>
      </article>
    </ContentPageLayout>
  );
}
