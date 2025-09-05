import { useState } from "react";
const cases = [
  {
    title: "FinHealth Inc. — AI Release Acceleration",
    details: "Release cycles shrank from 2 weeks to 5 days, and on-call load fell 55% after automating CI/CD with AydenAIT agents.",
  },
  {
    title: "SaaSKit — Zero Outage Rollouts",
    details: "Continuous delivery and proactive AI monitoring; zero customer interruptions during scale events.",
  }
];
const CaseAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 bg-gradient-to-br from-blue-950 to-blue-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Case Studies</h2>
        {cases.map((c, idx) => (
          <div key={c.title} className="mb-3">
            <button className="w-full text-left bg-blue-800/40 p-4 rounded-xl text-lg text-blue-100 font-semibold focus:outline-none hover:bg-blue-700"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {c.title}
            </button>
            {open === idx && (
              <div className="p-4 bg-blue-600/20 rounded-b-xl text-blue-50">{c.details}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default CaseAccordion;
