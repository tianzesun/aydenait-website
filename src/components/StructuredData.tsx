import { useEffect } from "react";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    const scriptId = "structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (script) {
      script.innerHTML = JSON.stringify(data);
    } else {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(data);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default StructuredData;

// Predefined structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AydenAIT Solution",
  "url": "https://aydenait.com",
  "logo": "https://aydenait.com/logo.svg",
  "description": "AI-Driven DevOps Consulting - Expert DevOps & AI Engineering Services",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Lane",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-890",
    "contactType": "customer service",
    "email": "hello@aydenait.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/aydenait",
    "https://twitter.com/aydenait"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AydenAIT Solution",
  "url": "https://aydenait.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aydenait.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AydenAIT Solution",
  "image": "https://aydenait.com/logo.svg",
  "description": "Expert DevOps & AI Engineering Services including cloud migration, CI/CD automation, Kubernetes, and DevSecOps",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Lane",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "telephone": "+1-234-567-890",
  "url": "https://aydenait.com",
  "priceRange": "$$",
  "serviceType": ["DevOps Consulting", "AI Engineering", "Cloud Migration", "CI/CD Automation", "Kubernetes Management", "DevSecOps"]
};
