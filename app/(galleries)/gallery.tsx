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
  Suspense,
  useMemo,
  useRef,
} from "react";
import { isMobile } from "react-device-detect";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const containerClass =
  "flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-96 flex-grow";
export const imageClass = "object-contain image";

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

  // snapTL is separate so that scroll snap will be applied
  // throughout the entire scroll, not just within the
  // animation start and end triggers
  const snapTl = useRef<Timeline>(null);

  useGSAP(() => {
    snapTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-0",
        start: "center center",
        endTrigger: `#container-${numChildren - 1}`,
        end: "center center",
        scroller: mainRef.current,
        snap: {
          snapTo: 1 / (numChildren - 1),
          duration: 1,
          // delay: 0.05,
          ease: "elastic.inOut(0.85, 1.5)",
          directional: false,
        },
      },
    });

    for (let i = 0; i < numChildren; i++) {
      timelines.current[i] = createRef<Timeline>();
      const tl = timelines.current[i];

      const container = document.getElementById(`container-${i}`);
      const image = container?.children[0];

      tl.current = gsap
        .timeline({
          paused: true,
          // Scroll trigger handles mobile case
          scrollTrigger: isMobile
            ? {
                trigger: container,
                toggleActions: "play reverse play reverse",
                // markers: true,
                // Need to figure out the container scroller structure, should it be main or section?
                scroller: mainRef.current,
                start: "center 60%",
                end: "center 40%",
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
          // This is easily broken, but safe as long as structure is followed
          image || "",
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
    timelines.current[id].current?.play();
  });

  const onMouseLeave = contextSafe((id: number) =>
    timelines.current[id].current?.reverse()
  );

  const renderChildren = () => {
    return Children.map(children, (_child, i) => {
      const child = _child as ReactElement<{
        onMouseOver: () => void;
        onMouseLeave: () => void;
        className: string;
        id: string;
      }>;

      return cloneElement(child, {
        onMouseOver: isMobile ? undefined : () => onMouseOver(i),
        onMouseLeave: isMobile ? undefined : () => onMouseLeave(i),
        className: twMerge(
          child.props.className,
          "flex justify-center items-center flex-grow w-full h-dvh min-h-max [&>img]:scale-[0.05]"
        ),
        id: `container-${i}`,
      });
    });
  };

  return (
    <main
      className="w-full sm:h-screen sm:p-16 sm:pb-0 sm:mb-16 max-sm:px-8 max-sm:overflow-auto max-sm:h-dvh"
      ref={mainRef}
      suppressHydrationWarning
    >
      <section
        className={`flex justify-center items-center flex-shrink-0 gap-4 ${
          isMobile ? "flex-col w-full" : "flex-wrap max-w-screen-xl pb-16"
        }`}
      >
        {renderChildren()}
      </section>
    </main>
  );
}
