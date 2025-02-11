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

  // snapTL is separate so that scroll will snap to every
  // item instead of just items with text
  const snapTl = useRef<Timeline>(null);

  useGSAP(
    () => {
      if (breakpoint === undefined) return;
      // onSnapComplete add a little animation or sound? Nintendo Switch sound / something satisfying?
      snapTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#image-0",
          start: "center center",
          endTrigger: `#image-${text.length - 1}`,
          end: "center center",
          // markers: true,
          scroller: picturesRef.current,
          horizontal: breakpoint,
          snap: {
            snapTo: 1 / (text.length - 1),
            duration: 1,
            delay: 0.05,
            ease: "elastic.inOut(0.85, 1.5)",
            directional: false,
          },
        },
      });

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
            start: breakpoint ? "left 95%" : "top 95%",
            horizontal: breakpoint,
            end: "center 55%",
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
