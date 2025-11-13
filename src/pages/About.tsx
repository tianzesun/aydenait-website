import SEO from "../components/SEO";

const About = () => (
  <>
    <SEO
      title="About Us - AydenAIT Solution"
      description="Accelerate tech teams with actionable, pragmatic AI. Senior cloud and DevOps engineers delivering clarity, trust, and maximum impact."
      keywords="about AydenAIT, DevOps company, AI engineering firm, cloud consulting team, DevOps expertise"
      ogUrl="https://aydenait.com/about"
      canonical="https://aydenait.com/about"
    />
    <section className="py-16 bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-950 flex items-center min-h-screen">
    <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold text-white mb-3">About AydenAIT</h2>
        <p className="text-xl text-blue-100 mb-4">Our mission: Accelerate tech teams everywhere with actionable, pragmatic AI.</p>
        <ul className="list-disc text-blue-200 ml-6 mb-2">
          <li>Senior cloud and DevOps engineers only</li>
          <li>Clarity, trust, and maximum impact</li>
          <li>AI solutions, not just buzzwords</li>
        </ul>
      </div>
      <img src="/ai-illustration.svg" className="w-80 h-auto mx-auto drop-shadow-2xl rounded-2xl" alt="Team"/>
    </div>
  </section>
  </>
);
export default About;
