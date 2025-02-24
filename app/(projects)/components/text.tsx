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
import useTheme from "@/utils/useTheme";

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
  // The below are used to trigger GSAP refresh
  const { breakpoint } = useViewport();
  const theme = useTheme();

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

  useGSAP(
    () => {
      if (breakpoint === undefined) return;
      const style = getComputedStyle(document.documentElement);
      const fg = `rgb(${style.getPropertyValue("--fg")})`;
      const accent = `rgb(${style.getPropertyValue("--accent-bg")})`;

      // This can probably be simplified to a single timeline
      for (let i = 0; i < text.length; i++) {
        timelines.current[i] = createRef<Timeline>();
        const tl = timelines.current[i];
        const keyframe = text[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${i}`,
            scroller: picturesRef.current,
            start: breakpoint ? "left right" : "top bottom",
            horizontal: breakpoint,
            end: "center center",
            scrub: 0,
            // markers: true,
          },
        });

        for (const [section, text] of Object.entries(keyframe)) {
          if (section === "step") continue;

          // Disgusting type casting here sorry
          const element =
            contentElements[section as keyof typeof contentElements].current;

          tl.current
            .to(
              element,
              {
                color: accent,
                duration: 1,
              },
              0
            )
            .to(
              element,
              {
                text,
                duration: 2,
              },
              0
            )
            .to(element, { color: fg, duration: 1 }, 1);
        }
      }
    },
    { scope: picturesRef, dependencies: [breakpoint, theme] }
  );

  return (
    <>
      <section className="sm:py-8 max-sm:mx-4 overflow-auto max-h-full">
        <h1 ref={titleRef} className="leading-none" />
        <h2 ref={subtitleRef} className="leading-none" />
        <div className="w-full h-2" />
        <p ref={paragraphRef} />
      </section>
    </>
  );
}
