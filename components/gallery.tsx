"use client";

import { Timeline } from "@/utils/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Children,
  cloneElement,
  createRef,
  ReactElement,
  ReactNode,
  RefObject,
  useMemo,
  useRef,
} from "react";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Gallery({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: mainRef });

  const numChildren = useMemo(
    () => Children.toArray(children).length,
    [children]
  );

  const timelines = useRef<RefObject<Timeline | null>[]>(
    // Using this clunky array creation because Children.toMap causes type issues
    Array(numChildren).fill(null)
  );

  useGSAP(() => {
    for (let i = 0; i < numChildren; i++) {
      timelines.current[i] = createRef<Timeline>();
      const tl = timelines.current[i];

      tl.current = gsap
        .timeline({
          paused: true,
          // Scroll trigger handles mobile case
          scrollTrigger: isMobile
            ? {
                trigger: `#container-${i}`,
                toggleActions: "play reverse play reverse",
                // markers: true,
                // Need to figure out the container scroller structure, should it be main or section?
                scroller: mainRef.current,
                start: "center 75%",
                end: "center 25%",
                snap: {
                  snapTo: [0.5],
                  duration: 1,
                  delay: 0.05,
                  ease: "elastic.inOut(0.85, 1.5)",
                  directional: false,
                },
              }
            : undefined,
        })
        .fromTo(
          `#image-${i}`,
          {
            scale: 1 / 20,
          },
          {
            scale: 1,
            duration: 1,
            ease: "elastic.inOut(1, 0.6)",
          }
        );
    }
  });

  const onMouseOver = contextSafe((id: number) => {
    console.log("over", id);

    timelines.current[id].current?.play();
  });

  const onMouseLeave = contextSafe((id: number) => {
    console.log("leave", id);

    timelines.current[id].current?.reverse();
  });

  // The onMouse callbacks are only called in desktop mode
  const renderChildren = () => {
    // Can probably add index based IDs here :thinking-emoji:
    return Children.map(children, (child, i) =>
      cloneElement(
        child as ReactElement<{
          onMouseOver: (e: MouseEvent) => void;
          onMouseLeave: (e: MouseEvent) => void;
        }>,
        {
          onMouseOver: () => onMouseOver(i),
          onMouseLeave: () => onMouseLeave(i),
        }
      )
    );
  };

  return (
    <main
      className="w-full sm:h-screen sm:p-16 sm:pb-0 sm:mb-16 max-sm:px-8 max-sm:overflow-auto max-sm:h-dvh"
      ref={mainRef}
      suppressHydrationWarning
    >
      <section
        // Because the interaction mouse/scroll is based on isMobile detection, layout needs to be as well
        className="flex sm:max-w-screen-xl sm:pb-16 sm:flex-wrap max-sm:flex-col max-sm:w-full justify-center [&>div]:*:scale-[0.05] items-center gap-4 flex-shrink-0"
      >
        {isMobile ? children : renderChildren()}
      </section>
    </main>
  );
}
