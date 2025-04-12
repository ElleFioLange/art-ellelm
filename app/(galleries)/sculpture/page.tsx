import Video from "@/components/video";
import Gallery from "../gallery";
import Image from "next/image";
import Link from "next/link";

export default function Sculptures() {
  return (
    <Gallery>
      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/multiple/perspectives-clouds/3d/glass-sculpture.jpg"
          width={680}
          height={1080}
          alt="Human Activities Along the Planar Continuum of Man, Woman, and Human From the Perspective of Artificial Intelligence"
        />
        <div>
          <h1 className="max-sm:text-4xl">
            Human Activities Along the Planar Continuum of Man, Woman, and Human
            From the Perspective of Artificial Intelligence
          </h1>
          <h2>2024-current</h2>
          <h3>Laser Engraved Glass</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Video
          src="/multiple/receipts-raindrops/receipts-raindrops.mp4"
          width={720}
          height={720}
        />
        <div>
          <h1>Receipts as Raindrops</h1>
          <h2>2024</h2>
          <h3>Interactive Sculpture</h3>
          <p>
            You can read more about this project{" "}
            <Link href="/receipts-raindrops">here.</Link>
          </p>
        </div>
      </div>

      <div className="sm:w-[70vw] sm:h-[15vw]">
        <Image
          src="/sculpture/image/2-h.png"
          width={1080}
          height={229}
          alt="Image II"
        />
        <div>
          <h1>Image II</h1>
          <h2>2024</h2>
          <h3>Hard Drive Platters and Mirror</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[32vw]">
        <Image
          src="/sculpture/image/1.jpg"
          width={1080}
          height={884}
          alt="Image I"
        />
        <div>
          <h1>Image I</h1>
          <h2>2021</h2>
          <h3>Hard Drive Platters and Mirror</h3>
        </div>
      </div>

      {/* Putting this in the sculpture category for now, but planning to move it later */}
      <div className="sm:w-[32vw] sm:h-[32vw]">
        <Image
          src="/sculpture/grow-n.png"
          width={927}
          height={917}
          alt="Grow of N"
        />
        <div>
          <h1>Grow(N)</h1>
          <h2>2024</h2>
          <h3>Printed Book</h3>
        </div>
      </div>
    </Gallery>
  );
}
