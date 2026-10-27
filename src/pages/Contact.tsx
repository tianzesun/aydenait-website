import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const Contact = () => (
    <>
      <SEO
        title="Contact AydenAIT - AI Solutions for Education and Beyond"
        description="Contact AydenAIT about AI solutions for education, civic services, finance or business. Confidential consultation, NDA provided. Email: contact@aydenait.com"
        keywords="contact AydenAIT, AI consultation, custom AI project inquiry, AI consulting Toronto"
        ogUrl="https://aydenait.com/contact"
        canonical="https://aydenait.com/contact"
      />
      <section className="py-16 md:py-24 min-h-screen bg-gradient-to-bl from-blue-950 via-[#232d47] to-blue-900">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur">
            <ContactForm source="contact" />
          </div>

          {/* Direct contact details */}
          <div className="mt-8 text-center text-sm text-blue-200">
            Email: <a className="text-cyan-300 underline" href="mailto:contact@aydenait.com">contact@aydenait.com</a>
          </div>
        </div>
      </section>
    </>
);

export default Contact;
