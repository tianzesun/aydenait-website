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
