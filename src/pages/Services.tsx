import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData, { serviceSchema } from "../components/StructuredData";

const Services = () => (
  <>
    <SEO
      title="AI Solutions & Software Development Services - AydenAIT Solution"
      description="Expert AI software development, machine learning solutions, custom AI engineering, and DevOps automation services. Transform your business with intelligent software systems."
      keywords="AI solutions, AI software development, machine learning, custom AI development, AI engineering, intelligent systems, DevOps automation, cloud solutions, software consulting"
      ogUrl="https://aydenait.com/services"
      canonical="https://aydenait.com/services"
    />
    <StructuredData data={serviceSchema} />
    <section className="pt-16 pb-8 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      {/* HERO */}
      <h1 className="text-4xl font-extrabold text-blue-100 mb-2 text-center">
        AI Solutions & Custom Software Development
      </h1>
      <p className="text-blue-200 text-xl text-center mb-10">
        Transform your business with intelligent AI solutions, custom software development, and cutting-edge automation. From machine learning models to enterprise systems—results-driven solutions trusted by innovative companies worldwide.
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
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-5 text-center">What We Do</h2>
      <ul className="grid md:grid-cols-2 gap-6 text-blue-100 mb-8">
        <li>• Custom AI Software Development & Machine Learning Solutions</li>
        <li>• AI Model Training, Fine-tuning & Deployment (LLMs, Computer Vision, NLP)</li>
        <li>• Intelligent Automation & AI-Powered Workflows</li>
        <li>• Custom Web & Mobile Application Development</li>
        <li>• API Development & System Integration</li>
        <li>• Cloud-Native Application Architecture (AWS, Azure, GCP)</li>
        <li>• DevOps & CI/CD Pipeline Automation</li>
        <li>• Containerization & Orchestration (Kubernetes, Docker)</li>
        <li>• Infrastructure as Code (Terraform, Ansible, CloudFormation)</li>
        <li>• AI Consulting & Digital Transformation Strategy</li>
        <li>• Data Engineering & Analytics Solutions</li>
        <li>• Enterprise Software Development & Legacy Modernization</li>
      </ul>

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
          Get Your Free Consultation →
        </Link>
        <div className="mt-2 text-blue-200 text-xs">NDA & confidentiality always included.</div>
      </div>
    </div>
  </section>
  </>
);

export default Services;
