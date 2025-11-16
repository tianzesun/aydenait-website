import { Link } from "react-router-dom";
import CaseAccordion from "../components/CaseAccordion";
import SEO from "../components/SEO";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";

const Home = () => (
  <>
    <SEO
      title="AydenAIT - Enterprise AI Consulting & IT Solutions"
      description="Leading provider of AI consulting, IT solutions, and AIOps services. Transform your enterprise with intelligent automation, custom AI development, and expert technology consulting."
      keywords="AI consulting, IT consulting, AIOps, AI solutions, enterprise AI, IT solutions, AI software development, digital transformation, intelligent automation, technology consulting"
      ogUrl="https://aydenait.com"
      canonical="https://aydenait.com"
    />
    <StructuredData data={organizationSchema} />
    <StructuredData data={websiteSchema} />
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900">
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-500 rounded-full filter blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-2xl opacity-30 animate-pulse delay-500" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="text-white">Enterprise</span> <span className="text-blue-400">AI Consulting</span> <span className="text-white">&</span> <span className="text-cyan-300">IT Solutions</span>
        </h1>
        <p className="mt-5 text-xl text-blue-100">Empowering organizations through intelligent technology consulting, AI-driven solutions, and operational excellence.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition">Schedule Consultation</Link>
          <Link to="/services" className="px-8 py-3 rounded-full text-blue-100 border border-blue-200 font-semibold hover:bg-white/10 transition">Our Services</Link>
        </div>
      </div>
    </section>

    {/* Stats Section - UPDATE WITH YOUR REAL NUMBERS */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Trusted by Companies Worldwide</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600 font-medium">Projects Delivered</p>
            <p className="text-sm text-gray-500 mt-1">[UPDATE: Your actual number]</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">99.9%</div>
            <p className="text-gray-600 font-medium">Uptime Achieved</p>
            <p className="text-sm text-gray-500 mt-1">[UPDATE: Your SLA metric]</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600 font-medium">Cost Reduction</p>
            <p className="text-sm text-gray-500 mt-1">[UPDATE: Avg. savings %]</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">5+</div>
            <p className="text-gray-600 font-medium">Years Experience</p>
            <p className="text-sm text-gray-500 mt-1">[UPDATE: Your years]</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trusted By Section - ADD YOUR CLIENT LOGOS */}
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 font-semibold mb-8 uppercase tracking-wide text-sm">Trusted By Leading Companies</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
          {/* [UPDATE: Replace with your actual client logos] */}
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">Client Logo 1</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">Client Logo 2</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">Client Logo 3</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">Client Logo 4</div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-950 to-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {title:'AI Consulting', icon:'🎯', desc:'Strategic AI roadmaps, feasibility analysis, and implementation guidance for enterprise AI adoption.'},
            {title:'IT Solutions', icon:'💼', desc:'Comprehensive IT consulting, infrastructure optimization, and technology transformation services.'},
            {title:'AI Development', icon:'🤖', desc:'Custom AI software, machine learning models, and intelligent automation systems.'},
            {title:'AIOps', icon:'⚡', desc:'AI-powered IT operations, predictive monitoring, and intelligent incident management.'}
          ].map(card => (
            <div key={card.title}
                 className="rounded-2xl p-8 shadow-2xl backdrop-blur-2xl bg-white/10 border border-blue-700 text-center hover:scale-105 hover:bg-blue-600/10 transition">
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
              <p className="text-blue-100 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section - UPDATE WITH YOUR REAL TESTIMONIALS */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12">Don't just take our word for it</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 - [UPDATE WITH REAL CLIENT FEEDBACK] */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Working with AydenAIT transformed our deployment process. We went from weekly releases to daily deployments with zero downtime."
            </p>
            <p className="text-sm text-gray-500">[UPDATE: Add real testimonial]</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">JD</div>
              <div>
                <p className="font-bold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-600">CTO, TechCorp</p>
                <p className="text-xs text-gray-500">[UPDATE: Real name & company]</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The AI-driven monitoring they implemented caught issues before our customers even noticed. Game changer for our SaaS platform."
            </p>
            <p className="text-sm text-gray-500">[UPDATE: Add real testimonial]</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-600 font-bold">SM</div>
              <div>
                <p className="font-bold text-gray-800">Sarah Miller</p>
                <p className="text-sm text-gray-600">VP Engineering, CloudStart</p>
                <p className="text-xs text-gray-500">[UPDATE: Real name & company]</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Cut our AWS costs by 35% while improving performance. Their infrastructure optimization was worth every penny."
            </p>
            <p className="text-sm text-gray-500">[UPDATE: Add real testimonial]</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold">MK</div>
              <div>
                <p className="font-bold text-gray-800">Michael Kim</p>
                <p className="text-sm text-gray-600">Director of Ops, FinanceAI</p>
                <p className="text-xs text-gray-500">[UPDATE: Real name & company]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CaseAccordion />

    {/* Final CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
        <p className="text-xl text-blue-50 mb-8">
          Partner with our experts to accelerate your digital transformation and AI initiatives
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition text-lg">
            Request Consultation
          </Link>
          <Link to="/services" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition text-lg">
            Explore Our Services
          </Link>
        </div>
        <p className="mt-6 text-blue-100 text-sm">
          ✓ Confidential consultation  ✓ NDA provided  ✓ Enterprise-grade solutions
        </p>
      </div>
    </section>
  </>
);

export default Home;
