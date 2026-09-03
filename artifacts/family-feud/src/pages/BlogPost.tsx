import { Fragment, type ReactNode } from "react";
import { Link, useParams } from "wouter";
import { Clock, Lightbulb, ArrowRight, Tv2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContentPageLayout } from "../components/ContentPageLayout";
import { AdUnit } from "../components/AdSense";
import { BLOG_AUTHOR, BLOG_POSTS, BLOG_POSTS_BY_SLUG, type PostBlock } from "../content/blogPosts";
import { playClickSound } from "../lib/sounds";
import NotFound from "./not-found";

const SITE_URL = "https://friendlyfeud.fun";

// Inline markup: **bold** and [label](url). Internal URLs become router links.
const INLINE_RE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(INLINE_RE)) {
    const idx = match.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    if (match[1] !== undefined) {
      out.push(<strong key={key++} className="text-white font-semibold">{match[1]}</strong>);
    } else {
      const label = match[2];
      const href = match[3];
      out.push(
        href.startsWith("/") ? (
          <Link
            key={key++}
            href={href}
            onClick={() => playClickSound()}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
          >
            {label}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
          >
            {label}
          </a>
        ),
      );
    }
    last = idx + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length === 1 ? out[0] : <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4">{block.text}</h2>;
    case "h3":
      return <h3 className="text-lg font-bold text-amber-300 mt-6 mb-3">{block.text}</h3>;
    case "p":
      return <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{renderInline(block.text)}</p>;
    case "ul":
      return (
        <ul className="space-y-2 mb-5 pl-5 list-disc marker:text-amber-500/70 text-slate-300 text-sm sm:text-base leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 mb-5 pl-5 list-decimal marker:text-amber-400 marker:font-bold text-slate-300 text-sm sm:text-base leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="my-6 rounded-2xl bg-amber-500/8 border border-amber-500/25 p-4 sm:p-5 flex gap-3">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-slate-200 text-sm leading-relaxed">{renderInline(block.text)}</p>
        </aside>
      );
  }
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? BLOG_POSTS_BY_SLUG[slug] : undefined;

  if (!post) return <NotFound />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.published,
        inLanguage: "en",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Person", name: BLOG_AUTHOR },
        publisher: {
          "@type": "Organization",
          name: "Friendly Feud",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512x512.png` },
        },
        image: `${SITE_URL}/opengraph.png`,
      },
      ...(post.faq
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
    ],
  };

  // Place the second ad roughly two-thirds of the way through the body, at a
  // section boundary, so it never interrupts a list.
  const splitAt = (() => {
    const target = Math.floor(post.blocks.length * 0.66);
    for (let i = target; i < post.blocks.length; i++) {
      if (post.blocks[i].type === "h2") return i;
    }
    return post.blocks.length;
  })();

  return (
    <ContentPageLayout kicker="Guides">
      <SEO
        title={post.title}
        description={post.description}
        canonical={url}
        schema={schema}
        type="article"
      />

      <article>
        <header className="mb-8">
          <p className="text-xs text-slate-500 mb-3">
            <Link href="/blog" onClick={() => playClickSound()} className="hover:text-slate-300">
              Guides
            </Link>
            <span className="mx-2">/</span>
            <span className="text-amber-400/80 uppercase tracking-wider font-semibold">{post.category}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{post.description}</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>By {BLOG_AUTHOR}</span>
            <span>{formatDate(post.published)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingMinutes} min read
            </span>
          </p>
        </header>

        <AdUnit slot="articleTop" className="mb-8" />

        <div>
          {post.blocks.slice(0, splitAt).map((block, i) => (
            <Block key={i} block={block} />
          ))}
          {splitAt < post.blocks.length && <AdUnit slot="articleBottom" className="my-8" />}
          {post.blocks.slice(splitAt).map((block, i) => (
            <Block key={splitAt + i} block={block} />
          ))}
        </div>

        {post.faq && (
          <section className="mt-10" aria-labelledby="post-faq-heading">
            <h2 id="post-faq-heading" className="text-xl sm:text-2xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {post.faq.map(({ q, a }) => (
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
        )}
      </article>

      <section className="mt-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Play a round right now</h2>
        <p className="text-slate-400 text-sm mb-4 max-w-xl mx-auto">
          Create a free room or start a solo game — no download, no account, 8,700+ survey questions.
        </p>
        <Link
          href="/"
          onClick={() => playClickSound()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all"
        >
          <Tv2 className="w-4 h-4" />
          Play Friendly Feud
        </Link>
      </section>

      <section className="mt-12" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-lg font-bold text-white mb-4">More guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              onClick={() => playClickSound()}
              className="rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-4 flex flex-col transition-all"
            >
              <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-semibold mb-1">{p.category}</span>
              <span className="text-sm font-semibold text-white leading-snug flex-1">{p.title}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-amber-400">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </ContentPageLayout>
  );
}
