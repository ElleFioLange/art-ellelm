"use client";

import Image from "next/image";
import useScrollIndicator from "../../utils/useScrollIndicator";
import { useGSAP } from "@gsap/react";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useViewport from "@/app/utils/useViewport";

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
    { step: 1, title: "Images are about telling old men to shut up" },
    {
      step: 3,
      subtitle: "You have no clue if you're going to be okay until you try",
    },
    {
      step: 4,
      title: "Now THIS is a capitalized word",
      paragraph:
        "Oh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.",
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
  // Tracked to recalculate GSAP if layout changes from vertical to horizontal
  const [viewport] = useViewport();
  // Whether or not to show the scroll indication animation
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
      if (!viewport.w) return;
      const horizontal = viewport.w < 1024;
      const { keyframes } = content;

      for (let i = 0; i < keyframes.length; i++) {
        const tl = tls[i];
        const keyframe = keyframes[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${keyframes[i].step}`,
            scroller: picturesRef.current,
            start: horizontal ? "center right" : "center bottom",
            horizontal,
            end: "center center",
            scrub: 0.25,
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

          tl.current = tl.current.to(
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
        <h1 ref={title}>Image</h1>
        <h2 ref={subtitle}>Mixed-media 2024</h2>
        <p className="font-cormorant" ref={paragraph}>
          Image is about building an object, a sculpture. Something that can be
          held in one's hands and thrown into the sun. Where am I going? Where
          did I go? Where did I come from? Cotton Eye Joe. A wise man once said
          to me. Hark! Look yonder, there angels sing. And I said, "Shut the
          fuck up you tired old man and let me go to bed."
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
            id={`image-${index}`}
            className={`object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4 ${
              showScroll && index === 0
                ? "sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
                : ""
            }`}
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
          ref={test}
          className="w-full sm:h-full max-sm:max-h-full max-sm:px-4 object-contain image-1"
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
