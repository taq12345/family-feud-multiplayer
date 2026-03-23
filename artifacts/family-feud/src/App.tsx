import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Lobby from "./pages/Lobby";
import GameRoom from "./pages/GameRoom";
import Rules from "./pages/Rules";

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
    <Switch>
      <Route path="/" component={Lobby} />
      <Route path="/rules" component={Rules} />
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
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
