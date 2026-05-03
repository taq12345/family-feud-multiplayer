import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

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

const isProductionBuild = process.env.NODE_ENV === "production";

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
    ...(isProductionBuild
      ? [
          (await import("@prerenderer/rollup-plugin")).default({
            routes: PRERENDER_ROUTES,
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              maxConcurrentRoutes: 2,
              renderAfterTime: 2500,
              headless: true,
              executablePath:
                process.env.PUPPETEER_EXECUTABLE_PATH ??
                "/nix/store/qa9cnw4v5xkxyip6mb9kxqfq1z4x2dx1-chromium-138.0.7204.100/bin/chromium",
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
