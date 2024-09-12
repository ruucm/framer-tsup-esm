import { useLayoutEffect, useState } from "react";

export function Tailwind() {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    // Check if Tailwind CSS script already exists
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      // Create a script element
      const script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script); // Append to head instead of body

      setLoaded(true);

      // Clean up the script when the component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  if (!loaded) return <>loading tailwind...</>;
  return <></>;
}
