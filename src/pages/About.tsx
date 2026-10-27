import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

const About = () => (
  <>
    <SEO
      title="About AydenAIT - AI Solutions for Education and Beyond"
      description="AydenAIT is a Toronto-based AI company. Our grading, academic-integrity and workload platforms are in use at the University of Toronto, and we build AI for civic services, finance and business."
      keywords="about AydenAIT, AI company Toronto, custom AI solutions, AI in education, AI consulting"
      ogUrl="https://aydenait.com/about"
      canonical="https://aydenait.com/about"
    />

    {/* Hero Section */}
    <section className="py-16 bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-950 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AydenAIT</h1>
        <p className="text-xl text-blue-100 mb-4">
          AydenAIT is a Toronto-based AI company that builds practical systems for education and the organizations that serve it.
        </p>
        <p className="text-lg text-blue-200">
          Our grading, academic-integrity and workload platforms are in use at the University of Toronto, and we bring
          the same standards to civic services, finance and business.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-16 bg-[#10172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Our Story</h2>
        <div className="space-y-5 text-lg text-blue-100 leading-relaxed">
          <p>
            Our work began inside the university, with challenges faculty and staff face every term:
            grading large programming courses fairly, investigating suspected copying and AI-written code, and planning
            teaching workloads across whole departments.
          </p>
          <p>
            Rather than producing reports on what AI might do, we built the tools. Faculty Workload Management, CodeProvenance
            and DeepRubric are now in use at the University of Toronto, shaped by the people who use them.
          </p>
          <p>
            That work taught us what makes AI succeed in practice: answers grounded in real sources, a person reviewing
            every decision that matters, and results that can be explained. We now apply those lessons beyond education,
            with an AI city-services assistant built on the City of Markham's official data and an options-analysis
            platform for financial research.
          </p>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-16 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What We Do</h2>
        <p className="text-blue-200 text-center max-w-2xl mx-auto mb-12">
          We work in two complementary ways.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">We build products</h3>
            <p className="text-blue-200 mb-4">
              Our own platforms for grading, academic integrity, workload planning, civic information and financial
              analysis. Each is designed, built and supported by our team.
            </p>
            <Link to="/portfolio" className="text-cyan-300 font-semibold hover:text-cyan-200">See our projects →</Link>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">We consult and build for clients</h3>
            <p className="text-blue-200 mb-4">
              AI readiness assessments, strategy, custom development and integration for institutions and businesses
              that want AI working inside their own systems.
            </p>
            <Link to="/services" className="text-cyan-300 font-semibold hover:text-cyan-200">Explore our services →</Link>
          </div>
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-16 bg-[#10172a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How We Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Senior people, start to finish", "The people who scope your project are the people who build it. There are no hand-offs to an unfamiliar team."],
            ["Small steps, real results", "We begin with a focused assessment or pilot, deliver working software early, and scale what proves valuable."],
            ["Humans stay in control", "Every system has a clear point where a person reviews the result before it counts."],
            ["You own what we build", "Clear documentation and knowledge transfer, so your team can run and extend the system without depending on us."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-blue-200 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-16 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <Icon name="flag" className="w-7 h-7 text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
            <p className="text-blue-200">
              We measure success by whether people actually use what we build, and whether it makes their work easier.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <Icon name="eye" className="w-7 h-7 text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparency First</h3>
            <p className="text-blue-200">
              Clear pricing and plain language. We explain what we are doing, why it matters and what you can expect.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <Icon name="lightBulb" className="w-7 h-7 text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pragmatic Innovation</h3>
            <p className="text-blue-200">
              We follow AI research closely and adopt new techniques once they are proven, with a clear view of what belongs in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default About;
