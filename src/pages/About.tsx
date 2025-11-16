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

    {/* Our Story Section - [UPDATE WITH YOUR REAL STORY] */}
    <section className="py-16 bg-white">
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
