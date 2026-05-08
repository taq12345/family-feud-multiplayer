import { useRef, useEffect, useState } from "react";
import { isMobileApp } from "@/lib/isMobileApp";

const AD_HTML_NATIVE = `<!DOCTYPE html>
<html>
<head>
<style>*{margin:0;padding:0}body{background:transparent}</style>
</head>
<body>
<script async data-cfasync="false" src="https://pl29266201.profitablecpmratenetwork.com/272c9d71cc235c9077a71bec4e2c70cb/invoke.js"><\/script>
<div id="container-272c9d71cc235c9077a71bec4e2c70cb"></div>
</body>
</html>`;

function buildBannerHtml(config: { key: string; width: number; height: number }): string {
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
<div id="ad-scale">
</div>
<script>
  (function () {
    var CONFIG = {
      key: "${config.key}",
      width: ${config.width},
      height: ${config.height}
    };
    function loadAd() {
      var scaleEl = document.getElementById("ad-scale");
      if (!scaleEl) return;
      scaleEl.innerHTML = "";
      scaleEl.style.width = CONFIG.width + "px";
      scaleEl.style.height = CONFIG.height + "px";

      window.atOptions = {
        key: CONFIG.key,
        format: "iframe",
        height: CONFIG.height,
        width: CONFIG.width,
        params: {}
      };

      var s = document.createElement("script");
      s.src = "https://www.highperformanceformat.com/" + CONFIG.key + "/invoke.js";
      scaleEl.appendChild(s);
    }

    function fitBanner() {
      var scaleEl = document.getElementById('ad-scale');
      if (!scaleEl) return;
      var vw = document.documentElement.clientWidth || window.innerWidth || ${config.width};
      var scale = Math.min(1, vw / CONFIG.width);
      scaleEl.style.transform = 'scale(' + scale + ')';
      document.body.style.height = (CONFIG.height * scale) + 'px';
    }

    loadAd();
    fitBanner();

    function handleResize() {
      fitBanner();
    }
    window.addEventListener('resize', handleResize);
  })();
</script>
</body>
</html>`;
}

type AdsterraWidgetVariant = "native" | "banner728x90";
type BannerConfig = { key: string; width: number; height: number };

export default function AdsterraWidget({
  variant = "native",
  mobileBannerConfig,
}: {
  variant?: AdsterraWidgetVariant;
  mobileBannerConfig?: BannerConfig;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobileViewport(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const bannerConfig: BannerConfig = isMobileViewport
    ? (mobileBannerConfig ?? { key: "7c3d49327fa4bdf90f0f7710de941992", width: 300, height: 250 })
    : { key: "206bfaf543b74bc7403ff3a609cd5874", width: 728, height: 90 };
  const [height, setHeight] = useState(variant === "banner728x90" ? bannerConfig.height : 120);
  const adHtml = variant === "banner728x90" ? buildBannerHtml(bannerConfig) : AD_HTML_NATIVE;

  useEffect(() => {
    if (isMobileApp) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    setHeight(variant === "banner728x90" ? bannerConfig.height : 120);

    const resize = () => {
      try {
        const h = iframe.contentDocument?.body?.scrollHeight;
        if (h && h > 0) setHeight(h);
      } catch {}
    };

    iframe.addEventListener("load", resize);
    const interval = setInterval(resize, 500);

    return () => {
      iframe.removeEventListener("load", resize);
      clearInterval(interval);
    };
  }, [variant, bannerConfig.height]);

  if (isMobileApp) return null;

  return (
    <iframe
      ref={iframeRef}
      srcDoc={adHtml}
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      scrolling="no"
      style={{ width: "100%", height, border: "none", display: "block", overflow: "hidden" }}
      title="Advertisement"
    />
  );
}
