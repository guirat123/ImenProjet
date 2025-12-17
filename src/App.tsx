import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoxesPage from "./pages/BoxesPage";
import AbonnementPage from "./pages/AbonnementPage";
import CartPage from "./pages/CartPage";
import BoissonsHealthyPage from "./pages/BoissonsHealthyPage";
import OffersPage from "./pages/OffersPage"; // Import OffersPage
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/boxes" element={<BoxesPage />} />
              <Route path="/abonnement" element={<AbonnementPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/boissons-healthy" element={<BoissonsHealthyPage />} />
              <Route path="/offers" element={<OffersPage />} /> {/* Add OffersPage route */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;