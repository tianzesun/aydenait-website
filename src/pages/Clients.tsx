const Clients = () => (
  <section className="py-12 bg-gradient-to-t from-blue-950 to-[#10172a] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-100 mb-8">Trusted by AI-first engineering teams</h2>
      <div className="flex flex-wrap gap-6 justify-center mb-12 opacity-80 grayscale hover:grayscale-0 transition">
        <img src="/logo-client-1.svg" className="h-10" alt="Client"/>
        <img src="/logo-client-2.svg" className="h-10" alt="Client"/>
        <img src="/logo-client-3.svg" className="h-10" alt="Client"/>
      </div>
      <div className="max-w-xl mx-auto text-center">
        <blockquote className="text-white italic text-lg mb-4">
          “AydenAIT’s automations let us deploy twice as fast, with confidence.”
        </blockquote>
        <div className="text-blue-400 font-bold">Priya Raman</div>
        <div className="text-blue-200 text-sm">Director of Engineering, FinHealth</div>
      </div>
    </div>
  </section>
);
export default Clients;
