import { useRef, useEffect, useState } from "react";
import { isMobileApp } from "@/lib/isMobileApp";

// Adsterra placements, chosen from Jul–Aug 2026 results (revenue per 1,000
// views): native $0.87, 728x90 $0.38, 160x600 $0.31, 320x50 $0.06. On phones
// the native widget stacks its four ads into a ~1,300px column, so phones get
// a 300x250 in that slot instead. Game rooms only show ads at natural breaks
// (waiting screen, between rounds, game over) and in wide-screen side rails.
const NATIVE_KEY = "272c9d71cc235c9077a71bec4e2c70cb";
const BANNERS = {
  leaderboard: { key: "206bfaf543b74bc7403ff3a609cd5874", width: 728, height: 90 },
  mobile: { key: "a27b4847f4b5d00d63623929539b2b8a", width: 320, height: 50 },
  skyscraper: { key: "782a09ea05e6e2301dae0976801a9334", width: 160, height: 600 },
  rectangle: { key: "7c3d49327fa4bdf90f0f7710de941992", width: 300, height: 250 },
} as const;
type BannerConfig = (typeof BANNERS)[keyof typeof BANNERS];

// Rails only fit beside the page column on very wide screens (Tailwind 2xl).
const RAIL_MIN_VIEWPORT = 1536;
const MOBILE_MAX_VIEWPORT = 768;
// Start loading slightly before the slot scrolls into view.
const LOAD_MARGIN = "200px 0px";

const NATIVE_HTML = `<!DOCTYPE html>
<html>
<head>
<style>*{margin:0;padding:0}body{background:transparent}</style>
</head>
<body>
<script async data-cfasync="false" src="https://pl29266201.profitableratecpmnetwork.com/${NATIVE_KEY}/invoke.js"><\/script>
<div id="container-${NATIVE_KEY}"></div>
</body>
</html>`;

function buildBannerHtml(config: BannerConfig): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:transparent;overflow:hidden}
body{width:100%;display:flex;justify-content:center;align-items:flex-start}
#ad-scale{transform-origin:top center}
</style>
</head>
<body>
<div id="ad-scale"></div>
<script>
  (function () {
    var CONFIG = { key: "${config.key}", width: ${config.width}, height: ${config.height} };
    var scaleEl = document.getElementById("ad-scale");
    scaleEl.style.width = CONFIG.width + "px";
    scaleEl.style.height = CONFIG.height + "px";
    window.atOptions = { key: CONFIG.key, format: "iframe", height: CONFIG.height, width: CONFIG.width, params: {} };
    var s = document.createElement("script");
    s.src = "https://www.highrevenueformat.com/" + CONFIG.key + "/invoke.js";
    scaleEl.appendChild(s);

    // Shrink the banner to fit narrow containers instead of overflowing.
    function fitBanner() {
      var vw = document.documentElement.clientWidth || window.innerWidth || CONFIG.width;
      var scale = Math.min(1, vw / CONFIG.width);
      scaleEl.style.transform = "scale(" + scale + ")";
      document.body.style.height = (CONFIG.height * scale) + "px";
    }
    fitBanner();
    window.addEventListener("resize", fitBanner);
  })();
<\/script>
</body>
</html>`;
}

type AdsterraVariant =
  /** Native widget on desktop, 300x250 on phones. One per page: Adsterra
   *  fills the native into a fixed container id. */
  | "native"
  /** 728x90 on desktop, 320x50 on phones. */
  | "banner"
  /** 160x600 side rail, rendered only on very wide screens. */
  | "rail";

export default function AdsterraWidget({
  variant = "native",
  hideOnPhone = false,
  label = false,
}: {
  variant?: AdsterraVariant;
  /** Render nothing on phone-width screens. */
  hideOnPhone?: boolean;
  /** Show a small "Advertisement" caption, so the ad reads as separate from
   *  the game UI around it. */
  label?: boolean;
}) {
  const slotRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : Number.POSITIVE_INFINITY,
  );
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isPhone = viewportWidth <= MOBILE_MAX_VIEWPORT;
  const banner: BannerConfig | null =
    variant === "rail"
      ? BANNERS.skyscraper
      : variant === "banner"
        ? isPhone
          ? BANNERS.mobile
          : BANNERS.leaderboard
        : isPhone
          ? BANNERS.rectangle
          : null;
  const initialHeight = banner ? banner.height : 120;
  const [height, setHeight] = useState(initialHeight);
  const adHtml = banner ? buildBannerHtml(banner) : NATIVE_HTML;

  // No ads inside the Android wrapper (Play Store policy) or in build-time
  // prerender snapshots (the live page would load every ad twice).
  const suppressed =
    isMobileApp ||
    (typeof window !== "undefined" && !!window.__PRERENDER_INJECTED) ||
    (variant === "rail" && viewportWidth < RAIL_MIN_VIEWPORT) ||
    (hideOnPhone && isPhone);

  // Load the ad only once its slot is actually on screen. Slots inside hidden
  // or clipped containers never intersect, so they never count an impression
  // nobody could see.
  useEffect(() => {
    if (suppressed || inView) return;
    const el = slotRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: LOAD_MARGIN },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [suppressed, inView]);

  // The native widget's height depends on the creative, so follow it.
  useEffect(() => {
    setHeight(initialHeight);
    if (!inView) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    const resize = () => {
      try {
        const h = iframe.contentDocument?.body?.scrollHeight;
        if (h && h > 0) setHeight(h);
      } catch {
        /* cross-origin creative — keep the current height */
      }
    };
    iframe.addEventListener("load", resize);
    const interval = setInterval(resize, 500);
    return () => {
      iframe.removeEventListener("load", resize);
      clearInterval(interval);
    };
  }, [initialHeight, adHtml, inView]);

  if (suppressed) return null;

  const slot = (
    <div ref={slotRef} style={inView ? undefined : { minHeight: initialHeight }}>
      {inView && (
        <iframe
          ref={iframeRef}
          srcDoc={adHtml}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          scrolling="no"
          style={{ width: "100%", height, border: "none", display: "block", overflow: "hidden" }}
          title="Advertisement"
        />
      )}
    </div>
  );

  if (!label) return slot;
  return (
    <div>
      <p className="text-center text-[10px] font-medium uppercase tracking-wider text-slate-600 mb-1">
        Advertisement
      </p>
      {slot}
    </div>
  );
}
