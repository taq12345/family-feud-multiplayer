import { Link } from "wouter";
import { Clock, ArrowRight, Tv2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContentPageLayout } from "../components/ContentPageLayout";
import { AdUnit } from "../components/AdSense";
import { BLOG_POSTS } from "../content/blogPosts";
import { playClickSound } from "../lib/sounds";
import { canonicalUrl, SITE_URL } from "../lib/site";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Friendly Feud Guides",
  url: canonicalUrl("/blog"),
  description:
    "Guides for hosting and winning Family Feud-style survey games online: rules, strategy, team building, classroom use and writing your own questions.",
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: canonicalUrl(`/blog/${post.slug}`),
    datePublished: post.published,
    description: post.description,
  })),
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function Blog() {
  return (
    <ContentPageLayout kicker="Guides">
      <SEO
        title="Family Feud Game Night Guides, Rules & Strategy"
        description="How-to guides for Family Feud-style survey games: hosting a virtual game night, the full rules, winning strategy, team building at work, classroom use, and writing your own survey questions."
        canonical={canonicalUrl("/blog")}
        schema={blogSchema}
      />

      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
          Guides for a Better Feud Night
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Everything we have learned from running thousands of survey-game rooms: how to host,
          how the rules really work, how to win, and how to use the game at work or in class.
        </p>
      </header>

      <AdUnit slot="articleTop" className="mb-10" />

      <div className="grid gap-4 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all p-5 sm:p-6 flex flex-col"
          >
            <p className="text-[11px] font-semibold tracking-wider uppercase text-amber-400/80 mb-2">
              {post.category}
            </p>
            <h2 className="text-lg font-bold text-white leading-snug mb-2">
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => playClickSound()}
                className="hover:text-amber-300 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">{post.description}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingMinutes} min read · {formatDate(post.published)}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-1 text-amber-400 group-hover:text-amber-300 font-semibold"
              >
                Read <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Ready to put it into practice?</h2>
        <p className="text-slate-400 text-sm mb-4 max-w-xl mx-auto">
          Create a free room, share the link, and play a Family Feud-style game with friends in
          under a minute — no download or account required.
        </p>
        <Link
          href="/"
          onClick={() => playClickSound()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all"
        >
          <Tv2 className="w-4 h-4" />
          Play Now
        </Link>
      </section>
    </ContentPageLayout>
  );
}
