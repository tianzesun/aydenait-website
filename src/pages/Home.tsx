import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import CaseAccordion from "../components/CaseAccordion";
import SEO from "../components/SEO";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";

const Home = () => {
  const [leadFormData, setLeadFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: ""
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLeadFormData({ ...leadFormData, [e.target.name]: e.target.value });
  };

  const handleLeadFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to your CRM/backend
    console.log("Lead captured:", leadFormData);
    setLeadSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setLeadFormData({ name: "", email: "", company: "", industry: "" });
      setLeadSubmitted(false);
    }, 5000);
  };

  return (
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900">
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-500 rounded-full filter blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-2xl opacity-30 animate-pulse delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-blue-100 text-sm font-semibold">Trusted by 50+ Enterprises</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Enterprise AI Consulting
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Without the Enterprise Overhead</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 leading-relaxed">
            Senior AI experts deploying production solutions in <span className="text-cyan-300 font-bold">weeks, not months</span> — at <span className="text-cyan-300 font-bold">40-60% less</span> than Big 4 consultancies.
          </p>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            No junior consultants. No lengthy discovery phases. Just results-driven AI implementation from practitioners who've shipped at scale.
          </p>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">40-60%</div>
              <div className="text-blue-100 text-sm font-semibold">Lower Cost vs. Big 4</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">4-8 Weeks</div>
              <div className="text-blue-100 text-sm font-semibold">To Initial Deployment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-cyan-400 font-bold text-3xl mb-1">100%</div>
              <div className="text-blue-100 text-sm font-semibold">Senior Practitioners</div>
            </div>
          </div>

          {/* Why Us Link */}
          <div className="mb-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-all hover:gap-3"
            >
              <span>Why choose us over enterprise consultancies?</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://calendly.com/YOUR-CALENDLY-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 font-bold shadow-2xl hover:shadow-cyan-400/50 hover:scale-105 transition-all text-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Consultation
            </a>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full text-white border-2 border-white/30 font-bold hover:bg-white/10 hover:border-white transition-all text-lg backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>NDA & confidentiality guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lead Capture Form - Free AI Readiness Assessment */}
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Value Proposition */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full px-4 py-2 mb-4">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-cyan-300">100% Free • No Obligation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your Free
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">AI Readiness Assessment</span>
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Discover how AI can transform your business. We'll analyze your infrastructure and provide a custom roadmap—completely free.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">Custom AI opportunity analysis for your industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">ROI projections and cost savings estimate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">Personalized implementation roadmap</span>
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              {leadSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    We've received your request for a free AI readiness assessment.
                  </p>
                  <p className="text-sm text-gray-500">
                    Our team will contact you within 24 hours to schedule your personalized consultation.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Start Your Free Assessment</h3>
                  <p className="text-gray-600 text-center mb-6 text-sm">Takes less than 60 seconds</p>
                  <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={leadFormData.name}
                        onChange={handleLeadFormChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={leadFormData.email}
                        onChange={handleLeadFormChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={leadFormData.company}
                        onChange={handleLeadFormChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-1">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={leadFormData.industry}
                        onChange={handleLeadFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 bg-white"
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology & Software</option>
                        <option value="finance">Financial Services</option>
                        <option value="healthcare">Healthcare & Life Sciences</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
                    >
                      Get My Free Assessment →
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      By submitting, you agree to our NDA and privacy policy. We respect your confidentiality.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Trusted By Industry Leaders</h2>
          <p className="text-gray-600">Join 50+ companies transforming with AI</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* [UPDATE: Replace with your actual client logos] */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group">
              <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all group-hover:shadow-md group-hover:scale-105">
                <div className="text-center">
                  <div className="text-gray-400 font-bold mb-1">LOGO</div>
                  <div className="text-xs text-gray-400">Client {i}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-blue-600 font-semibold">
            💡 Replace these placeholders with your actual client logos (PNG/SVG with transparent background)
          </p>
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
};

export default Home;
