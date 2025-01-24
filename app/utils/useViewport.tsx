import { useEffect, useState } from "react";

export default function useViewport() {
  const viewport = useState<{ w?: number; h?: number }>({});

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    viewport[1]({ w, h });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      viewport[1]({ w, h });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport[0];
}
