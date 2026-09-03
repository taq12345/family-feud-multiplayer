// Google AdSense configuration.
//
// AdSense policy forbids Google-served ads on "screens without publisher
// content" (game rooms, waiting screens, auth flows, forms, 404s). Everything
// ad-related is therefore gated on two things:
//   1. the current route must be a content page (see isAdEligiblePath), and
//   2. the page must not be running inside the Capacitor Android wrapper
//      (AdSense/AdMob forbid AdSense in native WebViews).
//
// The adsbygoogle.js script is only injected on eligible routes, and ad units
// only render where an <AdUnit> is explicitly placed. Keep "Auto ads" turned
// OFF for friendlyfeud.fun in the AdSense dashboard so Google never places
// ads on its own once the script is present.

export const ADSENSE_CLIENT = "ca-pub-6881665602687563";

// Ad unit slot IDs. Create display units in AdSense → Ads → By ad unit and
// paste each unit's numeric `data-ad-slot` value here. An empty string means
// the placement renders nothing, so the site stays clean until units exist.
export const AD_SLOTS = {
  // Home page, below the "about the game" article content.
  homeContent: "",
  // Long-form pages (How to Play, Survey Questions, About, blog posts):
  // one unit after the intro, one after the article body.
  articleTop: "",
  articleBottom: "",
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;

// Routes that carry substantial, original publisher content. Ads (and the
// AdSense script itself) are limited to these. Game rooms (/room/*), sign-in
// and sign-up, the feedback form, the leaderboard, legal pages and the 404
// page are deliberately excluded.
const AD_ELIGIBLE_EXACT = new Set(["/", "/rules", "/questions", "/about", "/blog"]);
const AD_ELIGIBLE_PREFIXES = ["/blog/"];

export function isAdEligiblePath(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (AD_ELIGIBLE_EXACT.has(path)) return true;
  return AD_ELIGIBLE_PREFIXES.some((prefix) => path.startsWith(prefix));
}
