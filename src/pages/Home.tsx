import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { organizationSchema, websiteSchema } from "../data/schemas";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { projects, type Project } from "../data/projects";
import { engagementSteps, solutions } from "../data/solutions";

const principles = [
  { title: "Proven in production", desc: "Our own platforms are used every day in higher education. We know what it takes to keep AI working after launch." },
  { title: "People stay in control", desc: "AI suggests, people decide. Every system we build has a clear point where a person reviews the result." },
  { title: "Evidence, not black boxes", desc: "Scores come with reasons and answers come with sources, so results can be checked and defended." },
  { title: "Privacy and policy first", desc: "We design around your organization's privacy, security and policy requirements from day one." },
];

// Counts and results come from src/data/projects.ts so the hero stays in step with the product list
const sectorOrder: Project["sector"][] = ["Higher Education", "Civic Services", "Financial Services"];
const inProduction = projects.filter((p) => p.sector === "Higher Education" && !p.stage).length;
const featured = projects.find((p) => p.screenshots?.length && p.liveUrl);
const featuredHost = featured?.liveUrl ? new URL(featured.liveUrl).host : undefined;
const measuredResults = projects.flatMap((p) =>
  (p.productPage?.results ?? []).map((r) => ({ ...r, product: p.title, slug: p.productPage!.slug })),
);

const Home = () => (
  <>
    <SEO
      title="AydenAIT - Custom AI Solutions, From Idea to Production"
      description="AydenAIT designs, builds and supports custom AI solutions. Our platforms are in use in higher education. Book a free consultation."
      keywords="custom AI solutions, AI development company Toronto, AI consulting, AI chatbot development, AI in education, AI grading, academic integrity software, AI automation, AI for municipalities"
      ogUrl="https://aydenait.com"
      canonical="https://aydenait.com"
    />
    <StructuredData data={organizationSchema} />
    <StructuredData data={websiteSchema} />
    {/* Hero */}
    <section className="relative overflow-hidden bg-[#0b1120]">
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.16),transparent_65%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-cyan-300 mb-5">AI products and custom AI solutions · Toronto</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              AI that people can check, built to run every day
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              AydenAIT designs, builds and supports AI systems for education, civic services and finance. Our grading,
              academic-integrity and workload platforms are used by faculty and staff in higher education, and we build
              the same kind of system for your organization.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-12">
              <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                Start your AI project <span aria-hidden="true">→</span>
              </Link>
              <a href="#products" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                See what we've built
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <dt className="sr-only">Products</dt>
                <dd className="text-3xl font-bold text-white">{projects.length}</dd>
                <dd className="text-sm text-blue-300">AI products designed and built</dd>
              </div>
              <div>
                <dt className="sr-only">In production</dt>
                <dd className="text-3xl font-bold text-white">{inProduction}</dd>
                <dd className="text-sm text-blue-300">platforms in use in higher education</dd>
              </div>
              <div>
                <dt className="sr-only">Sectors</dt>
                <dd className="text-3xl font-bold text-white">{sectorOrder.length}</dd>
                <dd className="text-sm text-blue-300">sectors: education, civic, finance</dd>
              </div>
            </dl>
          </div>

          {/* Live product in a browser window */}
          {featured?.screenshots && (
            <div className="lg:col-span-6">
              <figure className="rounded-xl overflow-hidden border border-white/10 bg-[#111a2e] shadow-[0_20px_80px_-20px_rgba(34,211,238,0.35)]">
                <div className="flex items-center gap-2 px-4 h-9 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="mx-auto px-4 py-0.5 rounded-md bg-white/5 text-xs text-blue-300">{featuredHost}</span>
                </div>
                <img src={featured.screenshots[0].src} alt={featured.screenshots[0].alt} className="w-full aspect-[16/10] object-cover object-top" />
              </figure>
              <p className="mt-4 text-sm text-blue-300">
                <span className="text-white font-semibold">{featured.title}</span>, {featured.summary.charAt(0).toLowerCase() + featured.summary.slice(1, -1)}.{" "}
                <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                  Try it live <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Products */}
    <section id="products" className="scroll-mt-20 py-20 bg-[#0b1120] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-wider text-cyan-300">Our products</h2>
          <div className="lg:col-span-8">
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">We build our own AI platforms first</p>
            <p className="text-blue-200 max-w-2xl">
              Every product below was designed, built and is supported by our team. The lessons from running them are
              what we bring to client projects.
            </p>
          </div>
        </div>

        {sectorOrder.map((sector) => (
          <div key={sector} className="grid lg:grid-cols-12 gap-6 py-8 border-t border-white/10">
            <h3 className="lg:col-span-4 text-lg font-semibold text-white">{sector}</h3>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {projects.filter((p) => p.sector === sector).map((project) => (
                <li key={project.title}>
                  <Link
                    to={project.productPage ? `/products/${project.productPage.slug}` : "/products"}
                    className="group flex flex-col h-full rounded-xl p-6 bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-white">{project.title}</span>
                      {project.stage && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-100">{project.stage}</span>
                      )}
                    </span>
                    <span className="text-sm text-blue-200 leading-relaxed mb-4">{project.summary}</span>
                    <span className="mt-auto text-sm font-semibold text-cyan-300 group-hover:text-white transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {measuredResults.length > 0 && (
          <div className="grid lg:grid-cols-12 gap-6 pt-10 border-t border-white/10">
            <h3 className="lg:col-span-4 text-sm font-medium uppercase tracking-wider text-cyan-300">Measured results</h3>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {measuredResults.map((r) => (
                <li key={r.product + r.label}>
                  <p className="text-3xl font-bold tracking-tight text-white mb-2">{r.value}</p>
                  <p className="text-sm text-blue-200 leading-relaxed">
                    {r.label}.{" "}
                    <Link to={`/products/${r.slug}`} className="text-cyan-300 hover:text-white transition-colors">{r.product}</Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>

    {/* What we can build */}
    <section className="py-20 bg-[#10172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">AI Solutions</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">What We Can Build for You</p>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Each solution below is based on systems we have already built, and can be adapted to your organization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {solutions.map((item) => (
            <div key={item.title} className="flex flex-col rounded-2xl p-7 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Icon name={item.icon} className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">{item.desc}</p>
              <p className="mt-auto pt-4 border-t border-white/10 text-sm text-cyan-200">{item.proof}</p>
              <Link
                to={`/services/${item.slug}`}
                className="mt-4 self-start py-1 text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-100">
          Have a different use case in mind?{" "}
          <a href="#lead-capture" className="text-cyan-300 font-semibold hover:text-cyan-200 underline underline-offset-4">
            Contact us
          </a>{" "}
          for an objective assessment of whether AI is the right fit.
        </p>
      </div>
    </section>

    {/* How a project works */}
    <section className="py-20 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Getting Started</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">How a Project Works</p>
          <p className="text-blue-200 max-w-3xl mx-auto">
            No in-house AI team or detailed specification is required. We start from the problem you need to solve.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="w-10 h-10 mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-blue-950">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Why clients choose us */}
    <section className="py-20 bg-gradient-to-b from-blue-950 to-[#10172a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Clients Choose AydenAIT</h2>
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
        <div className="text-center mt-10">
          <Link to="/security" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-all hover:gap-3">
            <span>How we protect your data</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
                <span className="text-sm font-semibold text-cyan-300">Complimentary • No Obligation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your Free
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">AI Readiness Assessment</span>
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                We review your current processes and data, then identify where AI can deliver practical value and what implementation would involve.
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
                  <span className="text-blue-100">An actionable plan you can carry out with or without us</span>
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
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your AI Project?</h2>
        <p className="text-xl text-blue-50 mb-8">
          Whether you lead an academic department, a public service or a business, we would welcome a conversation about your objectives. The initial consultation is complimentary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition text-lg inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
          </Link>
          <a href="mailto:contact@aydenait.com" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition text-lg">
            Email Us
          </a>
        </div>
        <p className="mt-6 text-blue-100 text-sm">
          30-minute complimentary consultation · No commitment required · NDA available
        </p>
      </div>
    </section>
  </>
);

export default Home;
