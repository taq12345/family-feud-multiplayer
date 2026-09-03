// Canonical URL helpers.
//
// The production host serves each prerendered route from a directory
// (dist/public/rules/index.html) and 301-redirects the bare path to the
// trailing-slash form (/rules → /rules/). Canonical tags and the sitemap must
// point at the URL that actually answers 200, otherwise every canonical is a
// redirect and Google picks its own. Keep this the single source of truth.
export const SITE_URL = "https://friendlyfeud.fun";

/** Absolute canonical URL for an app path, normalised to a trailing slash. */
export function canonicalUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}
