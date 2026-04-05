export function trackEvent(name: string, params?: Record<string, string>): void {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", name, params);
  }
}
