import Gallery from "../gallery";
import Image from "next/image";

export default function Performance() {
  return (
    <Gallery>
      <div className="sm:w-[35vw] sm:h-[50vw]">
        <Image
          src="/performance/solo-short-form.jpg"
          width={759}
          height={1080}
          alt="Solo for Short-Form Video Platform"
        />
        <div>
          <h1>Solo for Short-Form Video Platform</h1>
          <h2>2025</h2>
          <h3>Instructional</h3>
        </div>
      </div>

      <div className="sm:w-[36vw] sm:h-[48vw]">
        <Image
          src="/performance/white-feather.jpg"
          width={759}
          height={1080}
          alt="The White Feather"
        />
        <div>
          <h1>The White Feather</h1>
          <h2>2024</h2>
          <h3>Performance</h3>
        </div>
      </div>
    </Gallery>
  );
}
