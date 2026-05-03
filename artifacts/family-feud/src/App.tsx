import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Lobby from "./pages/Lobby";
import { clerkAppearance } from "./lib/clerkAppearance";
import { NicknameSetupDialog } from "./components/AuthGate";

const GameRoom = lazy(() => import("./pages/GameRoom"));
const Rules = lazy(() => import("./pages/Rules"));
const Questions = lazy(() => import("./pages/Questions"));
const Feedback = lazy(() => import("./pages/Feedback"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 1,
    },
  },
});

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const clerkPubKey = publishableKeyFromHost(
  typeof window !== "undefined" ? window.location.hostname : "",
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

function Router() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-blue-950 flex items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <Switch>
        <Route path="/" component={Lobby} />
        <Route path="/rules" component={Rules} />
        <Route path="/questions" component={Questions} />
        <Route path="/about" component={About} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/room/:roomId" component={GameRoom} />
        <Route path="/sign-in/*?" component={SignInPage} />
        <Route path="/sign-up/*?" component={SignUpPage} />
        <Route>
          <div className="min-h-screen bg-blue-950 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-yellow-400">404</h1>
              <p className="text-blue-300 mt-2">Page not found</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Suspense>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  if (!clerkPubKey) {
    // Allow the app to function during local dev if the key is missing —
    // sign-in/up routes will simply be unreachable.
    return (
      <>
        <Router />
        <Toaster />
      </>
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      signInFallbackRedirectUrl={basePath || "/"}
      signUpFallbackRedirectUrl={basePath || "/"}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <NicknameSetupDialog />
      <Router />
      <Toaster />
    </ClerkProvider>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={basePath}>
            <ClerkProviderWithRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
