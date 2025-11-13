import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend/API
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact Us - AydenAIT Solution"
        description="Get in touch with our DevOps and AI engineering experts. Free consultation, NDA standard, response within 1 business day. Email: hello@aydenait.com"
        keywords="contact DevOps consultant, AI engineering contact, free DevOps assessment, DevOps consultation"
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
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-100">
              Thank you! We'll be in touch soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold text-blue-200">Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b bg-transparent px-3 py-2 text-blue-100 border-blue-400 rounded focus:outline-none focus:border-cyan-400 transition"/>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-blue-200">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b bg-transparent px-3 py-2 text-blue-100 border-blue-400 rounded focus:outline-none focus:border-cyan-400 transition"/>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-blue-200">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b bg-transparent px-3 py-2 text-blue-100 border-blue-400 rounded focus:outline-none focus:border-cyan-400 transition"/>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-blue-200">Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b bg-transparent px-3 py-2 text-blue-100 border-blue-400 rounded focus:outline-none focus:border-cyan-400 transition"></textarea>
            </div>
            <button type="submit" className="mt-3 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold rounded-lg hover:bg-blue-700 transition text-lg">
              Send Message
            </button>
          </form>
          <p className="mt-7 text-xs text-blue-300">We never share your info. NDA always available.</p>
        </div>
      {/* Info, Phones, Social, Hours */}
      <div className="flex flex-col gap-8 justify-center">
        <div className="bg-white/5 rounded-xl px-6 py-7 text-blue-100">
          <h2 className="font-bold text-blue-200 mb-2">Contact Direct</h2>
          <div className="mb-1"><b>Email:</b> <a className="text-cyan-300 underline" href="mailto:hello@aydenait.com">hello@aydenait.com</a></div>
          <div className="mb-1"><b>Phone:</b> <a className="text-cyan-300 underline" href="tel:+1234567890">(123) 456-7890</a></div>
          <div className="mb-1"><b>Business Hours:</b> 8am – 6pm EST, Mon–Fri</div>
          <div className="mb-1"><b>Address:</b> 123 Tech Lane, Toronto, ON</div>
        </div>
        <div className="bg-white/5 rounded-xl px-6 py-6 text-blue-100">
          <h3 className="font-bold text-blue-200 mb-2">Connect Socially</h3>
          <div className="flex gap-4 mb-3">
            <a href="https://linkedin.com/" className="hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" className="hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">Twitter</a>
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
