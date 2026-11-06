// Renders a social share image (1200x630) for each product page into public/og/products/<slug>.png.
// Run by hand after changing a product's title, sector, stage or summary: `node scripts/og-images.mjs`
// Needs Node 22.18+ (to import the .ts data) and Chrome; set CHROME=/path/to/chrome if it isn't google-chrome.
// Not part of the build, because the build environment has no browser. Commit the generated images.
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { projects } from "../src/data/projects.ts";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "og", "products");
const chrome = process.env.CHROME ?? "google-chrome";
const font = pathToFileURL(path.join(root, "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")).href;
const logo = pathToFileURL(path.join(root, "public", "logo.svg")).href;

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Same look as public/og-image.png: dark background, cyan glow, logo and wordmark, rule with the page address
const page = (project) => `<!doctype html><html><head><style>
@font-face { font-family: Inter; src: url(${font}) format("woff2"); font-weight: 100 900; }
body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #0b1120; font-family: Inter; color: #fff; position: relative; }
.glow { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 80% at 50% 0%, rgba(34,211,238,.18), transparent 70%); }
.wrap { position: absolute; inset: 0; padding: 80px 90px; box-sizing: border-box; }
.brand { display: flex; align-items: center; gap: 20px; font-size: 32px; font-weight: 700; letter-spacing: -.01em; }
.label { display: flex; align-items: center; gap: 14px; margin-top: 52px; font-size: 26px; font-weight: 500; color: #67e8f9; }
.stage { font-size: 20px; font-weight: 600; padding: 4px 14px; border-radius: 999px; border: 1px solid rgba(252,211,77,.4); background: rgba(252,211,77,.1); color: #fef3c7; }
h1 { font-size: ${project.title.length > 24 ? 60 : 84}px; line-height: 1.05; font-weight: 700; letter-spacing: -.025em; margin: 18px 0 24px; text-wrap: balance; }
p { font-size: 30px; line-height: 1.35; color: #bfdbfe; margin: 0; max-width: 980px; }
.rule { position: absolute; left: 90px; right: 90px; bottom: 72px; border-top: 1px solid rgba(255,255,255,.12); padding-top: 22px; font-size: 22px; color: #93c5fd; }
</style></head><body><div class="glow"></div><div class="wrap">
<div class="brand"><img src="${logo}" width="64" height="64" alt="">AydenAIT Solution</div>
<div class="label">${escape(project.sector)}${project.stage ? ` <span class="stage">${escape(project.stage)}</span>` : ""}</div>
<h1>${escape(project.title)}</h1>
<p>${escape(project.summary)}</p>
<div class="rule">aydenait.com/products/${escape(project.productPage.slug)}</div>
</div></body></html>`;

await fs.mkdir(outDir, { recursive: true });
const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "og-"));
try {
  for (const project of projects.filter((p) => p.productPage)) {
    const html = path.join(tmp, `${project.productPage.slug}.html`);
    const out = path.join(outDir, `${project.productPage.slug}.png`);
    await fs.writeFile(html, page(project));
    const result = spawnSync(chrome, [
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
      "--window-size=1200,630", `--screenshot=${out}`, pathToFileURL(html).href,
    ], { stdio: "ignore" });
    if (result.status !== 0) throw new Error(`Chrome failed for ${project.productPage.slug} (set CHROME=/path/to/chrome)`);
    console.log(`wrote public/og/products/${project.productPage.slug}.png`);
  }
} finally {
  await fs.rm(tmp, { recursive: true, force: true });
}
