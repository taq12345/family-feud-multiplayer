import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { execSync } from "node:child_process";
import { BLOG_SLUGS, QUESTION_THEME_SLUGS } from "./src/content/blogSlugs";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
const basePath = process.env.BASE_PATH ?? "/";

// Every crawlable page gets a static HTML snapshot at build time. Game rooms
// and auth screens are intentionally absent (they are noindex + robots-blocked).
const PRERENDER_ROUTES = [
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

// Prerendering runs on every `vite build` (dev + production). It does NOT
// run during `vite dev` — the rollup plugin only kicks in at build time, so
// HMR is unaffected. Set DISABLE_PRERENDER=1 to skip it (useful for CI
// environments without Chromium).
const shouldPrerender = process.env.DISABLE_PRERENDER !== "1";

function resolveChromiumPath(): string | undefined {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  // Prefer a system / Nix-provided chromium (has all required shared libs);
  // fall back to puppeteer's bundled binary if none is found on PATH.
  try {
    const out = execSync(
      "command -v chromium 2>/dev/null || command -v chromium-browser 2>/dev/null || command -v google-chrome 2>/dev/null || true",
      { encoding: "utf8" },
    ).trim();
    if (out) return out;
  } catch {
    /* ignore */
  }
  return undefined;
}

// Head tags that src/components/SEO.tsx renders per page. React 19 hoists them
// into <head> with no marker, so the snapshot tags them with `data-prerender`
// and src/main.tsx removes them before the live render — otherwise every page
// would end up with two titles / two canonicals (the client re-adds its own).
const MANAGED_META =
  /<meta\b(?=[^>]*\b(?:name="(?:description|robots|twitter:title|twitter:description)"|property="og:(?:title|description|type|url)"))(?![^>]*\bdata-prerender\b)/g;
const MANAGED_TITLE = /<title\b(?![^>]*\bdata-prerender\b)/g;
const MANAGED_CANONICAL = /<link\b(?=[^>]*\brel="canonical")(?![^>]*\bdata-prerender\b)/g;

function markPrerenderedHead(html: string): string {
  const headEnd = html.indexOf("</head>");
  if (headEnd === -1) return html;
  const head = html
    .slice(0, headEnd)
    .replace(MANAGED_TITLE, "<title data-prerender")
    .replace(MANAGED_META, "<meta data-prerender")
    .replace(MANAGED_CANONICAL, "<link data-prerender");
  return head + html.slice(headEnd);
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss({ optimize: false }),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
    ...(shouldPrerender
      ? [
          (await import("@prerenderer/rollup-plugin")).default({
            routes: PRERENDER_ROUTES,
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              maxConcurrentRoutes: 2,
              // Generous so lazy route chunks finish loading on slow build
              // machines; a too-early snapshot captures the wrong page.
              renderAfterTime: 5000,
              headless: true,
              executablePath: resolveChromiumPath(),
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
              // Exposed as window.__PRERENDER_INJECTED so the app can skip
              // things that make no sense in a static snapshot (ads, auth).
              inject: { prerender: true },
            },
            postProcess(renderedRoute: { html: string }) {
              renderedRoute.html = markPrerenderedHead(
                renderedRoute.html.replace(/<script (.*?)>/g, "<script $1 defer>"),
              );
              return renderedRoute;
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    hmr: {
      protocol: "wss",
      host: undefined,
      port: undefined,
      timeout: 60000,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
