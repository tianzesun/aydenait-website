import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

// Engagement types we deliver.
const engagements = [
  {
    iconPath: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    title: "LLM & Generative AI Applications",
    desc: "Retrieval-augmented assistants, document understanding, and workflow automation built on your data and integrated with existing systems.",
  },
  {
    iconPath: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    title: "Predictive Analytics & ML Models",
    desc: "Forecasting, anomaly detection, and classification models taken from prototype to monitored production service.",
  },
  {
    iconPath: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z",
    title: "AIOps & Intelligent Monitoring",
    desc: "Observability pipelines, alert noise reduction, and automated remediation for cloud and hybrid infrastructure.",
  },
  {
    iconPath: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
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
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-6">
                  <a href={project.screenshots[0].src} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={project.screenshots[0].src}
                      alt={project.screenshots[0].alt}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover object-top rounded-xl border border-white/10 bg-white/5"
                    />
                  </a>
                  {project.screenshots.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {project.screenshots.slice(1).map((shot) => (
                        <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer">
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            loading="lazy"
                            className="w-full aspect-[16/10] object-cover object-top rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400 transition"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">{project.sector}</span>
              <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-blue-100 mb-5">{project.desc}</p>
              <ul className="space-y-2 text-sm text-blue-200">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-cyan-400" aria-hidden="true">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
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
              <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
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
