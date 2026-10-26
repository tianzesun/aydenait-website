import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Engagement types we deliver. Add real, client-approved case studies here as they become available.
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
      title="Portfolio - AI Consulting & IT Solutions | AydenAIT"
      description="The kinds of AI consulting, AI development, AIOps, and cloud engineering engagements AydenAIT delivers. Case studies and references available on request under NDA."
      keywords="AI consulting portfolio, AI development projects, AIOps engagements, cloud engineering, enterprise AI"
      ogUrl="https://aydenait.com/portfolio"
      canonical="https://aydenait.com/portfolio"
    />

    <section className="py-16 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Deliver</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Production AI and infrastructure work for teams that need results, not slide decks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 rounded-2xl p-8 border border-blue-700/50 hover:border-cyan-400 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* References under NDA */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-900/60 to-cyan-900/30 rounded-2xl p-10 border border-blue-700/50">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Case Studies & References</h2>
          <p className="text-blue-100 mb-8">
            Most of our client work is confidential. We're happy to walk you through relevant case studies and connect you
            with references once an NDA is in place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Request Case Studies
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
