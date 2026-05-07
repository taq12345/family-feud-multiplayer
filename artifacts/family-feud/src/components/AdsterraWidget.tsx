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
<style>*{margin:0;padding:0;box-sizing:border-box}body{background:transparent;display:flex;justify-content:center;overflow:hidden}</style>
</head>
<body>
<script>
  atOptions = {
    'key' : '206bfaf543b74bc7403ff3a609cd5874',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/206bfaf543b74bc7403ff3a609cd5874/invoke.js"><\/script>
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
