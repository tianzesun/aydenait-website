import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import LegalPage from "../components/LegalPage";

// Only state what the website actually does. It hasn't had an independent audit, so this says "aim to meet",
// not "conforms". Product accessibility is answered on request, not claimed here.
const Accessibility = () => (
  <>
    <SEO
      title="Accessibility - AydenAIT Solution"
      description="AydenAIT's accessibility statement: how this website supports keyboard, screen-reader and reduced-motion users, its known limitations, and how to request information in another format."
      keywords="AydenAIT accessibility, accessibility statement, WCAG 2.1 AA, AODA"
      ogUrl="https://aydenait.com/accessibility"
      canonical="https://aydenait.com/accessibility"
    />
    <LegalPage label="Trust" title="Accessibility" updated="November 2026">
      <p className="mb-4 text-blue-200">
        We want everyone to be able to use this website, including people who use a keyboard, a screen reader,
        magnification or other assistive technology.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Our standard</h2>
      <p className="mb-4">
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA, in line with the Accessibility
        for Ontarians with Disabilities Act (AODA). We test pages with automated accessibility checks and by hand with a
        keyboard. The site has not yet had an independent accessibility audit.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">What this website does</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>Every page can be used with a keyboard, with a visible focus outline and a "Skip to main content" link</li>
        <li>Pages use headings, landmarks and labelled form fields so screen readers can navigate them</li>
        <li>Images that carry information have text alternatives</li>
        <li>Text and controls are designed for sufficient colour contrast, and links in text are underlined</li>
        <li>Animations and smooth scrolling are turned off if you set "reduce motion" in your device settings</li>
        <li>Pages can be zoomed to 200% and read on small screens without losing content</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Known limitations</h2>
      <ul className="mb-4 list-disc ml-6">
        <li>
          Booking a consultation opens Calendly, a third-party service. Its accessibility is outside our control; if it
          doesn't work for you, email or call us and we'll book a time with you directly.
        </li>
        <li>Product screenshots show other applications and are described in text, not fully accessible themselves</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Our products</h2>
      <p className="mb-4">
        If you need accessibility information about one of our products, for example for a procurement review, contact
        us and we'll provide what we have.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Feedback and other formats</h2>
      <p className="mb-4">
        If something on this website is hard to use, or you need information in another format, contact us at{" "}
        <a href="mailto:contact@aydenait.com" className="underline">contact@aydenait.com</a> or{" "}
        <a href="tel:+12898599523" className="underline">(289) 859-9523</a>. Tell us the page and the problem, and
        we'll get back to you and provide the information in a format that works for you. You can also use our{" "}
        <Link to="/contact" className="underline">contact form</Link>.
      </p>
    </LegalPage>
  </>
);

export default Accessibility;
