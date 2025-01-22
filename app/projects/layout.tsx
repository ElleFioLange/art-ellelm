"use client";

import { useEffect } from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const pictures = document.getElementById("pictures");
    const scrollHandler = (e: WheelEvent) => {
      if (e.deltaY) {
        (e.currentTarget as HTMLElement).scrollLeft += e.deltaY + e.deltaX;
        e.preventDefault();
      }
    };
    pictures?.addEventListener("wheel", scrollHandler);

    return () => {
      pictures?.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  return (
    <main className="w-full h-full *:no-scrollbar lg:p-8 lg:w-3/4 max-w-5xl mx-auto grid sm:grid-cols-2 max-sm:grid-rows-2 items-center">
      {children}
    </main>
  );
}
