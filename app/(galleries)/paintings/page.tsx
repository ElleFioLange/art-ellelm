import Image from "next/image";
import Gallery from "../gallery";
import Link from "next/link";

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
        <div>
          <h1>Title</h1>
          <h2>Subtitle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <Link href="/projects/image">Image</Link> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
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
      <div className="sm:w-64 sm:h-48">
        <Image
          src="/platter.png"
          width={1000}
          height={1000}
          id="image-11"
          alt=""
        />
      </div>
      <div className="sm:w-48 sm:h-48">
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
