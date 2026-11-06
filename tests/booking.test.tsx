import { afterEach, describe, expect, it, vi } from "vitest";

const CALENDLY = "https://calendly.com/example/consultation";

// BOOKING_URL is a module constant, so each case re-imports the app with the value it needs
const renderWith = async (bookingUrl: string, route: string) => {
  vi.resetModules();
  vi.doMock("../src/data/booking", () => ({ BOOKING_URL: bookingUrl }));
  const { render } = await import("../src/entry-server");
  return render(route).html;
};

afterEach(() => {
  vi.doUnmock("../src/data/booking");
});

describe("consultation booking", () => {
  it("sends booking buttons to the Contact page while no Calendly link is set", async () => {
    const html = await renderWith("", "/services");
    expect(html).not.toContain("calendly.com");
    expect(html).toMatch(/<a[^>]*href="\/contact"[^>]*>Book a consultation/);
  });

  it("opens Calendly in a new tab once a link is set", async () => {
    const html = await renderWith(CALENDLY, "/services");
    expect(html).toContain(`href="${CALENDLY}" target="_blank" rel="noopener noreferrer"`);
    expect(html).toContain("opens Calendly in a new tab");
  });

  it("lists Calendly in the privacy policy only once it is used", async () => {
    expect(await renderWith("", "/privacy")).not.toContain("Calendly");
    expect(await renderWith(CALENDLY, "/privacy")).toContain("scheduling service (Calendly)");
  });

  it("offers booking on the Contact and Home pages once a link is set", async () => {
    expect(await renderWith(CALENDLY, "/contact")).toContain("Book a 30-minute call");
    expect(await renderWith(CALENDLY, "/")).toMatch(/You can also.*book a call/s);
  });
});
