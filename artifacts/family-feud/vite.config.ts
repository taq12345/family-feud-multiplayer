import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { execSync } from "node:child_process";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
const basePath = process.env.BASE_PATH ?? "/";

const PRERENDER_ROUTES = [
  "/",
  "/rules",
  "/questions",
  "/about",
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
              renderAfterTime: 2500,
              headless: true,
              executablePath: resolveChromiumPath(),
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
            },
            postProcess(renderedRoute: { html: string }) {
              renderedRoute.html = renderedRoute.html.replace(
                /<script (.*?)>/g,
                "<script $1 defer>",
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
