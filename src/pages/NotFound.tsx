import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO
      title="404 - Page not found - AydenAIT Solution"
      description="The page you're looking for doesn't exist or has been moved."
      noindex={true}
    />
    <article className="relative overflow-hidden bg-[#0b1120] text-blue-100">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-28">
        <p className="font-mono text-sm text-cyan-300 mb-4">404</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Page not found</h1>
        <p className="text-2xl leading-snug text-white/90 max-w-2xl mb-10">
          The page you requested does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-16">
          <Link to="/" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
            Return to Home <span aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className="font-semibold text-white hover:text-cyan-300 transition-colors">
            Contact us
          </Link>
        </div>
        <ul className="grid sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-3xl">
          {[
            ["/products", "Products", "The AI platforms we've built"],
            ["/services", "Services", "What we can build for you"],
            ["/faq", "FAQ", "Answers to common questions"],
          ].map(([to, label, desc]) => (
            <li key={to}>
              <Link to={to} className="group block">
                <span className="block font-semibold text-white group-hover:text-cyan-300 transition-colors">{label} <span aria-hidden="true">→</span></span>
                <span className="block text-sm text-blue-200">{desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </>
);

export default NotFound;
