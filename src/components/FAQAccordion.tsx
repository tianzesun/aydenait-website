import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What services does AydenAIT provide?",
    a: "We design, build and support custom AI solutions: AI assistants and chatbots, AI-assisted review and scoring, detection and risk analysis, planning and workflow automation, analytics and decision support, and AI integration with your existing systems. Each engagement can begin with a complimentary AI readiness assessment."
  },
  {
    q: "Which sectors do you work in?",
    a: "Higher education is our primary focus: our grading, academic-integrity and faculty workload platforms are in use at the University of Toronto. We also build for civic services (an AI assistant built on the City of Markham's publicly available data) and financial services (an options-strategy analysis platform), and we work with businesses that want AI integrated into their existing systems."
  },
  {
    q: "Do you work with organizations of all sizes?",
    a: "Yes. We work with university departments, public-sector teams and businesses of varying sizes. Many engagements begin with a single department or process and expand once the first system has proven its value. We size the team and scope to your actual needs."
  },
  {
    q: "How does a typical engagement work?",
    a: "Most projects follow four stages: an initial 30-minute consultation; an assessment and written proposal covering scope, timeline, cost and risks; a pilot on your own use case; and production launch with ongoing support. You decide at each stage whether to proceed."
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. An assessment typically takes one to two weeks, and a pilot typically runs four to eight weeks. A full production build is scheduled in the proposal once requirements are clear. We confirm timelines in writing before work begins."
  },
  {
    q: "How is pricing structured?",
    a: "The initial consultation and AI readiness assessment are complimentary. Pilots and full builds are quoted on a fixed-scope basis or on time and materials, depending on how well defined the requirements are. Ongoing support is billed monthly. You receive a detailed estimate before any paid work begins."
  },
  {
    q: "Can we start with a small pilot?",
    a: "Yes, and we generally recommend it. A pilot applies the solution to one real use case with agreed success criteria, so you can evaluate results and build internal support before a larger investment."
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. We integrate with the platforms you already use, such as learning management systems, identity providers, CRMs, websites and internal applications, and we can deploy in the cloud or on premises. We recommend changes to your technology stack only where there is a clear reason."
  },
  {
    q: "How do you handle data security and confidentiality?",
    a: "We offer an NDA before detailed discussions, limit access to the people working on your project, and design data handling around your organization's privacy, security and retention requirements. AI-assisted decisions include human review and an audit trail. Where required, we work within your institution's existing security and policy frameworks."
  },
  {
    q: "How do you keep AI results accurate and accountable?",
    a: "Our systems are designed so that people make the final decision. Assistants cite the sources behind each answer, scores are accompanied by the reasoning behind them, and every system includes a clear point where a person reviews the result before it takes effect."
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Ongoing support covers monitoring, improvements, new features and assistance for your staff. We also provide documentation and knowledge transfer so that your team can operate and extend the system independently if you prefer."
  },
  {
    q: "Do you work remotely or on site?",
    a: "Both. Day-to-day work is usually remote, with on-site sessions for workshops, key milestones and stakeholder meetings where they add value."
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "We will reply by email to arrange an initial call. If you would like to share confidential details, we can sign an NDA first. Following the call, we propose next steps, typically an assessment or a pilot, with a clear scope and estimate."
  }
];

const FAQAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 bg-gradient-to-b from-blue-950 to-[#10172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">Frequently Asked Questions</h1>
        <p className="text-blue-200 text-center mb-8">Answers to common questions about working with AydenAIT</p>
        {faqs.map((f, idx) => (
          <div key={f.q} className="mb-3">
            <button
              className="w-full bg-white/10 px-6 py-4 rounded-xl text-left text-blue-100 font-semibold hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition flex justify-between items-center"
              aria-expanded={open === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{f.q}</span>
              <span className="text-cyan-400 text-xl ml-4">{open === idx ? '−' : '+'}</span>
            </button>
            {/* Always rendered (hidden when closed) so answers are in the prerendered HTML for search and find-in-page */}
            <div id={`faq-answer-${idx}`} hidden={open !== idx} className="p-6 bg-white/5 rounded-b-xl text-blue-50 border-t border-blue-800/30 leading-relaxed">{f.a}</div>
          </div>
        ))}

        <div className="mt-12 text-center bg-blue-900/40 rounded-2xl p-8 border border-blue-700">
          <h2 className="text-xl font-bold text-white mb-3">Still have questions?</h2>
          <p className="text-blue-200 mb-6">Schedule a complimentary consultation or send us a message.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold rounded-lg hover:scale-105 transition">
              Contact Us
            </Link>
            <a href="mailto:contact@aydenait.com" className="px-6 py-3 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:bg-white/10 transition">
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
