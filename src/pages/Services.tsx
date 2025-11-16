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
      <h2 className="text-3xl font-bold text-blue-100 mt-16 mb-4 text-center">Our Proven Engagement Process</h2>
      <p className="text-blue-300 text-center mb-10 max-w-2xl mx-auto">
        A structured, transparent approach from initial consultation to ongoing success. We partner with you at every stage to ensure measurable results and lasting impact.
      </p>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 opacity-30" style={{width: 'calc(100% - 8rem)', margin: '0 4rem'}}></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative">
          {/* Phase 1: Discovery & Consultation */}
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-2xl p-6 border-2 border-cyan-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-cyan-300 font-bold text-lg">Discovery</h3>
                <p className="text-blue-300 text-xs">1-2 weeks</p>
              </div>
            </div>
            <div className="text-blue-100 text-sm space-y-2">
              <p className="font-semibold text-white mb-2">Initial Consultation & Alignment</p>
              <ul className="space-y-1.5">
                <li>• Free introductory consultation call</li>
                <li>• NDA execution for confidentiality</li>
                <li>• Business goals & pain points analysis</li>
                <li>• Stakeholder interviews</li>
                <li>• Current state assessment</li>
                <li>• Success criteria definition</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-cyan-700/30">
              <span className="inline-block px-3 py-1 bg-cyan-600/30 rounded-full text-xs text-cyan-200 font-semibold">
                No Cost • No Obligation
              </span>
            </div>
          </div>

          {/* Phase 2: Strategic Planning */}
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-2xl p-6 border-2 border-blue-600/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-blue-300 font-bold text-lg">Strategy</h3>
                <p className="text-blue-300 text-xs">2-4 weeks</p>
              </div>
            </div>
            <div className="text-blue-100 text-sm space-y-2">
              <p className="font-semibold text-white mb-2">Roadmap & Architecture</p>
              <ul className="space-y-1.5">
                <li>• Comprehensive technical audit</li>
                <li>• AI/IT readiness assessment</li>
                <li>• Technology stack evaluation</li>
                <li>• Architecture design & planning</li>
                <li>• ROI analysis & business case</li>
                <li>• Quick wins identification</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-600/30">
              <span className="inline-block px-3 py-1 bg-blue-600/30 rounded-full text-xs text-blue-200 font-semibold">
                Deliverable: Strategic Roadmap
              </span>
            </div>
          </div>

          {/* Phase 3: Implementation */}
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-2xl p-6 border-2 border-indigo-600/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-indigo-300 font-bold text-lg">Build</h3>
                <p className="text-blue-300 text-xs">4-12 weeks</p>
              </div>
            </div>
            <div className="text-blue-100 text-sm space-y-2">
              <p className="font-semibold text-white mb-2">Execution & Delivery</p>
              <ul className="space-y-1.5">
                <li>• Agile implementation sprints</li>
                <li>• Continuous stakeholder updates</li>
                <li>• Code/infrastructure deployment</li>
                <li>• Comprehensive documentation</li>
                <li>• Testing & quality assurance</li>
                <li>• User acceptance testing (UAT)</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-indigo-600/30">
              <span className="inline-block px-3 py-1 bg-indigo-600/30 rounded-full text-xs text-indigo-200 font-semibold">
                Iterative • Transparent
              </span>
            </div>
          </div>

          {/* Phase 4: Optimization & Support */}
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-2xl p-6 border-2 border-purple-600/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-purple-300 font-bold text-lg">Optimize</h3>
                <p className="text-blue-300 text-xs">Ongoing</p>
              </div>
            </div>
            <div className="text-blue-100 text-sm space-y-2">
              <p className="font-semibold text-white mb-2">Growth & Continuous Improvement</p>
              <ul className="space-y-1.5">
                <li>• Team training & knowledge transfer</li>
                <li>• Performance monitoring & tuning</li>
                <li>• Post-launch support & maintenance</li>
                <li>• Feature enhancements</li>
                <li>• Best practices & optimization</li>
                <li>• Strategic consulting & advising</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-600/30">
              <span className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-xs text-purple-200 font-semibold">
                Flexible Support Models
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Benefits */}
      <div className="mt-8 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-6 border border-cyan-700/30">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">Why Our Process Works</h3>
        <div className="grid md:grid-cols-3 gap-6 text-blue-100">
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold text-white mb-2">Clear Milestones</h4>
            <p className="text-sm">Every phase has defined deliverables and success metrics so you always know progress.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h4 className="font-bold text-white mb-2">Flexible & Agile</h4>
            <p className="text-sm">We adapt to changing requirements and business priorities throughout the engagement.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-bold text-white mb-2">True Partnership</h4>
            <p className="text-sm">We work collaboratively with your team, ensuring knowledge transfer and lasting capability.</p>
          </div>
        </div>
      </div>

      {/* CERTIFICATES & PARTNERSHIPS */}
      
      {/* CALL TO ACTION */}
      <div className="text-center mt-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Free Consultation →
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-200 font-bold hover:bg-cyan-400/20 transition">
            Or Send Message →
          </Link>
        </div>
        <div className="mt-2 text-blue-200 text-xs">Confidential consultation • NDA provided • Enterprise-grade solutions</div>
        <div className="mt-2 text-blue-300 text-xs">💡 Replace "YOUR-CALENDLY-LINK" with your Calendly URL</div>
      </div>
    </div>
  </section>
  </>
);

export default Services;
