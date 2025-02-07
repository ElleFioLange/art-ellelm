"use client";

import Image from "next/image";
import { useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";
import { Keyframes } from "../layout";

// There is probably a smoother way of doing this where I can add
// header and paragraph elements and they're automatically parsed
// as keyframes based on where they are in relation to the images
// (e.g.)
// Image Title Subtitle Paragraph
// Image
// Image Paragraph
// Image Subtitle
// Image
// Image
// Image Title
// Automatically parse the later text elements as keyframes and remove
// the elements from the DOM and store their data in an object akin
// to the keyframes object below

// Oooh could squish everything into layout if the above system is used too ^
// This is a lot of work for not much benefit though

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

  return (
    <>
      <Text keyframes={keyframes} picturesRef={picturesRef} />
      <Pictures ref={picturesRef}>
        <Image src="/IMG_1444.png" alt="test" width={1000} height={1000} />
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <h1>test</h1>
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/platter.png"
          alt="test"
          width={1000}
          height={1000}
        />
      </Pictures>
    </>
  );
}
