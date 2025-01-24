"use client";

import Image from "next/image";
import useScrollIndicator from "../../utils/useScrollIndicator";
import { useRef } from "react";
import Text from "../text";
import { Content } from "../layout";

const content: Content = {
  keyframes: [
    {
      step: 0,
      title: "Image",
      subtitle: "Mixed-media 2024",
      paragraph:
        'Image is about building an object, a sculpture. Something that can be held in one\'s hands and thrown into the sun. Where am I going? Where did I go? Where did I come from? Cotton Eye Joe. A wise man once said to me. Hark! Look yonder, there angels sing. And I said, "Shut the fuck up you tired old man and let me go to bed."',
    },
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
  pictures: [
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
  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  // Whether or not to show the scroll indication animation
  const showScroll = useScrollIndicator();

  return (
    <>
      <Text keyframes={content.keyframes} picturesRef={picturesRef} />

      <div className="bg-fg sm:h-1/3 sm:w-px max-sm:w-2/3 max-sm:h-px place-self-center" />
      <section
        ref={picturesRef}
        // Using ID is necessary for managing scroll indication behavior
        id="pictures"
        className="relative min-h-0 max-h-full sm:overflow-y-auto sm:no-scrollbar sm:h-full sm:snap-y max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex max-sm:gap-8 max-sm:snap-x"
      >
        {content.pictures.map(({ src, alt, width, height }, index) => (
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
      </section>
    </>
  );
}
