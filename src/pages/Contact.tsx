import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { engagementSteps } from "../data/solutions";
import { BOOKING_URL } from "../data/booking";
import BookingLink from "../components/BookingLink";

const Contact = () => (
    <>
      <SEO
        title="Contact AydenAIT - AI solutions for education and beyond"
        description="Contact AydenAIT about AI solutions for education, civic services, finance or business. Confidential consultation, NDA provided. Email: contact@aydenait.com"
        keywords="contact AydenAIT, AI consultation, custom AI project inquiry, AI consulting Toronto"
        ogUrl="https://aydenait.com/contact"
        canonical="https://aydenait.com/contact"
      />
      <article className="relative overflow-hidden bg-[#0b1120] text-blue-100">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-cyan-300 mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Contact us</h1>
              <p className="text-2xl leading-snug text-white/90 mb-10">
                Tell us what you'd like AI to help with. The first consultation is complimentary.
              </p>

              {BOOKING_URL && (
                <div className="mb-10">
                  <BookingLink className="inline-block px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                    Book a 30-minute call
                  </BookingLink>
                  <p className="mt-3 text-sm text-blue-300">Pick a time that suits you, or send us a message.</p>
                </div>
              )}

              <dl className="divide-y divide-white/10 border-y border-white/10 mb-10">
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                  <dt className="text-sm uppercase tracking-widest text-blue-300/80 pt-0.5">Email</dt>
                  <dd><a className="text-white hover:text-cyan-300 transition-colors" href="mailto:contact@aydenait.com">contact@aydenait.com</a></dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                  <dt className="text-sm uppercase tracking-widest text-blue-300/80 pt-0.5">Phone</dt>
                  <dd><a className="text-white hover:text-cyan-300 transition-colors" href="tel:+12898599523">(289) 859-9523</a></dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                  <dt className="text-sm uppercase tracking-widest text-blue-300/80 pt-0.5">Office</dt>
                  <dd className="text-white">Toronto, Ontario, Canada</dd>
                </div>
              </dl>

              <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-4">What happens next</h2>
              <ol className="space-y-3">
                {engagementSteps.slice(0, 2).map((step, idx) => (
                  <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-2">
                    <span className="font-mono text-sm text-cyan-300 pt-0.5">{String(idx + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block font-semibold text-white">{step.title}</span>
                      <span className="block text-blue-200">{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-blue-300">Confidential consultation · NDA available</p>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-6 md:p-10 bg-white/[0.03] border border-white/10 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.3)]">
                <ContactForm source="contact" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
);

export default Contact;
