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
      <section className="py-16 md:py-24 min-h-screen bg-gradient-to-bl from-blue-950 via-[#232d47] to-blue-900">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-blue-200">Tell us about your project. Our experts respond within 1 business day, and everything you share stays confidential.</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur">
            {submitted && (
              <div role="status" className="mb-6 p-3 bg-green-500/20 border border-green-500 rounded text-green-100">
                ✓ Thank you! We'll be in touch within 1 business day.
              </div>
            )}
            {error && (
              <div role="alert" className="mb-6 p-3 bg-red-500/20 border border-red-500 rounded text-red-100">
                ✗ {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
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
                  className="w-full border bg-white/5 px-3 py-2.5 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
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
                  className="w-full border bg-white/5 px-3 py-2.5 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-phone" className="block mb-1 font-semibold text-blue-200">Phone <span className="font-normal text-blue-300">(optional)</span></label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border bg-white/5 px-3 py-2.5 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block mb-1 font-semibold text-blue-200">Message<span className="text-red-500">*</span></label>
                <textarea
                  id="contact-message"
                  rows={7}
                  name="message"
                  maxLength={5000}
                  placeholder="What are you looking to build or improve?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border bg-white/5 px-3 py-2.5 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"></textarea>
              </div>
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-1">
                <p className="text-xs text-blue-300">We never share your info. NDA always available.</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Direct contact details */}
          <div className="mt-8 flex flex-col md:flex-row md:justify-center gap-2 md:gap-8 text-center text-sm text-blue-200">
            <div>Email: <a className="text-cyan-300 underline" href="mailto:contact@aydenait.com">contact@aydenait.com</a></div>
            <div>Mon–Fri, 8am – 6pm ET</div>
            <div>Toronto, ON, Canada</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
