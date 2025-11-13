import SEO from "../components/SEO";

const Privacy = () => (
  <>
    <SEO
      title="Privacy Policy - AydenAIT Solution"
      description="Learn how AydenAIT Solution collects, uses, and protects your personal information. Our commitment to data privacy and security."
      keywords="privacy policy, data protection, information security, GDPR compliance"
      ogUrl="https://aydenait.com/privacy"
      canonical="https://aydenait.com/privacy"
    />
    <section className="py-12 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-blue-100">
        <h1 className="text-3xl font-bold mb-6 text-blue-200">Privacy Policy</h1>
      <p className="mb-4 text-blue-200">
        Your privacy is important to us at <span className="font-bold">AydenAIT Solution</span>. This policy outlines what information we collect and how we use, store, and protect it.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>Contact information you submit (name, email, message) via our forms</li>
        <li>Basic website analytics (page visits, browser type, general location)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>To respond to inquiries and provide services</li>
        <li>To improve our website and user experience</li>
        <li>For occasional updates if you've opted in</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Protect Your Data</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>We use secure protocols and best security practices</li>
        <li>Access to data is limited to authorized personnel</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Disclosure</h2>
      <p className="mb-4">
        AydenAIT does <span className="font-bold">not sell or share</span> your information except for essential service partners (e.g., email/analytics) or as required by law.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">
        For any questions or concerns, email us at <a className="underline text-blue-300" href="mailto:privacy@aydenait.com">privacy@aydenait.com</a>.
      </p>
      <p className="text-xs mt-8 text-blue-400">Last updated: September 2025</p>
    </div>
  </section>
  </>
);
export default Privacy;
