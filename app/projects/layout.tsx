"use client";

import { useEffect, useMemo, useRef } from "react";
import useViewport from "@/utils/useViewport";
import { isMobile } from "react-device-detect";

export type Keyframes = {
  title?: string;
  subtitle?: string;
  paragraph?: string;
}[];

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { viewport, breakpoint } = useViewport();

  // Convert scroll to horizontal
  // Uses pictures classname to target breakpoint with tailwind
  useEffect(() => {
    if (!viewport.w) return;
    // useRef is preferred but passing ref to generic children is a headache with Typescript
    const pictures = document.getElementById("pictures");

    const shownScroll = localStorage.getItem("shown-scroll");

    const scrollHandler = (e: WheelEvent) => {
      if (e.deltaY && pictures) {
        // Apply to horizontal scroll if past breakpoint
        if (breakpoint && !isMobile) pictures.scrollLeft += e.deltaY + e.deltaX;
        else pictures.scrollTop += e.deltaY;

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
