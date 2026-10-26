import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

// Engagement types we deliver.
const engagements = [
  {
    icon: "🤖",
    title: "LLM & Generative AI Applications",
    desc: "Retrieval-augmented assistants, document understanding, and workflow automation built on your data and integrated with existing systems.",
  },
  {
    icon: "📈",
    title: "Predictive Analytics & ML Models",
    desc: "Forecasting, anomaly detection, and classification models taken from prototype to monitored production service.",
  },
  {
    icon: "⚡",
    title: "AIOps & Intelligent Monitoring",
    desc: "Observability pipelines, alert noise reduction, and automated remediation for cloud and hybrid infrastructure.",
  },
  {
    icon: "☁️",
    title: "Cloud & Platform Engineering",
    desc: "CI/CD automation, Kubernetes platforms, infrastructure as code, and cost optimization across AWS and Azure.",
  },
];

const Clients = () => (
  <>
    <SEO
      title="Portfolio - AI Projects | AydenAIT"
      description="AI systems built by AydenAIT: CodeProvenance, DeepRubric and a faculty workload system for higher education, the Hey Markham city-services assistant, and the AlphOpt options-analysis platform."
      keywords="AI consulting portfolio, AI in higher education, code similarity detection, AI grading, AI city services assistant, options analysis AI"
      ogUrl="https://aydenait.com/portfolio"
      canonical="https://aydenait.com/portfolio"
    />

    <section className="py-16 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Production AI systems for teams that need results, not slide decks.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-white/10 rounded-2xl p-8 border border-blue-700/50 hover:border-cyan-400 transition"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">{project.sector}</span>
                {project.status && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/15 border border-green-400/40 text-green-200">
                    {project.status}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-blue-100 mb-5">{project.desc}</p>
              <ul className="space-y-2 text-sm text-blue-200 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-cyan-400" aria-hidden="true">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start text-cyan-300 font-semibold hover:text-cyan-200 underline underline-offset-4"
                >
                  {project.link.label} →
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Engagement types */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">What We Deliver</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 rounded-2xl p-8 border border-blue-700/50 hover:border-cyan-400 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* References under NDA */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-900/60 to-cyan-900/30 rounded-2xl p-10 border border-blue-700/50">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want to See It in Action?</h2>
          <p className="text-blue-100 mb-8">
            We're happy to demo these systems, walk you through how they were built, and talk about what a similar
            project would look like for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Request a Demo
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-200 font-bold hover:bg-cyan-400/20 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Clients;
