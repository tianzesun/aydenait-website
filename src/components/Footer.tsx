import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend/API
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-tr from-blue-950 to-[#10172a] text-blue-100 py-10 mt-16 border-t border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 px-4">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="h-7 w-7" alt="Logo"/>
            <span className="text-lg font-bold">AydenAIT Solution</span>
          </div>
          <p className="max-w-xs mt-2 text-blue-200 text-sm">Let's build something remarkable, together.</p>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="px-3 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500 w-full text-blue-800" />
            <button className="px-5 py-2 bg-blue-500 text-white rounded-r-md font-bold hover:bg-blue-600">Subscribe</button>
          </form>
          {subscribed && (
            <div className="mt-2 text-sm text-green-300">Thanks for subscribing!</div>
          )}
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-blue-300 transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-blue-300 transition-colors">
            Terms
          </Link>
        </div>

      </div>
      <div className="text-center mt-8 text-xs text-blue-300">© 2025 AydenAIT Solution. All rights reserved.</div>
    </footer>
  );
};
export default Footer;
