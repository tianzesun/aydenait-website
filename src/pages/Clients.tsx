import SEO from "../components/SEO";

const Clients = () => (
  <>
    <SEO
      title="Portfolio - AI Consulting & IT Solutions Success Stories | AydenAIT"
      description="Discover how enterprises achieve digital transformation through our AI consulting, IT solutions, and AIOps services. Real results, measurable outcomes."
      keywords="AI consulting case studies, enterprise transformation, AIOps success stories, IT consulting results, digital transformation examples, AI portfolio"
      ogUrl="https://aydenait.com/portfolio"
      canonical="https://aydenait.com/portfolio"
    />

    <section className="py-16 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-100 mb-4">Trusted by AI-First Engineering Teams</h1>
          <p className="text-xl text-blue-200">Real results from real companies</p>
        </div>

        {/* Client Logos Section - [UPDATE WITH REAL LOGOS] */}
        <div className="bg-white/5 rounded-2xl p-12 mb-16">
          <p className="text-center text-blue-300 font-semibold mb-8 uppercase tracking-wide text-sm">Trusted By</p>
          <div className="flex flex-wrap gap-12 justify-center items-center opacity-60">
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 1
            </div>
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 2
            </div>
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 3
            </div>
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 4
            </div>
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 5
            </div>
            <div className="h-16 w-40 bg-gray-400/20 rounded flex items-center justify-center text-xs text-gray-400">
              Client Logo 6
            </div>
          </div>
          <p className="text-center text-sm text-blue-400 mt-8 bg-yellow-900/20 p-3 rounded">
            [UPDATE: Replace with your actual client logos with permission]
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-10 border border-blue-700/50">
            <div className="flex mb-6">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
            <blockquote className="text-white text-2xl italic mb-6 leading-relaxed">
              "AydenAIT's automations let us deploy twice as fast, with confidence. They transformed our entire DevOps culture."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                PR
              </div>
              <div>
                <p className="font-bold text-white text-lg">Priya Raman</p>
                <p className="text-blue-200">Director of Engineering, FinHealth</p>
              </div>
            </div>
            <p className="text-xs text-blue-300 mt-4 bg-yellow-900/20 p-2 rounded">
              [UPDATE: Add real client testimonial with permission]
            </p>
          </div>
        </div>

        {/* Case Study Cards - [UPDATE WITH REAL CASE STUDIES] */}
        <h2 className="text-3xl font-bold text-blue-100 mb-8 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Case Study 1 */}
          <div className="bg-white/10 rounded-xl p-8 border border-blue-700/50 hover:border-cyan-400 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FinTech Startup</h3>
                <p className="text-blue-300 text-sm">Series B, 50-person team</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Reduced deployment time from 2 hours to 15 minutes while achieving SOC 2 compliance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">87%</div>
                <div className="text-xs text-blue-200">Faster Deployments</div>
              </div>
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">$50K</div>
                <div className="text-xs text-blue-200">Annual Savings</div>
              </div>
            </div>
            <p className="text-xs text-blue-400 bg-yellow-900/20 p-2 rounded">
              [UPDATE: Real case study with metrics, client approval required]
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white/10 rounded-xl p-8 border border-blue-700/50 hover:border-cyan-400 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SaaS Platform</h3>
                <p className="text-blue-300 text-sm">Enterprise, 200+ engineers</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Migrated to Kubernetes, implemented AI monitoring, eliminated 95% of production incidents.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-xs text-blue-200">Fewer Incidents</div>
              </div>
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">10x</div>
                <div className="text-xs text-blue-200">Deploy Frequency</div>
              </div>
            </div>
            <p className="text-xs text-blue-400 bg-yellow-900/20 p-2 rounded">
              [UPDATE: Real case study with metrics, client approval required]
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white/10 rounded-xl p-8 border border-blue-700/50 hover:border-cyan-400 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                <p className="text-blue-300 text-sm">Mid-market, 30-person team</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Cloud cost optimization and auto-scaling implementation during peak season.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">40%</div>
                <div className="text-xs text-blue-200">Cost Reduction</div>
              </div>
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                <div className="text-xs text-blue-200">Uptime</div>
              </div>
            </div>
            <p className="text-xs text-blue-400 bg-yellow-900/20 p-2 rounded">
              [UPDATE: Real case study with metrics, client approval required]
            </p>
          </div>

          {/* Case Study 4 */}
          <div className="bg-white/10 rounded-xl p-8 border border-blue-700/50 hover:border-cyan-400 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                H
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HealthTech Company</h3>
                <p className="text-blue-300 text-sm">Series A, HIPAA compliant</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Implemented secure CI/CD pipeline with automated compliance checks and audit trails.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-blue-200">Compliance</div>
              </div>
              <div className="bg-blue-900/50 rounded p-3 text-center">
                <div className="text-3xl font-bold text-cyan-400">75%</div>
                <div className="text-xs text-blue-200">Faster Reviews</div>
              </div>
            </div>
            <p className="text-xs text-blue-400 bg-yellow-900/20 p-2 rounded">
              [UPDATE: Real case study with metrics, client approval required]
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Clients;
