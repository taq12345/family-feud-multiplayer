# Friendly Feud — Android (Capacitor wrapper)

Thin Capacitor shell that wraps **https://friendlyfeud.fun** in a native Android WebView. The web app stays the source of truth — every web update auto-propagates to the app with no rebuild required.

## Architecture

- `capacitor.config.ts` points `server.url` at `https://friendlyfeud.fun`
- The WebView appends `FriendlyFeudApp/1.0` to its User-Agent
- The web app (`artifacts/family-feud`) detects that UA in `src/lib/isMobileApp.ts`; `src/components/AdSense.tsx` never loads AdSense or renders ad units when running inside the app

## Build the APK (one-time setup needed)

Requires JDK 17+ and the Android SDK with platform 34 + build-tools 34. On a fresh machine with Android Studio installed, run:

```bash
# From repo root
pnpm install

# Initialize the Android native project (only once)
pnpm --filter @workspace/family-feud-mobile run cap:add:android
pnpm --filter @workspace/family-feud-mobile run cap:sync

# Build a debug APK (sideloadable on any Android phone)
pnpm --filter @workspace/family-feud-mobile run build:apk:debug
# → artifacts/family-feud-mobile/android/app/build/outputs/apk/debug/app-debug.apk
```

## App identity

- App ID: `fun.friendlyfeud.app`
- App name: `Friendly Feud`
- Background color: `#070d1f` (matches the web app's dark theme)

## Why no ads on mobile?

The web app is monetised with Google AdSense, and AdSense may not be served inside native WebViews (that is what AdMob is for). To stay compliant with both AdSense and Google Play policies, ads are stripped from the in-app experience via User-Agent detection (`isMobileApp`). AdMob can be added later as a follow-up.
