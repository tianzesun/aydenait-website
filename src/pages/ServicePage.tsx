import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Icon from "../components/Icon";
import { engagementSteps, solutions } from "../data/solutions";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

// Detail page for each service in src/data/solutions.ts
const ServicePage = () => {
  const { slug } = useParams();
  const service = solutions.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  const url = `https://aydenait.com/services/${service.slug}`;
  const product = projects.find((p) => p.productPage && p.productPage.slug === service.relatedProduct);
  const otherServices = solutions.filter((s) => s !== service);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    url,
    areaServed: "CA",
    provider: { "@type": "Organization", name: "AydenAIT Solution Inc.", url: "https://aydenait.com" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aydenait.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://aydenait.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  return (
    <>
      <SEO
        title={`${service.title} | AydenAIT`}
        description={service.desc}
        ogUrl={url}
        canonical={url}
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <section className="py-16 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-block py-1 text-sm text-blue-300 hover:text-white transition-colors mb-8">
            ← All services
          </Link>

          {/* Hero */}
          <header className="mb-14">
            <div className="w-14 h-14 mb-5 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <Icon name={service.icon} className="w-7 h-7 text-cyan-300" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Service</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">{service.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{service.desc}</p>
          </header>

          {/* What we can build */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Can Build</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.useCases.map((useCase) => (
                <div key={useCase.title} className="bg-white/10 rounded-2xl p-6 border border-blue-700/50">
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{useCase.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proof */}
          <section className="mb-14 bg-gradient-to-br from-blue-900/60 to-cyan-900/30 rounded-2xl p-8 border border-blue-700/50">
            <h2 className="text-2xl font-bold text-white mb-3">{product ? "Proven in Our Own Products" : "Built to Fit"}</h2>
            <p className="text-blue-100 leading-relaxed">{service.proof}</p>
            {product && (
              <Link
                to={`/products/${product.productPage!.slug}`}
                className="inline-block mt-4 py-1 font-semibold text-cyan-300 hover:text-white transition-colors"
              >
                See how {product.title} works <span aria-hidden="true">→</span>
              </Link>
            )}
          </section>

          {/* How we work */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How We Work</h2>
            <ol className="grid sm:grid-cols-2 gap-5">
              {engagementSteps.map((step, idx) => (
                <li key={step.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <span className="text-sm font-bold text-cyan-300">{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-blue-200">
              People stay in control: every system has a clear point where a person reviews the result.{" "}
              <Link to="/security" className="font-semibold text-cyan-300 hover:text-white transition-colors">
                How we protect your data <span aria-hidden="true">→</span>
              </Link>
            </p>
          </section>

          {/* Call to action */}
          <div className="text-center bg-white/5 rounded-2xl p-10 border border-blue-700/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Talk to Us About Your Project</h2>
            <p className="text-blue-100 mb-8">
              Start with a free consultation. We will tell you honestly whether AI is the right fit and what it would take.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Other services */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Other Services</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="flex gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition"
                >
                  <Icon name={other.icon} className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{other.title}</h3>
                    <p className="text-sm text-blue-200 leading-relaxed">{other.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
