import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <>
      <a href="/image">
        <Image src="/sculpture/image/1.jpg" alt="" width={1080} height={884} />
        <h2>Image</h2>
      </a>
    </>
  );
}
