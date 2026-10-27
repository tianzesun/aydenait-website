import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Inter is self-hosted (no request to Google Fonts); the body font is set in index.css
import "@fontsource-variable/inter";
import "./index.css";

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById("root")!;
// Production pages are prerendered (scripts/prerender.mjs); the dev server serves an empty root
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
