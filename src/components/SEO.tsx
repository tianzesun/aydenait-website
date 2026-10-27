import { useContext, useEffect } from "react";
import { HeadContext, resolveSEO, type SEOProps } from "../lib/head";

const SEO = (props: SEOProps) => {
  const seo = resolveSEO(props);
  const head = useContext(HeadContext);
  // Prerender only: hand the tags to entry-server, which writes them into the page's <head>
  if (head) head.seo = seo;

  const key = JSON.stringify(seo);
  useEffect(() => {
    const { title, canonical, meta } = JSON.parse(key) as typeof seo;
    document.title = title;

    for (const tag of meta) {
      let element = document.querySelector(`meta[${tag.attr}='${tag.key}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(tag.attr, tag.key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    }

    if (canonical) {
      let linkElement = document.querySelector("link[rel='canonical']");
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute("href", canonical);
    }
  }, [key]);

  return null;
};

export default SEO;
