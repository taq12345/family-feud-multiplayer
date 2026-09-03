// Blog post slugs, kept dependency-free so vite.config.ts can import them to
// build the prerender route list without pulling in the article bodies.
export const BLOG_SLUGS = [
  "how-to-host-a-virtual-family-feud-game-night",
  "family-feud-rules-explained",
  "how-to-win-family-feud-strategy",
  "family-feud-team-building-at-work",
  "family-feud-in-the-classroom",
  "how-to-write-family-feud-survey-questions",
  "solo-mode-and-custom-topics-guide",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
