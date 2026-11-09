import SEO from "../components/SEO";
import LegalPage from "../components/LegalPage";

// Policy pages for the Hey Markham mobile app (iOS and Android). The App Store and Google Play link to these.
// Keep them accurate to what the app and its API actually do (HeyMarkham-mobile, HeyMarkham repos).
//
// CONFIRM before publishing (each is marked where it appears):
// - whether any question is sent to an external AI service (e.g. Google Gemini) in production
// - how long question logs that aren't linked to an account are kept
// - how long deleted data can remain in backups

const BASE = "https://aydenait.com/heymarkham";
const EMAIL = "contact@aydenait.com";
const UPDATED = "November 2026";

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const Notice = () => (
  <p>
    Hey Markham is an independent app made by AydenAIT Solution Inc. It is not affiliated with, endorsed by or operated
    by the City of Markham. Answers are based on publicly available City of Markham information. For official decisions
    or anything about your own City account, contact the City of Markham directly.
  </p>
);

export const HeyMarkhamPrivacy = () => (
  <>
    <SEO
      title="Hey Markham app privacy policy - AydenAIT Solution"
      description="What the Hey Markham app collects, why, who processes it, how long it is kept and how to access or delete it."
      keywords="Hey Markham privacy policy, Hey Markham app, PIPEDA, AydenAIT"
      ogUrl={`${BASE}/privacy`}
      canonical={`${BASE}/privacy`}
    />
    <LegalPage label="Hey Markham app" title="Privacy policy" updated={UPDATED}>
      <p>
        This policy explains how AydenAIT Solution Inc. ("AydenAIT", "we") handles personal information in the Hey
        Markham app for iPhone and Android. We handle personal information in accordance with Canada's{" "}
        <i>Personal Information Protection and Electronic Documents Act</i> (PIPEDA).
      </p>

      <h2>Two ways to use the app</h2>
      <ul className="list-disc ml-6">
        <li>
          <b>As a guest.</b> No account. Your questions are not saved to an account or kept on your phone after you
          leave.
        </li>
        <li>
          <b>Signed in.</b> You choose to create an account (with Google, Apple, or an email and password) so the app can
          keep your question history, saved questions, settings and optional profile.
        </li>
      </ul>

      <h2>What we collect</h2>
      <p>
        <b>Your questions.</b> When you ask a question, typed or spoken, its text is sent to the Hey Markham service so
        it can be answered. If you are signed in, the question and its answer are added to your history.
        {/* CONFIRM: retention for questions not linked to an account (12 months assumed). */} Questions that aren't
        linked to an account may be reviewed, without your name, to improve answers, and are kept for up to 12 months.
      </p>
      <p>
        <b>Voice.</b> When you speak, your phone's own speech service (Apple on iPhone, Google on Android) turns your voice
        into text. Hey Markham receives only the text, never the recording. Read-aloud answers are spoken by your phone.
      </p>
      <p>
        <b>Your account (signed in only).</b> Your sign-in is managed by Google Identity Platform, which holds your email
        address and how you sign in (Google, Apple, or email and password). We never see or store your password. Our
        service stores only a random account identifier, your question history (up to the most recent 500 questions),
        your saved questions (up to 50) and your optional profile.
      </p>
      <p>
        <b>Your optional profile (signed in only).</b> First name, home address, postal code and preferred language. Every
        field is optional. We use your address only to give answers about your home, such as services for your street.
      </p>
      <p>
        <b>Feedback.</b> If you rate an answer as helpful or not, we receive the rating with the question and answer, not
        linked to your account.
      </p>
      <p>
        <b>On your phone.</b> Your language, appearance and similar settings are stored on your phone. When you sign in,
        a sign-in token is kept in your phone's secure storage (Keychain or Keystore).
      </p>
      <p>
        <b>What we don't collect.</b> No location from your phone, no contacts, photos or files, no advertising
        identifiers, no tracking across other apps or websites, and no ads. Please don't include personal details such as
        your SIN, health information or account numbers in a question.
      </p>

      <h2>How we use it</h2>
      <ul className="list-disc ml-6">
        <li>To answer your questions using public City of Markham information</li>
        <li>To keep your history, saved questions, settings and profile when you are signed in</li>
        <li>To find questions the app answers poorly, and improve answers</li>
        <li>To keep the service secure and prevent abuse</li>
      </ul>
      <p>We do not sell personal information and do not use it for advertising.</p>

      <h2>Who processes it</h2>
      <ul className="list-disc ml-6">
        <li>
          <b>The Hey Markham service</b> runs on servers in Ontario, Canada.{" "}
          {/* CONFIRM: if any question can be sent to an external AI service such as Google Gemini, name it here. */}
          Answers are generated on those servers; questions are not sent to outside AI companies.
        </li>
        <li>
          <b>Google</b> (Google Identity Platform) manages sign-in and, if you choose it, Sign in with Google.
        </li>
        <li>
          <b>Apple</b>, if you choose Sign in with Apple. We ask Apple for no name or email.
        </li>
        <li>
          <b>Apple or Google speech services</b> on your phone, when you speak a question.
        </li>
      </ul>
      <p>
        Google and Apple may process information outside Canada, including in the United States, where it is subject to
        local laws. We may also disclose personal information where required by law.
      </p>
      <p>
        Links in answers open City of Markham web pages, which have their own privacy policies.
      </p>

      <h2>How we protect it</h2>
      <ul className="list-disc ml-6">
        <li>All connections use encrypted HTTPS</li>
        <li>Your profile, question history and saved questions are encrypted in our database (AES-256-GCM)</li>
        <li>Questions are kept out of our application logs</li>
        <li>Access to personal information is limited to the people who need it to run the service</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        Account information is kept until you delete it or your account. You can remove single questions or clear your
        history at any time. {/* CONFIRM: backup retention (30 days assumed). */} Deleted data can remain in backups for
        up to 30 days before it is removed.
      </p>

      <h2>Your choices and rights</h2>
      <ul className="list-disc ml-6">
        <li>Use the app as a guest, without an account</li>
        <li>View and change your profile in Settings, Your profile</li>
        <li>Delete single questions or your whole history in Your questions</li>
        <li>
          Delete your account in the app (Settings, Manage account) or by request, as explained on the{" "}
          <a href={`${BASE}/delete-account`}>account deletion page</a>
        </li>
        <li>Ask to access or correct the personal information we hold, by emailing <Mail /></li>
      </ul>
      <p>
        We respond within 30 days. If you are not satisfied with our response, you may contact the{" "}
        <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
          Office of the Privacy Commissioner of Canada
        </a>
        .
      </p>

      <h2>Children</h2>
      <p>Hey Markham is meant for adults and is not directed at children under 13.</p>

      <h2>About the City of Markham</h2>
      <Notice />

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy. The date at the top shows the latest version, and we will tell you in the app before
        a change that affects how your information is used.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, email <Mail />.
        <br />
        AydenAIT Solution Inc., Toronto, Ontario, Canada
      </p>
    </LegalPage>
  </>
);

export const HeyMarkhamTerms = () => (
  <>
    <SEO
      title="Hey Markham app terms of use - AydenAIT Solution"
      description="Terms for using the Hey Markham app, including how its AI answers should be used and its independence from the City of Markham."
      keywords="Hey Markham terms of use, Hey Markham app, AydenAIT"
      ogUrl={`${BASE}/terms`}
      canonical={`${BASE}/terms`}
    />
    <LegalPage label="Hey Markham app" title="Terms of use" updated={UPDATED}>
      <p>
        These terms apply to the Hey Markham app, made by AydenAIT Solution Inc. ("AydenAIT", "we"). By using the app you
        agree to them.
      </p>

      <h2>Not the City of Markham</h2>
      <Notice />

      <h2>About the answers</h2>
      <ul className="list-disc ml-6">
        <li>
          Answers are written by artificial intelligence from public City of Markham information. They can be incomplete,
          out of date or wrong.
        </li>
        <li>
          Each answer links to its sources. Check the official City page, or contact the City, before you rely on an
          answer for a decision, a deadline, a payment or anything with legal or financial effect.
        </li>
        <li>Answers are general information, not legal, financial or professional advice.</li>
      </ul>

      <h2>Your account</h2>
      <p>
        You can use the app as a guest or create an account. Keep your sign-in secure; you are responsible for activity
        on your account. You can delete your account at any time (Settings, Manage account).
      </p>

      <h2>Acceptable use</h2>
      <ul className="list-disc ml-6">
        <li>Don't use the app for anything unlawful, or to harass anyone</li>
        <li>Don't try to break, overload, scrape or get around the security of the app or its service</li>
        <li>Don't include other people's personal information, or your own sensitive details, in questions</li>
      </ul>
      <p>We may suspend access that breaks these terms.</p>

      <h2>The app</h2>
      <p>
        The app is provided "as is". We work to keep it available and accurate but don't guarantee it will always be
        available, error-free or up to date. To the extent the law allows, AydenAIT is not liable for losses arising
        from use of, or reliance on, the app or its answers.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <a href={`${BASE}/privacy`}>privacy policy</a> explains what the app collects and how to access or delete it.
      </p>

      <h2>Changes and law</h2>
      <p>
        We may update these terms; the date at the top shows the latest version. These terms are governed by the laws of
        Ontario and the federal laws of Canada that apply there.
      </p>

      <h2>Contact</h2>
      <p>
        Email <Mail />.
        <br />
        AydenAIT Solution Inc., Toronto, Ontario, Canada
      </p>
    </LegalPage>
  </>
);

export const HeyMarkhamDeleteAccount = () => (
  <>
    <SEO
      title="Delete your Hey Markham account - AydenAIT Solution"
      description="How to delete your Hey Markham app account and its data, in the app or by request, and what is deleted."
      keywords="delete Hey Markham account, Hey Markham data deletion, AydenAIT"
      ogUrl={`${BASE}/delete-account`}
      canonical={`${BASE}/delete-account`}
    />
    <LegalPage label="Hey Markham app" title="Delete your account" updated={UPDATED}>
      <p>You can delete your Hey Markham account and its data at any time, in the app or by asking us.</p>

      <h2>In the app</h2>
      <ol className="list-decimal ml-6">
        <li>Open Hey Markham and make sure you're signed in</li>
        <li>Tap the gear icon at the top right to open Settings</li>
        <li>At the bottom of Settings, tap Manage account</li>
        <li>Type DELETE and tap Delete my account</li>
      </ol>

      <h2>Without the app</h2>
      <p>
        Email <Mail /> from the email address you use to sign in, with the subject "Delete my Hey Markham account". If
        you used Sign in with Apple and hid your email, tell us that and we'll help you confirm the account. We may ask
        you to confirm the request before we delete anything, and we complete requests within 30 days.
      </p>

      <h2>What is deleted</h2>
      <ul className="list-disc ml-6">
        <li>Your profile: first name, home address, postal code and preferred language</li>
        <li>Your question history and saved questions</li>
        <li>Your sign-in (your Hey Markham account in Google Identity Platform)</li>
      </ul>
      <p>
        {/* CONFIRM: backup retention (30 days assumed). */}
        These are deleted right away from the live service. Copies in backups are removed within 30 days. Feedback
        ratings and questions asked as a guest aren't linked to any account, so they can't be found or deleted by
        account.
      </p>
      <p>
        Deleting your Hey Markham account doesn't delete your Google or Apple account itself. To also stop sharing your
        Apple ID with Hey Markham, go to your iPhone's Settings, your name, Sign in with Apple.
      </p>

      <h2>Questions</h2>
      <p>
        Email <Mail />. See also our <a href={`${BASE}/privacy`}>privacy policy</a>.
      </p>
    </LegalPage>
  </>
);

export const HeyMarkhamSupport = () => (
  <>
    <SEO
      title="Hey Markham app support - AydenAIT Solution"
      description="Help with the Hey Markham app: signing in, voice and languages, wrong answers, and how to contact the City of Markham."
      keywords="Hey Markham support, Hey Markham help, Hey Markham app"
      ogUrl={`${BASE}/support`}
      canonical={`${BASE}/support`}
    />
    <LegalPage label="Hey Markham app" title="Support" updated={UPDATED}>
      <p>
        Hey Markham answers questions about City of Markham services, by voice or by typing, with links to the official
        sources. For help with the app, email <Mail />.
      </p>

      <h2>Questions about City services or your City account</h2>
      <p>
        Contact the City of Markham directly: call the Contact Centre at 905-477-5530 or visit{" "}
        <a href="https://www.markham.ca" target="_blank" rel="noopener noreferrer">
          markham.ca
        </a>
        . In the app, tap Contact the City on the home screen.
      </p>

      <h2>Common questions</h2>
      <p>
        <b>Do I need an account?</b> No. Choose Continue as guest. Sign in only if you want your questions, settings
        and profile kept.
      </p>
      <p>
        <b>Voice isn't working.</b> Allow microphone access for Hey Markham in your phone's settings (Settings, Voice,
        Microphone access in the app). For French, Mandarin or Cantonese, your phone may need that speech language
        downloaded.
      </p>
      <p>
        <b>How do I change the language?</b> Settings, Language. Hey Markham answers, listens and reads aloud in English,
        French, Mandarin or Cantonese.
      </p>
      <p>
        <b>An answer looks wrong.</b> Tap the thumbs-down under it so we can improve it, and check the linked official
        page. If something seems seriously wrong, email us.
      </p>
      <p>
        <b>I forgot my password.</b> On the sign-in screen, enter your email and tap Forgot password?
      </p>
      <p>
        <b>How do I delete my account?</b> See <a href={`${BASE}/delete-account`}>Delete your account</a>.
      </p>

      <h2>About Hey Markham</h2>
      <Notice />
      <p>
        <a href={`${BASE}/privacy`}>Privacy policy</a> · <a href={`${BASE}/terms`}>Terms of use</a>
      </p>
    </LegalPage>
  </>
);
