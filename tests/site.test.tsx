import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { render } from "../src/entry-server";
import { projects } from "../src/data/projects";
import { solutions } from "../src/data/solutions";

// Every route is prerendered from the sitemap, so the sitemap is the list of pages that must work
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/aydenait\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");

const titleOf = (headTags: string) => headTags.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";

describe("pages", () => {
  it.each(routes)("%s renders with its own title and canonical URL", (route) => {
    const { html, headTags } = render(route);
    expect(titleOf(headTags)).not.toMatch(/404/);
    expect(html).toContain("<h1");
    const canonical = route === "/" ? "https://aydenait.com" : `https://aydenait.com${route}`;
    expect(headTags).toMatch(new RegExp(`<link rel="canonical" href="${canonical}/?"`));
  });

  it("gives every page a different title", () => {
    const titles = routes.map((route) => titleOf(render(route).headTags));
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(["/nope", "/products/nope", "/services/nope"])("%s shows the 404 page", (route) => {
    expect(titleOf(render(route).headTags)).toMatch(/404/);
  });
});

describe("content data", () => {
  it("lists every product and service page in the sitemap", () => {
    const expected = [
      ...projects.flatMap((p) => (p.productPage ? [`/products/${p.productPage.slug}`] : [])),
      ...solutions.map((s) => `/services/${s.slug}`),
    ];
    for (const route of expected) expect(routes).toContain(route);
  });

  it("has no duplicate sitemap entries", () => {
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("links each service only to products that exist", () => {
    const productSlugs = projects.map((p) => p.productPage?.slug);
    for (const s of solutions) {
      if (s.relatedProduct) expect(productSlugs).toContain(s.relatedProduct);
    }
  });
});

describe("error fallback", () => {
  it("shows a generic message with a reference ID instead of a blank page", async () => {
    const { renderToString } = await import("react-dom/server");
    const { default: ErrorBoundary } = await import("../src/components/ErrorBoundary");
    const Broken = () => {
      throw new Error("internal detail");
    };
    // renderToString doesn't run error boundaries, so check the fallback state directly
    const boundary = new ErrorBoundary({ children: <Broken /> });
    boundary.state = ErrorBoundary.getDerivedStateFromError();
    const html = renderToString(<>{boundary.render()}</>);
    expect(html).toContain("Something went wrong");
    expect(html).toMatch(/Reference: <!-- -->[0-9a-z-]+/);
    expect(html).not.toContain("internal detail");
  });
});
