import SEO from "../components/SEO";
import LegalPage from "../components/LegalPage";
import { BOOKING_URL } from "../data/booking";

// Keep this accurate to what the site actually does. Update it before adding analytics,
// cookies, a mailing list or any new third-party service (see also the CSP in vercel.json).
const Privacy = () => (
  <>
    <SEO
      title="Privacy policy - AydenAIT Solution"
      description="How AydenAIT Solution collects, uses, shares and protects personal information submitted through aydenait.com, and how to exercise your privacy rights."
      keywords="AydenAIT privacy policy, personal information, PIPEDA, data protection"
      ogUrl="https://aydenait.com/privacy"
      canonical="https://aydenait.com/privacy"
    />
    <LegalPage label="Legal" title="Privacy policy" updated="November 2026">
      <p className="mb-4 text-blue-200">
        This policy explains how <span className="font-bold">AydenAIT Solution Inc.</span> ("AydenAIT", "we") collects, uses,
        shares and protects personal information through this website, aydenait.com. We handle personal information in
        accordance with Canada's <i>Personal Information Protection and Electronic Documents Act</i> (PIPEDA).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Information we collect</h2>
      <p className="mb-2">
        <span className="font-semibold">Information you provide.</span> When you use our contact or assessment request
        forms, we collect:
      </p>
      <ul className="mb-4 list-disc ml-6">
        <li>Your name, email address and message</li>
        <li>Your organization and phone number, if you choose to provide them</li>
        <li>Which form you used</li>
      </ul>
      <p className="mb-4">We also receive any information you include when you email us directly.</p>
      <p className="mb-4">
        <span className="font-semibold">Information collected automatically.</span> Like most websites, our hosting
        provider automatically records standard technical information when you visit, such as your IP address, browser
        type, the page requested and the time of the request. This is used to deliver and secure the website.
      </p>
      <p className="mb-4">
        <span className="font-semibold">Website analytics.</span> We use Vercel Web Analytics to count visits and see
        which pages are useful. It records the page viewed, the referring website, your browser, operating system and
        device type, and your country. It does not use cookies, does not store your IP address, and recognizes a
        returning visit only within the same day, using an anonymous identifier that is discarded after 24 hours. We
        cannot identify you from this data.
      </p>
      <p className="mb-4">
        This website does not use advertising trackers or cookies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">How we use your information</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>To respond to your enquiry and arrange a consultation</li>
        <li>To prepare assessments, proposals and services you request</li>
        <li>To operate, maintain and protect the website</li>
        <li>To understand, in aggregate, how the website is used so we can improve it</li>
      </ul>
      <p className="mb-4">
        We do not use your information for marketing without your consent, and we do not sell personal information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Consent</h2>
      <p className="mb-4">
        By submitting a form or emailing us, you consent to our use of your information for the purposes above. You may
        withdraw your consent at any time by contacting us, subject to any legal or contractual obligations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Service providers</h2>
      <p className="mb-2">
        We share personal information only with service providers that process it on our behalf, and only as needed for
        them to provide their services:
      </p>
      <ul className="mb-4 list-disc ml-6">
        <li>Our website hosting provider (Vercel), which serves the site, processes form submissions and provides our website analytics</li>
        <li>Our email service provider, which delivers form submissions to our inbox</li>
        {BOOKING_URL && (
          <li>Our scheduling service (Calendly), which receives your name, email and any notes when you book a consultation</li>
        )}
      </ul>
      <p className="mb-4">
        We may also disclose personal information where required by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Storage outside Canada</h2>
      <p className="mb-4">
        Our service providers may store or process personal information outside Canada, including in the United States.
        Information held in another country is subject to that country's laws and may be accessible to its authorities.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Retention</h2>
      <p className="mb-4">
        We keep enquiry information only as long as needed to respond to you and to manage any resulting business
        relationship, or as required by law. We then delete it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">How we protect your information</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>The website and its forms are served only over encrypted HTTPS connections</li>
        <li>Access to personal information is limited to the people who need it to respond to you</li>
        <li>We are happy to sign a non-disclosure agreement before you share confidential details</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your rights</h2>
      <p className="mb-4">
        You may ask to access the personal information we hold about you, correct it, or have it deleted. To make a
        request, email us at the address below. We will respond within 30 days.
      </p>
      <p className="mb-4">
        If you are not satisfied with our response, you may contact the{" "}
        <a className="underline text-blue-300" href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
          Office of the Privacy Commissioner of Canada
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to this policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. The date below shows when it was last revised.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">
        For privacy questions or requests, email{" "}
        <a className="underline text-blue-300" href="mailto:contact@aydenait.com">contact@aydenait.com</a>.
        <br />
        AydenAIT Solution Inc., Toronto, Ontario, Canada
      </p>
    </LegalPage>
  </>
);
export default Privacy;
