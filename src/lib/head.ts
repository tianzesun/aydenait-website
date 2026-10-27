import { createContext } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
}

export type MetaTag = { attr: "name" | "property"; key: string; content: string };

export type ResolvedSEO = { title: string; canonical?: string; meta: MetaTag[] };

// Page <head> data collected while prerendering. Null in the browser, where SEO and
// StructuredData update the live document instead.
export type HeadData = { seo?: ResolvedSEO; schemas: { id: string; data: object }[] };

export const HeadContext = createContext<HeadData | null>(null);

// Shared by the SEO component (browser) and the prerender step (build) so both emit the same tags.
export function resolveSEO({
  title = "AydenAIT - Custom AI Solutions, From Idea to Production",
  description = "AI solutions for education and beyond: grading, academic integrity and workload platforms, plus AI consulting and development for civic services, finance and business.",
  keywords = "custom AI solutions, AI development company Toronto, AI consulting, AI chatbot development, AI in education, AI automation",
  ogType = "website",
  ogImage = "https://aydenait.com/og-image.png",
  ogUrl = "https://aydenait.com",
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
}: SEOProps): ResolvedSEO {
  const name = (key: string, content: string): MetaTag => ({ attr: "name", key, content });
  const property = (key: string, content: string): MetaTag => ({ attr: "property", key, content });

  return {
    title,
    canonical,
    meta: [
      name("description", description),
      name("keywords", keywords),
      name("author", "AydenAIT Solution"),
      name("robots", noindex ? "noindex,nofollow" : "index,follow"),
      property("og:title", title),
      property("og:description", description),
      property("og:type", ogType),
      property("og:image", ogImage),
      property("og:url", ogUrl),
      property("og:site_name", "AydenAIT Solution"),
      name("twitter:card", twitterCard),
      name("twitter:title", title),
      name("twitter:description", description),
      name("twitter:image", ogImage),
    ],
  };
}
