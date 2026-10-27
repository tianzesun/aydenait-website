// Writes a static HTML file per route after `vite build` (client) and `vite build --ssr` (server).
// Routes come from public/sitemap.xml, plus 404.html for unknown URLs (see netlify.toml).
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const sitemap = await fs.readFile(path.join(root, "public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/aydenait\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
if (routes.length === 0) throw new Error("No routes found in public/sitemap.xml");

// "/" -> index.html, "/services" -> services.html (Netlify serves /services from services.html)
const pages = routes.map((route) => [route, route === "/" ? "index.html" : `${route.slice(1)}.html`]);
pages.push(["/404", "404.html"]);

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*<!-- seo:end -->/;
const ROOT_DIV = '<div id="root"></div>';
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
  throw new Error("dist/index.html is missing the seo:start/seo:end markers or the empty root div");
}

for (const [route, file] of pages) {
  const { html, headTags } = render(route);
  const page = template.replace(SEO_BLOCK, headTags).replace(ROOT_DIV, `<div id="root">${html}</div>`);
  await fs.mkdir(path.dirname(path.join(dist, file)), { recursive: true });
  await fs.writeFile(path.join(dist, file), page);
  console.log(`prerendered ${route} -> dist/${file}`);
}

await fs.rm(ssrDir, { recursive: true, force: true });
