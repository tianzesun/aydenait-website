import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Website terms only. Client work is governed by separate written agreements (see "Client Services").
const Terms = () => (
  <>
    <SEO
      title="Terms of Use - AydenAIT Solution"
      description="The terms that apply to your use of aydenait.com, including website content, enquiries, intellectual property, liability and governing law."
      keywords="AydenAIT terms of use, website terms, terms and conditions"
      ogUrl="https://aydenait.com/terms"
      canonical="https://aydenait.com/terms"
    />
    <section className="py-12 bg-gradient-to-b from-blue-950 to-[#10172a] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-blue-100">
        <h1 className="text-3xl font-bold mb-6 text-blue-200">Terms of Use</h1>
      <p className="mb-4">
        These terms apply to your use of aydenait.com (the "website"), operated by{" "}
        <span className="font-bold">AydenAIT Solution</span> ("AydenAIT", "we"). By using the website, you agree to
        these terms. If you do not agree, please do not use the website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Client Services</h2>
      <p className="mb-4">
        These terms cover the website only. Consulting, development and support services are provided under a separate
        written agreement, such as a proposal, statement of work or services agreement. Where that agreement conflicts
        with these terms, the agreement applies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Use of the Website</h2>
      <p className="mb-2">You agree to use the website lawfully and not to:</p>
      <ul className="mb-4 list-disc ml-6">
        <li>Interfere with, disrupt or attempt to gain unauthorized access to the website or its systems</li>
        <li>Submit false, misleading, abusive or malicious content through our forms</li>
        <li>Use automated means to submit forms or to copy the website's content in bulk</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Website Content</h2>
      <p className="mb-4">
        Content on the website is provided for general information. It is not professional advice and is not an offer
        or commitment to provide services. Descriptions of projects, timelines and engagement options are indicative;
        the scope, schedule and fees for any engagement are set out in a written proposal.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Enquiries and Confidential Information</h2>
      <p className="mb-4">
        Contacting us does not create a client relationship or oblige either party to proceed. Please do not send
        confidential information through the website or by email until a non-disclosure agreement is in place. We are
        happy to sign one before detailed discussions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">
        The website's content, design, and the names and logos of AydenAIT and its products are owned by AydenAIT or
        its licensors. You may view and print pages for your own reference, but you may not copy, modify or distribute
        them without our written permission.
      </p>
      <p className="mb-4">
        Other organizations' names and trademarks belong to their respective owners. Their mention on the website is
        for identification only and does not imply endorsement.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        The website may link to websites operated by others. We are not responsible for their content or privacy
        practices.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Disclaimer and Limitation of Liability</h2>
      <p className="mb-4">
        The website is provided "as is" and "as available", without warranties of any kind, to the extent permitted
        by law. We do not guarantee that it will be uninterrupted, error-free or free of harmful components.
      </p>
      <p className="mb-4">
        To the extent permitted by law, AydenAIT is not liable for any loss or damage arising from your use of, or
        inability to use, the website or its content.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Privacy</h2>
      <p className="mb-4">
        Our{" "}
        <Link to="/privacy" className="underline text-blue-300">
          Privacy Policy
        </Link>{" "}
        explains how we handle personal information submitted through the website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to These Terms</h2>
      <p className="mb-4">
        We may update these terms from time to time. The date below shows when they were last revised. Continued use
        of the website after a change means you accept the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply
        there.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">
        For questions about these terms, email{" "}
        <a className="underline text-blue-300" href="mailto:contact@aydenait.com">contact@aydenait.com</a>.
        <br />
        AydenAIT Solution, Toronto, Ontario, Canada
      </p>
      <p className="text-xs mt-8 text-blue-400">Last updated: October 2026</p>
    </div>
  </section>
  </>
);
export default Terms;
