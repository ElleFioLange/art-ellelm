import { createRef, RefObject, useRef } from "react";
import useViewport from "../../utils/useViewport";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Keyframes } from "../layout";

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
    Array(keyframes.length).fill(createRef<Timeline>())
  );
  const snapTl = useRef<Timeline>(null);

  useGSAP(
    () => {
      if (!viewport.w) return;
      const horizontal = viewport.w < 640;

      snapTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#image-${keyframes.length - 1}`,
          scroller: picturesRef.current,
          start: horizontal
            ? -(viewport.w || 0) * (keyframes.length - 1)
            : -(viewport.h || 0) * (keyframes.length - 1),
          horizontal,
          end: "center center",
          snap: {
            snapTo: 0.5 / (keyframes.length - 1),
            duration: 1.5,
            delay: 0.25,
            ease: "elastic.inOut(0.85, 1.5)",
          },
        },
      });

      for (let i = 0; i < keyframes.length; i++) {
        const tl = timelines.current[i];
        const keyframe = keyframes[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${i}`,
            scroller: picturesRef.current,
            start: horizontal ? "left right" : "top bottom",
            horizontal,
            end: "center center",
            scrub: 0.25,
          },
        });

        for (const [section, text] of Object.entries(keyframe)) {
          if (section === "step") continue;
          console.log(i, section, text);

          // Disgusting type casting here sorry
          const element =
            contentElements[section as keyof typeof contentElements].current;

          tl.current.to(
            element,
            {
              text: text as string,
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
      <h1 ref={titleRef} className="leading-none">
        {title}
      </h1>
      <h2 ref={subtitleRef} className="leading-none">
        {subtitle}
      </h2>
      {/* Spacer */}
      <div className="w-full h-2" />

      <p className="font-cormorant" ref={paragraphRef}>
        {paragraph}
      </p>
    </section>
  );
}
