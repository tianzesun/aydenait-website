import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

// Product page for any project with a productPage entry in src/data/projects.ts
const ProductPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.productPage?.slug === slug);
  if (!project?.productPage) return <NotFound />;
  const study = project.productPage;
  const url = `https://aydenait.com/portfolio/${study.slug}`;

  return (
    <>
      <SEO
        title={`${project.title} | AydenAIT`}
        description={project.summary}
        ogUrl={url}
        canonical={url}
      />

      <section className="py-16 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/portfolio" className="inline-block py-1 text-sm text-blue-300 hover:text-white transition-colors mb-8">
            ← All projects
          </Link>

          {/* Hero */}
          <header className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">{project.sector} · Product</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">{project.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{project.desc}</p>
            {study.deployment && <p className="mt-4 text-blue-200">{study.deployment}</p>}
          </header>

          {project.screenshots && project.screenshots.length > 0 && (
            <img
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              className="w-full aspect-[16/10] object-cover object-top rounded-2xl border border-white/10 bg-white/5 mb-14"
            />
          )}

          {/* The challenge */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Challenge</h2>
            {study.challenge.map((paragraph) => (
              <p key={paragraph} className="text-blue-100 leading-relaxed mb-4">{paragraph}</p>
            ))}
          </section>

          {/* How it works */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {study.approach.map((step, idx) => (
                <div key={step.title} className="bg-white/10 rounded-2xl p-6 border border-blue-700/50">
                  <span className="text-sm font-bold text-cyan-300">{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Human review */}
          <section className="mb-14 bg-gradient-to-br from-blue-900/60 to-cyan-900/30 rounded-2xl p-8 border border-blue-700/50">
            <h2 className="text-2xl font-bold text-white mb-3">People Stay in Control</h2>
            <p className="text-blue-100 leading-relaxed">{study.humanReview}</p>
          </section>

          {study.results && study.results.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Results</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {study.results.map((result) => (
                  <div key={result.label} className="bg-white/10 rounded-2xl p-6 border border-blue-700/50 text-center">
                    <div className="text-3xl font-extrabold text-cyan-300 mb-1">{result.value}</div>
                    <div className="text-sm text-blue-200">{result.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.quote && (
            <figure className="mb-14 border-l-4 border-cyan-400 pl-6">
              <blockquote className="text-xl text-white leading-relaxed">“{study.quote.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-blue-300">
                {study.quote.name}, {study.quote.role}
              </figcaption>
            </figure>
          )}

          {/* Call to action */}
          <div className="text-center bg-white/5 rounded-2xl p-10 border border-blue-700/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">See {project.title} in Action</h2>
            <p className="text-blue-100 mb-8">
              We would be pleased to give you a demonstration and discuss how {project.title} could work at your institution.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
