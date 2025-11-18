import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  slug: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    title: "AI Readiness Assessment: Is Your Organization Ready for AI Transformation?",
    excerpt: "Learn the key factors that determine AI readiness and how to evaluate your organization's infrastructure, data maturity, and team capabilities before investing in AI initiatives.",
    category: "AI Strategy",
    publishDate: "2025-01-15",
    readTime: "8 min",
    author: "AydenAIT Team",
    slug: "ai-readiness-assessment-guide",
    featured: true
  },
  {
    title: "ROI of AI Implementation: Measuring Success Beyond Cost Savings",
    excerpt: "Discover how to quantify the business impact of AI projects, from operational efficiency gains to revenue growth opportunities, with real metrics and frameworks used by Fortune 500 companies.",
    category: "AI Strategy",
    publishDate: "2025-01-10",
    readTime: "10 min",
    author: "AydenAIT Team",
    slug: "ai-roi-measurement-framework"
  },
  {
    title: "Enterprise LLM Integration: Best Practices for Production Deployment",
    excerpt: "A comprehensive guide to integrating large language models into enterprise systems, covering API selection, prompt engineering, cost optimization, and security considerations.",
    category: "AI Development",
    publishDate: "2025-01-05",
    readTime: "12 min",
    author: "AydenAIT Team",
    slug: "enterprise-llm-integration-guide",
    featured: true
  },
  {
    title: "Case Study: Reducing Customer Support Costs by 40% with AI Chatbots",
    excerpt: "How a mid-market SaaS company implemented an AI-powered customer support system using RAG architecture, resulting in faster response times and significant cost reduction.",
    category: "Case Studies",
    publishDate: "2024-12-28",
    readTime: "6 min",
    author: "AydenAIT Team",
    slug: "ai-chatbot-case-study"
  },
  {
    title: "Cloud Migration Strategy: AWS vs Azure vs GCP for AI Workloads",
    excerpt: "An objective comparison of the three major cloud providers for AI and ML workloads, analyzing pricing, services, GPU availability, and integration capabilities.",
    category: "IT Consulting",
    publishDate: "2024-12-20",
    readTime: "15 min",
    author: "AydenAIT Team",
    slug: "cloud-migration-ai-workloads"
  },
  {
    title: "Building a Data Pipeline for Machine Learning: From Raw Data to Production Models",
    excerpt: "Step-by-step guide to designing scalable data pipelines that support ML model training, including data quality, versioning, feature stores, and monitoring.",
    category: "AI Development",
    publishDate: "2024-12-15",
    readTime: "14 min",
    author: "AydenAIT Team",
    slug: "ml-data-pipeline-guide"
  },
  {
    title: "AIOps in Practice: Predictive Monitoring and Incident Prevention",
    excerpt: "Real-world implementation strategies for AI-driven operations, including anomaly detection, automated root cause analysis, and self-healing infrastructure.",
    category: "AIOps",
    publishDate: "2024-12-10",
    readTime: "9 min",
    author: "AydenAIT Team",
    slug: "aiops-implementation-guide",
    featured: true
  },
  {
    title: "Ethical AI: Building Responsible AI Systems for Enterprise",
    excerpt: "Framework for implementing ethical AI practices, including bias detection, explainability, data privacy, and governance policies that meet regulatory requirements.",
    category: "AI Strategy",
    publishDate: "2024-12-05",
    readTime: "11 min",
    author: "AydenAIT Team",
    slug: "ethical-ai-framework"
  },
  {
    title: "Kubernetes Best Practices for AI Model Deployment",
    excerpt: "Learn how to deploy, scale, and manage AI models on Kubernetes, covering GPU scheduling, autoscaling, cost optimization, and CI/CD integration.",
    category: "IT Consulting",
    publishDate: "2024-11-28",
    readTime: "13 min",
    author: "AydenAIT Team",
    slug: "kubernetes-ai-deployment"
  },
  {
    title: "Case Study: Accelerating Drug Discovery with AI-Powered Molecular Analysis",
    excerpt: "How a biotech firm reduced research cycles from months to weeks using custom machine learning models for molecular property prediction and compound screening.",
    category: "Case Studies",
    publishDate: "2024-11-20",
    readTime: "7 min",
    author: "AydenAIT Team",
    slug: "ai-drug-discovery-case-study"
  },
  {
    title: "Natural Language Processing for Enterprise: Use Cases and Implementation",
    excerpt: "Practical applications of NLP in business, from document classification and sentiment analysis to automated content generation and entity extraction.",
    category: "AI Development",
    publishDate: "2024-11-15",
    readTime: "10 min",
    author: "AydenAIT Team",
    slug: "enterprise-nlp-guide"
  },
  {
    title: "DevSecOps: Integrating Security into AI Development Pipelines",
    excerpt: "Security best practices for AI/ML pipelines, including model poisoning prevention, data security, vulnerability scanning, and compliance automation.",
    category: "Best Practices",
    publishDate: "2024-11-10",
    readTime: "12 min",
    author: "AydenAIT Team",
    slug: "devsecops-ai-pipelines"
  }
];

const categories = ["All", "AI Strategy", "AI Development", "IT Consulting", "AIOps", "Case Studies", "Best Practices"];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <>
      <SEO
        title="AI & IT Resources - Expert Insights and Case Studies | AydenAIT"
        description="Expert insights on AI strategy, IT consulting, machine learning development, and AIOps. Real-world case studies, best practices, and implementation guides from experienced AI consultants."
        keywords="AI strategy guide, machine learning best practices, AI case studies, enterprise AI implementation, cloud migration guide, AIOps tutorial, LLM integration, AI consulting insights"
        ogUrl="https://aydenait.com/resources"
        canonical="https://aydenait.com/resources"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            AI & IT <span className="text-cyan-300">Resources</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Expert insights, case studies, and best practices from our AI consulting team. Learn how to implement AI successfully in your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="font-semibold">AI Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="font-semibold">Implementation Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Real Case Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Featured Articles */}
          {selectedCategory === "All" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredArticles.map((article, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    {/* Featured Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime} read</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                        <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Articles Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
              <span className="text-gray-500 font-normal text-lg ml-3">({filteredArticles.length})</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                >
                  {/* Article Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {article.category === "AI Strategy" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      )}
                      {article.category === "AI Development" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      )}
                      {article.category === "IT Consulting" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                      {article.category === "Case Studies" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {article.category === "AIOps" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {article.category === "Best Practices" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      )}
                    </svg>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get your free AI readiness assessment and discover how AI can drive growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#lead-capture"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-bold rounded-full hover:from-cyan-300 hover:to-blue-300 transition shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center gap-2"
              >
                Get Free Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Resources;
