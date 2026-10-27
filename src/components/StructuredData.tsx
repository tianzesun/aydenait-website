import { useContext, useEffect, useId } from "react";
import { HeadContext } from "../lib/head";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  // Unique per instance so multiple schemas on one page don't overwrite each other.
  // useId matches between prerender and hydration, so the effect reuses the prerendered script.
  const scriptId = `structured-data-${useId().replace(/:/g, "")}`;
  const head = useContext(HeadContext);
  if (head) head.schemas.push({ id: scriptId, data });

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
