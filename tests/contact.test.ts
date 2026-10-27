import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Capture what would be sent instead of calling SendGrid
const send = vi.fn();
vi.mock("@sendgrid/mail", () => ({ default: { setApiKey: vi.fn(), send } }));

const { default: contact } = await import("../api/contact");

const post = (body: unknown) =>
  contact.fetch(new Request("https://aydenait.com/api/contact", { method: "POST", body: JSON.stringify(body) }));

const valid = { name: "Alex Example", email: "alex@example.com", message: "We'd like a demo.", source: "contact" };

describe("contact function", () => {
  beforeEach(() => {
    vi.stubEnv("SENDGRID_API_KEY", "test-key");
    vi.stubEnv("MAILGUN_API_KEY", "");
    vi.stubEnv("SMTP_HOST", "");
    send.mockReset();
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("only accepts POST", async () => {
    const res = await contact.fetch(new Request("https://aydenait.com/api/contact"));
    expect(res.status).toBe(405);
  });

  it("rejects malformed JSON", async () => {
    const res = await contact.fetch(new Request("https://aydenait.com/api/contact", { method: "POST", body: "{" }));
    expect(res.status).toBe(400);
  });

  it("requires name, email and message", async () => {
    for (const field of ["name", "email", "message"]) {
      const res = await post({ ...valid, [field]: "  " });
      expect(res.status).toBe(400);
    }
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects invalid email and over-long fields", async () => {
    expect((await post({ ...valid, email: "not-an-email" })).status).toBe(400);
    expect((await post({ ...valid, message: "x".repeat(5001) })).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("silently drops honeypot submissions", async () => {
    const res = await post({ ...valid, website: "https://spam.example" });
    expect(res.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  it("sends a valid enquiry with the visitor as reply-to", async () => {
    const res = await post(valid);
    expect(res.status).toBe(200);
    expect(send).toHaveBeenCalledOnce();
    const msg = send.mock.calls[0][0];
    expect(msg.replyTo).toBe("alex@example.com");
    expect(msg.subject).toBe("New Contact Form from Alex Example");
  });

  it("escapes HTML and strips line breaks from the subject", async () => {
    await post({ ...valid, name: "Eve\r\nBcc: x@example.com", message: "<script>alert(1)</script>" });
    const msg = send.mock.calls[0][0];
    expect(msg.subject).not.toMatch(/[\r\n]/);
    expect(msg.html).not.toContain("<script>");
    expect(msg.html).toContain("&lt;script&gt;");
  });

  it("returns a generic error with a reference ID when sending fails", async () => {
    send.mockRejectedValueOnce(new Error("provider down"));
    const res = await post(valid);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).toMatch(/Ref: [0-9a-f-]{36}/);
    expect(body.error).not.toContain("provider down");
  });

  it("fails loudly when no email provider is configured", async () => {
    vi.stubEnv("SENDGRID_API_KEY", "");
    const res = await post(valid);
    expect(res.status).toBe(503);
  });
});
