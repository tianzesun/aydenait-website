import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => (
  <>
    <SEO
      title="About AydenAIT - AI Solutions for Education and Beyond"
      description="AydenAIT is a Toronto-based AI company. Our grading, academic-integrity and workload platforms are in use at the University of Toronto, and we build AI for civic services, finance and business."
      keywords="about AydenAIT, AI consulting firm, IT consulting company, enterprise AI, technology consulting, AIOps provider, digital transformation experts"
      ogUrl="https://aydenait.com/about"
      canonical="https://aydenait.com/about"
    />

    {/* Hero Section */}
    <section className="py-16 bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-950 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AydenAIT</h1>
        <p className="text-xl text-blue-100 mb-4">
          We're a Toronto-based AI company that builds practical systems for education and the organizations around it.
        </p>
        <p className="text-lg text-blue-200">
          Our grading, academic-integrity and workload platforms are in use at the University of Toronto, and we bring
          the same care to civic services, finance and business.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Our work started inside the university, with problems faculty and staff were living with every term:
            grading large programming courses fairly, investigating suspected copying and AI-written code, and planning
            teaching workloads across whole departments.
          </p>
          <p>
            Instead of writing reports about what AI might do, we built the tools. Faculty Workload Management, CodeProvenance
            and DeepRubric are now in use at the University of Toronto, shaped by the people who use them.
          </p>
          <p>
            Along the way we learned what makes AI work in practice: answers grounded in real sources, a person reviewing
            every decision that matters, and results that can be explained. We now apply those lessons beyond education,
            with an AI city-services assistant built on the City of Markham's official data and an options-analysis
            platform for financial research.
          </p>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">What We Do</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We work in two ways, and most clients use both.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">We build products</h3>
            <p className="text-gray-600 mb-4">
              Our own platforms for grading, academic integrity, workload planning, civic information and financial
              analysis. They're designed, built and supported by our team.
            </p>
            <Link to="/portfolio" className="text-blue-600 font-semibold hover:text-blue-800">See our projects →</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">We consult and build for clients</h3>
            <p className="text-gray-600 mb-4">
              AI readiness assessments, strategy, custom development and integration for institutions and businesses
              that want AI working inside their own systems.
            </p>
            <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800">Explore our services →</Link>
          </div>
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">How We Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Senior people, start to finish", "The people who scope your project are the people who build it. No hand-offs to a team you've never met."],
            ["Small steps, real results", "We start with a focused assessment or pilot, show working software early, and scale what proves useful."],
            ["Humans stay in control", "Every system has a clear point where a person reviews the result before it counts."],
            ["You own what we build", "Clear documentation and knowledge transfer, so your team can run and extend the system without depending on us."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Results-Driven</h3>
            <p className="text-gray-600">
              We measure success by whether people actually use what we build, and whether it makes their work easier.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Transparency First</h3>
            <p className="text-gray-600">
              No hidden fees, no buzzword bingo. We explain what we're doing, why it matters, and what you can expect.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Innovation</h3>
            <p className="text-gray-600">
              We follow AI closely and adopt new techniques when they work, but we stay pragmatic about what belongs in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default About;
