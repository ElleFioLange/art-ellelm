"use client";

import { Children, ReactElement, useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";

// Underscore so as not to overlap with next/image
export default function Project({ content }: { content: ReactElement[] }) {
  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  // Using Children.map prevents key errors
  return (
    <>
      <Text picturesRef={picturesRef}>{Children.map(content, (c) => c)}</Text>
      <Pictures ref={picturesRef}>{Children.map(content, (c) => c)}</Pictures>
    </>
  );
}
