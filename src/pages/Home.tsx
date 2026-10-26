import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";
import ContactForm from "../components/ContactForm";
import { projects } from "../data/projects";

const educationNeeds = [
  { icon: "📝", title: "Grading & Feedback", desc: "Rubric-based, AI-assisted scoring that keeps instructors in charge of every final mark." },
  { icon: "🔍", title: "Academic Integrity", desc: "Similarity and AI-authorship analysis that produces evidence a committee can review." },
  { icon: "📅", title: "Workload & Planning", desc: "Course assignments, service roles and term planning driven by your own policies." },
  { icon: "💬", title: "Student & Staff Assistants", desc: "Assistants that answer from your official documents and show where each answer came from." },
];

const sectors = [
  {
    icon: "🏛️",
    title: "Public Sector & Civic Services",
    desc: "Help residents find accurate information quickly, without replacing the official sources they rely on.",
    example: "Hey Markham: an AI assistant built on the City of Markham's official data.",
  },
  {
    icon: "📊",
    title: "Financial Services",
    desc: "Turn news, market data and sentiment into analysis that supports decisions, with risk visible at every step.",
    example: "AlphOpt: options-strategy analysis with news and sentiment AI.",
  },
  {
    icon: "🏢",
    title: "Businesses & Organizations",
    desc: "AI strategy, custom development and integration with the systems your team already uses.",
    example: "From a first assessment to a production system and ongoing support.",
  },
];

const principles = [
  { title: "Built with the people who use it", desc: "Our education tools were shaped by working alongside faculty and staff, not designed in isolation." },
  { title: "People stay in control", desc: "AI suggests, people decide. Every system we build has a clear point where a human reviews the result." },
  { title: "Evidence, not black boxes", desc: "Scores come with reasons and answers come with sources, so results can be checked and defended." },
  { title: "Privacy and policy first", desc: "We design around your institution's privacy, security and policy requirements from day one." },
];

const educationProjects = projects.filter((p) => p.sector === "Higher Education");

const Home = () => {
  return (
  <>
    <SEO
      title="AydenAIT - AI Solutions for Education and Beyond"
      description="AydenAIT builds AI systems for education, including grading, academic-integrity and faculty workload platforms in use at the University of Toronto, plus AI solutions for civic services, finance and business."
      keywords="AI in education, AI grading, academic integrity software, AI code similarity detection, faculty workload management, AI consulting Toronto, AI for municipalities, AI solutions"
      ogUrl="https://aydenait.com"
      canonical="https://aydenait.com"
    />
    <StructuredData data={organizationSchema} />
    <StructuredData data={websiteSchema} />
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900">
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-25 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-[pulse_12s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            AI Solutions for Education
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">and Beyond</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 leading-relaxed">
            We design, build and support AI systems that people rely on every day, from grading and academic integrity at the <span className="text-cyan-300 font-bold">University of Toronto</span> to city services and financial analysis.
          </p>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            A Toronto-based team that ships working software and consults on what to build next.
          </p>

          {/* Facts */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">3</div>
              <div className="text-blue-100 text-sm font-semibold">Platforms in use at the University of Toronto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">5</div>
              <div className="text-blue-100 text-sm font-semibold">AI products designed and built</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">3</div>
              <div className="text-blue-100 text-sm font-semibold">Sectors: education, civic services, finance</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 font-bold shadow-2xl hover:shadow-cyan-400/50 hover:scale-105 transition-all text-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-full text-white border-2 border-white/30 font-bold hover:bg-white/10 hover:border-white transition-all text-lg backdrop-blur-sm"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Education */}
    <section className="py-20 bg-gradient-to-b from-[#10172a] to-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Education</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Teaching, Learning and Academic Operations</p>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Universities face growing classes, AI-written assignments and complex workload rules. We build tools that take
            the repetitive work off faculty and staff while leaving the judgement with them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {educationProjects.map((project) => (
            <div key={project.title} className="flex flex-col bg-white/10 rounded-2xl p-7 border border-blue-700/50 hover:border-cyan-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{project.summary}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white text-center mb-6">Where we help schools and universities</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {educationNeeds.map((need) => (
            <div key={need.title} className="rounded-xl p-6 bg-white/5 border border-white/10">
              <div className="text-3xl mb-3" aria-hidden="true">{need.icon}</div>
              <h4 className="font-bold text-white mb-2">{need.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed">{need.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-all hover:gap-3">
            <span>See the projects in detail</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>

    {/* Other sectors */}
    <section className="py-20 bg-[#0c1222] border-y border-blue-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Beyond the Classroom</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">The Same Approach, Other Fields</p>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Grounded answers, human review and clear evidence work just as well outside education.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div key={sector.title} className="flex flex-col rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-4" aria-hidden="true">{sector.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-white">{sector.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">{sector.desc}</p>
              <p className="mt-auto pt-4 border-t border-white/10 text-sm text-cyan-200">{sector.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How we work */}
    <section className="py-20 bg-gradient-to-b from-blue-950 to-[#10172a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How We Build</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl p-6 bg-white/5 border border-white/10">
              <svg className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Capture Form - Free AI Readiness Assessment */}
    <section id="lead-capture" className="scroll-mt-24 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left: Value Proposition */}
            <div className="lg:col-span-2 text-white">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full px-4 py-2 mb-4">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-cyan-300">100% Free • No Obligation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your Free
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">AI Readiness Assessment</span>
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Tell us where you are today. We'll look at your processes and data and come back with practical places AI can help, and what it would take.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">AI opportunities specific to your institution or business</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">Realistic effort, cost and risk for each option</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">A step-by-step plan you can act on, with or without us</span>
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-[#10172a]/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <ContactForm
                source="assessment"
                submitLabel="Request Assessment"
                messagePlaceholder="What would you like AI to help with? For example, grading, integrity reviews, scheduling or answering questions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Have a Problem AI Could Solve?</h2>
        <p className="text-xl text-blue-50 mb-8">
          Whether you run a department, a city service or a business, tell us what's slowing your team down.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition text-lg inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Free Consultation
          </Link>
          <a href="mailto:contact@aydenait.com" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition text-lg">
            Email Us
          </a>
        </div>
        <p className="mt-6 text-blue-100 text-sm">
          ✓ 30-minute free consultation  ✓ No commitment required  ✓ NDA provided
        </p>
      </div>
    </section>
  </>
  );
};

export default Home;
