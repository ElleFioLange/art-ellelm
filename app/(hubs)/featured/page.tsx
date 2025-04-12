import Video from "@/components/video";
import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <>
      <a href="/perspectives-clouds">
        <Image
          src="/multiple/perspectives-clouds/3d/glass-sculpture.jpg"
          width={680}
          height={1080}
          alt="Glass sculpture"
        />
        <h2>Perspectives on Clouds</h2>
      </a>
      <a href="/time-space">
        <Video
          src="/computational/time-space/globe-light-glass.mp4"
          width={1280}
          height={720}
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
