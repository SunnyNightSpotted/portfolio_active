import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { LensProvider } from "./contexts/LensContext";
import Layout from "./components/Layout";
import ImagePreloader from "./components/ImagePreloader";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import PasswordGate from "./components/PasswordGate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <LensProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ImagePreloader />
          <PasswordGate>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </PasswordGate>
        </BrowserRouter>
      </LensProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
