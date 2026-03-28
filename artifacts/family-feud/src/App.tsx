import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Lobby from "./pages/Lobby";

const GameRoom = lazy(() => import("./pages/GameRoom"));
const Rules = lazy(() => import("./pages/Rules"));
const Questions = lazy(() => import("./pages/Questions"));
const Feedback = lazy(() => import("./pages/Feedback"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 1,
    },
  },
});

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
        <Route path="/room/:roomId" component={GameRoom} />
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

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
