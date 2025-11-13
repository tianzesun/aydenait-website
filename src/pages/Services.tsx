import { Link } from "react-router-dom";

const Services = () => (
  <section className="pt-16 pb-8 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      {/* HERO */}
      <h1 className="text-4xl font-extrabold text-blue-100 mb-2 text-center">
        Expert DevOps & AI Engineering Services
      </h1>
      <p className="text-blue-200 text-xl text-center mb-10">
        Accelerate your software delivery with AI-powered automation, cloud-native transformation, and security-first consulting. Results, not buzzwords—trusted by startups, unicorns, and enterprises globally.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-bold text-blue-200 mt-10 mb-6 text-center">Why Choose AydenAIT?</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">🤝</div>
          <b>Transparent, Flexible Partnership</b>
          <p className="text-blue-100 text-sm mt-2">NDA standard. Enterprise/SMB clients. Project, team or long-term models. You always control your roadmap.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">🛡️</div>
          <b>Security & Compliance Leadership</b>
          <p className="text-blue-100 text-sm mt-2">ISO-Inspired, DevSecOps/Zero-Trust by design, documented processes for regulated industries.</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-blue-900 p-6 text-center shadow">
          <div className="text-3xl mb-2">✔️</div>
          <b>Results, Not Just Deliverables</b>
          <p className="text-blue-100 text-sm mt-2">Faster release cycles, reduced costs, lower incident rates—and real upskilling for your team.</p>
        </div>
      </div>

      {/* CORE SERVICES */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-5 text-center">What We Do</h2>
      <ul className="grid md:grid-cols-2 gap-6 text-blue-100 mb-8">
        <li>• DevOps Assessment, Maturity Audit & Rapid Roadmap</li>
        <li>• Cloud Migration & Automation (AWS, Azure, GCP, Hybrid, On-Prem)</li>
        <li>• End-to-End CI/CD, Automated Delivery, Blue/Green + Canary Deployments</li>
        <li>• Containerization (Kubernetes, Docker, ECS, Fargate, EKS, AKS)</li>
        <li>• Infrastructure as Code (Terraform, Ansible, Helm, Pulumi, CloudFormation)</li>
        <li>• Automated Rollback, Disaster Recovery, High Availability Setups</li>
        <li>• Advanced Monitoring & AI-Driven Observability (Prometheus, Datadog, Grafana, Splunk)</li>
        <li>• DevSecOps & Compliance (IAM, SSO, HashiCorp Vault, CIS Benchmarks, audits)</li>
        <li>• Platform Engineering (IDPs, self-service, developer autonomy)</li>
        <li>• Staff Augmentation & Managed DevOps Teams</li>
      </ul>

      {/* TOOL STACK */}
      <h2 className="text-xl font-bold text-blue-200 mt-12 mb-3">Our Toolchains</h2>
      <div className="flex flex-wrap gap-3 mb-8 text-blue-100 text-lg">
        <span className="px-3 py-1 bg-blue-600/20 rounded">GitHub</span>
        <span className="px-3 py-1 bg-indigo-600/20 rounded">GitLab</span>
        <span className="px-3 py-1 bg-sky-700/20 rounded">AWS</span>
        <span className="px-3 py-1 bg-green-700/20 rounded">Terraform</span>
        <span className="px-3 py-1 bg-violet-500/20 rounded">Kubernetes</span>
        <span className="px-3 py-1 bg-yellow-700/20 rounded">Jenkins</span>
        <span className="px-3 py-1 bg-pink-700/20 rounded">Prometheus</span>
        <span className="px-3 py-1 bg-teal-700/20 rounded">Ansible</span>
        <span className="px-3 py-1 bg-fuchsia-800/20 rounded">Docker</span>
        <span className="px-3 py-1 bg-orange-600/20 rounded">Slack</span>
      </div>

      {/* PROJECT PROCESS */}
      <h2 className="text-2xl font-bold text-blue-200 mt-12 mb-6 text-center">Our Engagement Process</h2>
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">1</div>
          <b>Consult</b>
          <div className="text-blue-100 text-xs mt-2">Free intro call, NDA signed, goal alignment</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">2</div>
          <b>Roadmap</b>
          <div className="text-blue-100 text-xs mt-2">Audit, assessment, tech/tool selection, quick wins</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">3</div>
          <b>Build</b>
          <div className="text-blue-100 text-xs mt-2">Implementation, documentation, iterative delivery</div>
        </div>
        <div className="bg-blue-900/60 rounded-xl p-5 text-center border border-cyan-800 shadow">
          <div className="text-3xl text-cyan-400 mb-1">4</div>
          <b>Grow</b>
          <div className="text-blue-100 text-xs mt-2">Upskilling, support, and ongoing optimizations</div>
        </div>
      </div>

      {/* CERTIFICATES & PARTNERSHIPS */}
      
      {/* CALL TO ACTION */}
      <div className="text-center mt-10">
        <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition">
          Get My Free DevOps Assessment →
        </Link>
        <div className="mt-2 text-blue-200 text-xs">NDA & confidentiality always included.</div>
      </div>
    </div>
  </section>
);

export default Services;
