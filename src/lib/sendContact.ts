export type ContactSource = "contact" | "assessment";

export interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  message: string;
  website?: string;
  source: ContactSource;
}

const FALLBACK_ERROR = "We couldn't send your message. Please try again or email contact@aydenait.com.";

// Posts to the Netlify contact function (netlify/functions/contact.ts). Throws an Error with a user-safe message on failure.
export async function sendContact(payload: ContactPayload): Promise<void> {
  let response: Response;
  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(FALLBACK_ERROR);
  }

  if (response.ok) return;
  // Netlify's rate limit (set in the function config) answers 429 without a JSON body
  if (response.status === 429) {
    throw new Error("Too many messages in a short time. Please wait a minute and try again, or email contact@aydenait.com.");
  }

  // The function returns JSON errors, but a proxy or 404 page may not
  const result = await response.json().catch(() => null);
  throw new Error(result?.error || FALLBACK_ERROR);
}
