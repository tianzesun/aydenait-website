import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon, { type IconName } from "../components/Icon";
import { projects } from "../data/projects";
import { team } from "../data/team";

const workingPrinciples = [
  ["Senior people, start to finish", "The people who scope your project are the people who build it. There are no hand-offs to an unfamiliar team."],
  ["Small steps, real results", "We begin with a focused assessment or pilot, deliver working software early, and scale what proves valuable."],
  ["Humans stay in control", "Every system has a clear point where a person reviews the result before it counts."],
  ["You own what we build", "Clear documentation and knowledge transfer, so your team can run and extend the system without depending on us."],
];

const values: { icon: IconName; title: string; desc: string }[] = [
  { icon: "flag", title: "Results-driven", desc: "We measure success by whether people actually use what we build, and whether it makes their work easier." },
  { icon: "eye", title: "Transparency first", desc: "Clear pricing and plain language. We explain what we are doing, why it matters and what you can expect." },
  { icon: "lightBulb", title: "Pragmatic innovation", desc: "We follow AI research closely and adopt new techniques once they are proven, with a clear view of what belongs in production." },
];

const About = () => (
  <>
    <SEO
      title="About AydenAIT - AI solutions for education and beyond"
      description="Toronto AI company with grading, academic-integrity and workload platforms in use in higher education, plus AI for civic services, finance and business."
      keywords="about AydenAIT, AI company Toronto, custom AI solutions, AI in education, AI consulting"
      ogUrl="https://aydenait.com/about"
      canonical="https://aydenait.com/about"
    />

    <article className="bg-[#0b1120] text-blue-100">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-cyan-300 mb-4">About us · Toronto</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">About AydenAIT</h1>
              <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">
                A Toronto-based AI company that builds practical systems for education and the organizations that serve it.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-blue-200 leading-relaxed mb-8">
                Our grading, academic-integrity and workload platforms are in use in higher education, and we bring
                the same standards to civic services, finance and business.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                  Talk to us <span aria-hidden="true">→</span>
                </Link>
                <Link to="/products" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                  See our products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Our story */}
          <section className="grid lg:grid-cols-12 gap-6 py-20">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Our story</h2>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-2xl leading-relaxed text-white">
                Our work began inside the university, with challenges faculty and staff face every term:
                grading large programming courses fairly, investigating suspected copying and AI-written code, and planning
                teaching workloads across whole departments.
              </p>
              <p className="text-lg leading-relaxed text-blue-200">
                Rather than producing reports on what AI might do, we built the tools. Faculty Workload Management, CodeProvenance
                and DeepRubric are now in use, shaped by the faculty and staff who use them.
              </p>
              <p className="text-lg leading-relaxed text-blue-200">
                That work taught us what makes AI succeed in practice: answers grounded in real sources, a person reviewing
                every decision that matters, and results that can be explained. We now apply those lessons beyond education,
                with an AI city-services assistant built on the City of Markham's publicly available data and an options-analysis
                platform for financial research.
              </p>
            </div>
          </section>

          {/* Our team (hidden until src/data/team.ts has entries) */}
          {team.length > 0 && (
            <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Our team</h2>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-10">
                {team.map((person) => (
                  <li key={person.name} className="flex gap-5">
                    {person.photo && (
                      <img src={person.photo} alt="" loading="lazy" className="w-20 h-20 shrink-0 rounded-full object-cover border border-white/10" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                      <p className="text-cyan-300 text-sm font-medium mb-3">{person.role}</p>
                      <p className="text-blue-200 text-sm leading-relaxed">{person.bio}</p>
                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-cyan-300 hover:text-white transition-colors">
                          {person.name} on LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* What we do */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">What we do</h2>
            <div className="lg:col-span-8">
              <p className="text-2xl leading-relaxed text-white mb-10">We work in two complementary ways.</p>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">We build products</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Our own platforms for grading, academic integrity, workload planning, civic information and financial
                    analysis. Each is designed, built and supported by our team.
                  </p>
                  <Link to="/products" className="font-semibold text-cyan-300 hover:text-white transition-colors">See our products <span aria-hidden="true">→</span></Link>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">We consult and build for clients</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    AI readiness assessments, strategy, custom development and integration for institutions and businesses
                    that want AI working inside their own systems.
                  </p>
                  <Link to="/services" className="font-semibold text-cyan-300 hover:text-white transition-colors">Explore our services <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </div>
          </section>

          {/* What we've built */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">What we've built</h2>
            <ul className="lg:col-span-8 divide-y divide-white/10 [&>li:first-child>a]:pt-0">
              {projects.filter((p) => p.productPage).map((project) => (
                <li key={project.title}>
                  <Link to={`/products/${project.productPage!.slug}`} className="group grid sm:grid-cols-12 gap-2 items-baseline py-5">
                    <span className="sm:col-span-5 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                      {project.stage && (
                        <span className="ml-2 align-middle text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-100">{project.stage}</span>
                      )}
                    </span>
                    <span className="sm:col-span-6 text-blue-200">{project.summary}</span>
                    <span className="hidden sm:block sm:col-span-1 text-right text-blue-300 group-hover:text-cyan-300 group-hover:translate-x-1 transition" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* How we work */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">How we work</h2>
            <ol className="lg:col-span-8 divide-y divide-white/10">
              {workingPrinciples.map(([title, desc], idx) => (
                <li key={title} className="grid sm:grid-cols-[4rem_1fr] gap-2 py-7 first:pt-0">
                  <span className="font-mono text-sm text-cyan-300 pt-1">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-blue-200 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Values */}
          <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
            <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Our core values</h2>
            <ul className="lg:col-span-8 grid md:grid-cols-3 gap-10">
              {values.map((value) => (
                <li key={value.title}>
                  <Icon name={value.icon} className="w-7 h-7 text-cyan-300 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{value.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Call to action */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16 border-t border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Let's talk about your project</h2>
              <p className="text-blue-200">The first consultation is complimentary, and an NDA is available.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </section>
        </div>
      </div>
    </article>
  </>
);
export default About;
