import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <main className="max-sm:flex max-sm:flex-col p-8 gap-8 overflow-auto h-full w-full sm:grid max-xl:md:grid-cols-2 xl:grid-cols-4 sm:items-center">
      <a
        href="/projects/image"
        className="border-fg border-2 text-raisin-black bg-baby-powder flex flex-col justify-center items-center rounded-md overflow-clip flex-shrink-0"
      >
        <Image
          src="/test.jpeg"
          alt=""
          width={1280}
          height={1280}
          className="object-contain p-2 pb-0"
        />
        <h2 className="py-2">Image</h2>
      </a>
      <a
        href="/projects/paintings"
        className="border-fg border-2 text-raisin-black bg-baby-powder flex flex-col justify-center items-center rounded-md overflow-clip flex-shrink-0"
      >
        <Image
          src="/painting.jpeg"
          alt=""
          width={768}
          height={1024}
          className="object-contain p-2 pb-0"
        />
        <h2 className="py-2">Paintings</h2>
      </a>
      <a
        href="/projects/cloudwatching"
        className="border-fg border-2 text-raisin-black bg-baby-powder flex flex-col justify-center items-center rounded-md overflow-clip flex-shrink-0"
      >
        <Image
          src="/love-hate-faith-transparent.png"
          alt=""
          width={1000}
          height={880}
          className="object-contain p-2 pb-0"
        />
        <h2 className="py-2">Cloudwatching</h2>
      </a>
      <a
        href="/projects/time-space"
        className="border-fg border-2 text-raisin-black bg-baby-powder flex flex-col justify-center items-center rounded-md overflow-clip flex-shrink-0"
      >
        <Image
          src="/time-space.png"
          alt=""
          width={1550}
          height={1035}
          className="object-contain p-2 pb-0"
        />
        <h2 className="py-2">Time-Space</h2>
      </a>
    </main>
  );
}
