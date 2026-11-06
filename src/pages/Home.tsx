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
const sectorOrder: Project["sector"][] = ["Higher education", "Civic services", "Financial services"];
const inProduction = projects.filter((p) => p.sector === "Higher education" && !p.stage).length;
const featured = projects.find((p) => p.screenshots?.length && p.liveUrl);
const featuredHost = featured?.liveUrl ? new URL(featured.liveUrl).host : undefined;
const measuredResults = projects.flatMap((p) =>
  (p.productPage?.results ?? []).map((r) => ({ ...r, product: p.title, slug: p.productPage!.slug })),
);

const Home = () => (
  <>
    <SEO
      title="AydenAIT - Custom AI solutions, from idea to production"
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
          <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Our products</h2>
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
            <h3 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Measured results</h3>
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
    <section className="py-20 bg-[#0b1120] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Services</h2>
          <div className="lg:col-span-8">
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">What we can build for you</p>
            <p className="text-blue-200 max-w-2xl">
              Each solution below is based on systems we have already built, and can be adapted to your organization.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <ul className="lg:col-start-5 lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {solutions.map((item) => (
              <li key={item.title}>
                <Link
                  to={`/services/${item.slug}`}
                  className="group flex flex-col h-full rounded-xl p-6 bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="flex items-center gap-3 mb-3">
                    <Icon name={item.icon} className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg font-bold text-white">{item.title}</span>
                  </span>
                  <span className="text-sm text-blue-200 leading-relaxed mb-4">{item.desc}</span>
                  <span className="mt-auto pt-4 border-t border-white/10 text-sm text-blue-300">{item.proof}</span>
                  <span className="mt-4 text-sm font-semibold text-cyan-300 group-hover:text-white transition-colors">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="lg:col-start-5 lg:col-span-8 text-blue-200">
            Have a different use case in mind?{" "}
            <a href="#lead-capture" className="text-cyan-300 font-semibold hover:text-white transition-colors">
              Contact us
            </a>{" "}
            for an objective assessment of whether AI is the right fit.
          </p>
        </div>
      </div>
    </section>

    {/* How a project works */}
    <section className="py-20 bg-[#0b1120] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-4">How a project works</h2>
          <p className="text-blue-200 max-w-sm">
            No in-house AI team or detailed specification is required. We start from the problem you need to solve.
          </p>
        </div>
        <ol className="lg:col-span-8 divide-y divide-white/10">
          {engagementSteps.map((step, index) => (
            <li key={step.title} className="grid sm:grid-cols-[4rem_1fr] gap-2 py-7 first:pt-0">
              <span className="font-mono text-sm text-cyan-300 pt-1">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-blue-200 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Why clients choose us */}
    <section className="py-20 bg-[#0b1120] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-6">
        <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Why clients choose AydenAIT</h2>
        <div className="lg:col-span-8">
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
            {principles.map((item) => (
              <div key={item.title} className="border-l-2 border-cyan-400/60 pl-5">
                <dt className="text-lg font-semibold text-white mb-2">{item.title}</dt>
                <dd className="text-blue-200 leading-relaxed">{item.desc}</dd>
              </div>
            ))}
          </dl>
          <Link to="/security" className="font-semibold text-cyan-300 hover:text-white transition-colors">
            How we protect your data <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>

    {/* Lead capture: free AI readiness assessment */}
    <section id="lead-capture" className="scroll-mt-24 relative overflow-hidden py-20 bg-[#0b1120] border-t border-white/10">
      <div className="absolute inset-x-0 bottom-0 h-[32rem] bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_65%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-cyan-300 mb-4">Complimentary · No obligation</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Get a free AI readiness assessment</h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            We review your current processes and data, then identify where AI can deliver practical value and what
            implementation would involve.
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10 mb-8">
            {[
              "AI opportunities specific to your institution or business",
              "Realistic effort, cost and risk for each option",
              "An actionable plan you can carry out with or without us",
            ].map((point) => (
              <li key={point} className="flex gap-3 py-3 text-blue-100">
                <span className="text-cyan-300" aria-hidden="true">→</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-blue-200">
            Prefer to talk first? Email{" "}
            <a href="mailto:contact@aydenait.com" className="text-white hover:text-cyan-300 transition-colors">contact@aydenait.com</a>{" "}
            or call{" "}
            <a href="tel:+12898599523" className="text-white hover:text-cyan-300 transition-colors whitespace-nowrap">(289) 859-9523</a>.
          </p>
          <p className="mt-6 text-sm text-blue-300">30-minute consultation · No commitment required · NDA available</p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl p-6 md:p-10 bg-white/[0.03] border border-white/10 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.3)]">
            <ContactForm
              source="assessment"
              submitLabel="Request assessment"
              messagePlaceholder="What would you like AI to help with? For example, grading, integrity reviews, scheduling or answering questions."
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
