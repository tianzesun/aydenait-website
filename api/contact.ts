import { randomUUID } from "node:crypto";

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  message: string;
  source?: string;
  website?: string;
}

const MAX_LENGTHS = { name: 200, email: 254, organization: 200, phone: 50, message: 5000 };

// Which form the enquiry came from; shown in the email subject
const SOURCES: Record<string, string> = {
  contact: "Contact Form",
  assessment: "AI Readiness Assessment Request",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const jsonHeaders = { "Content-Type": "application/json" };

const handler = async (req: Request) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...jsonHeaders, Allow: "POST" },
    });
  }

  const correlationId = randomUUID();

  let data: ContactFormData;
  try {
    data = JSON.parse((await req.text()) || "{}");
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  // Honeypot filled in: almost certainly a bot. Report success so it doesn't retry, but send nothing.
  if (typeof data?.website === "string" && data.website.trim()) {
    console.warn(`[${correlationId}] Contact form honeypot triggered; message dropped.`);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: jsonHeaders,
    });
  }

  // Validate required fields
  const fields = {
    name: data?.name,
    email: data?.email,
    organization: data?.organization ?? "",
    phone: data?.phone ?? "",
    message: data?.message,
  };
  if (
    typeof fields.name !== "string" || !fields.name.trim() ||
    typeof fields.email !== "string" || !fields.email.trim() ||
    typeof fields.message !== "string" || !fields.message.trim() ||
    typeof fields.organization !== "string" ||
    typeof fields.phone !== "string"
  ) {
    return new Response(JSON.stringify({ error: "Please fill in your name, email, and message." }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    if ((fields[key as keyof typeof fields] as string).length > max) {
      return new Response(JSON.stringify({ error: `The ${key} field is too long.` }), {
        status: 400,
        headers: jsonHeaders,
      });
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.email)) {
    return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const name = fields.name.trim();
  const email = fields.email.trim();
  const organization = fields.organization.trim() || "Not provided";
  const phone = fields.phone.trim() || "Not provided";
  const message = fields.message.trim();
  const formName = SOURCES[typeof data.source === "string" ? data.source : ""] ?? SOURCES.contact;
  // Header-safe subject: no line breaks from user input
  const subject = `New ${formName} from ${name.replace(/[\r\n]+/g, " ")}`;
  const text = `Form: ${formName}\nName: ${name}\nEmail: ${email}\nOrganization: ${organization}\nPhone: ${phone}\n\nMessage:\n${message}\n`;
  const html = `
          <h2>New ${formName}</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `;

  try {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@aydenait.com";

    // No email service configured: fail loudly instead of telling the visitor it was sent
    if (!process.env.SENDGRID_API_KEY) {
      console.error(`[${correlationId}] No email service configured. Set SENDGRID_API_KEY.`);
      const body = { error: `We couldn't send your message. Please email contact@aydenait.com. (Ref: ${correlationId})` };
      return new Response(JSON.stringify(body), {
        status: 503,
        headers: jsonHeaders,
      });
    }

    const { default: sgMail } = await import("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: ADMIN_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL || ADMIN_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    // Return success response
    const body = { message: "Thank you for contacting us! We'll respond within 1 business day.", success: true };
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: jsonHeaders,
    });
  } catch (error) {
    console.error(`[${correlationId}] Contact form error:`, error);
    const body = { error: `Failed to send message. Please try again or email contact@aydenait.com. (Ref: ${correlationId})` };
    return new Response(JSON.stringify(body), {
      status: 500,
      headers: jsonHeaders,
    });
  }
};

// Vercel serves this file at /api/contact. Rate limiting (5 per minute per IP) is a Vercel Firewall
// rule, set in the dashboard, because each function call runs on its own with no shared state.
export default { fetch: handler };
