import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/careers", label: "Careers" },
  { to: "/about", label: "About" },
];

const desktopLinkClass = (isScrolled: boolean) => ({ isActive }: { isActive: boolean }) => {
  const colours = isScrolled
    ? `hover:text-blue-600 after:bg-blue-600 ${isActive ? "text-blue-600" : "text-gray-800"}`
    : `hover:text-cyan-300 after:bg-cyan-300 ${isActive ? "text-cyan-300" : "text-white"}`;
  return `relative transition-all duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full ${
    isActive ? "after:w-full" : "after:w-0"
  } ${colours}`;
};

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block hover:text-blue-600 font-semibold text-base transition-all hover:translate-x-2 hover:bg-blue-50 p-2 rounded-lg ${
    isActive ? "text-blue-600 bg-blue-50" : "text-gray-800"
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes (including logo and footer links)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu and returns focus to the menu button
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-100/50 py-3'
      : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" className="h-10 w-10" alt="" />
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-blue-800' : 'text-white'}`}>AydenAIT Solution</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold items-center text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={desktopLinkClass(isScrolled)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 text-base hover:scale-105 active:scale-95">Get in Touch</Link>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className={`md:hidden p-2 -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-5 px-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2"><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-all text-base shadow-lg hover:shadow-xl">Get in Touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
