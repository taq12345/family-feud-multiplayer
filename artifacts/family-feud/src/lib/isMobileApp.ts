// True when the page is running inside the Capacitor Android wrapper.
// The wrapper appends "FriendlyFeudApp" to the WebView's User-Agent
// (see artifacts/family-feud-mobile/capacitor.config.ts).
// Used to suppress all third-party ad networks for Play Store policy
// compliance — AdMob will be added separately later.
export const isMobileApp =
  typeof navigator !== "undefined" &&
  /FriendlyFeudApp/i.test(navigator.userAgent);
