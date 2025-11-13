import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="h-8 w-8" alt="AydenAIT Logo" />
          <span className="font-bold text-lg tracking-tight text-blue-800">AydenAIT Solution</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li><Link to="/" className="hover:text-blue-600 text-gray-800">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 text-gray-800">Services</Link></li>
          <li><Link to="/clients" className="hover:text-blue-600 text-gray-800">Clients</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 text-gray-800">About</Link></li>
          <li><Link to="/careers" className="hover:text-blue-600 text-gray-800">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 text-gray-800">Contact</Link></li>
        </ul>

        <Link to="/contact" className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">Get in Touch</Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <ul className="flex flex-col py-4 px-4 space-y-3">
            <li><Link to="/" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/clients" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>Clients</Link></li>
            <li><Link to="/about" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/careers" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
            <li><Link to="/contact" className="block hover:text-blue-600 text-gray-800" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/contact" className="block px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
