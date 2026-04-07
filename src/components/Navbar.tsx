import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled 
      ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-100/50 py-3' 
      : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
        <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" className="h-10 w-10" alt="AydenAIT Logo" />
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-blue-800' : 'text-white'}`}>AydenAIT Solution</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold items-center text-base">
          <li><Link to="/" className={`relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${isScrolled ? 'text-gray-800 hover:text-blue-600 after:bg-blue-600' : 'text-white hover:text-cyan-300 after:bg-cyan-300'}`}>Home</Link></li>
          <li><Link to="/services" className={`relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${isScrolled ? 'text-gray-800 hover:text-blue-600 after:bg-blue-600' : 'text-white hover:text-cyan-300 after:bg-cyan-300'}`}>Services</Link></li>
          <li><Link to="/about" className={`relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${isScrolled ? 'text-gray-800 hover:text-blue-600 after:bg-blue-600' : 'text-white hover:text-cyan-300 after:bg-cyan-300'}`}>About</Link></li>
          <li><Link to="/portfolio" className={`relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${isScrolled ? 'text-gray-800 hover:text-blue-600 after:bg-blue-600' : 'text-white hover:text-cyan-300 after:bg-cyan-300'}`}>Portfolio</Link></li>
          <li><Link to="/careers" className={`relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${isScrolled ? 'text-gray-800 hover:text-blue-600 after:bg-blue-600' : 'text-white hover:text-cyan-300 after:bg-cyan-300'}`}>Careers</Link></li>
        </ul>

        <Link to="/contact" className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 text-base hover:scale-105 active:scale-95">Get in Touch</Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-5 px-4 space-y-4">
            <li><Link to="/" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/about" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/careers" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
            <li><Link to="/contact" className="block px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-all text-base shadow-lg hover:shadow-xl hover:scale-105" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
