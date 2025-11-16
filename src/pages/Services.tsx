import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData, { serviceSchema } from "../components/StructuredData";

const Services = () => (
  <>
    <SEO
      title="Enterprise Services - AI Consulting, IT Solutions & AIOps | AydenAIT"
      description="Comprehensive AI consulting, IT solutions, AI software development, and AIOps services. Expert technology consulting for digital transformation and intelligent automation."
      keywords="AI consulting services, IT consulting, AIOps solutions, AI software development, enterprise AI, technology consulting, digital transformation, IT solutions, intelligent automation"
      ogUrl="https://aydenait.com/services"
      canonical="https://aydenait.com/services"
    />
    <StructuredData data={serviceSchema} />
    <section className="pt-16 pb-8 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      {/* HERO */}
      <h1 className="text-4xl font-extrabold text-blue-100 mb-2 text-center">
        Enterprise Technology Services
      </h1>
      <p className="text-blue-200 text-xl text-center mb-10">
        Delivering expert AI consulting, comprehensive IT solutions, custom AI development, and AIOps excellence. Partner with us to drive digital transformation and operational intelligence across your organization.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-bold text-blue-200 mt-10 mb-6 text-center">Why Choose AydenAIT?</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">🤝</div>
          <b>Transparent, Flexible Partnership</b>
          <p className="text-blue-100 text-sm mt-2">NDA standard. Enterprise/SMB clients. Project, team or long-term models. You always control your roadmap.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">🛡️</div>
          <b>Security & Compliance Leadership</b>
          <p className="text-blue-100 text-sm mt-2">ISO-Inspired, DevSecOps/Zero-Trust by design, documented processes for regulated industries.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">✔️</div>
          <b>Results, Not Just Deliverables</b>
          <p className="text-blue-100 text-sm mt-2">Faster release cycles, reduced costs, lower incident rates—and real upskilling for your team.</p>
        </div>
      </div>

      {/* CORE SERVICES */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-5 text-center">Our Service Offerings</h2>

      {/* AI Consulting */}
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">🎯 AI Consulting & Strategy</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-blue-100 text-sm">
          <li>• AI Readiness Assessment & Maturity Analysis</li>
          <li>• AI Strategy Development & Roadmap Planning</li>
          <li>• Use Case Identification & Feasibility Studies</li>
          <li>• AI Governance & Ethics Framework</li>
          <li>• ROI Analysis & Business Case Development</li>
          <li>• Technology Stack Selection & Architecture Design</li>
        </ul>
      </div>

      {/* IT Solutions */}
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">💼 IT Consulting & Solutions</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-blue-100 text-sm">
          <li>• IT Infrastructure Assessment & Optimization</li>
          <li>• Cloud Migration & Modernization (AWS, Azure, GCP)</li>
          <li>• Enterprise Architecture Design & Implementation</li>
          <li>• Technology Stack Evaluation & Selection</li>
          <li>• Digital Transformation Consulting</li>
          <li>• IT Security & Compliance Solutions</li>
        </ul>
      </div>

      {/* AI Development */}
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">🤖 AI Software Development</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-blue-100 text-sm">
          <li>• Custom AI Application Development</li>
          <li>• Machine Learning Model Development & Training</li>
          <li>• LLM Integration & Fine-tuning</li>
          <li>• Computer Vision & NLP Solutions</li>
          <li>• Intelligent Automation & Workflow Optimization</li>
          <li>• AI-Powered Analytics & Decision Support Systems</li>
        </ul>
      </div>

      {/* AIOps */}
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">⚡ AIOps & Intelligent Operations</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-blue-100 text-sm">
          <li>• AI-Driven Monitoring & Observability</li>
          <li>• Predictive Incident Management</li>
          <li>• Intelligent Alerting & Anomaly Detection</li>
          <li>• Automated Root Cause Analysis</li>
          <li>• Self-Healing Infrastructure & Auto-Remediation</li>
          <li>• Performance Optimization & Capacity Planning</li>
        </ul>
      </div>

      {/* TOOL STACK */}
      <h2 className="text-xl font-bold text-blue-200 mt-12 mb-3">Our Technology Stack</h2>
      <div className="flex flex-wrap gap-3 mb-8 text-blue-100 text-lg">
        <span className="px-3 py-1 bg-purple-600/20 rounded">Python</span>
        <span className="px-3 py-1 bg-blue-600/20 rounded">TensorFlow</span>
        <span className="px-3 py-1 bg-orange-600/20 rounded">PyTorch</span>
        <span className="px-3 py-1 bg-green-600/20 rounded">OpenAI</span>
        <span className="px-3 py-1 bg-sky-700/20 rounded">React</span>
        <span className="px-3 py-1 bg-indigo-600/20 rounded">Node.js</span>
        <span className="px-3 py-1 bg-yellow-700/20 rounded">AWS</span>
        <span className="px-3 py-1 bg-blue-500/20 rounded">Azure</span>
        <span className="px-3 py-1 bg-violet-500/20 rounded">Kubernetes</span>
        <span className="px-3 py-1 bg-green-700/20 rounded">Terraform</span>
        <span className="px-3 py-1 bg-fuchsia-800/20 rounded">Docker</span>
        <span className="px-3 py-1 bg-pink-700/20 rounded">PostgreSQL</span>
        <span className="px-3 py-1 bg-teal-700/20 rounded">MongoDB</span>
        <span className="px-3 py-1 bg-cyan-700/20 rounded">GitHub</span>
      </div>

      {/* PROJECT PROCESS */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-6 text-center">Our Engagement Process</h2>
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">1</div>
          <b>Consult</b>
          <div className="text-blue-100 text-xs mt-2">Free intro call, NDA signed, goal alignment</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">2</div>
          <b>Roadmap</b>
          <div className="text-blue-100 text-xs mt-2">Audit, assessment, tech/tool selection, quick wins</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">3</div>
          <b>Build</b>
          <div className="text-blue-100 text-xs mt-2">Implementation, documentation, iterative delivery</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">4</div>
          <b>Grow</b>
          <div className="text-blue-100 text-xs mt-2">Upskilling, support, and ongoing optimizations</div>
        </div>
      </div>

      {/* CERTIFICATES & PARTNERSHIPS */}
      
      {/* CALL TO ACTION */}
      <div className="text-center mt-10">
        <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition">
          Request Enterprise Consultation →
        </Link>
        <div className="mt-2 text-blue-200 text-xs">Confidential consultation • NDA provided • Enterprise-grade solutions</div>
      </div>
    </div>
  </section>
  </>
);

export default Services;
