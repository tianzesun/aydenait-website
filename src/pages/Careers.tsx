import { useState } from "react";
import SEO from "../components/SEO";

const CAREERS_EMAIL = "contact@aydenait.com";

// Keep listings in step with the products and services described elsewhere on the site
const openJobs = [
  {
    title: "Senior DevOps engineer",
    location: "Remote / Toronto, ON",
    type: "Full-time",
    summary: "Own the infrastructure behind our AI platforms, from deployment pipelines to monitoring, for products used every day in higher education.",
    responsibilities: [
      "Design and run CI/CD pipelines for our products and client systems",
      "Manage infrastructure as code for cloud and on-premises deployments",
      "Run containerized production workloads reliably and securely",
      "Build monitoring, logging and alerting so issues are caught before users notice",
      "Support deployments inside institutions' own security and policy frameworks",
      "Mentor other engineers and set operational practices for the team"
    ],
    requirements: [
      "4+ years of DevOps or SRE experience in production environments",
      "Strong experience with at least one major cloud platform",
      "Infrastructure as code (Terraform, Ansible or similar)",
      "Containers and orchestration (Docker, Kubernetes)",
      "Scripting in Python, Bash or Go",
      "Practical understanding of security, access control and audit logging"
    ],
    niceToHave: [
      "Experience deploying into university or public-sector environments",
      "Single sign-on and identity provider integration",
      "GitOps workflows (Argo CD, Flux)"
    ]
  },
  {
    title: "AI / ML engineer",
    location: "Remote",
    type: "Full-time",
    summary: "Build the AI behind our products: grounded assistants, rubric-based scoring and detection models whose results people can check.",
    responsibilities: [
      "Build retrieval-based assistants that answer from official sources and cite them",
      "Develop and evaluate models for scoring, similarity and AI-authorship detection",
      "Design evaluations that measure accuracy and false positives on real-world data",
      "Make model output explainable, so reviewers can see why a result was produced",
      "Deploy and monitor models in production",
      "Work with faculty, staff and clients to turn their criteria into working systems"
    ],
    requirements: [
      "3+ years of ML engineering or applied data science experience",
      "Strong Python with PyTorch, scikit-learn or similar",
      "Experience building applications on large language models",
      "Experience designing evaluations and benchmarks, not just training models",
      "Model deployment and monitoring in production",
      "Clear communication with people who aren't ML specialists"
    ],
    niceToHave: [
      "Retrieval systems and vector search",
      "Code analysis, plagiarism or authorship detection",
      "Experience in education technology"
    ]
  },
  {
    title: "AI software development intern",
    location: "Remote",
    type: "Internship",
    summary: "Help build AI assistants and tools that answer from real sources, working on our products alongside experienced engineers.",
    responsibilities: [
      "Build features for AI assistants that answer questions with citations",
      "Work on retrieval pipelines that ground answers in official documents",
      "Build interfaces with React and TypeScript",
      "Test how assistants behave when they don't know an answer",
      "Write clean, tested code and take part in code reviews",
      "Document what you build for the rest of the team"
    ],
    requirements: [
      "Studying Computer Science or a related field (or a recent bootcamp graduate)",
      "Good Python skills",
      "Some experience with React and TypeScript",
      "Understanding of REST APIs and web development",
      "Familiarity with Git",
      "Curiosity about how AI systems succeed and fail"
    ],
    whatYouWillLearn: [
      "How to build AI applications on large language models that people can trust",
      "Retrieval, citation and evaluation techniques",
      "Shipping and supporting software that people use every day",
      "Working directly with the people who use what you build"
    ]
  },
  {
    title: "Machine learning engineering intern",
    location: "Remote",
    type: "Internship",
    summary: "Train and evaluate models for scoring, similarity and detection, and learn to measure whether a model is good enough to use.",
    responsibilities: [
      "Train and evaluate models with PyTorch or scikit-learn",
      "Prepare datasets and engineer features",
      "Measure accuracy, false positives and bias on held-out data",
      "Run experiments and compare approaches fairly",
      "Help move models that pass evaluation into production",
      "Write up experiments and present findings to the team"
    ],
    requirements: [
      "Studying Computer Science, Statistics or a related field",
      "Solid grounding in machine learning fundamentals",
      "Python with pandas, NumPy and scikit-learn",
      "Basic understanding of neural networks",
      "Experience with Jupyter notebooks and data visualization",
      "Careful, analytical approach to results"
    ],
    whatYouWillLearn: [
      "End-to-end model development, from data to deployment",
      "How to design evaluations that reflect real use",
      "Reducing false positives where mistakes affect real people",
      "Working with real-world data under privacy constraints"
    ]
  },
  {
    title: "Full-stack software development intern",
    location: "Remote",
    type: "Internship",
    summary: "Build the web applications faculty and staff use every day, from grading and review workspaces to planning and reporting tools.",
    responsibilities: [
      "Build web features with React and TypeScript",
      "Develop APIs and database schemas",
      "Build role-based access and audit trails into features",
      "Write unit and integration tests",
      "Help deploy and support the applications you work on",
      "Work with users to understand what they need from a feature"
    ],
    requirements: [
      "Studying Computer Science or a related field (or a recent bootcamp graduate)",
      "Good JavaScript or TypeScript skills",
      "Experience building web applications with React",
      "Some backend experience (Node.js, Python or similar)",
      "Familiarity with SQL databases",
      "Familiarity with Git and GitHub"
    ],
    whatYouWillLearn: [
      "Building production applications for real users",
      "Designing for privacy, access control and accountability",
      "Testing, code review and CI/CD in practice",
      "Turning user feedback into working features"
    ]
  },
  {
    title: "AI solutions consulting intern",
    location: "Remote",
    type: "Internship",
    summary: "Help organizations work out where AI can realistically help, from first conversation to written proposal.",
    responsibilities: [
      "Research how AI could help with a client's processes, and where it shouldn't be used",
      "Gather requirements, constraints and policy considerations",
      "Help prepare AI readiness assessments and written proposals",
      "Prepare documentation and diagrams that explain how a system will work",
      "Support client meetings and product demonstrations",
      "Track what clients ask for to inform our products and services"
    ],
    requirements: [
      "Studying Business, Computer Science or a related field",
      "Strong interest in how organizations adopt AI",
      "Excellent written and spoken communication",
      "Ability to explain technical ideas to non-technical audiences",
      "Strong research and analytical skills",
      "Comfortable with presentation and document tools"
    ],
    whatYouWillLearn: [
      "How AI projects are scoped, assessed and proposed",
      "Working with universities, public-sector teams and businesses",
      "Writing clear assessments and business cases",
      "Balancing what AI can do with privacy, policy and risk"
    ]
  },
  {
    title: "AIOps & DevOps intern",
    location: "Remote",
    type: "Internship",
    summary: "Learn how AI systems are deployed, monitored and kept reliable after launch, working on our production infrastructure.",
    responsibilities: [
      "Help build and maintain CI/CD pipelines",
      "Work on infrastructure automation with Terraform and Ansible",
      "Monitor application and model health",
      "Help set up logging and alerting",
      "Support container deployments and troubleshooting",
      "Write runbooks and operational documentation"
    ],
    requirements: [
      "Studying Computer Science or an IT-related program",
      "Basic Linux experience",
      "Scripting in Python, Bash or similar",
      "Interest in cloud platforms",
      "Basic networking and system administration knowledge",
      "Willingness to learn quickly"
    ],
    whatYouWillLearn: [
      "Running production systems that people depend on",
      "Monitoring AI models as well as infrastructure",
      "Containers, infrastructure as code and cloud deployment",
      "Incident response and writing useful runbooks"
    ]
  }
];

const perks = ["Remote-first culture", "Products in real use", "Mentorship"];

const reasons = [
  {
    title: "Professional growth",
    points: [
      "Build AI used by real universities, public services and businesses",
      "Work across the full project lifecycle, from scoping to production support",
      "Mentorship from the engineers who built our products",
    ],
  },
  {
    title: "Flexible work",
    points: ["Remote work with flexible scheduling", "Supportive, inclusive team culture that values your well-being"],
  },
  {
    title: "Impactful work",
    points: [
      "Build AI that keeps people in control of the decisions that matter",
      "Work across education, civic services and finance",
      "See your work used by the people it was built for",
    ],
  },
  {
    title: "Team culture",
    points: [
      "Collaborative, transparent management with open communication",
      "Diverse, inclusive team that values different perspectives",
      "Small team with fast, direct decision-making",
    ],
  },
];

const applySteps = [
  "Put the position title in the subject line",
  "Attach your resume (PDF preferred)",
  "Add a link to your portfolio or GitHub, if you have one",
];

const JobList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-blue-100 leading-relaxed">
          <span className="text-cyan-400" aria-hidden="true">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const applyHref = (position?: string) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${position ?? "General"}`)}`;

  // Filter jobs based on search query
  const filteredJobs = openJobs.filter(job => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const searchableText = [
      job.title,
      job.location,
      job.type,
      job.summary,
      ...job.responsibilities,
      ...job.requirements,
      ...(job.niceToHave || []),
      ...(job.whatYouWillLearn || [])
    ].join(' ').toLowerCase();

    return searchableText.includes(query);
  });

  return (
    <>
      <SEO
        title="Careers at AydenAIT - Build AI people can trust"
        description="Full-time roles and remote internships in AI, machine learning, software engineering and DevOps, building AI products used in higher education."
        keywords="AI jobs Toronto, AI internships, machine learning engineer, ML engineering intern, software development internship, remote tech internships, DevOps jobs, AI software developer"
        ogUrl="https://aydenait.com/careers"
        canonical="https://aydenait.com/careers"
      />

      <article className="bg-[#0b1120] text-blue-100">
        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-20">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium text-cyan-300 mb-4">Careers</p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Build AI people can trust</h1>
                <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">
                  Work on AI systems used in higher education, public services and business.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cyan-200 mb-6">
                  {perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
                <p className="text-blue-200 leading-relaxed mb-8">Full-time positions and remote internships available.</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a href="#positions" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                    See open positions <span aria-hidden="true">→</span>
                  </a>
                  <a href="#apply" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                    How to apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            {/* Why join us */}
            <section className="grid lg:grid-cols-12 gap-6 py-20">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Why join AydenAIT</h2>
              <dl className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
                {reasons.map(({ title, points }) => (
                  <div key={title} className="border-t border-white/10 pt-5">
                    <dt className="text-xl font-semibold text-white mb-3">{title}</dt>
                    {points.map((point) => (
                      <dd key={point} className="text-blue-200 leading-relaxed mb-2">{point}</dd>
                    ))}
                  </div>
                ))}
              </dl>
            </section>

            {/* Open positions */}
            <section id="positions" className="scroll-mt-20 grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <div className="lg:col-span-4">
                <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-2">Open positions</h2>
                <p className="text-blue-200">
                  We're looking for talented individuals who are passionate about AI and technology. Select any position to see full details.
                </p>
              </div>
              <div className="lg:col-span-8">
                {/* Search */}
                <div className="relative mb-2">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by job title, skills, location, or keywords..."
                    aria-label="Search positions"
                    className="w-full pl-12 pr-12 py-3 bg-white/[0.03] text-white placeholder-blue-300/70 border border-white/15 rounded-full focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-300 hover:text-white"
                      aria-label="Clear search"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <p className="text-sm text-blue-300 mb-6" aria-live="polite">
                  {searchQuery
                    ? `Found ${filteredJobs.length} position${filteredJobs.length !== 1 ? "s" : ""} matching "${searchQuery}"`
                    : `${openJobs.length} open positions`}
                </p>

                {filteredJobs.length > 0 ? (
                  <ul className="divide-y divide-white/10 border-y border-white/10">
                    {filteredJobs.map((job) => {
                      const expanded = expandedJob === job.title;
                      return (
                        <li key={job.title}>
                          <button
                            onClick={() => setExpandedJob(expanded ? null : job.title)}
                            aria-expanded={expanded}
                            className="group w-full text-left grid grid-cols-[1fr_auto] gap-4 py-7"
                          >
                            <span>
                              <span className="block text-sm text-cyan-300 mb-2">{job.type} · {job.location}</span>
                              <span className="block text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">{job.title}</span>
                              <span className="block text-blue-200 leading-relaxed">{job.summary}</span>
                            </span>
                            <span className="text-2xl leading-none text-cyan-300" aria-hidden="true">{expanded ? "−" : "+"}</span>
                          </button>

                          {expanded && (
                            <div className="pb-8">
                              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                                <JobList title="Responsibilities" items={job.responsibilities} />
                                <JobList title="Requirements" items={job.requirements} />
                                {job.niceToHave && <JobList title="Nice to have" items={job.niceToHave} />}
                                {job.whatYouWillLearn && <JobList title="What you'll learn" items={job.whatYouWillLearn} />}
                              </div>
                              <a
                                href={applyHref(job.title)}
                                className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
                              >
                                Apply for this position <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="py-12 border-y border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                    <p className="text-blue-200 mb-4">We couldn't find any positions matching "{searchQuery}"</p>
                    <button onClick={() => setSearchQuery("")} className="font-semibold text-cyan-300 hover:text-white transition-colors">
                      Clear search and view all positions
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* How to apply */}
            <section id="apply" className="scroll-mt-20 grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">How to apply</h2>
              <div className="lg:col-span-8">
                <p className="text-2xl leading-relaxed text-white mb-8">
                  Email your resume and a short note about yourself.
                </p>
                <ol className="divide-y divide-white/10 mb-10">
                  {applySteps.map((step, idx) => (
                    <li key={step} className="grid grid-cols-[4rem_1fr] gap-2 py-4 first:pt-0">
                      <span className="font-mono text-sm text-cyan-300 pt-1">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="text-lg text-blue-100">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-6">
                  <a href={applyHref()} className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                    Email your application <span aria-hidden="true">→</span>
                  </a>
                  <a href={`mailto:${CAREERS_EMAIL}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">{CAREERS_EMAIL}</a>
                </div>
                <p className="text-sm text-blue-300">
                  All applications are confidential. We review every application and respond to qualified candidates within 2–3 business days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default Careers;
