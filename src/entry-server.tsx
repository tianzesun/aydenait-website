// Build-time renderer used by scripts/prerender.mjs. Not part of the browser bundle.
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { HeadContext, type HeadData } from "./lib/head";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Keep "</script>" inside JSON from closing the tag early
const escapeJson = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

export function render(url: string) {
  const head: HeadData = { schemas: [] };
  const html = renderToString(
    <React.StrictMode>
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </React.StrictMode>
  );

  if (!head.seo) throw new Error(`No <SEO> rendered for ${url}`);
  const { title, canonical, meta } = head.seo;
  const headTags = [
    `<title>${escapeAttr(title)}</title>`,
    ...meta.map((tag) => `<meta ${tag.attr}="${tag.key}" content="${escapeAttr(tag.content)}" />`),
    ...(canonical ? [`<link rel="canonical" href="${escapeAttr(canonical)}" />`] : []),
    ...head.schemas.map((s) => `<script type="application/ld+json" id="${escapeAttr(s.id)}">${escapeJson(s.data)}</script>`),
  ].join("\n    ");

  return { html, headTags };
}
