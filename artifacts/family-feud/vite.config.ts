import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { execSync } from "child_process";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

function findChromium(): string | undefined {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  try {
    const found = execSync("which chromium chromium-browser google-chrome 2>/dev/null | head -1", {
      encoding: "utf8",
    }).trim();
    if (found) return found;
  } catch {}
  return undefined;
}

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
const basePath = process.env.BASE_PATH ?? "/";

const isProdBuild =
  process.env.NODE_ENV === "production" || process.argv.includes("build");
const disablePrerender = process.env.DISABLE_PRERENDER === "1";

const prerenderPlugins = isProdBuild && !disablePrerender
  ? await Promise.all([
      import("@prerenderer/rollup-plugin").then((m) =>
        (m.default as any)({
          routes: [
            "/",
            "/rules",
            "/questions",
            "/about",
            "/feedback",
            "/privacy",
            "/terms",
          ],
          renderer: "@prerenderer/renderer-puppeteer",
          rendererOptions: {
            renderAfterTime: 2500,
            maxConcurrentRoutes: 2,
            headless: true,
            executablePath: findChromium(),
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
          postProcess(renderedRoute: any) {
            renderedRoute.html = renderedRoute.html.replace(
              /<script[^>]*src=[^>]*socket\.io[^>]*><\/script>/gi,
              "",
            );
            return renderedRoute;
          },
        }),
      ),
    ])
  : [];

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...prerenderPlugins,
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
