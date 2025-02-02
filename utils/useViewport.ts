import { useEffect, useState } from "react";

export default function useViewport() {
  const viewport = useState<{ w?: number; h?: number }>({});
  const breakpoint = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      viewport[1]({ w, h });
      breakpoint[1](w < 640);
    };

    // Gets initial values
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { viewport: viewport[0], breakpoint: breakpoint[0] };
}
