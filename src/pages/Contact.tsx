import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";
import { sendContact } from "../lib/sendContact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendContact(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact AydenAIT - Enterprise AI & IT Consulting"
        description="Connect with our enterprise technology consulting experts. Specializing in AI consulting, IT solutions, AI development, and AIOps. Confidential consultation, NDA provided. Email: contact@aydenait.com"
        keywords="contact AI consultant, enterprise IT consulting, AIOps consultation, AI consulting inquiry, technology consulting contact"
        ogUrl="https://aydenait.com/contact"
        canonical="https://aydenait.com/contact"
      />
      <section className="py-16 min-h-screen bg-gradient-to-bl from-blue-950 via-[#232d47] to-blue-900">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-blue-200 mb-7">Let's connect—our experts respond within 1 business day. Info is 100% confidential.</p>
          {submitted && (
            <div role="status" className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-100">
              ✓ Thank you! We'll be in touch within 1 business day.
            </div>
          )}
          {error && (
            <div role="alert" className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-100">
              ✗ {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="contact-name" className="block mb-1 font-semibold text-blue-200">Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border bg-white/5 px-3 py-2 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
            </div>
            <div>
              <label htmlFor="contact-email" className="block mb-1 font-semibold text-blue-200">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border bg-white/5 px-3 py-2 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
            </div>
            <div>
              <label htmlFor="contact-phone" className="block mb-1 font-semibold text-blue-200">Phone</label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border bg-white/5 px-3 py-2 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
            </div>
            <div>
              <label htmlFor="contact-message" className="block mb-1 font-semibold text-blue-200">Message<span className="text-red-500">*</span></label>
              <textarea
                id="contact-message"
                rows={5}
                name="message"
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border bg-white/5 px-3 py-2 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold rounded-lg hover:bg-blue-700 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          <p className="mt-7 text-xs text-blue-300">We never share your info. NDA always available.</p>
        </div>
      {/* Info, Phones, Social, Hours */}
      <div className="flex flex-col gap-8 justify-center">
        <div className="bg-white/5 rounded-xl px-6 py-7 text-blue-100">
          <h2 className="font-bold text-blue-200 mb-2">Contact Direct</h2>
          <div className="mb-1"><b>Email:</b> <a className="text-cyan-300 underline" href="mailto:contact@aydenait.com">contact@aydenait.com</a></div>
          <div className="mb-1"><b>Business Hours:</b> 8am – 6pm ET, Mon–Fri</div>
          <div className="mb-1"><b>Location:</b> Toronto, ON, Canada</div>
        </div>
        <div className="bg-white/5 rounded-xl px-6 py-6 text-blue-100">
          <h3 className="font-bold text-blue-200 mb-2">Connect Socially</h3>
          <div className="flex gap-4 mb-3">
            <a href="https://linkedin.com/company/aydenait" className="hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="text-xs">Prefer a direct call? Leave your number—we'll contact you!</div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default Contact;
