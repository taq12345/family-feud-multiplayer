import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { isMobileApp } from "@/lib/isMobileApp";
import { AD_SLOTS, ADSENSE_CLIENT, isAdEligiblePath, type AdSlotName } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    __PRERENDER_INJECTED?: unknown;
  }
}

const SCRIPT_ID = "adsbygoogle-js";

// True while the page is being snapshotted by the build-time prerenderer
// (vite.config.ts injects this marker). Ads are pointless in a snapshot and
// only slow the render down.
const isPrerender = typeof window !== "undefined" && !!window.__PRERENDER_INJECTED;

function adsAllowedHere(pathname: string): boolean {
  return !isMobileApp && !isPrerender && isAdEligiblePath(pathname);
}

/**
 * Injects the AdSense loader script the first time the app lands on an
 * ad-eligible route. Mount once near the router. It never injects on game
 * rooms, auth pages or other content-free screens, and never inside the
 * Android wrapper.
 */
export function AdSenseLoader() {
  const [location] = useLocation();

  useEffect(() => {
    if (!adsAllowedHere(location)) return;
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    document.head.appendChild(script);
  }, [location]);

  return null;
}

/**
 * A single responsive AdSense display unit. Renders nothing until the slot
 * has an ID configured in `AD_SLOTS`, and never on ineligible routes.
 */
export function AdUnit({ slot, className }: { slot: AdSlotName; className?: string }) {
  const [location] = useLocation();
  const insRef = useRef<HTMLModElement>(null);
  const slotId = AD_SLOTS[slot];
  const enabled = !!slotId && adsAllowedHere(location);

  useEffect(() => {
    if (!enabled) return;
    const ins = insRef.current;
    // Guard against pushing twice for the same <ins> (re-renders, StrictMode).
    if (!ins || ins.getAttribute("data-adsbygoogle-status")) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ad blockers can throw here — ignore */
    }
  }, [enabled, slotId]);

  if (!enabled) return null;

  return (
    <div className={className} aria-label="Advertisement">
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
