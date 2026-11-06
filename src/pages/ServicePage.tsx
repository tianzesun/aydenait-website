import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Icon from "../components/Icon";
import BookingLink from "../components/BookingLink";
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

      <article className="bg-[#0b1120] text-blue-100">
        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-20">
            <nav className="text-sm text-blue-300/80 mb-12" aria-label="Breadcrumb">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-blue-100">{service.title}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-2 text-sm font-medium text-cyan-300 mb-4">
                  <Icon name={service.icon} className="w-5 h-5" />
                  Service
                </p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">{service.title}</h1>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xl leading-relaxed text-white/90 mb-8">{service.desc}</p>
                <BookingLink arrow className="inline-block px-6 py-3 rounded-full bg-white text-[#0b1120] font-semibold hover:bg-cyan-200 transition-colors">
                  Book a free consultation
                </BookingLink>
              </div>
            </div>
          </div>
        </header>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            {/* What we can build */}
            <section className="grid lg:grid-cols-12 gap-6 py-20">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">What we can build</h2>
              <dl className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
                {service.useCases.map((useCase) => (
                  <div key={useCase.title} className="border-t border-white/10 pt-5">
                    <dt className="text-xl font-semibold text-white mb-2">{useCase.title}</dt>
                    <dd className="text-blue-200 leading-relaxed">{useCase.text}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Proof */}
            <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">
                {product ? "Proven in our own products" : "Built to fit"}
              </h2>
              <div className="lg:col-span-8 border-l-2 border-cyan-400 pl-6">
                <p className="text-2xl md:text-3xl leading-snug text-white">{service.proof}</p>
                {product && (
                  <Link
                    to={`/products/${product.productPage!.slug}`}
                    className="inline-block mt-6 font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    See how {product.title} works <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </section>

            {/* How we work */}
            <section className="grid lg:grid-cols-12 gap-6 py-20 border-t border-white/10">
              <h2 className="lg:col-span-4 text-sm font-medium uppercase tracking-widest text-blue-300/80">How we work</h2>
              <div className="lg:col-span-8">
                <ol className="divide-y divide-white/10">
                  {engagementSteps.map((step, idx) => (
                    <li key={step.title} className="grid sm:grid-cols-[4rem_1fr] gap-2 py-7 first:pt-0">
                      <span className="font-mono text-sm text-cyan-300 pt-1">{String(idx + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-blue-200 leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-blue-200">
                  People stay in control: every system has a clear point where a person reviews the result.{" "}
                  <Link to="/security" className="font-semibold text-cyan-300 hover:text-white transition-colors">
                    How we protect your data <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </div>
            </section>

            {/* Call to action */}
            <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16 border-t border-white/10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Talk to us about your project</h2>
                <p className="text-blue-200">Start with a free consultation. We will tell you honestly whether AI is the right fit and what it would take.</p>
              </div>
              <BookingLink className="shrink-0 self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity">
                Book a free consultation
              </BookingLink>
            </section>

            {/* Other services */}
            <section className="py-16 border-t border-white/10">
              <h2 className="text-sm font-medium uppercase tracking-widest text-blue-300/80 mb-6">Other services</h2>
              <ul className="divide-y divide-white/10">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link to={`/services/${other.slug}`} className="group grid md:grid-cols-12 gap-2 items-baseline py-5">
                      <span className="md:col-span-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {other.title}
                      </span>
                      <span className="md:col-span-7 text-blue-200">{other.desc}</span>
                      <span className="hidden md:block md:col-span-1 text-right text-blue-300 group-hover:text-cyan-300 group-hover:translate-x-1 transition" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServicePage;
