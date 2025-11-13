import type { Handler, HandlerEvent } from "@netlify/functions";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the form data
    const data: ContactFormData = JSON.parse(event.body || "{}");

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Here you would integrate with your email service
    // Options: SendGrid, Mailgun, AWS SES, Nodemailer with SMTP, etc.

    // For now, we'll use environment variables for email configuration
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "hello@aydenait.com";

    // If using SendGrid (recommended for production)
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: ADMIN_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL || ADMIN_EMAIL,
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await sgMail.send(msg);
    }
    // If using Mailgun
    else if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
      const formData = require("form-data");
      const Mailgun = require("mailgun.js");
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY,
      });

      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: `AydenAIT Contact <noreply@${process.env.MAILGUN_DOMAIN}>`,
        to: [ADMIN_EMAIL],
        "h:Reply-To": data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }
    // If using Nodemailer with SMTP
    else if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const nodemailer = require("nodemailer");

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
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }
    // Fallback: Just log the submission (for testing/development)
    else {
      console.log("Contact form submission:", data);
      console.warn("No email service configured. Set up SENDGRID_API_KEY, MAILGUN_API_KEY, or SMTP credentials.");
    }

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Thank you for contacting us! We'll respond within 1 business day.",
        success: true,
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send message. Please try again or email us directly.",
      }),
    };
  }
};

export { handler };
