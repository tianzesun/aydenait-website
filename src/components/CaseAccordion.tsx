import { useState } from "react";

// [UPDATE: Replace these with your actual AI projects]
const projects = [
  {
    title: "AI-Powered Customer Support Automation",
    client: "E-commerce Platform",
    industry: "Retail & E-commerce",
    challenge: "Manual customer support was overwhelming the team with 1000+ daily inquiries, leading to slow response times and customer dissatisfaction.",
    solution: "Developed custom AI chatbot using LLM (GPT-4) integration with RAG (Retrieval-Augmented Generation) for accurate product information. Implemented intelligent routing to human agents for complex queries.",
    technologies: ["Python", "OpenAI GPT-4", "LangChain", "Vector Database", "React", "Node.js"],
    results: [
      "85% of inquiries automated",
      "Response time reduced from 4 hours to 30 seconds",
      "Customer satisfaction increased by 40%",
      "Support costs reduced by $120K annually"
    ],
    duration: "3 months"
  },
  {
    title: "Predictive Maintenance System for Manufacturing",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing costly downtime and production delays. Reactive maintenance approach was inefficient.",
    solution: "Built ML-based predictive maintenance system analyzing sensor data in real-time. Implemented anomaly detection and failure prediction models with 2-week advance warning.",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "TimescaleDB", "Grafana", "AWS"],
    results: [
      "92% accuracy in failure prediction",
      "Downtime reduced by 60%",
      "Maintenance costs decreased by 35%",
      "ROI achieved in 6 months"
    ],
    duration: "4 months"
  },
  {
    title: "Intelligent Document Processing System",
    client: "Financial Services Firm",
    industry: "Financial Services",
    challenge: "Processing thousands of financial documents manually was time-consuming, error-prone, and expensive. Compliance requirements demanded high accuracy.",
    solution: "Developed AI-powered document processing pipeline using computer vision and NLP. Automated extraction, classification, and validation of financial data from invoices, contracts, and statements.",
    technologies: ["Python", "OpenCV", "spaCy", "PyTorch", "AWS Lambda", "S3", "DynamoDB"],
    results: [
      "95% reduction in processing time",
      "99.2% accuracy in data extraction",
      "Processing capacity increased 10x",
      "Compliance audit time reduced by 80%"
    ],
    duration: "5 months"
  },
  {
    title: "AIOps Platform for Cloud Infrastructure",
    client: "SaaS Company",
    industry: "Technology/SaaS",
    challenge: "Managing complex cloud infrastructure across AWS and Azure. Reactive incident management led to frequent outages and long resolution times.",
    solution: "Implemented comprehensive AIOps platform with intelligent monitoring, anomaly detection, automated root cause analysis, and self-healing capabilities for common issues.",
    technologies: ["Python", "Prometheus", "Grafana", "Kubernetes", "Terraform", "Machine Learning", "Elasticsearch"],
    results: [
      "99.95% uptime achieved (from 99.2%)",
      "Mean time to resolution reduced by 75%",
      "60% of incidents auto-remediated",
      "Infrastructure costs optimized by 30%"
    ],
    duration: "6 months"
  }
  // [UPDATE: Add more of your real projects here using the same format]
];

const CaseAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured AI Projects</h2>
          <p className="text-xl text-gray-600">Real solutions delivering measurable business impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={project.title} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 pr-4">{project.title}</h3>
                  <span className="text-2xl text-blue-600 flex-shrink-0">{open === idx ? '−' : '+'}</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {project.industry}
                  </span>
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    {project.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{project.challenge}</p>
              </button>

              {open === idx && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{project.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{project.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to start your AI project?</h3>
          <p className="text-blue-50 mb-6">Let's discuss how we can help solve your business challenges with AI</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:scale-105 transition"
          >
            Schedule Consultation
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 bg-yellow-50 p-4 rounded-lg inline-block">
            [UPDATE: Replace the example projects above with your actual AI projects. Follow the same format for consistency.]
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseAccordion;
