"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

// Underscore so as not to overlap with next/image
export default function _Image() {
  const showScroll = useState(true);

  useEffect(() => {
    const shown = localStorage.getItem("shown-scroll");

    if (shown || !showScroll[0]) {
      showScroll[1](false);
      return;
    }

    const scrollHandler = () => {
      console.log("hi");
      showScroll[1](false);
      localStorage.setItem("shown-scroll", "true");
    };

    window.addEventListener("wheel", scrollHandler);

    const pictures = document.getElementById("pictures");

    if (!pictures)
      return () => window.removeEventListener("resize", scrollHandler);

    const _swipeHandler = (prevTop: number, prevLeft: number) => {
      console.log("hi");
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

  // console.log(isMobile || isTablet);

  return (
    <>
      <section className="max-sm:mx-4">
        <h1>Image</h1>
        <h2>Mirros and platters nblah alsdkf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </section>

      <div className="bg-fg sm:h-1/3 sm:w-px max-sm:w-2/3 max-sm:h-px place-self-center" />
      <section
        // Using ID instead of ref is necessary for managing scroll indication behavior
        id="pictures"
        className="relative min-h-0 max-h-full sm:overflow-y-auto sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex max-sm:gap-8"
      >
        <Image
          className={`object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4 ${
            showScroll[0]
              ? "sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
              : ""
          }`}
          src="/IMG_1444.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain"
          src="/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
      </section>
    </>
  );
}
