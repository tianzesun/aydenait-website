import { Link } from "react-router-dom";
import { solutions } from "../data/solutions";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" className="h-8 w-8" alt="AydenAIT Logo"/>
              <span className="text-xl font-bold text-white">AydenAIT Solution</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI solutions for education and beyond. Platforms in use at the University of Toronto, built in Toronto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h2>
            <ul className="space-y-2 text-sm">
              {solutions.map((item) => (
                <li key={item.title}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  Toronto, ON<br />Canada
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@aydenait.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@aydenait.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12898599523" className="text-gray-400 hover:text-white transition-colors">
                  (289) 859-9523
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Year is fixed at build time in the prerendered HTML and updated on hydration */}
            <div className="text-xs text-gray-400" suppressHydrationWarning>
              © {new Date().getFullYear()} AydenAIT Solution. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/faq" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
