"use client";

import { Children, useEffect, useRef, useState } from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This retriggers useEffect on resize
  const reset = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  // Convert scroll to horizontal
  // Uses pictures classname to target breakpoint with tailwind
  useEffect(() => {
    // useRef is preferred but passing ref to generic children is a headache with Typescript
    const pictures = document.getElementById("pictures");

    const shownScroll = localStorage.getItem("shown-scroll");

    const breakpoint = 1024;
    const width = window.innerWidth;
    const invert = width < breakpoint;

    const scrollHandler = (e: WheelEvent) => {
      if (e.deltaY && pictures) {
        // Apply to horizontal scroll if past breakpoint
        if (invert) pictures.scrollLeft += e.deltaY + e.deltaX;
        else pictures.scrollTop += e.deltaY;

        if (!shownScroll) localStorage.setItem("shown-scroll", "true");
      }
    };

    window.addEventListener("wheel", scrollHandler);

    const resizeHandler = () => reset[1](!reset[0]);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("wheel", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [reset[0]]);

  return (
    <main
      id="main"
      ref={mainRef}
      className="min-h-0 min-w-0 w-full h-full overflow-visible mx-auto max-w-5xl grid gap-4 items-center lg:w-3/4 sm:grid-cols-[1fr_1px_1fr] sm:px-8 max-sm:grid-rows-[1fr_1px_1fr]] max-sm:py-4"
    >
      {children}
    </main>
  );
}
