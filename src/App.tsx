import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  // Show the prerendered page as-is on first load; fade in later route changes (CSS, see index.css)
  const isFirstPage = useRef(true);
  useEffect(() => {
    isFirstPage.current = false;
  }, []);

  return (
    <div key={location.pathname} className={isFirstPage.current ? undefined : "animate-page-in"}>
      {/* Inside the keyed div, so it remounts (and clears any error) on every page change */}
      <ErrorBoundary>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
};

// The router is supplied by main.tsx (BrowserRouter) or entry-server.tsx (StaticRouter)
function App() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-blue-900 focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-[#0b1120] text-white">
        <div className="bg-noise" />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 relative z-10 focus:outline-none">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
