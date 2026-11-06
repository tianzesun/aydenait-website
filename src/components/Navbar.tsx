import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/careers", label: "Careers" },
  { to: "/about", label: "About" },
];

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative transition-all duration-200 hover:text-cyan-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-300 after:transition-all after:duration-200 hover:after:w-full ${
    isActive ? "text-cyan-300 after:w-full" : "text-white after:w-0"
  }`;

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block hover:text-cyan-300 font-semibold text-base transition-colors hover:bg-white/5 p-2 rounded-lg ${
    isActive ? "text-cyan-300 bg-white/5" : "text-white"
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
      ? 'bg-[#0b1120]/85 backdrop-blur-xl border-b border-white/10 py-3'
      : 'bg-transparent border-b border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" className="h-10 w-10" alt="" />
          <span className="font-bold text-xl tracking-tight text-white">AydenAIT Solution</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold items-center text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:block px-5 py-2.5 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors text-base">Get in touch</Link>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 text-white"
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
        <div id="mobile-menu" className="md:hidden bg-[#0b1120] border-t border-white/10">
          <ul className="flex flex-col py-5 px-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2"><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2.5 rounded-full bg-white text-[#0b1120] font-semibold text-center hover:bg-cyan-200 transition-colors text-base">Get in touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
