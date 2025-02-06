import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <>
      <a href="/projects/image">
        <Image src="/test.jpeg" alt="" width={1280} height={1280} />
        <h2>Image</h2>
      </a>
      <a href="/projects/paintings">
        <Image src="/painting.jpeg" alt="" width={768} height={1024} />
        <h2>Paintings</h2>
      </a>
      <a href="/projects/cloudwatching">
        <Image
          src="/love-hate-faith-transparent.png"
          alt=""
          width={1000}
          height={880}
        />
        <h2>Cloudwatching</h2>
      </a>
    </>
  );
}
