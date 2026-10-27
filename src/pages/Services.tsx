import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { serviceSchema } from "../data/schemas";
import Icon from "../components/Icon";
import { solutions } from "../data/solutions";

const Services = () => (
  <>
    <SEO
      title="Services - AI Solutions for Education, Public Sector & Business | AydenAIT"
      description="Custom AI solutions for education, civic services, finance and business: AI assistants, AI-assisted review, detection and risk analysis, workflow automation, analytics and AI integration."
      keywords="custom AI solutions, AI chatbot development, AI-assisted grading, academic integrity software, AI workflow automation, AI analytics, AI integration, AI consulting Toronto"
      ogUrl="https://aydenait.com/services"
      canonical="https://aydenait.com/services"
    />
    <StructuredData data={serviceSchema} />
    <section className="pt-16 pb-8 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      {/* HERO */}
      <h1 className="text-4xl font-extrabold text-blue-100 mb-2 text-center">
        Services & Solutions
      </h1>
      <p className="text-blue-200 text-xl text-center mb-10">
        We help organizations scope, build, launch and operate AI solutions. Our core expertise is in higher education,
        and we apply the same approach to civic services, finance and business.
      </p>

      {/* EDUCATION SOLUTIONS */}
      <div className="mb-12 rounded-2xl p-8 bg-gradient-to-br from-blue-900/60 to-cyan-900/30 border border-cyan-700/40">
        <p className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Core expertise</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Education Solutions</h2>
        <p className="text-blue-100 mb-6">
          Our grading, academic-integrity and workload platforms are in use at the University of Toronto. We can adapt
          them to your institution or develop new solutions with your faculty and staff.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            ["AI-Assisted Grading", "Rubric-based scoring for programming and written work, with instructor review before any mark is released."],
            ["Academic Integrity", "Code similarity and AI-authorship detection that produces reviewable evidence, not just a percentage."],
            ["Workload & Term Planning", "Course assignments, service roles and policy-based workload calculations in one place."],
            ["Student & Staff Assistants", "Assistants that answer from your official policies and course material, with sources shown."],
            ["Learning Analytics", "Course and rubric analytics that show where students struggle and where grading is inconsistent."],
            ["Integration", "Connects with the learning management, identity and student systems you already run."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="font-bold text-cyan-300 mb-1">{title}</h3>
              <p className="text-blue-100">{desc}</p>
            </div>
          ))}
        </div>
        <Link to="/portfolio" className="inline-block mt-6 text-cyan-300 font-semibold hover:text-cyan-200 underline underline-offset-4">
          See our education projects →
        </Link>
      </div>

      {/* OTHER SECTORS */}
      <h2 className="text-2xl font-bold text-blue-200 mb-6 text-center">Other Sectors We Serve</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          ["Public Sector & Civic Services", "Assistants that answer residents' questions from official data, with sources, like our Hey Markham project."],
          ["Financial Services", "Analysis and decision-support tools that combine market data, news and sentiment, like our AlphOpt platform."],
          ["Businesses & Organizations", "AI strategy, custom applications and integration with your existing systems and data."],
        ].map(([title, desc]) => (
          <div key={title} className="bg-white/10 rounded-xl border border-blue-900 p-6 shadow hover:bg-white/15 transition-colors">
            <h3 className="font-bold text-white mb-2">{title}</h3>
            <p className="text-blue-100 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* ENGAGEMENT OPTIONS */}
      <h2 className="text-2xl font-bold text-blue-200 mt-4 mb-2 text-center">Ways to Work With Us</h2>
      <p className="text-blue-300 text-center mb-6 text-sm">Begin with a focused engagement, evaluate the results, then decide on next steps.</p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          ["AI Readiness Assessment", "Complimentary", "We review your goals, processes and data, and recommend where AI can help, with realistic effort, cost and risk for each option."],
          ["Pilot / Proof of Concept", "Typically 4–8 weeks", "A working prototype on one real use case, so you can measure the results before a larger investment."],
          ["Full Solution Build", "Scoped to your project", "Design, development, integration with your systems, testing and launch, with your team involved throughout."],
          ["Ongoing Support", "Monthly", "Monitoring, improvements, new features and help for your staff once the system is live."],
        ].map(([title, tag, desc]) => (
          <div key={title} className="bg-white/10 rounded-xl border border-blue-900 p-6 shadow hover:bg-white/15 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-white">{title}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200">{tag}</span>
            </div>
            <p className="text-blue-100 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-bold text-blue-200 mt-10 mb-6 text-center">Why Work With Us</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <b>Proven in Production</b>
          <p className="text-blue-100 text-sm mt-2">We build and operate our own products, so we understand what it takes to keep AI reliable after launch.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <b>Privacy & Responsible AI</b>
          <p className="text-blue-100 text-sm mt-2">Human review, audit trails and data handling designed around your privacy and policy requirements.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow hover:bg-white/15 transition-colors">
          <div className="flex justify-center mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <b>Flexible Engagements</b>
          <p className="text-blue-100 text-sm mt-2">Begin with an assessment or pilot, then scale. NDAs are standard, and you retain control of your roadmap.</p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-2 text-center">What We Build</h2>
      <p className="text-blue-300 text-center mb-6 text-sm">
        Every engagement includes strategy, development, integration with your systems and ongoing support.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {solutions.map((item) => (
          <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-blue-800 hover:border-cyan-600/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <Icon name={item.icon} className="w-7 h-7 text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg font-bold text-cyan-300">{item.title}</h3>
            </div>
            <p className="text-blue-100 text-sm">{item.desc}</p>
          </div>
        ))}
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
      <h2 className="text-3xl font-bold text-blue-100 mt-16 mb-3 text-center">Our Delivery Process</h2>
      <p className="text-blue-300 text-center mb-12 max-w-xl mx-auto text-sm">
        A structured process from first conversation to production
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
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Consultation</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">30 minutes • Complimentary</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Objectives and constraints</li>
              <li>Data and systems overview</li>
              <li>Initial fit assessment</li>
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
            <h3 className="text-xl font-bold text-blue-300 mb-2">Assessment & Proposal</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">1–2 weeks</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Requirements and success criteria</li>
              <li>Solution architecture</li>
              <li>Scope, timeline, cost and risks</li>
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
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Pilot</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">Typically 4–8 weeks</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Working prototype on your use case</li>
              <li>Evaluation against success criteria</li>
              <li>Go / no-go decision</li>
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
            <h3 className="text-xl font-bold text-purple-300 mb-2">Launch & Support</h3>
            <p className="text-blue-400 text-xs font-semibold mb-3">Ongoing</p>
            <ul className="text-blue-200 text-sm space-y-1.5">
              <li>Production deployment</li>
              <li>Staff training and documentation</li>
              <li>Monitoring and improvement</li>
            </ul>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-700/20">
          <p className="text-cyan-300 font-semibold mb-2">Transparent pricing · Flexible engagement models · NDA standard</p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center mt-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
          </Link>
          <a href="mailto:contact@aydenait.com" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-200 font-bold hover:bg-cyan-400/20 transition">
            Email Us
          </a>
        </div>
        <div className="mt-2 text-blue-200 text-xs">Confidential consultation · NDA available</div>
      </div>
    </div>
  </section>
  </>
);

export default Services;
