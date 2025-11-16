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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading enterprises worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 - [REPLACE WITH YOUR REAL CLIENT] */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="flex mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "AydenAIT transformed our deployment pipeline completely. We went from weekly releases with frequent rollbacks to daily deployments with 99.9% uptime. Their expertise in AI-powered DevOps is unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                JD
              </div>
              <div>
                <p className="font-bold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-600">CTO, TechCorp Inc.</p>
                <p className="text-xs text-blue-600 mt-1">E-commerce • Series B</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">💡 Replace with your real client testimonial</p>
            </div>
          </div>

          {/* Testimonial 2 - [REPLACE WITH YOUR REAL CLIENT] */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cyan-600">
            <div className="flex mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "The AI-driven monitoring solution they built for us identifies and resolves issues before they impact customers. Our incident response time dropped by 80%, and customer satisfaction is at an all-time high."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                SM
              </div>
              <div>
                <p className="font-bold text-gray-900">Sarah Miller</p>
                <p className="text-sm text-gray-600">VP Engineering, CloudStart</p>
                <p className="text-xs text-cyan-600 mt-1">SaaS • 200+ employees</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">💡 Replace with your real client testimonial</p>
            </div>
          </div>

          {/* Testimonial 3 - [REPLACE WITH YOUR REAL CLIENT] */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
            <div className="flex mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "They reduced our cloud costs by 40% through intelligent infrastructure optimization while actually improving performance. The ROI was evident within the first month. Exceptional team to work with."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                MK
              </div>
              <div>
                <p className="font-bold text-gray-900">Michael Kim</p>
                <p className="text-sm text-gray-600">Director of Operations, FinanceAI</p>
                <p className="text-xs text-purple-600 mt-1">FinTech • Enterprise</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">💡 Replace with your real client testimonial</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">💡 Update these metrics with your actual numbers</p>
          </div>
        </div>
      </div>
    </section>

    <CaseAccordion />

    {/* Final CTA Section with Calendly */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
        <p className="text-xl text-blue-50 mb-8">
          Partner with our experts to accelerate your digital transformation and AI initiatives
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition text-lg inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Free Consultation
          </a>
          <Link to="/contact" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition text-lg">
            Send Us a Message
          </Link>
        </div>
        <p className="mt-6 text-blue-100 text-sm">
          ✓ 30-minute free consultation  ✓ No commitment required  ✓ NDA provided
        </p>
        <p className="mt-3 text-blue-200 text-xs">
          💡 Replace "YOUR-CALENDLY-LINK" with your actual Calendly URL (e.g., calendly.com/your-name/30min)
        </p>
      </div>
    </section>
  </>
);

export default Home;
