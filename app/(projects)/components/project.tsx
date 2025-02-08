"use client";

import { Children, ReactElement, ReactNode, useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";
import { renderToString } from "react-dom/server";

export type TextKeyframe = {
  title?: string;
  subtitle?: string;
  paragraph?: string;
};

export default function Project({ children }: { children: ReactNode }) {
  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  const text: TextKeyframe[] = [{}];
  // Used as a marker when inserting text keyframes to get them to line up with the pictures
  var picIndex = 0;

  const pictures: ReactElement[] = [];

  Children.forEach(children, (child) => {
    // So Typescript will be quiet
    if (
      !child ||
      typeof child !== "object" ||
      Symbol.iterator in child ||
      "then" in child
    )
      return;

    const { children: content } = child.props as {
      children: string | ReactElement;
    };
    const rendered = renderToString(content);

    switch (child.type) {
      case "h1":
        text[picIndex].title = rendered;
        break;
      case "h2":
        text[picIndex].subtitle = rendered;
        break;
      case "p":
        text[picIndex].paragraph = rendered;
        break;
      default: {
        text.push({});
        picIndex += 1;
        pictures.push(child);
      }
    }
  });

  // There will be an extra text keyframe at the end, so pop it off
  text.pop();

  return (
    <>
      <Text picturesRef={picturesRef} text={text} />
      <Pictures ref={picturesRef} pictures={pictures} />
    </>
  );
}
