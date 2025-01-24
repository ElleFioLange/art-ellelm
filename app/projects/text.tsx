import { createRef, RefObject, useRef } from "react";
import useViewport from "../utils/useViewport";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Keyframes } from "./layout";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Text({
  keyframes,
  picturesRef,
}: {
  keyframes: Keyframes;
  picturesRef: RefObject<HTMLDivElement | null>;
}) {
  // Tracked to recalculate GSAP if layout changes from vertical to horizontal
  const viewport = useViewport();

  // Targets for GSAP
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const contentElements = {
    title: titleRef,
    subtitle: subtitleRef,
    paragraph: paragraphRef,
  };

  type Timeline = ReturnType<typeof gsap.timeline>;

  const timelines = useRef<RefObject<Timeline>[]>(
    Array(keyframes.length - 1).fill(createRef<Timeline>())
  );

  useGSAP(
    () => {
      if (!viewport.w) return;
      const horizontal = viewport.w < 1024;

      for (let i = 0; i < timelines.current.length; i++) {
        const tl = timelines.current[i];
        const keyframe = keyframes[i + 1];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${keyframe.step}`,
            scroller: picturesRef.current,
            start: horizontal ? "center right" : "center bottom",
            horizontal,
            end: "center center",
            scrub: 0.25,
            snap: {
              snapTo: [0, 1],
              duration: { min: 0.2, max: 3 },
              delay: 0.2,
              ease: "none",
            },
          },
        });

        for (const [section, value] of Object.entries(keyframe)) {
          if (section === "step") continue;

          tl.current = tl.current.to(
            // Disgusting type casting here sorry
            contentElements[section as keyof typeof contentElements].current,
            {
              text: {
                // Asserting because the step key-value has been combed out above
                value: value as string,
                // speed: 0.5,
              },
              duration: 2,
            },
            0
          );
        }
      }
    },
    { scope: picturesRef, dependencies: [viewport] }
  );

  // Initial content to load in at 0 scroll
  const { title, subtitle, paragraph } = keyframes[0];

  return (
    <section className="max-sm:mx-4">
      <h1 ref={titleRef}>{title}</h1>
      <h2 ref={subtitleRef}>{subtitle}</h2>
      <p className="font-cormorant" ref={paragraphRef}>
        {paragraph}
      </p>
    </section>
  );
}
