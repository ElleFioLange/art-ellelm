import Image from "next/image";
import Gallery from "../gallery";

export default function Computational() {
  return (
    <Gallery>
      <div className="sm:w-[64vw] sm:h-[36vw]">
        <Image
          src="/computational/time-space/globe-light-glass.jpg"
          width={1280}
          height={720}
          alt="Time-Space: Globe, Light, Glass"
        />
        <div>
          <h1>Time-Space: Globe, Light, Glass</h1>
          <h2>2024</h2>
          <h3>Computational Video</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[60vw]">
        <video
          src="/multiple/perspectives-clouds/3d/render.mp4"
          width={1080}
          height={1080}
          autoPlay
          muted
          loop
        />
        <div>
          <h1 className="max-sm:text-4xl">
            Human Activities Along the Planar Continuum of Man, Woman, and Human
            From the Perspective of Artificial Intelligence
          </h1>
          <h2>2024</h2>
          <h3>Computational 3D Render</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <video
          src="/multiple/receipt.mp4"
          width={720}
          height={720}
          muted
          autoPlay
          loop
        />
        <div>
          <h1>Receipts as Raindrops</h1>
          <h2>2024</h2>
          <h3>Interactive Sculpture</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/multiple/perspectives-clouds/2d/love-hate-faith.png"
          width={1080}
          height={951}
          alt="The Religious Texts of the Abrahamic Faiths Along the Continuum From Love to Hate From the Perspective of Faith"
        />
        <div>
          <h1>
            The Religious Texts of the Abrahamic Faiths Along the Continuum From
            Love to Hate From the Perspective of Faith
          </h1>
          <h2>2021</h2>
          <h3>Computational Image</h3>
        </div>
      </div>
    </Gallery>
  );
}
