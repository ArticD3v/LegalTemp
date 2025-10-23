import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contracts from "./pages/Contracts";
import Disputes from "./pages/Disputes";
import ContractEdit from "./pages/ContractEdit";
import Advocacy from "./pages/Advocacy";
import Policy from "./pages/Policy";
import Training from "./pages/Training";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/contracts/edit" element={<ContractEdit />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/training" element={<Training />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
