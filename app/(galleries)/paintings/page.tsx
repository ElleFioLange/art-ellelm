import Image from "next/image";
import Gallery from "../gallery";
import Link from "next/link";

export default function Paintings() {
  return (
    <Gallery>
      <div className="sm:w-60 sm:h-48">
        <Image
          src="/paintings/birth-sun-leaves.jpg"
          width={1080}
          height={864}
          alt="Birth by Means of Sun Shone Through Leaves"
        />
        <div>
          <h1>Birth by Means of Sun Shone Through Leaves</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-60 sm:h-48">
        <Image
          src="/paintings/forest-broad.jpg"
          width={1080}
          height={864}
          alt="Kissing the Forest in Broad Strokes"
        />
        <div>
          <h1>Kissing the Forest in Broad Strokes</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-40 sm:h-64">
        <Image
          src="/paintings/thoughts-actions-matte.jpg"
          width={675}
          height={1080}
          alt="Thoughts and Actions Conserved and Matte Black"
        />
        <div>
          <h1>Thoughts and Actions Conserved and Matte Black</h1>
          <h2>2024 - 30" x 48"</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-64 sm:h-40">
        <Image
          src="/paintings/watch-rainbow.jpg"
          width={1080}
          height={675}
          alt="Who Will Watch The Rainbow the Flames Provide?"
        />
        <div>
          <h1>Who Will Watch The Rainbow the Flames Provide?</h1>
          <h2>2024 - 48" x 30"</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-60 sm:h-48">
        <Image
          src="/paintings/straight-lines.jpg"
          width={1080}
          height={864}
          alt="There Sure Are a Lot of Similarities Between the Singularity and the Rapture"
        />
        <div>
          <h1>
            There Sure Are a Lot of Similarities Between the Singularity and the
            Rapture
          </h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-48 sm:h-96">
        <Image
          src="/paintings/birth-sun-leaves.jpg"
          width={1080}
          height={864}
          alt="Birth by means of sun shone through leaves"
        />
        <div>
          <h1>Birth by Means of Sun Shone Through Leaves</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on canvas</h3>
        </div>
      </div>
      <div className="sm:w-48 sm:h-96">
        <Image
          src="/paintings/continously-pregnant.jpg"
          width={1080}
          height={864}
          alt="I Want To Be Continuously Pregnant With Your Babies"
        />
        <div>
          <h1>I Want To Be Continuously Pregnant With Your Babies</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on canvas</h3>
          <p>
            The title of this painting is a reference to the{" "}
            <Link href="https://youtu.be/H-vGzW2-0IU?si=ln7qeYxMkMGJHxfo">
              abuse of Sewell Setzer by an AI chatbot.
            </Link>
          </p>
        </div>
      </div>
    </Gallery>
  );
}
