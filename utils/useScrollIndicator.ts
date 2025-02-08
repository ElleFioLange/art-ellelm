import { useEffect, useState } from "react";
import useViewport from "./useViewport";

export default function useScrollIndicator() {
  const showScroll = useState(true);
  const { breakpoint } = useViewport();

  useEffect(() => {
    const shown = localStorage.getItem(
      `shown-scroll-${breakpoint ? "horizontal" : "vertical"}`
    );

    if (shown || !showScroll[0]) {
      showScroll[1](false);
      return;
    }

    const pictures = document.getElementById("pictures");
    if (!pictures) return;

    const scrollHandler = () => {
      showScroll[1](false);
      localStorage.setItem(
        `shown-scroll-${breakpoint ? "horizontal" : "vertical"}`,
        "true"
      );
    };

    if (breakpoint) {
      const _swipeHandler = (prevTop: number, prevLeft: number) => {
        const pictures = document.getElementById("pictures");

        if (!pictures) return;

        if (pictures.scrollTop !== prevTop || pictures.scrollLeft !== prevLeft)
          scrollHandler();
      };

      const prevTop = pictures.scrollTop;
      const prevLeft = pictures.scrollLeft;

      // Using a factory here to check against previous value
      const swipeHandler = () => _swipeHandler(prevTop, prevLeft);

      window.addEventListener("touchmove", swipeHandler);

      return () => window.removeEventListener("touchmove", swipeHandler);
    } else {
      window.addEventListener("wheel", scrollHandler);

      return () => window.removeEventListener("resize", scrollHandler);
    }
  }, [showScroll[0], breakpoint]);

  return showScroll[0];
}
