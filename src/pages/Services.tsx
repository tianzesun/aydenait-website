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
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <b>Transparent, Flexible Partnership</b>
          <p className="text-blue-100 text-sm mt-2">NDA standard. Enterprise/SMB clients. Project, team or long-term models. You always control your roadmap.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <b>Security & Compliance Leadership</b>
          <p className="text-blue-100 text-sm mt-2">ISO-Inspired, DevSecOps/Zero-Trust by design, documented processes for regulated industries.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <b>Results, Not Just Deliverables</b>
          <p className="text-blue-100 text-sm mt-2">Faster release cycles, reduced costs, lower incident rates—and real upskilling for your team.</p>
        </div>
      </div>

      {/* CORE SERVICES */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-5 text-center">Our Service Offerings</h2>

      {/* AI Consulting */}
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-xl font-bold text-cyan-300">AI Consulting & Strategy</h3>
        </div>
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
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-bold text-cyan-300">IT Consulting & Solutions</h3>
        </div>
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
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h3 className="text-xl font-bold text-cyan-300">AI Software Development</h3>
        </div>
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
      <div className="mb-8 bg-white/5 rounded-xl p-6 border border-blue-800 hover:border-cyan-600/50 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-xl font-bold text-cyan-300">AIOps & Intelligent Operations</h3>
        </div>
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
      <h2 className="text-3xl font-bold text-blue-100 mt-16 mb-3 text-center">How We Work Together</h2>
      <p className="text-blue-300 text-center mb-12 max-w-xl mx-auto text-sm">
        Simple, transparent process from discovery to launch
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20" style={{width: 'calc(100% - 12rem)', margin: '0 6rem'}}></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Phase 1 */}
          <div className="group text-center">
            <div className="relative mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Discovery</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">1-2 weeks • Free</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Consultation call</li>
              <li>Requirements analysis</li>
              <li>Success criteria</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="group text-center">
            <div className="relative mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">Strategy</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">2-4 weeks</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Technical roadmap</li>
              <li>Architecture design</li>
              <li>ROI analysis</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="group text-center">
            <div className="relative mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Build</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">4-12 weeks</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Agile development</li>
              <li>Testing & QA</li>
              <li>Documentation</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="group text-center">
            <div className="relative mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">Launch</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">Ongoing</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Deployment</li>
              <li>Team training</li>
              <li>Support & optimization</li>
            </ul>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-700/20">
          <p className="text-cyan-300 font-semibold mb-2">Transparent pricing • Flexible engagement models • NDA standard</p>
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
