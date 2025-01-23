"use client";

import Image from "next/image";
import useScrollIndicator from "../../utils/useScrollIndicator";
import { useGSAP } from "@gsap/react";
import { useCallback, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

const content: {
  keyframes: {
    step: number;
    title?: string;
    subtitle?: string;
    paragraph?: string;
  }[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
} = {
  keyframes: [
    { step: 1, title: "new aklsjdfla title 2 asdfjlk " },
    { step: 3, subtitle: "test subtitle 2 test asdl;fkaj" },
    {
      step: 4,
      title: "ajlws;dfja TITLE 3 asdlkf test test",
      paragraph:
        " magna  enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ],
  images: [
    {
      src: "/IMG_1444.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
    {
      src: "/platter.png",
      alt: "test",
      width: 1000,
      height: 1000,
    },
  ],
};

// Underscore so as not to overlap with next/image
export default function _Image() {
  const [showScroll] = useScrollIndicator();

  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  // Targets for GSAP
  const text = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const contentElements = {
    title,
    subtitle,
    paragraph,
  };

  type Timeline = ReturnType<typeof gsap.timeline>;

  // Manually instantiating the number of tl refs because it is way easier
  // than trying to create them dynamically
  const tl1 = useRef<Timeline>(null);
  const tl2 = useRef<Timeline>(null);
  const tl3 = useRef<Timeline>(null);
  const tls = [tl1, tl2, tl3];

  useGSAP(
    () => {
      const width = window.innerWidth;
      const vert = width >= 1024;
      const { keyframes } = content;

      for (let i = 0; i < keyframes.length; i++) {
        const tl = tls[i];
        const keyframe = keyframes[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${keyframes[i].step}`,
            start: vert ? "center bottom" : "center right",
            end: "center center",
            scrub: 1,
            snap: {
              snapTo: [0, 1],
              duration: { min: 0.2, max: 3 },
              delay: 0.2,
              ease: "none",
            },
          },
        });

        for (const [section, value] of Object.entries(keyframe)) {
          if (section === "step") continue;
          console.log(section);
          tl.current.to(
            // Disgusting type casting here sorry
            contentElements[section as keyof typeof contentElements].current,
            {
              text: {
                // Asserting because the step key-value has been combed out above
                value: value as string,
                speed: 0.5,
              },
              duration: 2,
            },
            0
          );
        }
      }
    },
    { scope: picturesRef }
  );

  return (
    <>
      <section ref={text} className="max-sm:mx-4">
        <h1 ref={title}>Title test 1 asdfjalkj a;lsdkjfl;al;sjkld fas</h1>
        <h2 ref={subtitle}>subtitle test 1 asdkl;fjkas;2323kl; al;sd fz</h2>
        <p className="font-cormorant" ref={paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </section>

      <div className="bg-fg sm:h-1/3 sm:w-px max-sm:w-2/3 max-sm:h-px place-self-center" />
      <section
        ref={picturesRef}
        // Using ID is necessary for managing scroll indication behavior
        id="pictures"
        className="relative min-h-0 max-h-full sm:overflow-y-auto sm:no-scrollbar sm:h-full sm:snap-y max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex max-sm:gap-8 max-sm:snap-x"
      >
        {content.images.map(({ src, alt, width, height }, index) => (
          <Image
            className={`object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4 ${
              showScroll && index === 0
                ? "sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
                : ""
            }`}
            id={`image-${index}`}
            key={index}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        ))}
        {/* <Image
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
        /> */}
      </section>
    </>
  );
}
