const studies = [
  {
    company: "FinHealth Inc.",
    image: "/case-finhealth.svg", // add SVG or PNG in public/
    problem: "Release cycles were slow (2 weeks); frequent test failures led to deployment anxiety and on-call burnout.",
    solution: [
      "Automated CI/CD pipeline using AI-powered test triage and release gates.",
      "Implemented predictive build analysis and smart rollback controls.",
      "Provided developer training and ongoing AI-driven incident feedback."
    ],
    results: [
      "Release time reduced from 2 weeks to 5 days",
      "On-call pages dropped 55%",
      "Deployment confidence increased (NPS +30)"
    ]
  },
  {
    company: "SaaSKit",
    image: "/case-saaskit.svg",
    problem: "Rapid customer growth led to infrastructure incidents and escalating cloud costs.",
    solution: [
      "Integrated ML-based anomaly detection for cloud metrics and logs.",
      "Automated cost optimization (autoscale, resource right-sizing).",
      "24/7 monitoring with AI incident assignment."
    ],
    results: [
      "99.99% uptime maintained during scaling",
      "Annual cloud cost savings: $120k",
      "No customer-impacting outages in Q4"
    ]
  }
];

const CaseStudiesGrid = () => (
  <section className="py-16 bg-gradient-to-br from-blue-950 via-gray-900 to-[#10172a]">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-100 mb-10 text-center">Case Studies</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {studies.map((s) => (
          <div key={s.company} className="bg-white/10 rounded-2xl shadow-lg border border-blue-900 p-8 flex flex-col">
            <div className="mb-4 flex justify-center">
              <img src={s.image} alt={s.company} className="h-20 w-auto drop-shadow-2xl rounded-lg bg-white/40 p-2" />
            </div>
            <div className="mb-2 text-xl text-blue-200 font-bold">{s.company}</div>
            <div className="mb-2 text-blue-100">
              <b>Problem:</b> {s.problem}
            </div>
            <div className="mb-2 text-blue-100">
              <b>Solution:</b>
              <ul className="list-disc ml-5">
                {s.solution.map((txt, i)=>(
                  <li key={i}>{txt}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2 text-blue-100">
              <b>Results:</b>
              <ul className="list-disc ml-5 font-semibold text-green-300">
                {s.results.map((txt, i)=>(
                  <li key={i}>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesGrid;
