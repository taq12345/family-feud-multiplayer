import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "fun.friendlyfeud.app",
  appName: "Friendly Feud",
  webDir: "dist",
  server: {
    url: "https://friendlyfeud.fun",
    androidScheme: "https",
    cleartext: false,
  },
  android: {
    appendUserAgent: "FriendlyFeudApp/1.0",
    backgroundColor: "#070d1fff",
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
