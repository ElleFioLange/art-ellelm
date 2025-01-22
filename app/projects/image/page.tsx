"use client";

import Image from "next/image";
import useScrollIndicator from "../utils/useScrollIndicator";

// Underscore so as not to overlap with next/image
export default function _Image() {
  const [showScroll] = useScrollIndicator();

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
            showScroll
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
