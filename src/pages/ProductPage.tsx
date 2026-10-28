import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

// Product page for any project with a productPage entry in src/data/projects.ts
const ProductPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.productPage?.slug === slug);
  if (!project?.productPage) return <NotFound />;
  const page = project.productPage;
  const url = `https://aydenait.com/products/${page.slug}`;
  const otherProducts = projects.filter((p) => p !== project && p.productPage);

  // Tells search engines what the product is and who makes it, and gives the page a breadcrumb trail
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    url,
    applicationCategory: "BusinessApplication",
    publisher: { "@type": "Organization", name: "AydenAIT Solution Inc.", url: "https://aydenait.com" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aydenait.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://aydenait.com/products" },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

  const liveHost = project.liveUrl ? new URL(project.liveUrl).host : undefined;
  const screenshot = project.screenshots?.[0];

  return (
    <>
      <SEO
        title={`${project.title} | AydenAIT`}
        description={project.summary}
        ogUrl={url}
        canonical={url}
      />
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />

      <article className="bg-[#0b1120] text-blue-100">
        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-16">
            <nav className="text-sm text-blue-300/80 mb-12" aria-label="Breadcrumb">
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-blue-100">{project.title}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium text-cyan-300 mb-4">{project.sector}</p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">{project.title}</h1>
                <p className="text-2xl md:text-[1.7rem] leading-snug text-white/90">{project.summary}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-blue-200 leading-relaxed mb-8">{project.desc}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors"
                    >
                      Visit the live site <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <Link
                    to="/contact"
                    className={
                      project.liveUrl
                        ? "font-semibold text-white hover:text-cyan-300 transition-colors"
                        : "px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors"
                    }
                  >
                    Request a demo <span aria-hidden="true">→</span>
                  </Link>
                </div>
                {project.deployment && <p className="mt-6 text-sm text-cyan-200">{project.deployment}</p>}
              </div>
            </div>
          </div>

          {/* Screenshot in a browser window */}
          {screenshot && (
            <div className="relative max-w-6xl mx-auto px-4">
              <figure className="rounded-t-xl overflow-hidden border border-b-0 border-white/10 bg-[#111a2e] shadow-[0_-20px_80px_-20px_rgba(34,211,238,0.25)]">
                <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-white/15" />
                  <span className="w-3 h-3 rounded-full bg-white/15" />
                  <span className="w-3 h-3 rounded-full bg-white/15" />
                  {liveHost && (
                    <span className="mx-auto px-4 py-0.5 rounded-md bg-white/5 text-xs text-blue-300">{liveHost}</span>
                  )}
                </div>
                <img src={screenshot.src} alt={screenshot.alt} className="w-full aspect-[16/9] object-cover object-top" />
              </figure>
            </div>
          )}
        </header>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            {/* The challenge */}
            <section className="grid lg:grid-cols-12 gap-6 py-20">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">The challenge</h2>
              <div className="lg:col-span-8 space-y-5">
                {page.challenge.map((paragraph, idx) => (
                  <p key={paragraph} className={idx === 0 ? "text-2xl leading-relaxed text-white" : "text-lg leading-relaxed text-blue-200"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">How it works</h2>
              <ol className="lg:col-span-8 divide-y divide-white/10">
                {page.approach.map((step, idx) => (
                  <li key={step.title} className="grid sm:grid-cols-[4rem_1fr] gap-2 py-7 first:pt-0">
                    <span className="font-mono text-sm text-cyan-300 pt-1">{String(idx + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-blue-200 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {page.results && page.results.length > 0 && (
              <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
                <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">Results</h2>
                <dl className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
                  {page.results.map((result) => (
                    <div key={result.label} className="flex flex-col-reverse">
                      <dt className="text-sm text-blue-200 mt-2">{result.label}</dt>
                      <dd className="text-5xl font-bold tracking-tight text-white">{result.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Human review */}
            <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">People stay in control</h2>
              <p className="lg:col-span-8 text-2xl md:text-3xl leading-snug text-white border-l-2 border-cyan-400 pl-6">
                {page.humanReview}
              </p>
            </section>

            {page.quote && (
              <figure className="py-20 border-t border-white/10 max-w-4xl">
                <blockquote className="text-3xl leading-snug text-white">“{page.quote.text}”</blockquote>
                <figcaption className="mt-6 text-blue-300">
                  {page.quote.name}, {page.quote.role}
                </figcaption>
              </figure>
            )}

            {/* Call to action */}
            <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16 border-t border-white/10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">See {project.title} in action</h2>
                <p className="text-blue-200">We'd be glad to walk you through it and talk about how it could work for your organization.</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Request a demo
              </Link>
            </section>

            {/* Other products */}
            {otherProducts.length > 0 && (
              <section className="py-16 border-t border-white/10">
                <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-6">More products</h2>
                <ul className="divide-y divide-white/10">
                  {otherProducts.map((other) => (
                    <li key={other.title}>
                      <Link
                        to={`/products/${other.productPage!.slug}`}
                        className="group grid md:grid-cols-12 gap-2 items-baseline py-5"
                      >
                        <span className="md:col-span-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {other.title}
                        </span>
                        <span className="md:col-span-7 text-blue-200">{other.summary}</span>
                        <span className="hidden md:block md:col-span-1 text-right text-blue-300 group-hover:text-cyan-300 group-hover:translate-x-1 transition" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductPage;
