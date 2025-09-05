import { useState } from "react";
const faqs = [
  {
    q: "How soon can we see results?",
    a: "Most teams see measurable DevOps/CD improvement in the first 2 weeks."
  },
  {
    q: "Do you provide managed ongoing services?",
    a: "Yes, we offer both consulting projects and ongoing AI-powered DevOps management."
  },
  {
    q: "Is my team ready for AI ops?",
    a: "If you're running DevOps, we can accelerate your team—no minimum size or stack required."
  }
];
const FAQAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked</h2>
        {faqs.map((f, idx) => (
          <div key={f.q} className="mb-2">
            <button
              className="w-full bg-blue-800/50 px-4 py-3 rounded-xl text-left text-blue-100 font-semibold hover:bg-blue-700 focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {f.q}
            </button>
            {open === idx && (
              <div className="p-4 bg-blue-700/30 rounded-b-xl text-blue-50">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQAccordion;
