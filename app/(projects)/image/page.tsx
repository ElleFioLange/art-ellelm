"use client";

import Image from "next/image";
import { useRef } from "react";
import Text from "../components/text";
import Pictures from "../components/pictures";

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

// I am insane and decided to implement the above system ^
// (sadly can't get it to work with layout, but nevertheless it's more aesthetically pleasing)

// Underscore so as not to overlap with next/image
export default function Image_() {
  // GSAP scope
  const picturesRef = useRef<HTMLDivElement>(null);

  const content = [
    <h1>test</h1>,
    <h2>subtitle</h2>,
    <p>paragraph</p>,
    <Image
      src="/IMG_1444.png"
      alt="test"
      width={1000}
      height={1000}
      key="test key"
    />,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
    <h1>title 2</h1>,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
    <p>
      paragraph 2 aslkdjfa l;sdjf al;kwejf;laksdjfopaisd jl;fa jefo;aijsd;lfkaj
      w;elfawe
    </p>,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
    <Image src="/assets/platter.png" alt="test" width={1000} height={1000} />,
  ];

  return (
    <>
      <Text
        // Added this to get rid of a react "key missing" error
        // I have no idea why this is necessary?
        // React is going to send me to the psych ward
        key="text"
        picturesRef={picturesRef}
      >
        {content}
      </Text>
      <Pictures ref={picturesRef}>{content}</Pictures>
    </>
  );
}
