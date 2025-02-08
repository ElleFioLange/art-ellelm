"use client";

import { Children, ReactElement, ReactNode, useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";

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

    // This ends up being undefined if the child is an image
    // but it is only used if it is not an image
    const { children: content } = child.props as {
      children:
        | string
        // <p> supports <a> <br> <b> <i> tags
        | (
            | string
            | { type: "br" }
            | { type: "a"; props: { href: string; children: string } }
            | { type: "b"; props: { children: string } }
            | { type: "i"; props: { children: string } }
          )[];
    };

    switch (child.type) {
      case "h1": {
        text[picIndex].title = content as string;
        break;
      }
      case "h2": {
        text[picIndex].subtitle = content as string;
        break;
      }
      case "p": {
        if (Array.isArray(content)) {
          // Parses the different possible children and converts each to a string form
          // then array reduces into one string
          text[picIndex].paragraph = content
            .map((item) => {
              if (typeof item === "string") return item;

              switch (item.type) {
                case "a":
                  return `<a href=${item.props.href}>${item.props.children}</a>`;
                case "b":
                  return `<b>${item.props.children}</b>`;
                case "i":
                  return `<i>${item.props.children}</i>`;
                case "br":
                  return "<br/>";
              }
            })
            .reduce((a, b) => a + b);
        } else text[picIndex].paragraph = content;
        break;
      }
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
