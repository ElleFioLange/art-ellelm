"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Children,
  cloneElement,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useRef,
} from "react";

gsap.registerPlugin(useGSAP);

export default function Gallery({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP();

  // This is a poorly structured function that makes a lot of
  // potentially breaking assumptions, but as long as those
  // assumptions are followed it will work fine
  const getTarget = (e: MouseEvent) => {
    // Disgusting type casting sorry
    const target = e.target as unknown as { children: ReactElement[] };

    // If the target has a child it is the container, otherwise it is the image
    return target.children.length ? target.children[0] : target;
  };

  const onMouseOver = contextSafe((e: MouseEvent) => {
    const target = getTarget(e);
    // console.log("hi");

    gsap.to(target, {
      scale: 1,
      duration: 0.5,
    });
  });

  const onMouseLeave = contextSafe((e: MouseEvent) => {
    const target = getTarget(e);

    gsap.to(target, {
      scale: 0.05,
      duration: 0.5,
    });
  });

  const renderChildren = () => {
    return Children.map(children, (child) =>
      cloneElement(
        child as ReactElement<{
          onMouseOver: (e: MouseEvent) => void;
          onMouseLeave: (e: MouseEvent) => void;
        }>,
        {
          onMouseOver,
          onMouseLeave,
        }
      )
    );
  };

  return (
    <main
      className="w-full h-dvh flex flex-col justify-center items-center sm:p-16 max-sm:p-8 max-sm:overflow-auto"
      suppressHydrationWarning
    >
      <div className="sm:hidden h-dvh w-full grid place-items-center flex-shrink-0">
        V
      </div>
      <section
        ref={ref}
        className="max-h-full sm:w-[90vw] sm:max-w-screen-xl flex sm:flex-wrap max-sm:flex-col max-sm:w-full justify-center items-center gap-4 overflow-auto [&_div>*]:scale-[0.05] flex-shrink-0"
      >
        {renderChildren()}
      </section>
    </main>
  );
}
