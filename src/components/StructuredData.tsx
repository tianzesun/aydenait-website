import { useEffect, useId } from "react";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  // Unique per instance so multiple schemas on one page don't overwrite each other
  const scriptId = `structured-data-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (script) {
      script.textContent = JSON.stringify(data);
    } else {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data, scriptId]);

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
  "description": "AI solutions for education, civic services, finance and business: AI assistants, AI-assisted review, detection and risk analysis, workflow automation, analytics and AI integration",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@aydenait.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/aydenait"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AydenAIT Solution",
  "url": "https://aydenait.com"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AydenAIT Solution",
  "image": "https://aydenait.com/logo.svg",
  "description": "AI solutions for education, civic services, finance and business: AI assistants, AI-assisted review, detection and risk analysis, workflow automation, analytics and AI integration",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "email": "contact@aydenait.com",
  "url": "https://aydenait.com",
  "priceRange": "$$",
  "serviceType": ["AI Assistants & Chatbots", "AI-Assisted Review & Scoring", "Detection & Risk Analysis", "Planning & Workflow Automation", "Analytics & Decision Support", "AI Integration"]
};
