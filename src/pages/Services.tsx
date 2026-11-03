import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { serviceSchema } from "../data/schemas";
import Icon from "../components/Icon";
import { solutions } from "../data/solutions";

const educationSolutions = [
  ["AI-Assisted Grading", "Rubric-based scoring for programming and written work, with instructor review before any mark is released."],
  ["Academic Integrity", "Code similarity and AI-authorship detection that produces reviewable evidence, not just a percentage."],
  ["Workload & Term Planning", "Course assignments, service roles and policy-based workload calculations in one place."],
  ["Student & Staff Assistants", "Assistants that answer from your official policies and course material, with sources shown."],
  ["Learning Analytics", "Course and rubric analytics that show where students struggle and where grading is inconsistent."],
  ["Integration", "Connects with the learning management, identity and student systems you already run."],
];

const otherSectors = [
  ["Public Sector & Civic Services", "Assistants that answer residents' questions from official data, with sources, like our Hey Markham project."],
  ["Financial Services", "Analysis and decision-support tools that combine market data, news and sentiment, like our AlphOpt platform."],
  ["Businesses & Organizations", "AI strategy, custom applications and integration with your existing systems and data."],
];

const engagements = [
  ["AI Readiness Assessment", "Complimentary", "We review your goals, processes and data, and recommend where AI can help, with realistic effort, cost and risk for each option."],
  ["Pilot / Proof of Concept", "Typically 4–8 weeks", "A working prototype on one real use case, so you can measure the results before a larger investment."],
  ["Full Solution Build", "Scoped to your project", "Design, development, integration with your systems, testing and launch, with your team involved throughout."],
  ["Ongoing Support", "Monthly", "Monitoring, improvements, new features and help for your staff once the system is live."],
];

const reasons = [
  ["Proven in Production", "We build and operate our own products, so we understand what it takes to keep AI reliable after launch."],
  ["Privacy & Responsible AI", "Human review, audit trails and data handling designed around your privacy and policy requirements."],
  ["Flexible Engagements", "Begin with an assessment or pilot, then scale. NDAs are standard, and you retain control of your roadmap."],
];

const Services = () => (
  <>
    <SEO
      title="AI Services for Education, Public Sector & Business | AydenAIT"
      description="Custom AI for education, civic services, finance and business: assistants, AI-assisted review, risk detection, workflow automation, analytics and integration."
      keywords="custom AI solutions, AI chatbot development, AI-assisted grading, academic integrity software, AI workflow automation, AI analytics, AI integration, AI consulting Toronto"
      ogUrl="https://aydenait.com/services"
      canonical="https://aydenait.com/services"
    />
    <StructuredData data={serviceSchema} />
    <article className="bg-[#0b1120] text-blue-100">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-cyan-300 mb-4">Services</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Services & Solutions</h1>
              <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">
                We help organizations scope, build, launch and operate AI solutions.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-blue-200 leading-relaxed mb-8">
                Our core expertise is in higher education, and we apply the same approach to civic services, finance and business.
                Every engagement includes strategy, development, integration with your systems and ongoing support.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                  Schedule a consultation <span aria-hidden="true">→</span>
                </Link>
                <a href="mailto:contact@aydenait.com" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* What we build */}
          <section className="grid lg:grid-cols-12 gap-6 py-20">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">What we build</h2>
            <ul className="lg:col-span-8 divide-y divide-white/10 [&>li:first-child>a]:pt-0">
              {solutions.map((item) => (
                <li key={item.slug}>
                  <Link to={`/services/${item.slug}`} className="group grid sm:grid-cols-[3rem_1fr_2rem] gap-x-2 gap-y-3 py-7">
                    <Icon name={item.icon} className="w-6 h-6 text-cyan-300 mt-1" />
                    <span>
                      <span className="block text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">{item.title}</span>
                      <span className="block text-blue-200 leading-relaxed mb-2">{item.desc}</span>
                      <span className="block text-sm text-cyan-200/80">{item.proof}</span>
                    </span>
                    <span className="hidden sm:block text-right text-blue-300 group-hover:text-cyan-300 group-hover:translate-x-1 transition" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-2">Core expertise</h2>
              <p className="text-lg font-semibold text-white">Education Solutions</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl leading-relaxed text-white mb-10">
                Our grading, academic-integrity and workload platforms are already in use in higher education. We can adapt
                them to your institution or develop new solutions with your faculty and staff.
              </p>
              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {educationSolutions.map(([title, desc]) => (
                  <div key={title} className="border-t border-white/10 pt-4">
                    <dt className="font-semibold text-white mb-1">{title}</dt>
                    <dd className="text-blue-200 leading-relaxed">{desc}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/products" className="inline-block mt-10 font-semibold text-cyan-300 hover:text-white transition-colors">
                See our education products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* Other sectors */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Other sectors we serve</h2>
            <ul className="lg:col-span-8 grid md:grid-cols-3 gap-10">
              {otherSectors.map(([title, desc]) => (
                <li key={title}>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-blue-200 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Ways to work with us */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-2">Ways to work with us</h2>
              <p className="text-blue-200">Begin with a focused engagement, evaluate the results, then decide on next steps.</p>
            </div>
            <ol className="lg:col-span-8 divide-y divide-white/10">
              {engagements.map(([title, tag, desc], idx) => (
                <li key={title} className="grid sm:grid-cols-[4rem_1fr] gap-2 py-7 first:pt-0">
                  <span className="font-mono text-sm text-cyan-300 pt-1">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <span className="text-sm text-cyan-200">{tag}</span>
                    </div>
                    <p className="text-blue-200 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Why work with us */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Why work with us</h2>
            <ul className="lg:col-span-8 grid md:grid-cols-3 gap-10">
              {reasons.map(([title, desc]) => (
                <li key={title}>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-blue-200 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Call to action */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16 border-t border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Start with a free consultation</h2>
              <p className="text-blue-200">Confidential consultation · NDA available</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule a consultation
            </Link>
          </section>
        </div>
      </div>
    </article>
  </>
);

export default Services;
