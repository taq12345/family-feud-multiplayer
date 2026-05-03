import { useRef, useEffect, useState } from "react";
import { isMobileApp } from "@/lib/isMobileApp";

const AD_HTML = `<!DOCTYPE html>
<html>
<head>
<style>*{margin:0;padding:0}body{background:transparent}</style>
</head>
<body>
<script async data-cfasync="false" src="https://pl29266201.profitablecpmratenetwork.com/272c9d71cc235c9077a71bec4e2c70cb/invoke.js"><\/script>
<div id="container-272c9d71cc235c9077a71bec4e2c70cb"></div>
</body>
</html>`;

export default function AdsterraWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(120);

  useEffect(() => {
    if (isMobileApp) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

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
  }, []);

  if (isMobileApp) return null;

  return (
    <iframe
      ref={iframeRef}
      srcDoc={AD_HTML}
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      scrolling="no"
      style={{ width: "100%", height, border: "none", display: "block", overflow: "hidden" }}
      title="Advertisement"
    />
  );
}
