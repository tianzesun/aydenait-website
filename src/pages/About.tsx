import SEO from "../components/SEO";

const About = () => (
  <>
    <SEO
      title="About AydenAIT - Enterprise AI & IT Consulting Experts"
      description="Leading provider of AI consulting, IT solutions, and AIOps services. Our team of experts helps enterprises navigate digital transformation and achieve operational excellence."
      keywords="about AydenAIT, AI consulting firm, IT consulting company, enterprise AI, technology consulting, AIOps provider, digital transformation experts"
      ogUrl="https://aydenait.com/about"
      canonical="https://aydenait.com/about"
    />

    {/* Hero Section */}
    <section className="py-16 bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-950 min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-3">About AydenAIT</h1>
          <p className="text-xl text-blue-100 mb-4">Empowering enterprises through intelligent technology consulting and operational excellence.</p>
          <ul className="list-disc text-blue-200 ml-6 mb-2">
            <li>Enterprise AI & IT consulting experts</li>
            <li>Strategic technology transformation partners</li>
            <li>Proven track record in digital innovation</li>
            <li>Industry-leading AIOps solutions</li>
          </ul>
        </div>
        <div className="bg-gray-300 w-80 h-80 mx-auto rounded-2xl flex items-center justify-center text-gray-600 text-sm p-4">
          [UPDATE: Add team photo or company illustration]
        </div>
      </div>
    </section>

    {/* Why Choose AydenAIT Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AydenAIT?</h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            The agility and expertise of a specialized startup, without the overhead and rigidity of enterprise consultancies
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto">
            You have options: IBM, Accenture, Deloitte, or the big tech giants. They're excellent companies. But ask yourself: Do you need a 200-person engagement, 18-month timeline, and $5M budget? Or do you need results?
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">The AydenAIT Advantage</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Senior Experts */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Senior Experts, Not Junior Consultants</h4>
                <p className="text-gray-600 text-sm mb-3">
                  You work directly with senior AI engineers and strategists who have deployed production systems at scale.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: 80% junior staff at senior rates</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: 100% senior practitioners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Speed & Agility */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Weeks, Not Months</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Streamlined decision-making means we start delivering value in weeks, not quarters.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: 3-6 months to production</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: 4-8 weeks to deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Effectiveness */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">40-60% Cost Savings</h4>
                <p className="text-gray-600 text-sm mb-3">
                  No enterprise markup, luxury office overhead, or layers of management. You pay for expertise and results.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: $500K+ for 6-month project</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: $200-250K comparable delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Specialization */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">100% AI-Focused Expertise</h4>
                <p className="text-gray-600 text-sm mb-3">
                  We live and breathe AI—LLMs, computer vision, ML ops, vector databases. It's not a service line. It's our entire business.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: Generalists with AI practice areas</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: Deep AI/ML specialists only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Model */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">True Partnership, Not Transactional</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Flexible pricing, success-based models, knowledge transfer, and building internal capabilities—not creating dependency.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: Fixed scope, change orders</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: Flexible, value-based pricing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Involved */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Founders Personally Engaged</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Our founders are hands-on in every engagement. Your success is our reputation.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <p className="text-blue-900 font-semibold">Enterprise: Partners sell, juniors deliver</p>
                  <p className="text-green-700 font-semibold mt-1">AydenAIT: Founders involved throughout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When Enterprise Firms Make Sense */}
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">When Should You Choose Enterprise Consultancies?</h3>
          <p className="text-gray-700 mb-4">
            We're not the right fit for everyone. Enterprise consultancies excel when you need:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Global presence:</strong> Coordinated delivery across 50+ countries</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Enterprise transformation:</strong> 200+ consultants across multiple business units</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Brand validation:</strong> Board requires a "safe choice" name</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Multi-discipline needs:</strong> AI + cybersecurity + SAP + change management in one engagement</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            But if you need a focused AI solution delivered quickly and cost-effectively by senior experts who care about your outcomes? That's where we excel.
          </p>
        </div>
      </div>
    </section>

    {/* Our Story Section - [UPDATE WITH YOUR REAL STORY] */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Founded in [YEAR], AydenAIT emerged from a vision to bridge the gap between enterprise technology challenges and intelligent solutions. We recognized that organizations needed more than just technology—they needed strategic partners who understood both business objectives and technical implementation.
          </p>
          <p className="mb-4">
            Our leadership team, with backgrounds from [COMPANIES/INDUSTRIES], brings deep expertise in AI consulting, IT solutions, and operational intelligence. We've witnessed the transformation that occurs when organizations successfully leverage AI and modern IT practices to drive business value.
          </p>
          <p className="mb-4">
            Today, we serve enterprises across [INDUSTRIES], delivering AI consulting, IT solutions, custom AI development, and AIOps services that generate measurable business outcomes. Our clients report [X%] improvement in operational efficiency, [Y%] reduction in incident response time, and [Z%] cost optimization through our solutions.
          </p>
          <p className="text-sm text-gray-500 italic mt-6 bg-yellow-50 p-4 rounded">
            [UPDATE: Replace with your real founding story, key milestones, and growth journey]
          </p>
        </div>
      </div>
    </section>

    {/* Values Section - [UPDATE WITH YOUR VALUES] */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Results-Driven</h3>
            <p className="text-gray-600">
              We measure success by your outcomes: faster deployments, lower costs, happier teams. Everything else is just noise.
            </p>
            <p className="text-xs text-gray-500 mt-4 bg-yellow-50 p-2 rounded">[UPDATE: Your value description]</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Transparency First</h3>
            <p className="text-gray-600">
              No hidden fees, no buzzword bingo. We explain what we're doing, why it matters, and what you can expect.
            </p>
            <p className="text-xs text-gray-500 mt-4 bg-yellow-50 p-2 rounded">[UPDATE: Your value description]</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Innovation</h3>
            <p className="text-gray-600">
              We stay ahead of the curve so you don't have to. Early adopters of AI, but pragmatic about what actually works.
            </p>
            <p className="text-xs text-gray-500 mt-4 bg-yellow-50 p-2 rounded">[UPDATE: Your value description]</p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section - [UPDATE WITH YOUR TEAM] */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Meet Our Leadership</h2>
        <p className="text-center text-gray-600 mb-12">Experienced engineers who've been in your shoes</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 - [UPDATE] */}
          <div className="text-center">
            <div className="w-40 h-40 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-blue-600 font-bold">
              JD
            </div>
            <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
            <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm mb-3">
              15+ years in DevOps, Former Lead at AWS. Built CI/CD pipelines for Fortune 500 companies.
            </p>
            <p className="text-xs text-gray-500 bg-yellow-50 p-2 rounded">[UPDATE: Real name, photo, bio, LinkedIn]</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-40 h-40 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-green-600 font-bold">
              JW
            </div>
            <h3 className="text-xl font-bold text-gray-800">Jane Wilson</h3>
            <p className="text-blue-600 font-medium mb-2">CTO</p>
            <p className="text-gray-600 text-sm mb-3">
              AI/ML specialist, 10+ years building scalable systems. Ex-Google, Stanford CS PhD.
            </p>
            <p className="text-xs text-gray-500 bg-yellow-50 p-2 rounded">[UPDATE: Real name, photo, bio, LinkedIn]</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-40 h-40 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-purple-600 font-bold">
              MC
            </div>
            <h3 className="text-xl font-bold text-gray-800">Mike Chen</h3>
            <p className="text-blue-600 font-medium mb-2">VP of Engineering</p>
            <p className="text-gray-600 text-sm mb-3">
              Security & compliance expert. Previously built SOC 2 programs for 5 SaaS companies.
            </p>
            <p className="text-xs text-gray-500 bg-yellow-50 p-2 rounded">[UPDATE: Real name, photo, bio, LinkedIn]</p>
          </div>
        </div>
      </div>
    </section>

    {/* Certifications & Partnerships - [UPDATE WITH YOUR CREDENTIALS] */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Certifications & Partnerships</h2>
        <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center text-xs text-gray-600 p-2">
              AWS Partner Logo
            </div>
            <p className="text-sm font-medium text-gray-700">AWS Advanced Partner</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center text-xs text-gray-600 p-2">
              Azure Logo
            </div>
            <p className="text-sm font-medium text-gray-700">Microsoft Azure Certified</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center text-xs text-gray-600 p-2">
              K8s Logo
            </div>
            <p className="text-sm font-medium text-gray-700">Kubernetes Certified</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center text-xs text-gray-600 p-2">
              ISO Logo
            </div>
            <p className="text-sm font-medium text-gray-700">ISO 27001 Compliant</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8 bg-yellow-50 p-3 rounded max-w-2xl mx-auto">
          [UPDATE: Add your actual certifications and partnership logos]
        </p>
      </div>
    </section>
  </>
);
export default About;
