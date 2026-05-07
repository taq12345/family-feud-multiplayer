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

const AD_HTML_BANNER_728_90 = `<!DOCTYPE html>
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
    var MOBILE = {
      key: "7c3d49327fa4bdf90f0f7710de941992",
      width: 300,
      height: 250
    };
    var DESKTOP = {
      key: "206bfaf543b74bc7403ff3a609cd5874",
      width: 728,
      height: 90
    };

    function pickConfig(vw) {
      var isMobileUa = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
      return (isMobileUa || vw <= 768) ? MOBILE : DESKTOP;
    }

    function loadAd(config) {
      var scaleEl = document.getElementById("ad-scale");
      if (!scaleEl) return;
      scaleEl.innerHTML = "";
      scaleEl.style.width = config.width + "px";
      scaleEl.style.height = config.height + "px";

      window.atOptions = {
        key: config.key,
        format: "iframe",
        height: config.height,
        width: config.width,
        params: {}
      };

      var s = document.createElement("script");
      s.src = "https://www.highperformanceformat.com/" + config.key + "/invoke.js";
      scaleEl.appendChild(s);
    }

    function fitBanner() {
      var scaleEl = document.getElementById('ad-scale');
      if (!scaleEl) return;
      var vw = document.documentElement.clientWidth || window.innerWidth || 728;
      var cfg = pickConfig(vw);
      var scale = Math.min(1, vw / cfg.width);
      scaleEl.style.transform = 'scale(' + scale + ')';
      document.body.style.height = (cfg.height * scale) + 'px';
    }

    var initialVw = document.documentElement.clientWidth || window.innerWidth || 728;
    loadAd(pickConfig(initialVw));
    fitBanner();

    function handleResize() {
      fitBanner();
    }
    window.addEventListener('resize', handleResize);
  })();
</script>
</body>
</html>`;

type AdsterraWidgetVariant = "native" | "banner728x90";

export default function AdsterraWidget({ variant = "native" }: { variant?: AdsterraWidgetVariant }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(variant === "banner728x90" ? 90 : 120);
  const adHtml = variant === "banner728x90" ? AD_HTML_BANNER_728_90 : AD_HTML_NATIVE;

  useEffect(() => {
    if (isMobileApp) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    setHeight(variant === "banner728x90" ? 90 : 120);

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
  }, [variant]);

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
