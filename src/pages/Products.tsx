import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects, type Project } from "../data/projects";

const sectorOrder: Project["sector"][] = ["Higher education", "Civic services", "Financial services"];

const Products = () => (
  <>
    <SEO
      title="Products - AI platforms | AydenAIT"
      description="AI systems built by AydenAIT: CodeProvenance, DeepRubric and a faculty workload system for universities, the Hey Markham assistant and AlphOpt."
      keywords="AI products, AI in higher education, code similarity detection, AI grading, AI city services assistant, options analysis AI"
      ogUrl="https://aydenait.com/products"
      canonical="https://aydenait.com/products"
    />

    <article className="bg-[#0b1120] text-blue-100">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-cyan-300 mb-4">Products</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Our products</h1>
              <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">
                AI platforms designed, built and supported by AydenAIT.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-blue-200 leading-relaxed mb-8">
                {projects.length} products across higher education, civic services and financial services. Each one keeps a
                person in charge of the decisions that matter.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                  Request a demo <span aria-hidden="true">→</span>
                </Link>
                <Link to="/services" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          {sectorOrder.map((sector, sectorIdx) => (
            <section key={sector} className={`grid lg:grid-cols-12 gap-6 py-20 ${sectorIdx > 0 ? "border-t border-white/10" : ""}`}>
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">{sector}</h2>
              <div className="lg:col-span-8 divide-y divide-white/10">
                {projects.filter((p) => p.sector === sector).map((project) => {
                  const screenshot = project.screenshots?.[0];
                  return (
                    <div key={project.title} className="py-12 first:pt-0 last:pb-0">
                      <h3 className="flex flex-wrap items-center gap-3 text-3xl font-bold tracking-tight text-white mb-3">
                        {project.title}
                        {project.stage && (
                          <span className="text-xs font-semibold tracking-normal px-2 py-0.5 rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-100">{project.stage}</span>
                        )}
                      </h3>
                      <p className="text-xl leading-snug text-white/90 mb-4">{project.summary}</p>
                      {project.deployment && <p className="text-sm text-cyan-200 mb-4">{project.deployment}</p>}
                      <p className="text-blue-200 leading-relaxed mb-6">{project.desc}</p>
                      <ul className="grid sm:grid-cols-3 gap-4 mb-8">
                        {project.highlights.map((h) => (
                          <li key={h} className="border-t border-white/10 pt-3 text-sm text-blue-100">{h}</li>
                        ))}
                      </ul>

                      {project.productPage?.results && project.productPage.results.length > 0 && (
                        <dl className="grid sm:grid-cols-3 gap-8 mb-8">
                          {project.productPage.results.map((result) => (
                            <div key={result.label} className={`flex flex-col-reverse ${result.value.length > 6 ? "sm:col-span-2" : ""}`}>
                              <dt className="text-sm text-blue-200 mt-2">{result.label}</dt>
                              <dd className="text-4xl font-bold tracking-tight text-white whitespace-nowrap">{result.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {screenshot && (
                        <figure className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-[#111a2e] shadow-[0_20px_80px_-30px_rgba(34,211,238,0.3)]">
                          <div className="flex items-center gap-2 px-4 h-9 border-b border-white/10">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            {project.liveUrl && (
                              <span className="mx-auto px-4 py-0.5 rounded-md bg-white/5 text-xs text-blue-300">{new URL(project.liveUrl).host}</span>
                            )}
                          </div>
                          <img src={screenshot.src} srcSet={screenshot.srcSet} sizes="(min-width: 1024px) 560px, 100vw" width={1440} height={900} alt={screenshot.alt} loading="lazy" className="w-full aspect-[16/9] object-cover object-top" />
                        </figure>
                      )}

                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {project.productPage && (
                          <Link to={`/products/${project.productPage.slug}`} className="font-semibold text-cyan-300 hover:text-white transition-colors">
                            Learn more about {project.title} <span aria-hidden="true">→</span>
                          </Link>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 hover:text-white transition-colors">
                            Visit the live site <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Call to action */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16 border-t border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Want to see it in action?</h2>
              <p className="text-blue-200 max-w-2xl">
                We would be pleased to demonstrate these systems, explain how they were built, and discuss what a similar
                project could look like for your organization.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Request a demo
            </Link>
          </section>
        </div>
      </div>
    </article>
  </>
);

export default Products;
