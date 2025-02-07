"use client";

import { ReactNode, useEffect } from "react";
import useViewport from "@/utils/useViewport";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  const { breakpoint } = useViewport();

  // Allows scrolling from anywhere on the page instead of just the narrow grid column
  useEffect(() => {
    if (breakpoint !== true) return;
    // useRef is preferred but passing ref to generic children is not possible
    const pictures = document.getElementById("pictures");

    const shownScroll = localStorage.getItem("shown-scroll");

    const scrollHandler = (e: WheelEvent) => {
      if (e.deltaY && pictures) {
        pictures.scrollTop += e.deltaY;

        if (!shownScroll) localStorage.setItem("shown-scroll", "true");
      }
    };

    window.addEventListener("wheel", scrollHandler);

    return () => {
      window.removeEventListener("wheel", scrollHandler);
    };
  }, [breakpoint]);

  return (
    <main
      id="main"
      className="min-h-0 min-w-0 w-full h-full max-h-dvh overflow-hidden mx-auto max-w-screen-lg grid gap-4 items-center lg:w-3/4 sm:grid-cols-[minmax(auto,1fr),1px,minmax(auto,1fr)] sm:px-8 max-sm:grid-rows-[minmax(auto,40%),1px,1fr] max-sm:py-4"
    >
      {children}
    </main>
  );
}
