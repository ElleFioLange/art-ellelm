import Gallery from "@/components/gallery";
import Image from "next/image";

export default function Paintings({
  containerClass,
  imageClass,
}: {
  containerClass: string;
  imageClass: string;
}) {
  return (
    <Gallery>
      <div
        id="container-0"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-96 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-0"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-1"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-16 flex-grow"
      >
        <Image
          src="/painting.jpeg"
          width={768}
          height={1024}
          id="image-1"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-2"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-32 sm:h-48 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-2"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-3"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-56 sm:h-24 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-3"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-4"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-16 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-4"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-5"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-32 sm:h-48 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-5"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-6"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-56 sm:h-24 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-6"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-7"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-16 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-7"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-8"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-32 sm:h-48 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-8"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-9"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-56 sm:h-24 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-9"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-10"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-12 sm:h-52 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-10"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-11"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-64 sm:h-48 flex-grow"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-11"
          alt=""
          className="object-contain image"
        />
      </div>
      <div
        id="container-12"
        className="flex justify-center items-center item w-full min-h-max h-dvh sm:w-48 sm:h-16"
      >
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-12"
          alt=""
          className="object-contain image"
        />
      </div>
    </Gallery>
  );
}
