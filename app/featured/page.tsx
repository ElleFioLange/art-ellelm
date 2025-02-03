import Image from "next/image";

// Using regular <a> tags instead of next/link due to rendering issues with the GSAP ScrollTrigger

export default function Featured() {
  return (
    <main className="max-sm:flex max-sm:flex-col p-8 gap-8 w-full sm:grid max-xl:md:grid-cols-2 xl:grid-cols-4 auto-rows-min sm:items-center">
      <a
        href="/projects/image"
        className="border-fg border-2 text-raisin-black bg-baby-powder flex flex-col justify-center items-center rounded-md"
      >
        <Image
          src="/test.jpeg"
          alt=""
          width={1280}
          height={1280}
          className="p-2 pb-0"
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
          className="p-2 pb-0"
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
          className="p-2 pb-0"
        />
        <h2 className="py-2">Cloudwatching</h2>
      </a>
    </main>
  );
}
