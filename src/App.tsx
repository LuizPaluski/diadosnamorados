import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import LoveReasons from "./pages/LoveReasons";
import OurStory from "./pages/OurStory";
import FutureDreams from "./pages/FutureDreams";
import SecretPage from "./pages/SecretPage";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";
import LettersPage from "./pages/Letters";
import QuizPage from "./pages/QuizPage";
import Journey3DPage from "./pages/Journey3D"; // 1. Importe a nova página

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/love-reasons" element={<LoveReasons />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/future-dreams" element={<FutureDreams />} />
          <Route path="/secret-treasure" element={<SecretPage />} />
          <Route path="/letters" element={<LettersPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/journey" element={<Journey3DPage />} /> {/* 2. Adicione a rota */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MusicPlayer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;