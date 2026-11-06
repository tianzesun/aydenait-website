import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import LegalPage from "../components/LegalPage";

// Only state practices we actually follow. Keep the website section in step with vercel.json and the privacy policy.
const Security = () => (
  <>
    <SEO
      title="Security & privacy - AydenAIT Solution"
      description="How AydenAIT protects your data: confidentiality from the first conversation, systems built around your privacy and security requirements, and human review of AI decisions."
      keywords="AydenAIT security, AI data privacy, AI data security, confidentiality, NDA, human review"
      ogUrl="https://aydenait.com/security"
      canonical="https://aydenait.com/security"
    />
    <LegalPage label="Trust" title="Security & privacy" updated="October 2026">
      <p className="mb-4 text-blue-200">
        Our clients trust us with student work, staff records and confidential business information. This page explains
        how we protect that information, from the first conversation through to the systems we build and support.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Confidentiality from the first conversation</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>We offer a non-disclosure agreement before any detailed discussion of your project</li>
        <li>Access to your information is limited to the people working on your project</li>
        <li>We use your information only to deliver the work you have asked for</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Built around your requirements</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>
          Data handling is designed around your organization's privacy, security and retention requirements from the
          start, not added at the end
        </li>
        <li>Where required, we work within your institution's existing security and policy frameworks</li>
        <li>Systems can be deployed in the cloud or on your own premises</li>
        <li>We integrate with the identity provider you already use, so your staff sign in the way they do today</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Accountable AI</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>People make the final decision. Every system has a clear point where a person reviews the result before it takes effect</li>
        <li>AI-assisted decisions include an audit trail, so you can see what was decided, when and by whom</li>
        <li>Assistants cite the sources behind each answer, and scores come with the reasoning behind them</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">You stay in control</h2>
      <p className="mb-4">
        You own what we build for you. We provide documentation and knowledge transfer so that your team can operate
        and extend the system without depending on us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">This website</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>The website and its forms are served only over encrypted HTTPS connections</li>
        <li>It does not use analytics tools, advertising trackers or cookies</li>
        <li>A strict content security policy means the site loads scripts only from its own address</li>
        <li>Form submissions are used only to respond to your enquiry</li>
      </ul>
      <p className="mb-4">
        Our{" "}
        <Link to="/privacy" className="underline text-blue-300">
          privacy policy
        </Link>{" "}
        explains in detail how we handle personal information submitted through this website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Security reviews and questions</h2>
      <p className="mb-4">
        If your organization has a security or privacy review process for new vendors, we will work through it with
        you. To ask a question or report a security concern, email{" "}
        <a className="underline text-blue-300" href="mailto:contact@aydenait.com">contact@aydenait.com</a>.
      </p>
    </LegalPage>
  </>
);

export default Security;
