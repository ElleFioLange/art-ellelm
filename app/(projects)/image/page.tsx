"use client";

import Image from "next/image";
import useScrollIndicator from "@/utils/useScrollIndicator";
import { useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";
import { Keyframes } from "../layout";

// Keyframes needs to have the same amount of objects as pictures for scroll snapping to work properly
const keyframes: Keyframes = [
  {
    title: "Image",
    subtitle: "Mixed-media 2024",
    paragraph:
      'Image is about building an object, a sculpture. Something that can be held in one\'s hands and thrown into the sun. Where am I going? Where did I go? Where did I come from? Cotton Eye Joe. A wise man once said to me. Hark! Look yonder, there angels sing. And I said, "Shut the fuck up you tired old man and let me go to bed."',
  },
  { title: "Images are about telling old men to shut up" },
  {},
  {
    subtitle: "You have no clue if you're going to be okay until you try",
  },
  {},
  {},
  {
    title: "Now THIS is a capitalized word",
    paragraph:
      "Oh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.  that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I dOh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.  that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I dOh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.  that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I dOh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.  that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I dOh, capitalized words. The Capitol of my heart. I sure do wish that I could find a better way to transition this text, something smoother. I suspect that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I do not want to pay $99.  that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d that there would be something amazing if I were to use the TextSplit plugin, something nice and smooth and buttery and sleek. Alas, I d",
  },
];

// Underscore so as not to overlap with next/image
export default function Image_() {
  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  // Whether or not to show the scroll indication animation
  const showScroll = useScrollIndicator();

  const className =
    "object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4";

  return (
    <>
      <Text keyframes={keyframes} picturesRef={picturesRef} />
      <Pictures ref={picturesRef}>
        <Image
          id="image-0"
          src="/IMG_1444.png"
          alt="test"
          width={1000}
          height={1000}
          className={
            className +
            (showScroll
              ? " sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
              : "")
          }
        />
        <Image
          id="image-1"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
        <Image
          id="image-2"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
        <Image
          id="image-3"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
        <Image
          id="image-4"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
        <Image
          id="image-5"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
        <Image
          id="image-6"
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
          className={className}
        />
      </Pictures>
    </>
  );
}
