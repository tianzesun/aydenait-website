import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO
      title="404 - Page Not Found - AydenAIT Solution"
      description="The page you're looking for doesn't exist or has been moved."
      noindex={true}
    />
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900">
    <div className="text-center px-4">
      <h1 className="text-9xl font-extrabold text-white mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-200 mb-4">Page Not Found</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  </section>
  </>
);

export default NotFound;
