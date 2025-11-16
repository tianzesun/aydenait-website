import { useState } from "react";

const faqs = [
  {
    q: "What services does AydenAIT provide?",
    a: "We provide four core services: (1) AI Consulting & Strategy - helping you develop AI roadmaps and assess readiness, (2) IT Consulting & Solutions - infrastructure optimization, cloud migration, and enterprise architecture, (3) AI Software Development - custom AI applications, ML models, and LLM integration, and (4) AIOps - AI-powered IT operations including predictive monitoring and intelligent automation. We tailor our approach to your specific business needs and technology landscape."
  },
  {
    q: "How long does a typical engagement take?",
    a: "It depends on the scope. A focused AI readiness assessment might take 2-3 weeks, while a comprehensive AI implementation or infrastructure transformation could span 3-6 months. We typically start with a discovery phase (1-2 weeks) to assess your needs and create a detailed roadmap. Many clients see measurable improvements within the first 4-6 weeks of implementation. We're transparent about timelines from day one."
  },
  {
    q: "What's your pricing model?",
    a: "We offer flexible engagement models: (1) Project-based - fixed scope and price for defined deliverables, (2) Time & Materials - for evolving requirements with monthly billing, (3) Retainer - ongoing support and consulting at a monthly rate, and (4) Staff Augmentation - dedicated resources integrated with your team. Pricing varies based on project complexity, timeline, and team composition. We provide detailed estimates after our initial consultation and always work within your budget constraints."
  },
  {
    q: "Do you work with companies of all sizes?",
    a: "Yes, we work with organizations ranging from growth-stage startups to Fortune 500 enterprises. Our services are designed to scale - whether you're a 20-person startup looking to implement your first AI solution or a 10,000+ employee enterprise optimizing global IT operations. We adapt our approach, methodology, and team size to match your organization's needs and maturity level."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience across multiple industries including Financial Services, Healthcare, Retail & E-commerce, Manufacturing, Technology/SaaS, and Professional Services. While we're industry-agnostic in our technical capabilities, we understand that each sector has unique compliance requirements (HIPAA, SOC 2, PCI-DSS, etc.) and business challenges. We customize our solutions to address your industry-specific needs."
  },
  {
    q: "How quickly can we start?",
    a: "We can typically begin initial consultations within 3-5 business days of your inquiry. For urgent projects, we can mobilize a team within 1-2 weeks. Our process: (1) Initial consultation call (30-60 minutes), (2) NDA signing if needed, (3) Discovery and scoping (1-2 weeks), (4) Proposal and SOW, (5) Team mobilization and kickoff. We're flexible and can accelerate timelines when business needs require it."
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Absolutely. We offer several post-project support options: (1) Managed Services - we handle ongoing operations, monitoring, and optimization, (2) Retainer Support - access to our team for questions, issues, and enhancements, (3) Training & Knowledge Transfer - ensuring your team can maintain and evolve the solution, and (4) Quarterly Health Checks - periodic reviews and optimization recommendations. Most clients choose a hybrid approach based on their internal capabilities."
  },
  {
    q: "What makes AydenAIT different from other consulting firms?",
    a: "Three key differentiators: (1) Results-Focused - we measure success by business outcomes, not just deliverables. We tie our work to metrics like cost reduction, uptime improvement, and deployment velocity. (2) Hands-On Implementation - we don't just create PowerPoint strategies; we roll up our sleeves and build, deploy, and optimize. (3) Knowledge Transfer - we upskill your team throughout the engagement so you're not dependent on us long-term. Plus, we provide transparent pricing, clear communication, and NDA protection as standard."
  },
  {
    q: "Can you work with our existing technology stack?",
    a: "Yes. We're technology-agnostic and work with virtually any stack. Whether you're on AWS, Azure, GCP, or hybrid/on-premise infrastructure, using Python, Node.js, Java, .NET, or other languages, we adapt to your environment. We evaluate your existing investments and maximize them rather than pushing unnecessary technology changes. When migrations or upgrades are needed, we provide clear rationale and ROI analysis."
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "Security is paramount. We implement: (1) NDA signing before any detailed discussions, (2) SOC 2 Type II compliant processes for data handling, (3) Role-based access controls - team members only access what they need, (4) Encrypted communications and data transfer, (5) Secure development practices following OWASP guidelines, and (6) Regular security audits. We can also work within your existing security frameworks and comply with industry-specific regulations (HIPAA, PCI-DSS, GDPR, etc.)."
  },
  {
    q: "Do you offer remote or on-site services?",
    a: "Both. We're fully equipped for remote collaboration with teams across time zones, using secure video conferencing, project management tools, and documentation platforms. For enterprise clients or complex implementations, we also provide on-site consulting - either part-time (key milestones and workshops) or full-time embedded teams. Most clients prefer a hybrid model: remote for day-to-day work with periodic on-site sessions for planning and stakeholder alignment."
  },
  {
    q: "What's included in your AI consulting services?",
    a: "Our AI consulting includes: (1) AI Readiness Assessment - evaluating your data, infrastructure, and team capabilities, (2) Use Case Identification - finding high-ROI AI opportunities specific to your business, (3) Technology Roadmap - selecting the right AI tools, platforms, and approaches, (4) ROI Analysis - projecting costs, benefits, and timelines, (5) Governance Framework - establishing AI ethics, risk management, and compliance policies, and (6) Implementation Planning - detailed execution plan with milestones and resource requirements. We can also provide ongoing advisory as you execute the roadmap."
  },
  {
    q: "How do you measure project success?",
    a: "We establish clear, measurable KPIs at project kickoff, typically including: (1) Technical Metrics - uptime %, deployment frequency, incident resolution time, infrastructure costs, (2) Business Metrics - ROI, time-to-market, operational efficiency gains, (3) Quality Metrics - defect rates, security vulnerabilities, compliance scores, and (4) Team Metrics - knowledge transfer effectiveness, team satisfaction, documentation completeness. We provide regular reporting (weekly/bi-weekly) with dashboards showing progress against these metrics. Success means hitting your business objectives, not just completing tasks."
  },
  {
    q: "Can we start with a small pilot project?",
    a: "Definitely! We often recommend starting with a focused pilot or proof-of-concept. This approach allows you to: (1) Validate our capabilities with minimal risk, (2) Demonstrate ROI to stakeholders before larger investments, (3) Test team collaboration and communication, and (4) Refine requirements before scaling. Typical pilots run 4-8 weeks with clearly defined scope and success criteria. If successful, we seamlessly transition to broader implementation."
  },
  {
    q: "What happens after I submit a consultation request?",
    a: "Here's our process: (1) Within 24 hours - we'll send you a confirmation email and calendar invite for an initial call, (2) Initial Call (30-60 min) - we discuss your challenges, goals, and high-level requirements. No sales pitch, just exploration, (3) NDA Signing - if you want to share sensitive details (optional), (4) Discovery Phase - we may propose a brief assessment to understand your environment better, (5) Proposal - detailed scope, timeline, team, and pricing, (6) Agreement & Kickoff - once approved, we mobilize the team and begin work. The entire process from first contact to project start typically takes 2-4 weeks."
  }
];

const FAQAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 bg-gradient-to-b from-blue-950 to-[#10172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">Frequently Asked Questions</h2>
        <p className="text-blue-200 text-center mb-8">Everything you need to know about working with AydenAIT</p>
        {faqs.map((f, idx) => (
          <div key={f.q} className="mb-3">
            <button
              className="w-full bg-white/10 px-6 py-4 rounded-xl text-left text-blue-100 font-semibold hover:bg-white/15 focus:outline-none transition flex justify-between items-center"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{f.q}</span>
              <span className="text-cyan-400 text-xl ml-4">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="p-6 bg-white/5 rounded-b-xl text-blue-50 border-t border-blue-800/30 leading-relaxed">{f.a}</div>
            )}
          </div>
        ))}

        <div className="mt-12 text-center bg-blue-900/40 rounded-2xl p-8 border border-blue-700">
          <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-blue-200 mb-6">We're here to help. Schedule a free consultation or send us a message.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold rounded-lg hover:scale-105 transition">
              Contact Us
            </a>
            <a href="mailto:hello@aydenait.com" className="px-6 py-3 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:bg-white/10 transition">
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
