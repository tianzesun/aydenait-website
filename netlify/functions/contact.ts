import type { Handler, HandlerEvent } from "@netlify/functions";
import { randomUUID } from "node:crypto";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const MAX_LENGTHS = { name: 200, email: 254, phone: 50, message: 5000 };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const jsonHeaders = { "Content-Type": "application/json" };

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { ...jsonHeaders, Allow: "POST" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const correlationId = randomUUID();

  let data: ContactFormData;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }

  // Validate required fields
  const fields = { name: data?.name, email: data?.email, phone: data?.phone ?? "", message: data?.message };
  if (
    typeof fields.name !== "string" || !fields.name.trim() ||
    typeof fields.email !== "string" || !fields.email.trim() ||
    typeof fields.message !== "string" || !fields.message.trim() ||
    typeof fields.phone !== "string"
  ) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Please fill in your name, email, and message." }),
    };
  }

  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    if ((fields[key as keyof typeof fields] as string).length > max) {
      return {
        statusCode: 400,
        headers: jsonHeaders,
        body: JSON.stringify({ error: `The ${key} field is too long.` }),
      };
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.email)) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Please enter a valid email address." }),
    };
  }

  const name = fields.name.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim() || "Not provided";
  const message = fields.message.trim();
  // Header-safe subject: no line breaks from user input
  const subject = `New Contact Form Submission from ${name.replace(/[\r\n]+/g, " ")}`;
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n`;
  const html = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `;

  try {
    // Here you would integrate with your email service
    // Options: SendGrid, Mailgun, AWS SES, Nodemailer with SMTP, etc.

    // For now, we'll use environment variables for email configuration
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@aydenait.com";

    // If using SendGrid (recommended for production)
    if (process.env.SENDGRID_API_KEY) {
      const { default: sgMail } = await import("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: ADMIN_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL || ADMIN_EMAIL,
        replyTo: email,
        subject,
        text,
        html,
      };

      await sgMail.send(msg);
    }
    // If using Mailgun
    else if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
      const { default: formData } = await import("form-data");
      const { default: Mailgun } = await import("mailgun.js");
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY,
      });

      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: `AydenAIT Contact <noreply@${process.env.MAILGUN_DOMAIN}>`,
        to: [ADMIN_EMAIL],
        "h:Reply-To": email,
        subject,
        text,
        html,
      });
    }
    // If using Nodemailer with SMTP
    else if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const { default: nodemailer } = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || ADMIN_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject,
        text,
        html,
      });
    }
    // No provider configured: fail loudly instead of telling the visitor it was sent
    else {
      console.error(`[${correlationId}] No email service configured. Set SENDGRID_API_KEY, MAILGUN_API_KEY, or SMTP credentials.`);
      return {
        statusCode: 503,
        headers: jsonHeaders,
        body: JSON.stringify({
          error: `We couldn't send your message. Please email contact@aydenait.com. (Ref: ${correlationId})`,
        }),
      };
    }

    // Return success response
    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({
        message: "Thank you for contacting us! We'll respond within 1 business day.",
        success: true,
      }),
    };
  } catch (error) {
    console.error(`[${correlationId}] Contact form error:`, error);
    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        error: `Failed to send message. Please try again or email contact@aydenait.com. (Ref: ${correlationId})`,
      }),
    };
  }
};

export { handler };
