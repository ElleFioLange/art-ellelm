import {
  Children,
  createRef,
  ReactNode,
  RefObject,
  useMemo,
  useRef,
} from "react";
import useViewport from "@/utils/useViewport";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Timeline } from "@/utils/types";
import { TextKeyframe } from "./project";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Text({
  picturesRef,
  text,
}: {
  picturesRef: RefObject<HTMLDivElement | null>;
  text: TextKeyframe[];
}) {
  // Tracked to recalculate GSAP if layout changes from vertical to horizontal
  const { viewport } = useViewport();

  // Targets for GSAP
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const contentElements = {
    title: titleRef,
    subtitle: subtitleRef,
    paragraph: paragraphRef,
  };

  const timelines = useRef<RefObject<Timeline | null>[]>(
    Array(text.length).fill(null)
  );

  // snapTL is separate so that scroll will snap to every
  // item instead of just items with text
  const snapTl = useRef<Timeline>(null);

  useGSAP(
    () => {
      if (!viewport.w) return;
      const horizontal = viewport.w < 640;

      // onSnapComplete add a little animation or sound? Nintendo Switch sound / something satisfying?
      snapTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#image-0",
          start: "center center",
          endTrigger: `#image-${text.length - 1}`,
          end: "center center",
          scroller: picturesRef.current,
          horizontal,
          snap: {
            snapTo: 1 / (text.length - 1),
            duration: 1,
            delay: 0.05,
            ease: "elastic.inOut(0.85, 1.5)",
            directional: false,
          },
        },
      });

      // This can probably be simplified to a single timeline
      for (let i = 0; i < text.length; i++) {
        timelines.current[i] = createRef<Timeline>();
        const tl = timelines.current[i];
        const keyframe = text[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${i}`,
            scroller: picturesRef.current,
            start: horizontal ? "left right" : "top bottom",
            horizontal,
            end: "center center",
            scrub: 0,
          },
        });

        for (const [section, text] of Object.entries(keyframe)) {
          if (section === "step") continue;

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

  const { title, subtitle, paragraph } = text[0];

  return (
    <>
      <section
        // Added this to get rid of a react "key missing" error
        // I have no idea why this is necessary?
        // React is going to send me to the psych ward
        key="text"
        className="sm:py-8 max-sm:mx-4 overflow-auto max-h-full"
      >
        <h1 ref={titleRef} className="leading-none">
          {title}
        </h1>
        <h2 ref={subtitleRef} className="leading-none">
          {subtitle}
        </h2>
        <div className="w-full h-2" />
        <p
          dangerouslySetInnerHTML={{ __html: paragraph! }}
          ref={paragraphRef}
        ></p>
      </section>
      <div className="sm:w-px sm:h-3/4 sm:max-h-[40rem] max-sm:w-3/4 max-sm:h-px bg-fg opacity-20 place-self-center" />
    </>
  );
}
