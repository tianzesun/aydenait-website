import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { sendContact, type ContactSource } from "../lib/sendContact";

interface ContactFormProps {
  source: ContactSource;
  submitLabel?: string;
  messagePlaceholder?: string;
  // "split" puts name/email and organization/phone side by side on wider screens
  layout?: "split" | "stacked";
}

const emptyForm = { name: "", email: "", organization: "", phone: "", message: "" };

const inputClass =
  "w-full border bg-white/5 px-3 py-2.5 text-blue-50 placeholder-blue-300/60 border-blue-400/60 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition";
const labelClass = "block mb-1 font-semibold text-blue-200";

// The single enquiry form used on the Contact page and the Home page assessment section.
const ContactForm = ({
  source,
  submitLabel = "Send Message",
  messagePlaceholder = "What are you looking to build or improve?",
  layout = "split",
}: ContactFormProps) => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const id = (field: string) => `${source}-${field}`;
  const half = layout === "split" ? "" : "md:col-span-2";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      await sendContact({ ...formData, source });
      setSubmitted(true);
      setFormData(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your message. Please email contact@aydenait.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
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
        <div className={half}>
          <label htmlFor={id("name")} className={labelClass}>Name<span className="text-red-500">*</span></label>
          <input type="text" id={id("name")} name="name" autoComplete="name" maxLength={200}
            value={formData.name} onChange={handleChange} required className={inputClass} />
        </div>
        <div className={half}>
          <label htmlFor={id("email")} className={labelClass}>Email<span className="text-red-500">*</span></label>
          <input type="email" id={id("email")} name="email" autoComplete="email" maxLength={254}
            value={formData.email} onChange={handleChange} required className={inputClass} />
        </div>
        <div className={half}>
          <label htmlFor={id("organization")} className={labelClass}>Organization <span className="font-normal text-blue-300">(optional)</span></label>
          <input type="text" id={id("organization")} name="organization" autoComplete="organization" maxLength={200}
            placeholder="University, city or company"
            value={formData.organization} onChange={handleChange} className={inputClass} />
        </div>
        <div className={half}>
          <label htmlFor={id("phone")} className={labelClass}>Phone <span className="font-normal text-blue-300">(optional)</span></label>
          <input type="tel" id={id("phone")} name="phone" autoComplete="tel" maxLength={50}
            value={formData.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={id("message")} className={labelClass}>Message<span className="text-red-500">*</span></label>
          <textarea id={id("message")} name="message" rows={layout === "split" ? 7 : 5} maxLength={5000}
            placeholder={messagePlaceholder}
            value={formData.message} onChange={handleChange} required className={inputClass}></textarea>
        </div>
        <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-1">
          <p className="text-xs text-blue-300">
            We never share your info. NDA always available. See our <Link to="/privacy" className="underline hover:text-blue-100">privacy policy</Link>.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 whitespace-nowrap px-10 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : submitLabel}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
