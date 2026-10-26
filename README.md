# AydenAIT Website

Marketing website for [AydenAIT Solution](https://aydenait.com), a Toronto-based AI company building solutions for education, civic services, finance and business.

Built with React 19, TypeScript, Vite and Tailwind CSS, and deployed on Netlify. The contact and assessment forms send email through a Netlify serverless function.

## Getting started

Requires Node.js 20.19 or later (needed by Vite 7).

```bash
npm ci            # install dependencies from the lockfile
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the built site locally
npm run lint      # run ESLint
```

`npm run dev` serves the pages only. To test the contact form locally, run the site with the [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`netlify dev`) so the function at `/.netlify/functions/contact` is available.

## Project structure

```
src/
  pages/            One file per route (Home, Services, About, Portfolio, Careers, FAQ, Contact, Privacy, Terms)
  components/       Navbar, Footer, SEO, StructuredData, FAQAccordion and animation helpers
  data/projects.ts  Project list shown on the Home and Portfolio pages
  lib/              Client-side helpers (sendContact posts to the contact function)
netlify/functions/
  contact.ts        Validates form submissions and sends them by email
public/             Static assets: logo, og-image.png, robots.txt, sitemap.xml
docs/nda/           NDA templates for client engagements (not part of the website)
```

Routes are defined in `src/App.tsx`. The Portfolio page lives in `src/pages/Clients.tsx` and is served at `/portfolio`.

## Common edits

- **Projects:** edit `src/data/projects.ts`. Each entry has a sector, an optional status badge, a short summary (used on Home), a full description and highlights (used on Portfolio), and an optional link. Only publish what the client has approved for public use.
- **Page text:** edit the matching file in `src/pages/`.
- **FAQ:** edit the `faqs` array in `src/components/FAQAccordion.tsx`.
- **Search and sharing:** each page sets its title and description through the `SEO` component. Site-wide defaults are in `index.html` and `src/components/SEO.tsx`, and organization details for search engines are in `src/components/StructuredData.tsx`. When you add or rename a page, update `public/sitemap.xml`.

## Contact form email

The Contact page and the Home page assessment form both post to `netlify/functions/contact.ts`. The function validates input, escapes it before building the email, and sends it to `ADMIN_EMAIL` using the first provider that is configured:

| Provider | Required variables | Optional |
|----------|--------------------|----------|
| SendGrid | `SENDGRID_API_KEY` | `SENDGRID_FROM_EMAIL` (must be a verified sender) |
| Mailgun  | `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` | |
| SMTP     | `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` | `SMTP_PORT` (default 587), `SMTP_FROM` |

`ADMIN_EMAIL` defaults to `contact@aydenait.com`.

Set these in **Netlify → Site configuration → Environment variables**, never in the repository. If no provider is configured, the form shows visitors an error with a reference ID instead of pretending the message was sent, and the same ID appears in the function logs.

## Deployment

Netlify builds every push to `main` using `netlify.toml`: it runs `npm run build`, publishes `dist/`, deploys the functions in `netlify/functions/`, and rewrites all paths to `index.html` so client-side routes work on refresh.
