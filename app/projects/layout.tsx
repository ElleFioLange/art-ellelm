"use client";

import { useEffect, useMemo, useRef } from "react";
import useViewport from "../utils/useViewport";

export type Keyframes = {
  title?: string;
  subtitle?: string;
  paragraph?: string;
}[];

export type Pictures = {
  src: string;
  alt: string;
  width: number;
  height: number;
}[];

export type Content = {
  keyframes: Keyframes;
  pictures: Pictures;
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  const viewport = useViewport();
  // Boolean for whether viewport is under small breakpoint (640px)
  const breakpoint = useMemo(
    () => (viewport.w ? viewport.w < 640 : false),
    [viewport]
  );

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
        if (breakpoint) pictures.scrollLeft += e.deltaY + e.deltaX;
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
      ref={mainRef}
      className="min-h-0 min-w-0 w-full h-full overflow-visible mx-auto max-w-5xl grid gap-4 items-center lg:w-3/4 sm:grid-cols-[1fr_1px_1fr] sm:px-8 max-sm:grid-rows-[1fr_1px_1fr]] max-sm:py-4"
    >
      {children}
    </main>
  );
}
