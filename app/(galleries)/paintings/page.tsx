import Image from "next/image";
import Gallery from "../gallery";

export default function Paintings() {
  return (
    <Gallery>
      <div className="sm:w-48 sm:h-96">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-0"
          alt=""
        />
      </div>
      <div className="sm:w-48 sm:h-16">
        <Image
          src="/painting.jpeg"
          width={768}
          height={1024}
          id="image-1"
          alt=""
        />
      </div>
      <div className="sm:w-32 sm:h-48">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-2"
          alt=""
        />
      </div>
      <div className="sm:w-56 sm:h-24">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-3"
          alt=""
        />
      </div>
      <div className="sm:w-48 sm:h-16">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-4"
          alt=""
        />
      </div>
      <div className="sm:w-32 sm:h-48">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-5"
          alt=""
        />
      </div>
      <div className="sm:w-56 sm:h-24">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-6"
          alt=""
        />
      </div>
      <div className="sm:w-48 sm:h-16">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-7"
          alt=""
        />
      </div>
      <div className="sm:w-32 sm:h-48">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-8"
          alt=""
        />
      </div>
      <div className="sm:w-56 sm:h-24">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-9"
          alt=""
        />
      </div>
      <div className="sm:w-12 sm:h-52">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-10"
          alt=""
        />
      </div>
      <div className="sm:w-64 sm:h-48">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-11"
          alt=""
        />
      </div>
      <div className="sm:w-48 sm:h-16">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-12"
          alt=""
        />
      </div>
    </Gallery>
  );
}
