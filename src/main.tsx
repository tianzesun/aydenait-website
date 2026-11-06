import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
// Inter is self-hosted (no request to Google Fonts); the body font is set in index.css
import "@fontsource-variable/inter";
import "./index.css";

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* Vercel Web Analytics: cookieless page-view counts, loaded from our own domain (/_vercel/insights).
        Browser only, so it isn't part of the prerendered HTML. Described in the privacy policy. */}
    <Analytics />
  </React.StrictMode>
);

const root = document.getElementById("root")!;
// Production pages are prerendered (scripts/prerender.mjs); the dev server serves an empty root
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
