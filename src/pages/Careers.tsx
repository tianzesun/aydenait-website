import { useState } from "react";
import SEO from "../components/SEO";

const CAREERS_EMAIL = "contact@aydenait.com";

const openJobs = [
  {
    title: "Senior DevOps Engineer",
    location: "Remote / Toronto, ON",
    type: "Full-time",
    summary: "Lead automation, CI/CD, and cloud operations for enterprise SaaS customers. Drive infrastructure excellence and operational efficiency.",
    responsibilities: [
      "Design and implement CI/CD pipelines for multi-cloud environments",
      "Lead infrastructure automation using Terraform, Ansible, or CloudFormation",
      "Architect and manage Kubernetes clusters for production workloads",
      "Implement monitoring, logging, and alerting solutions",
      "Mentor junior engineers and establish DevOps best practices",
      "Collaborate with development teams on deployment strategies"
    ],
    requirements: [
      "4+ years of DevOps/SRE experience in production environments",
      "Expert knowledge of AWS, Azure, or GCP cloud platforms",
      "Strong proficiency in Infrastructure as Code (Terraform, Ansible)",
      "Experience with container orchestration (Kubernetes, Docker)",
      "Proficiency in scripting languages (Python, Bash, Go)",
      "Understanding of security best practices and compliance"
    ],
    niceToHave: [
      "Certifications: AWS Solutions Architect, CKA, or similar",
      "Experience with GitOps workflows (ArgoCD, Flux)",
      "Knowledge of service mesh technologies (Istio, Linkerd)"
    ]
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full-time",
    summary: "Build and deploy production-grade AI/ML solutions for enterprise clients. Integrate cutting-edge models into scalable cloud architectures.",
    responsibilities: [
      "Design and develop machine learning models for business applications",
      "Integrate LLMs (GPT-4, Claude) into production systems",
      "Build data pipelines and feature engineering workflows",
      "Deploy and monitor ML models in cloud environments",
      "Optimize model performance and inference latency",
      "Collaborate with clients to understand AI requirements"
    ],
    requirements: [
      "3+ years of ML engineering or data science experience",
      "Strong Python skills with ML frameworks (PyTorch, TensorFlow, scikit-learn)",
      "Experience with LLM APIs and prompt engineering",
      "Knowledge of MLOps practices and model deployment",
      "Proficiency in cloud platforms (AWS SageMaker, Azure ML, GCP AI)",
      "Strong understanding of data structures and algorithms"
    ],
    niceToHave: [
      "Experience with vector databases (Pinecone, Weaviate, Chroma)",
      "Knowledge of LangChain, LlamaIndex, or similar frameworks",
      "Publications or contributions to ML open-source projects"
    ]
  },
  {
    title: "AI Software Development Intern",
    location: "Remote",
    type: "Internship",
    summary: "Build AI-powered applications using LLMs, RAG systems, and modern frameworks. Work on real client projects with experienced mentors.",
    responsibilities: [
      "Develop AI chatbots and intelligent automation systems",
      "Implement RAG (Retrieval-Augmented Generation) pipelines",
      "Build frontend interfaces with React and TypeScript",
      "Integrate LLM APIs (OpenAI, Anthropic) into applications",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and team discussions"
    ],
    requirements: [
      "Currently pursuing Computer Science or related degree (or bootcamp graduate)",
      "Strong proficiency in Python programming",
      "Experience with React and TypeScript",
      "Understanding of REST APIs and web development",
      "Familiarity with Git and version control",
      "Passion for AI and eagerness to learn"
    ],
    whatYouWillLearn: [
      "Production LLM application development and prompt engineering",
      "Enterprise software development practices and workflows",
      "Cloud deployment and DevOps fundamentals",
      "Client communication and project management skills"
    ]
  },
  {
    title: "Machine Learning Engineering Intern",
    location: "Remote",
    type: "Internship",
    summary: "Develop and deploy ML models for classification, prediction, and NLP tasks. Gain hands-on experience with modern ML tools and production systems.",
    responsibilities: [
      "Train and evaluate ML models using PyTorch or TensorFlow",
      "Perform data preprocessing, feature engineering, and analysis",
      "Implement model evaluation metrics and A/B testing",
      "Deploy models to cloud environments with monitoring",
      "Optimize model performance for production workloads",
      "Document experiments and present findings to the team"
    ],
    requirements: [
      "Currently pursuing Computer Science, Statistics, or related field",
      "Strong foundation in machine learning fundamentals",
      "Proficiency in Python and ML libraries (scikit-learn, pandas, numpy)",
      "Basic understanding of neural networks and deep learning",
      "Experience with Jupyter notebooks and data visualization",
      "Strong analytical and problem-solving skills"
    ],
    whatYouWillLearn: [
      "End-to-end ML model development and deployment (MLOps)",
      "Production-grade model serving and monitoring",
      "Feature engineering and model optimization techniques",
      "Working with real-world datasets and business problems"
    ]
  },
  {
    title: "Full-Stack Software Development Intern",
    location: "Remote",
    type: "Internship",
    summary: "Build modern web applications with React, TypeScript, Node.js, and cloud platforms. Contribute to enterprise client projects and learn industry best practices.",
    responsibilities: [
      "Develop responsive web applications using React and TypeScript",
      "Build RESTful APIs with Node.js and Express",
      "Implement database schemas and queries (SQL/NoSQL)",
      "Write unit tests and integration tests",
      "Deploy applications to cloud platforms (AWS, Azure, GCP)",
      "Collaborate with designers and product managers"
    ],
    requirements: [
      "Currently pursuing Computer Science or related degree (or bootcamp graduate)",
      "Strong foundation in JavaScript/TypeScript",
      "Experience building web applications with React",
      "Understanding of Node.js and backend development",
      "Familiarity with databases (PostgreSQL, MongoDB)",
      "Knowledge of Git and GitHub workflows"
    ],
    whatYouWillLearn: [
      "Enterprise-grade full-stack development patterns",
      "Cloud architecture and deployment strategies",
      "Agile development and professional team collaboration",
      "Code quality, testing, and CI/CD practices"
    ]
  },
  {
    title: "AI Solutions Consulting Intern",
    location: "Remote",
    type: "Internship",
    summary: "Support AI consulting projects from research to implementation. Learn how to identify AI opportunities and create business value for enterprise clients.",
    responsibilities: [
      "Research AI use cases and feasibility for client projects",
      "Analyze business requirements and technical constraints",
      "Create technical documentation and architecture diagrams",
      "Assist in client presentations and proposal development",
      "Conduct competitive analysis and market research",
      "Support implementation teams with requirements gathering"
    ],
    requirements: [
      "Currently pursuing Business, Computer Science, or related field",
      "Strong interest in AI strategy and business applications",
      "Excellent written and verbal communication skills",
      "Ability to understand technical concepts and explain to non-technical audiences",
      "Proficiency in Microsoft Office, Google Suite, and presentation tools",
      "Strong analytical and research skills"
    ],
    whatYouWillLearn: [
      "AI strategy and roadmap development for enterprises",
      "Client engagement and stakeholder management",
      "Technical writing and business case development",
      "How to bridge business needs with AI capabilities"
    ]
  },
  {
    title: "AIOps & DevOps Intern",
    location: "Remote",
    type: "Internship",
    summary: "Learn AI-powered IT operations, infrastructure automation, and cloud technologies. Work with Kubernetes, CI/CD pipelines, and observability tools.",
    responsibilities: [
      "Assist in building CI/CD pipelines for client projects",
      "Learn infrastructure automation with Terraform and Ansible",
      "Monitor application performance and system health",
      "Help implement logging and alerting solutions",
      "Support Kubernetes cluster management and troubleshooting",
      "Document operational procedures and runbooks"
    ],
    requirements: [
      "Currently pursuing Computer Science or IT-related degree",
      "Basic understanding of Linux/Unix systems",
      "Familiarity with scripting (Python, Bash, or similar)",
      "Interest in cloud platforms (AWS, Azure, GCP)",
      "Understanding of networking and system administration basics",
      "Willingness to learn new technologies quickly"
    ],
    whatYouWillLearn: [
      "Production DevOps practices and infrastructure automation",
      "Kubernetes and container orchestration",
      "Cloud architecture and deployment strategies",
      "Monitoring, observability, and incident response"
    ]
  }
];

const perks = ["Remote-first culture", "Real enterprise projects", "Career growth"];

const reasons = [
  {
    title: "Professional Growth",
    points: [
      "Build AI used by real universities, public services and businesses",
      "Work across the full project lifecycle, from scoping to production support",
      "Mentorship from experienced AI consultants and engineers",
    ],
  },
  {
    title: "Flexible Work",
    points: ["Remote work with flexible scheduling", "Supportive, inclusive team culture that values your well-being"],
  },
  {
    title: "Impactful Work",
    points: [
      "Deliver AI solutions that improve how organizations operate",
      "Work on diverse projects across industries and technologies",
      "See the direct business impact of your technical contributions",
    ],
  },
  {
    title: "Team Culture",
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
        title="Careers at AydenAIT - Join Our Consulting Team"
        description="Full-time roles and remote internships in AI development, software engineering and AIOps. Work on real client projects with experienced mentors."
        keywords="AI consultant jobs, IT consulting careers, AI internships, software development internship, ML engineering intern, remote tech internships, AIOps jobs, AI software developer"
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
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Join Our AI Consulting Team</h1>
                <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">
                  Build AI systems used in higher education, public services and business.
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
                  Email your resume and a short note about yourself. We'll get back to you within 2-3 business days.
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
                  All applications are confidential. We review every application and respond to qualified candidates within 2-3 business days.
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
