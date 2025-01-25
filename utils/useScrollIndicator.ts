import { useEffect, useState } from "react";

export default function useScrollIndicator() {
  const showScroll = useState(true);

  useEffect(() => {
    const shown = localStorage.getItem("shown-scroll");

    if (shown || !showScroll[0]) {
      showScroll[1](false);
      return;
    }

    const scrollHandler = () => {
      showScroll[1](false);
      localStorage.setItem("shown-scroll", "true");
    };

    window.addEventListener("wheel", scrollHandler);

    const pictures = document.getElementById("pictures");

    if (!pictures)
      return () => window.removeEventListener("resize", scrollHandler);

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

    return () => {
      window.removeEventListener("resize", scrollHandler);
      window.removeEventListener("touchmove", swipeHandler);
    };
  }, [showScroll[0]]);

  return showScroll[0];
}
