import Link from "next/link";
import Gallery from "../gallery";
import Image from "next/image";

export default function Design() {
  return (
    <Gallery>
      <div className="sm:w-[40vw] sm:h-[50vw]">
        <Image
          src="/design/glasses.jpg"
          width={1080}
          height={864}
          alt="Glasses"
        />
        <div>
          <h1>Glasses</h1>
          <h2>2025</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/design/ai-collages/heart.jpg"
          width={1080}
          height={1080}
          alt="Here in My Heart"
        />
        <div>
          <h1>Here in My Heart</h1>
          <h2>2023</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/design/ai-collages/re.jpg"
          width={1080}
          height={1080}
          alt="Re"
        />
        <div>
          <h1>Re</h1>
          <h2>2023</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/design/ai-collages/bemine.jpg"
          width={1080}
          height={1080}
          alt="Be mine; Never"
        />
        <div>
          <h1>Be mine; Never</h1>
          <h2>2023</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/design/borbles/1.jpg"
          width={1080}
          height={1080}
          alt="Borbles II"
        />
        <div>
          <h1>Borbles I</h1>
          <h2>2023</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[40vw]">
        <Image
          src="/design/borbles/2.jpg"
          width={1080}
          height={1080}
          alt="Borbles II"
        />
        <div>
          <h1>Borbles II</h1>
          <h2>2023</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[40vw] sm:h-[50vw]">
        <Image
          src="/design/pioneer.jpg"
          width={895}
          height={1080}
          alt="Pioneer"
        />
        <div>
          <h1>Pioneer</h1>
          <h2>2020</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[36vw] sm:h-[48vw]">
        <Image
          src="/design/hk-protest.jpg"
          width={810}
          height={1080}
          alt="5 Demands"
        />
        <div>
          <h1>5 Demands and Not One Less</h1>
          <h2>2019</h2>
          <h3>Digital</h3>
        </div>
      </div>

      <div className="sm:w-[36vw] sm:h-[48vw]">
        <Image
          src="/design/nuke-verify.jpg"
          width={809}
          height={1080}
          alt="Nuclear Weapons Don't Want to Be Found"
        />
        <div>
          <h1>Nuclear Weapons Don't Want to Be Found</h1>
          <h2>2018</h2>
          <h3>Digital</h3>
        </div>
      </div>
    </Gallery>
  );
}
