import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";

const openJobs = [
  {
    title: "Senior DevOps Engineer",
    location: "Remote / Toronto, ON",
    type: "Full-time",
    desc: "Lead automation, CI/CD, and cloud ops for SaaS customers. 4+ years experience, AWS/Azure & Infra as Code expertise needed."
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full-time",
    desc: "Integrate AI models into cloud pipelines. Strong Python and ML background, with production experience."
  },
  {
    title: "AI Software Development Intern",
    location: "Remote",
    type: "Internship",
    desc: "Build AI-powered applications using LLMs, RAG, and modern frameworks. Work on real client projects with mentorship. Strong Python, React/TypeScript skills required. Experience with OpenAI API, LangChain, or similar tools preferred."
  },
  {
    title: "Machine Learning Engineering Intern",
    location: "Remote",
    type: "Internship",
    desc: "Develop and deploy ML models for classification, prediction, and NLP tasks. Hands-on experience with PyTorch/TensorFlow, model optimization, and MLOps. Computer Science or related major preferred."
  },
  {
    title: "Full-Stack Software Development Intern",
    location: "Remote",
    type: "Internship",
    desc: "Build modern web applications with React, TypeScript, Node.js, and cloud platforms. Contribute to enterprise client projects. Strong foundation in JavaScript/TypeScript, REST APIs, and Git required."
  },
  {
    title: "AI Solutions Consulting Intern",
    location: "Remote",
    type: "Internship",
    desc: "Support AI consulting projects: research use cases, analyze requirements, create technical documentation, and assist with client presentations. Interest in AI strategy and business applications required."
  },
  {
    title: "AIOps & DevOps Intern",
    location: "Remote",
    type: "Internship",
    desc: "Learn AI-powered IT operations, infrastructure automation, and monitoring systems. Work with Kubernetes, CI/CD pipelines, and observability tools. Basic scripting (Python/Bash) and cloud platform knowledge helpful."
  }
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    position: "",
    coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend/API
    console.log("Job application submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", portfolio: "", position: "", coverLetter: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <section className="pt-16 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-3 text-center">Careers at AydenAIT</h1>
      <p className="text-gray-800 text-lg text-center mb-10">
        Shape the future of AI & technology. Join our team as a full-time professional or remote intern. Work flexibly with mentorship and real-world projects.
      </p>
      {/* Team/Culture */}
      <div className="md:flex gap-12 items-center mb-12">
        <img src="/about-team.svg" className="h-36 w-36 mx-auto mb-6 md:mb-0 md:mx-0 rounded-2xl shadow" alt="Team" />
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Why Join Us?</h2>
          <ul className="list-disc text-gray-800 ml-6 space-y-1">
            <li>Work from anywhere or at our Toronto HQ</li>
            <li>Annual learning & certification budget</li>
            <li>Real projects—no legacy grind</li>
            <li>Transparent management, mentorship & feedback</li>
            <li>Inclusive, open, and supportive culture</li>
          </ul>
        </div>
      </div>
      {/* Benefits */}
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Benefits & Perks</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">💻 Remote Friendly</div>
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">🤝 Inclusive Team</div>
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">📚 Paid Learning</div>
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">🥇 Certs & Growth</div>
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">🌴 Generous PTO</div>
        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 font-medium">🏥 Healthcare</div>
      </div>
      {/* Open Jobs */}
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Open Positions</h2>
      <div className="space-y-7 mb-12">
        {openJobs.map((job, i) => (
          <div key={i} className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <span className="text-lg font-bold text-blue-800">{job.title}</span>
              <span className="ml-3 px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">{job.type}</span>
              <span className="text-xs text-gray-700 mt-2 md:mt-0">{job.location}</span>
            </div>
            <div className="text-gray-800">{job.desc}</div>
          </div>
        ))}
      </div>
      {/* Application Form */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow mt-10 max-w-lg mx-auto">
        <h3 className="text-blue-800 font-bold mb-3 text-xl">Apply Now</h3>
        {submitted && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-700">
            Application submitted! We'll review it shortly.
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="LinkedIn or Portfolio"
            className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <select
            required
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400">
            <option disabled value="">Select Position</option>
            {openJobs.map((job, i) => (
              <option key={i} value={job.title}>{job.title}</option>
            ))}
          </select>
          <textarea
            rows={5}
            required
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Message / Cover Letter"
            className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"></textarea>
          <button type="submit" className="mt-3 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition text-lg">Submit Application</button>
        </form>
        <p className="mt-5 text-xs text-blue-700">All applications are confidential. We reply to every qualified applicant.</p>
      </div>
    </div>
  </section>
    </>
  );
};

export default Careers;
