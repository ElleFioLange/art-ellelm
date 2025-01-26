"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const blacklist = ["/"];

export default function Nav() {
  const open = useState(false);
  const path = usePathname();

  if (blacklist.includes(path)) {
    if (open[0]) open[1](false);
    return null;
  }

  return (
    <nav
      className={`z-50 flex flex-col gap-4 items-end rounded-tl-lg bg-fg text-bg fixed bottom-0 right-0 overflow-hidden p-4 w-min ${
        open[0]
          ? "[&_a]:opacity-100 bg-opacity-100 pointer-events-auto"
          : "[&_a]:opacity-0 bg-opacity-0 pointer-events-none"
      } transition-all duration-200 ease-in-out [&_a]:transition-all [&_a]:duration-200 [&_a]:ease-in-out`}
      onMouseLeave={() => open[1](false)}
      onClick={() => {
        if (isMobile) open[1](false);
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/featured">Featured</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/design">Design</Link>
      <Link href="/sculpture">Sculpture</Link>
      <Link href="/photography">Photography</Link>
      <Link href="/painting">Painting</Link>
      <Image
        className={`cursor-pointer pointer-events-auto object-contain w-16 h-16 transition-all duration-200 ease-in-out ${
          open[0] ? "rotate-12 scale-110 drop-shadow-md" : "rotate-0"
        }`}
        src="/platter.png"
        width={1000}
        height={1000}
        alt="Hard drive platter"
        onMouseOver={() => {
          if (!isMobile) open[1](true);
        }}
        onClick={(e) => {
          e.stopPropagation();
          open[1](!open[0]);
        }}
      />
    </nav>
  );
}
