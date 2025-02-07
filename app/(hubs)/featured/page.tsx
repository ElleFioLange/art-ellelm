import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <>
      <a href="/time-space">
        <video
          src="/computational/time-space/globe-light-glass.mp4"
          width={1280}
          height={720}
          autoPlay
          muted
          loop
        />
        <h2>Time-Space</h2>
      </a>
      <a href="/image">
        <Image
          src="/sculpture/image/1.jpg"
          alt="Image I"
          width={1080}
          height={884}
        />
        <h2>Image</h2>
      </a>
    </>
  );
}
