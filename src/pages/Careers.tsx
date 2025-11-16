import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";

const openJobs = [
  {
    title: "Senior DevOps Engineer",
    location: "Remote / Toronto, ON",
    type: "Full-time",
    icon: "⚙️",
    summary: "Lead automation, CI/CD, and cloud operations for enterprise SaaS customers. Drive infrastructure excellence and operational efficiency.",
    responsibilities: [
      "Design and implement CI/CD pipelines for multi-cloud environments",
      "Lead infrastructure automation using Terraform, Ansible, or CloudFormation",
      "Architect and manage Kubernetes clusters for production workloads",
      "Implement monitoring, logging, and alerting solutions",
      "Mentor junior engineers and establish DevOps best practices",
      "Collaborate with development teams on deployment strategies"
    ],
    requirements: [
      "4+ years of DevOps/SRE experience in production environments",
      "Expert knowledge of AWS, Azure, or GCP cloud platforms",
      "Strong proficiency in Infrastructure as Code (Terraform, Ansible)",
      "Experience with container orchestration (Kubernetes, Docker)",
      "Proficiency in scripting languages (Python, Bash, Go)",
      "Understanding of security best practices and compliance"
    ],
    niceToHave: [
      "Certifications: AWS Solutions Architect, CKA, or similar",
      "Experience with GitOps workflows (ArgoCD, Flux)",
      "Knowledge of service mesh technologies (Istio, Linkerd)"
    ]
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full-time",
    icon: "🤖",
    summary: "Build and deploy production-grade AI/ML solutions for enterprise clients. Integrate cutting-edge models into scalable cloud architectures.",
    responsibilities: [
      "Design and develop machine learning models for business applications",
      "Integrate LLMs (GPT-4, Claude) into production systems",
      "Build data pipelines and feature engineering workflows",
      "Deploy and monitor ML models in cloud environments",
      "Optimize model performance and inference latency",
      "Collaborate with clients to understand AI requirements"
    ],
    requirements: [
      "3+ years of ML engineering or data science experience",
      "Strong Python skills with ML frameworks (PyTorch, TensorFlow, scikit-learn)",
      "Experience with LLM APIs and prompt engineering",
      "Knowledge of MLOps practices and model deployment",
      "Proficiency in cloud platforms (AWS SageMaker, Azure ML, GCP AI)",
      "Strong understanding of data structures and algorithms"
    ],
    niceToHave: [
      "Experience with vector databases (Pinecone, Weaviate, Chroma)",
      "Knowledge of LangChain, LlamaIndex, or similar frameworks",
      "Publications or contributions to ML open-source projects"
    ]
  },
  {
    title: "AI Software Development Intern",
    location: "Remote",
    type: "Internship",
    icon: "💡",
    summary: "Build AI-powered applications using LLMs, RAG systems, and modern frameworks. Work on real client projects with experienced mentors.",
    responsibilities: [
      "Develop AI chatbots and intelligent automation systems",
      "Implement RAG (Retrieval-Augmented Generation) pipelines",
      "Build frontend interfaces with React and TypeScript",
      "Integrate LLM APIs (OpenAI, Anthropic) into applications",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and team discussions"
    ],
    requirements: [
      "Currently pursuing Computer Science or related degree (or bootcamp graduate)",
      "Strong proficiency in Python programming",
      "Experience with React and TypeScript",
      "Understanding of REST APIs and web development",
      "Familiarity with Git and version control",
      "Passion for AI and eagerness to learn"
    ],
    whatYouWillLearn: [
      "Production LLM application development and prompt engineering",
      "Enterprise software development practices and workflows",
      "Cloud deployment and DevOps fundamentals",
      "Client communication and project management skills"
    ]
  },
  {
    title: "Machine Learning Engineering Intern",
    location: "Remote",
    type: "Internship",
    icon: "📊",
    summary: "Develop and deploy ML models for classification, prediction, and NLP tasks. Gain hands-on experience with modern ML tools and production systems.",
    responsibilities: [
      "Train and evaluate ML models using PyTorch or TensorFlow",
      "Perform data preprocessing, feature engineering, and analysis",
      "Implement model evaluation metrics and A/B testing",
      "Deploy models to cloud environments with monitoring",
      "Optimize model performance for production workloads",
      "Document experiments and present findings to the team"
    ],
    requirements: [
      "Currently pursuing Computer Science, Statistics, or related field",
      "Strong foundation in machine learning fundamentals",
      "Proficiency in Python and ML libraries (scikit-learn, pandas, numpy)",
      "Basic understanding of neural networks and deep learning",
      "Experience with Jupyter notebooks and data visualization",
      "Strong analytical and problem-solving skills"
    ],
    whatYouWillLearn: [
      "End-to-end ML model development and deployment (MLOps)",
      "Production-grade model serving and monitoring",
      "Feature engineering and model optimization techniques",
      "Working with real-world datasets and business problems"
    ]
  },
  {
    title: "Full-Stack Software Development Intern",
    location: "Remote",
    type: "Internship",
    icon: "🌐",
    summary: "Build modern web applications with React, TypeScript, Node.js, and cloud platforms. Contribute to enterprise client projects and learn industry best practices.",
    responsibilities: [
      "Develop responsive web applications using React and TypeScript",
      "Build RESTful APIs with Node.js and Express",
      "Implement database schemas and queries (SQL/NoSQL)",
      "Write unit tests and integration tests",
      "Deploy applications to cloud platforms (AWS, Azure, GCP)",
      "Collaborate with designers and product managers"
    ],
    requirements: [
      "Currently pursuing Computer Science or related degree (or bootcamp graduate)",
      "Strong foundation in JavaScript/TypeScript",
      "Experience building web applications with React",
      "Understanding of Node.js and backend development",
      "Familiarity with databases (PostgreSQL, MongoDB)",
      "Knowledge of Git and GitHub workflows"
    ],
    whatYouWillLearn: [
      "Enterprise-grade full-stack development patterns",
      "Cloud architecture and deployment strategies",
      "Agile development and professional team collaboration",
      "Code quality, testing, and CI/CD practices"
    ]
  },
  {
    title: "AI Solutions Consulting Intern",
    location: "Remote",
    type: "Internship",
    icon: "🎯",
    summary: "Support AI consulting projects from research to implementation. Learn how to identify AI opportunities and create business value for enterprise clients.",
    responsibilities: [
      "Research AI use cases and feasibility for client projects",
      "Analyze business requirements and technical constraints",
      "Create technical documentation and architecture diagrams",
      "Assist in client presentations and proposal development",
      "Conduct competitive analysis and market research",
      "Support implementation teams with requirements gathering"
    ],
    requirements: [
      "Currently pursuing Business, Computer Science, or related field",
      "Strong interest in AI strategy and business applications",
      "Excellent written and verbal communication skills",
      "Ability to understand technical concepts and explain to non-technical audiences",
      "Proficiency in Microsoft Office, Google Suite, and presentation tools",
      "Strong analytical and research skills"
    ],
    whatYouWillLearn: [
      "AI strategy and roadmap development for enterprises",
      "Client engagement and stakeholder management",
      "Technical writing and business case development",
      "How to bridge business needs with AI capabilities"
    ]
  },
  {
    title: "AIOps & DevOps Intern",
    location: "Remote",
    type: "Internship",
    icon: "⚡",
    summary: "Learn AI-powered IT operations, infrastructure automation, and cloud technologies. Work with Kubernetes, CI/CD pipelines, and observability tools.",
    responsibilities: [
      "Assist in building CI/CD pipelines for client projects",
      "Learn infrastructure automation with Terraform and Ansible",
      "Monitor application performance and system health",
      "Help implement logging and alerting solutions",
      "Support Kubernetes cluster management and troubleshooting",
      "Document operational procedures and runbooks"
    ],
    requirements: [
      "Currently pursuing Computer Science or IT-related degree",
      "Basic understanding of Linux/Unix systems",
      "Familiarity with scripting (Python, Bash, or similar)",
      "Interest in cloud platforms (AWS, Azure, GCP)",
      "Understanding of networking and system administration basics",
      "Willingness to learn new technologies quickly"
    ],
    whatYouWillLearn: [
      "Production DevOps practices and infrastructure automation",
      "Kubernetes and container orchestration",
      "Cloud architecture and deployment strategies",
      "Monitoring, observability, and incident response"
    ]
  }
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
    coverLetterFile: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend/API
    console.log("Job application submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", portfolio: "", position: "", coverLetter: "", resume: null, coverLetterFile: null });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [e.target.name]: file });
  };

  return (
    <>
      <SEO
        title="Careers at AydenAIT - Join Our Consulting Team"
        description="Join our team of AI consultants, IT experts, and technology professionals. Full-time positions and remote internships in AI development, software engineering, and AIOps. Mentorship, real projects, competitive compensation."
        keywords="AI consultant jobs, IT consulting careers, AI internships, software development internship, ML engineering intern, remote tech internships, AIOps jobs, AI software developer"
        ogUrl="https://aydenait.com/careers"
        canonical="https://aydenait.com/careers"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Join Our <span className="text-cyan-300">AI Consulting</span> Team
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Shape the future of AI & technology. Work on cutting-edge projects with enterprise clients. Full-time positions and remote internships available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span className="font-semibold">Remote-First Culture</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">Real Enterprise Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📈</span>
              <span className="font-semibold">Career Growth</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* Why Join Us */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Why Join AydenAIT?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💼</span> Professional Growth
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Work with Fortune 500 clients and cutting-edge AI technologies</li>
                  <li>• Annual learning budget for courses, certifications, and conferences</li>
                  <li>• Clear career progression paths with regular feedback and reviews</li>
                  <li>• Mentorship from experienced AI consultants and engineers</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏖️</span> Work-Life Balance
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Flexible remote work or hybrid options (Toronto office available)</li>
                  <li>• Generous paid time off and flexible scheduling</li>
                  <li>• Comprehensive health, dental, and vision coverage</li>
                  <li>• Supportive, inclusive team culture that values your well-being</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Impactful Work
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Build real AI solutions that transform enterprise operations</li>
                  <li>• Work on diverse projects across industries and technologies</li>
                  <li>• Contribute to open-source projects and thought leadership</li>
                  <li>• See the direct business impact of your technical contributions</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Team Culture
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Collaborative, transparent management with open communication</li>
                  <li>• Diverse, inclusive team that values different perspectives</li>
                  <li>• Regular team events, hackathons, and learning sessions</li>
                  <li>• No bureaucracy—fast decision-making and innovation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">Open Positions</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              We're looking for talented individuals who are passionate about AI and technology. Click any position to see full details.
            </p>

            <div className="space-y-6">
              {openJobs.map((job, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Job Header */}
                  <button
                    onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-4xl">{job.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-3">{job.summary}</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                              {job.type}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                              📍 {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl text-blue-600 flex-shrink-0">
                        {expandedJob === i ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {expandedJob === i && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-6 bg-gradient-to-br from-gray-50 to-blue-50">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-blue-600">📋</span> Responsibilities
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span className="text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-blue-600">✓</span> Requirements
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Nice to Have or What You'll Learn */}
                        {job.niceToHave && (
                          <div className="md:col-span-2">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <span className="text-blue-600">⭐</span> Nice to Have
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                              {job.niceToHave.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.whatYouWillLearn && (
                          <div className="md:col-span-2">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <span className="text-blue-600">🎓</span> What You'll Learn
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                              {job.whatYouWillLearn.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Apply Button */}
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <a
                          href="#apply"
                          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition shadow-lg hover:shadow-xl"
                        >
                          Apply for this Position →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="apply" className="bg-gradient-to-br from-blue-900 to-cyan-800 rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-white font-bold mb-2 text-3xl text-center">Ready to Join Us?</h3>
            <p className="text-blue-100 text-center mb-8">Submit your application with your resume and we'll get back to you within 2-3 business days.</p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border-2 border-green-400 rounded-xl text-green-100 text-center font-semibold">
                ✓ Application submitted successfully! We'll review it shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
              />
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="LinkedIn / Portfolio / GitHub"
                className="w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
              />
              <select
                required
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="px-4 py-3 bg-white/95 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
              >
                <option disabled value="">Select Position *</option>
                {openJobs.map((job, i) => (
                  <option key={i} value={job.title}>{job.title}</option>
                ))}
              </select>

              {/* Resume Upload */}
              <div>
                <label className="block text-blue-100 font-semibold mb-2 text-sm">
                  Resume / CV *
                </label>
                <div className="relative">
                  <input
                    required
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg cursor-pointer hover:bg-white transition font-medium border-2 border-transparent hover:border-cyan-400"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-700">
                        {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                      </span>
                    </span>
                    {formData.resume && (
                      <span className="text-xs text-green-600 font-semibold">✓ Uploaded</span>
                    )}
                  </label>
                </div>
                <p className="text-blue-200 text-xs mt-1">Maximum file size: 5MB</p>
              </div>

              {/* Cover Letter File Upload (Optional) */}
              <div>
                <label className="block text-blue-100 font-semibold mb-2 text-sm">
                  Cover Letter File (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="coverLetterFile"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cover-letter-upload"
                  />
                  <label
                    htmlFor="cover-letter-upload"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg cursor-pointer hover:bg-white transition font-medium border-2 border-transparent hover:border-cyan-400"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">
                        {formData.coverLetterFile ? formData.coverLetterFile.name : 'Choose file (PDF, DOC, DOCX)'}
                      </span>
                    </span>
                    {formData.coverLetterFile && (
                      <span className="text-xs text-green-600 font-semibold">✓ Uploaded</span>
                    )}
                  </label>
                </div>
                <p className="text-blue-200 text-xs mt-1">Or use the text field below</p>
              </div>

              <textarea
                rows={5}
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Or write your cover letter here..."
                className="w-full px-4 py-3 bg-white/95 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium resize-none"
              ></textarea>
              <button
                type="submit"
                className="mt-2 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-blue-900 font-bold rounded-lg transition text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-blue-100 text-sm">🔒 All applications are confidential. We review every application and respond to qualified candidates within 2-3 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
