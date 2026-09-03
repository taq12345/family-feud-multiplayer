// Explicit .ts extension so plain Node (scripts/) can import this file too.
import { BLOG_SLUGS, QUESTION_THEME_SLUGS } from "./blogSlugs.ts";

// Every crawlable page. Used by vite.config.ts (prerender snapshots) and by
// scripts/generate-artifact-rewrites.mjs (host rewrites) so both stay in sync.
// Game rooms and auth screens are intentionally absent — they are noindex and
// robots-blocked.
export const PRERENDER_ROUTES: string[] = [
  "/",
  "/rules",
  "/questions",
  ...QUESTION_THEME_SLUGS.map((slug) => `/questions/${slug}`),
  "/about",
  "/blog",
  ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
  "/leaderboard",
  "/feedback",
  "/privacy",
  "/terms",
];
