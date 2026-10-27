import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // initial={false}: show the prerendered page as-is on first load; animate later route changes
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Clients />} />
          <Route path="/portfolio/:slug" element={<ProductPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </m.div>
    </AnimatePresence>
  );
};

// The router is supplied by main.tsx (BrowserRouter) or entry-server.tsx (StaticRouter)
function App() {
  return (
    // LazyMotion + m: ship only the animation features the page transitions use (smaller bundle)
    // reducedMotion="user": skip movement for visitors who set "reduce motion" in their OS
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-blue-900 focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-[#10172a] text-white">
        <div className="bg-noise" />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 relative z-10 focus:outline-none">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </MotionConfig>
    </LazyMotion>
  );
}
export default App;
