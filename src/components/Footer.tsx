const Footer = () => (
  <footer className="bg-gradient-to-tr from-blue-950 to-[#10172a] text-blue-100 py-10 mt-16 border-t border-blue-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 px-4">
      <div className="mb-6 md:mb-0">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="h-7 w-7" alt="Logo"/>
          <span className="text-lg font-bold">AydenAIT Solution</span>
        </div>
        <p className="max-w-xs mt-2 text-blue-200 text-sm">Let’s build something remarkable, together.</p>
      </div>
      <form className="flex gap-2 w-full max-w-xs">
        <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500 w-full text-blue-800" />
        <button className="px-5 py-2 bg-blue-500 text-white rounded-r-md font-bold hover:bg-blue-600">Subscribe</button>
      </form>
      <div className="flex gap-4 mt-4 md:mt-0">
  <a
    href="/privacy"
    className="hover:text-blue-300 transition-colors"
    style={{ textDecoration: "none" }}
  >
    Privacy
  </a>
  <a
    href="/terms"
    className="hover:text-blue-300 transition-colors"
    style={{ textDecoration: "none" }}
  >
    Terms
  </a>
</div>

    </div>
    <div className="text-center mt-8 text-xs text-blue-300">© 2025 AydenAIT Solution. All rights reserved.</div>
  </footer>
);
export default Footer;
