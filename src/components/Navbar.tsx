import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" className="h-10 w-10" alt="AydenAIT Logo" />
          <span className="font-bold text-xl tracking-tight text-blue-800">AydenAIT Solution</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold items-center text-base">
          <li><Link to="/" className="hover:text-blue-600 text-gray-800 transition">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 text-gray-800 transition">Services</Link></li>
          <li><Link to="/clients" className="hover:text-blue-600 text-gray-800 transition">Clients</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 text-gray-800 transition">About</Link></li>
          <li><Link to="/careers" className="hover:text-blue-600 text-gray-800 transition">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 text-gray-800 transition">Contact</Link></li>
        </ul>

        <Link to="/contact" className="hidden md:block px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition text-base">Get in Touch</Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
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
            <li><Link to="/" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/clients" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>Clients</Link></li>
            <li><Link to="/about" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/careers" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
            <li><Link to="/contact" className="block hover:text-blue-600 text-gray-800 font-semibold text-base transition" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/contact" className="block px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition text-base shadow-lg" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
