"use client";

import { Timeline } from "@/utils/types";
import useViewport from "@/utils/useViewport";
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
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Gallery({ children }: { children: ReactNode }) {
  // Controls showing and hiding the info when an item is clicked
  // Set to the index of the item to show info or null to not show any info
  const info = useState<number | null>(null);

  const mainRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: mainRef });

  const { breakpoint } = useViewport();

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

  // There's probably a way to do everything in a single timeline
  useGSAP(
    () => {
      // Gives some odd issues when resizing across sm breakpoint
      snapTl.current = breakpoint
        ? gsap.timeline({
            scrollTrigger: {
              trigger: "#image-0",
              start: "center center",
              // markers: true,
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
          })
        : null;

      for (let i = 0; i < numChildren; i++) {
        timelines.current[i] = createRef<Timeline>();
        const tl = timelines.current[i];

        const container = document.getElementById(`container-${i}`);
        const image = container?.children[0];

        tl.current = gsap
          .timeline({
            paused: true,
            // Scroll trigger handles mobile case
            scrollTrigger: breakpoint
              ? {
                  trigger: container,
                  toggleActions: "play reverse play reverse",
                  // markers: true,
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
    },
    { revertOnUpdate: true, dependencies: [breakpoint] }
  );

  const onMouseOver = contextSafe((id: number) => {
    timelines.current[id].current?.play();
  });

  const onMouseLeave = contextSafe((id: number) => {
    timelines.current[id].current?.reverse();
    if (info[0] === id) info[1](null);
  });

  const onClick = (id: number) => {
    const tl = timelines.current[id];
    console.log(tl.current?.progress());
    console.log(tl.current?.isActive());
    const show =
      info[0] !== id && !tl.current?.isActive() && tl.current?.progress() !== 0;
    info[1](show ? id : null);
  };

  const renderChildren = () => {
    const numChildren = Children.toArray(children).length;
    return Children.map(children, (_child, i) => {
      const child = _child as ReactElement<{
        onMouseOver: () => void;
        onMouseLeave: () => void;
        onClick: () => void;
        className: string;
        id: string;
      }>;

      return cloneElement(child, {
        onMouseOver: () => onMouseOver(i),
        onMouseLeave: () => onMouseLeave(i),
        onClick: () => onClick(i),
        className: twMerge(
          child.props.className,
          // Abstracted this to its own class in css.css because it contains a lot of
          // secondary styling for child elements
          "gallery-container",
          info[0] === i
            ? "[&>div]:opacity-100 cursor-auto"
            : "[&>div]:opacity-0"
        ),
        id: `container-${i}`,
      });
    });
  };

  return (
    <main
      className="w-full overflow-auto h-dvh sm:p-16 max-sm:px-8"
      ref={mainRef}
    >
      <section className="flex justify-center items-center flex-shrink-0 gap-4 sm:flex-wrap sm:max-w-screen-xl max-sm:flex-col max-sm:w-full">
        {renderChildren()}
      </section>
    </main>
  );
}
