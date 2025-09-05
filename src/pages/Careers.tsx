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
  }
];

const Careers = () => (
  <section className="pt-16 pb-16 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto px-4">
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-3 text-center">Careers at AydenAIT</h1>
      <p className="text-gray-800 text-lg text-center mb-10">
        Shape the future of DevOps & AI. Work remotely, flexibly, and with a team that actually cares.
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
        <form className="flex flex-col gap-4">
          <input required type="text" placeholder="Your Name" className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <input required type="email" placeholder="Your Email" className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <input type="text" placeholder="LinkedIn or Portfolio" className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"/>
          <select required className="border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400">
            <option disabled selected value="">Select Position</option>
            {openJobs.map((job, i) => (
              <option key={i}>{job.title}</option>
            ))}
          </select>
          <textarea rows={5} required placeholder="Message / Cover Letter" className="w-full border-b px-3 py-2 bg-white text-gray-800 border-blue-100 rounded focus:outline-none focus:border-blue-400"></textarea>
          <button type="submit" className="mt-3 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition text-lg">Submit Application</button>
        </form>
        <p className="mt-5 text-xs text-blue-700">All applications are confidential. We reply to every qualified applicant.</p>
      </div>
    </div>
  </section>
);

export default Careers;
