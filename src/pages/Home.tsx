import CaseAccordion from "../components/CaseAccordion";

const Home = () => (
  <>
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900">
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-blue-500 rounded-full filter blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-2xl opacity-30 animate-pulse delay-500" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="text-blue-400">AI-Driven</span> <span className="text-white">DevOps Consulting</span>
        </h1>
        <p className="mt-5 text-xl text-blue-100">Unlock reliability, automation, and security with intelligence engineered for real teams.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 transition">Get in Touch</a>
          <a href="/services" className="px-8 py-3 rounded-full text-blue-100 border border-blue-200 font-semibold hover:bg-white/10 transition">Our Services</a>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-950 to-blue-950">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          {title:'AI Automation', icon:'🤖', desc:'Accelerate DevOps pipelines and workflows with event-driven agents.'},
          {title:'Predictive Monitoring', icon:'📊', desc:'Real-time insight, anomaly alerting, and auto-tuning from AIOps.'},
          {title:'Zero-Trust Security', icon:'🛡️', desc:'AI-based risk scoring and always-on compliance controls.'}
        ].map(card => (
          <div key={card.title}
               className="rounded-2xl p-8 shadow-2xl backdrop-blur-2xl bg-white/10 border border-blue-700 text-center hover:scale-105 hover:bg-blue-600/10 transition">
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
            <p className="text-blue-100">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <CaseAccordion />
  </>
);

export default Home;
