const WhyUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Why Choose AydenAIT?</h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The agility and expertise of a specialized startup, without the overhead and rigidity of enterprise consultancies
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            You have options: IBM, Accenture, Deloitte, or the big tech giants. They're excellent companies. But ask yourself: Do you need a 200-person engagement, 18-month timeline, and $5M budget? Or do you need results?
          </p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">The AydenAIT Advantage</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Access to Senior Experts */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Senior Experts, Not Junior Consultants</h3>
                  <p className="text-gray-600 mb-4">
                    With enterprise consultancies, you pay for partners but get staffed with fresh graduates learning on your dime. At AydenAIT, you work directly with senior AI engineers and strategists who have deployed production systems at scale.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: 80% junior staff billing at senior rates</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: 100% senior practitioners, 7+ years average experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed & Agility */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Weeks, Not Months</h3>
                  <p className="text-gray-600 mb-4">
                    Large consultancies move slowly—committee approvals, bureaucratic processes, standardized methodologies. We're built for speed. Our streamlined decision-making means we start delivering value in weeks, not quarters.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: 3-6 months to production</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: 4-8 weeks to initial deployment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Effectiveness */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">40-60% Cost Savings</h3>
                  <p className="text-gray-600 mb-4">
                    Big 4 consultancies charge $300-500/hour for work often done by junior staff. We eliminate the enterprise markup, luxury office overhead, and layers of management. You pay for expertise and results, not brand prestige.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: $500K+ for 6-month engagement</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: $200-250K for comparable delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern AI Specialization */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">100% AI-Focused Expertise</h3>
                  <p className="text-gray-600 mb-4">
                    Large firms offer AI as one service among hundreds. Their "AI experts" might be ERP consultants retrained on ChatGPT. We live and breathe AI—LLMs, computer vision, ML ops, vector databases. It's not a service line. It's our entire business.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: Generalists with AI "practice areas"</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: Deep AI/ML specialists since day one</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Model */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">True Partnership, Not Transactional</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise consultancies optimize for billable hours and multi-year contracts. We succeed when you succeed. That means flexible pricing, success-based models, knowledge transfer, and building internal capabilities—not creating dependency.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: Fixed scope, change orders, annual retainers</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: Flexible engagements, value-based pricing, knowledge transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalized Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Custom Solutions, Not Templates</h3>
                  <p className="text-gray-600 mb-4">
                    Large firms force-fit standardized frameworks because customization doesn't scale across 100,000 consultants. We architect solutions for your specific business context, tech stack, and constraints. No cookie-cutter approaches.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: Proprietary frameworks adapted to clients</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: Ground-up custom architecture for your needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Involvement */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Founders Personally Engaged</h3>
                  <p className="text-gray-600 mb-4">
                    At Accenture or IBM, you'll meet a partner once during the sales process, then never again. Our founders are hands-on in every engagement. Your success is our reputation. We care because we have to—our business depends on your results and referrals.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold">Enterprise Firms: Partners sell, juniors deliver</p>
                    <p className="text-sm text-green-700 font-semibold mt-2">AydenAIT: Founders involved throughout engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Enterprise Firms Make Sense */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">When Should You Choose Enterprise Consultancies?</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 leading-relaxed">
              We're not the right fit for everyone. Enterprise consultancies excel when you need:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Global presence:</strong> Coordinated delivery across 50+ countries with local teams in each market</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Enterprise-wide transformation:</strong> Complete overhaul of legacy systems across multiple business units requiring 200+ consultants</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Brand validation:</strong> Board requires a "safe choice" name for stakeholder confidence</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Multi-discipline needs:</strong> AI + cybersecurity + SAP implementation + change management in one engagement</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6 leading-relaxed">
              But if you need a focused AI solution delivered quickly and cost-effectively by senior experts who care about your outcomes? That's where we excel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move Fast?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your AI initiative. No sales pressure, no 50-page proposals. Just a straightforward conversation about what you need and whether we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl text-lg"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/clients"
              className="inline-block px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-700 transition-all border-2 border-white text-lg"
            >
              View Client Results
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
