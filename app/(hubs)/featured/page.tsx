import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <>
      <a href="/image">
        <Image src="/test.jpeg" alt="" width={1280} height={1280} />
        <h2>Image</h2>
      </a>
    </>
  );
}
