const Navbar = () => (
  <nav className="sticky top-0 z-40 bg-white border-b shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" className="h-8 w-8" alt="AydenAIT Logo" />
        <span className="font-bold text-lg tracking-tight text-blue-800">AydenAIT Solution</span>
      </div>
      <ul className="hidden md:flex gap-8 font-medium items-center">
        <li><a href="/" className="hover:text-blue-600 text-gray-800">Home</a></li>
        <li><a href="/services" className="hover:text-blue-600 text-gray-800">Services</a></li>
        <li><a href="/clients" className="hover:text-blue-600 text-gray-800">Clients</a></li>
        {/* About Dropdown, etc. */}
        <li><a href="/about" className="hover:text-blue-600 text-gray-800">About</a></li>
        <li><a href="/careers" className="hover:text-blue-600 text-gray-800">Careers</a></li>
        <li><a href="/contact" className="hover:text-blue-600 text-gray-800">Contact</a></li>
      </ul>
      <a href="/contact" className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">Get in Touch</a>
    </div>
  </nav>
);

export default Navbar;
