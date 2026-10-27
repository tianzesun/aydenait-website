# AydenAIT Website

Marketing website for [AydenAIT Solution](https://aydenait.com), a Toronto-based AI company building solutions for education, civic services, finance and business.

Built with React 19, TypeScript, Vite and Tailwind CSS, and deployed on Vercel. The contact and assessment forms send email through a Vercel serverless function.

## Getting started

Requires Node.js 20.19 or later (needed by Vite 7).

```bash
npm ci            # install dependencies from the lockfile
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the built site locally
npm run lint      # run ESLint
npm test          # run the tests (tests/)
```

`npm run dev` serves the pages only. To test the contact form locally, run the site with the [Vercel CLI](https://vercel.com/docs/cli) (`vercel dev`) so the function at `/api/contact` is available.

## Project structure

```
src/
  pages/            One file per route (Home, Services, About, Products, ProductPage, Careers, FAQ, Contact, Privacy, Terms)
  components/       Navbar, Footer, SEO, StructuredData, FAQAccordion and animation helpers
  data/projects.ts  Product list shown on the Home and Products pages
  lib/              Client-side helpers (sendContact posts to the contact function)
api/
  contact.ts        Validates form submissions and sends them by email
public/             Static assets: logo, og-image.png, robots.txt, sitemap.xml
docs/nda/           NDA templates for client engagements (not part of the website)
```

Routes are defined in `src/App.tsx`. The product list lives in `src/pages/Products.tsx` (served at `/products`), and each product's page is rendered by `src/pages/ProductPage.tsx` at `/products/<slug>`. Old `/portfolio` URLs redirect there (see `vercel.json`).

## Common edits

- **Products:** edit `src/data/projects.ts`. Each entry has a sector, a short summary (used on Home), a full description and highlights (used on Products), an optional deployment badge and screenshots, and an optional `productPage` for its detail page. When you add a product page, add its URL to `public/sitemap.xml`. Only publish what has been approved for public use.
- **Services:** edit `src/data/solutions.ts`. Each service has a summary and proof line (Home, Services and footer) and use cases for its page at `/services/<slug>`, rendered by `src/pages/ServicePage.tsx`. `relatedProduct` links the page to a product. When you add a service, add its URL to `public/sitemap.xml`.
- **Page text:** edit the matching file in `src/pages/`.
- **FAQ:** edit the `faqs` array in `src/components/FAQAccordion.tsx`.
- **Search and sharing:** each page sets its title and description through the `SEO` component. Site-wide defaults are in `index.html` and `src/components/SEO.tsx`, and organization details for search engines are in `src/components/StructuredData.tsx`. When you add or rename a page, update `public/sitemap.xml`.

## Contact form email

The Contact page and the Home page assessment section use the same form component (`src/components/ContactForm.tsx`) and post to `/api/contact`, served by `api/contact.ts`. The email subject says which form was used. The function validates input, escapes it before building the email, and sends it to `ADMIN_EMAIL` using the first provider that is configured:

| Provider | Required variables | Optional |
|----------|--------------------|----------|
| SendGrid | `SENDGRID_API_KEY` | `SENDGRID_FROM_EMAIL` (must be a verified sender) |
| Mailgun  | `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` | |
| SMTP     | `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` | `SMTP_PORT` (default 587), `SMTP_FROM` |

`ADMIN_EMAIL` defaults to `contact@aydenait.com`.

Set these in **Vercel → Project → Settings → Environment Variables**, never in the repository. If no provider is configured, the form shows visitors an error with a reference ID instead of pretending the message was sent, and the same ID appears in the function logs.

Spam protection: the form has a hidden honeypot field (`website`), and the function silently drops submissions that fill it in. Rate limiting is a Vercel Firewall rule (Project → Firewall → Configure → New Rule): requests whose path is `/api/contact`, rate-limited to 5 per 60 seconds per IP, answered with 429. Vercel functions don't share state between calls, so the limit can't live in the function itself.

## Tests

`npm test` runs the Vitest suite in `tests/`:

- `site.test.tsx` renders every page in `public/sitemap.xml` and checks it has a title, canonical URL and heading, that unknown URLs get the 404 page, and that every product and service page is in the sitemap.
- `contact.test.ts` checks the contact function's validation, honeypot, HTML escaping and error responses, with the email provider mocked.

GitHub Actions (`.github/workflows/ci.yml`) runs lint, tests, the build and `npm audit` on every push and pull request, and Vercel runs the tests before every deploy. A failing test stops the deploy and the previous version stays live.

## Deployment

Vercel builds every push to `main` using `vercel.json`: it runs `npm run build`, publishes `dist/`, and deploys the functions in `api/`. Every route is prerendered to its own HTML file (`scripts/prerender.mjs`); `cleanUrls` serves `/services` from `services.html`, and any other path gets `404.html`.

`vercel.json` also sets the security headers. Before loading any new third-party script, font, image or API, add its source to the Content-Security-Policy there.
