import { useEffect, useState } from "react";
import useViewport from "./useViewport";

export default function useScrollIndicator() {
  const showScroll = useState({
    v: true,
    h: true,
  });

  const { breakpoint } = useViewport();
  const dir = breakpoint ? "h" : "v";

  useEffect(() => {
    if (breakpoint === undefined) return;

    const previouslyShown = localStorage.getItem(`shown-scroll-${dir}`);
    if (previouslyShown) {
      showScroll[1]({ ...showScroll[0], [dir]: false });
      return;
    }

    var handler = () => {};

    const _handler = (prevTop: number, prevLeft: number) => {
      const pictures = document.getElementById("pictures");

      if (!pictures) return;

      if (
        (breakpoint && pictures.scrollLeft !== prevLeft) ||
        (!breakpoint && pictures.scrollTop !== prevTop)
      ) {
        showScroll[1]({ ...showScroll[0], [dir]: false });
        localStorage.setItem(`shown-scroll-${dir}`, "true");
        window.removeEventListener("wheel", handler);
        window.removeEventListener("touchmove", handler);
      }
    };

    const pictures = document.getElementById("pictures");
    if (!pictures) return;
    const prevTop = pictures.scrollTop;
    const prevLeft = pictures.scrollLeft;

    handler = () => _handler(prevTop, prevLeft);

    window.addEventListener("wheel", handler);
    window.addEventListener("touchmove", handler);

    return () => {
      window.removeEventListener("wheel", handler);
      window.removeEventListener("touchmove", handler);
    };
  }, [breakpoint]);

  return showScroll[0][dir];
}
