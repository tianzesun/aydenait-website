import { useEffect } from "react";

interface SEOProps {
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

const SEO = ({
  title = "AydenAIT Solution - AI-Driven DevOps Consulting",
  description = "Unlock reliability, automation, and security with intelligence engineered for real teams. Expert DevOps & AI Engineering Services.",
  keywords = "DevOps, AI, automation, cloud computing, CI/CD, Kubernetes, AWS, Azure, infrastructure as code, DevSecOps",
  ogType = "website",
  ogImage = "https://aydenait.com/og-image.jpg",
  ogUrl = "https://aydenait.com",
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, _attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        const [attrName, attrValue] = selector.replace(/[\[\]']/g, "").split("=");
        element.setAttribute(attrName, attrValue);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Update description
    updateMetaTag("meta[name='description']", "description", description);

    // Update keywords
    updateMetaTag("meta[name='keywords']", "keywords", keywords);

    // Open Graph tags
    updateMetaTag("meta[property='og:title']", "og:title", title);
    updateMetaTag("meta[property='og:description']", "og:description", description);
    updateMetaTag("meta[property='og:type']", "og:type", ogType);
    updateMetaTag("meta[property='og:image']", "og:image", ogImage);
    updateMetaTag("meta[property='og:url']", "og:url", ogUrl);
    updateMetaTag("meta[property='og:site_name']", "og:site_name", "AydenAIT Solution");

    // Twitter Card tags
    updateMetaTag("meta[name='twitter:card']", "twitter:card", twitterCard);
    updateMetaTag("meta[name='twitter:title']", "twitter:title", title);
    updateMetaTag("meta[name='twitter:description']", "twitter:description", description);
    updateMetaTag("meta[name='twitter:image']", "twitter:image", ogImage);

    // Robots meta tag
    if (noindex) {
      updateMetaTag("meta[name='robots']", "robots", "noindex,nofollow");
    } else {
      updateMetaTag("meta[name='robots']", "robots", "index,follow");
    }

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector("link[rel='canonical']");
      if (linkElement) {
        linkElement.setAttribute("href", canonical);
      } else {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        linkElement.setAttribute("href", canonical);
        document.head.appendChild(linkElement);
      }
    }

    // Additional SEO meta tags
    updateMetaTag("meta[name='author']", "author", "AydenAIT Solution");
    updateMetaTag("meta[name='viewport']", "viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("meta[http-equiv='X-UA-Compatible']", "X-UA-Compatible", "IE=edge");
  }, [title, description, keywords, ogType, ogImage, ogUrl, twitterCard, canonical, noindex]);

  return null;
};

export default SEO;
