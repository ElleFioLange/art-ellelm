import Image from "next/image";
import Gallery from "../gallery";
import Link from "next/link";

export default function Paintings() {
  return (
    <Gallery>
      <div className="sm:w-[36vw] sm:h-[48vw]">
        <Image
          src="/paintings/straight-lines.jpg"
          width={1080}
          height={864}
          alt="Every Straight Line on a Sphere Is a Circle"
        />
        <div>
          <h1>Every Straight Line on a Sphere Is a Circle</h1>
          <h2>2025 - 3' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[48vw]">
        <Image
          src="/paintings/continously-pregnant.jpg"
          width={1080}
          height={864}
          alt="I Want To Be Continuously Pregnant With Your Words"
        />
        <div>
          <h1>I Want To Be Continuously Pregnant With Your Words</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
          <p>
            The title of this painting is a reference to the{" "}
            <Link href="https://youtu.be/H-vGzW2-0IU?si=ln7qeYxMkMGJHxfo">
              abuse of Sewell Setzer by an AI chatbot.
            </Link>
          </p>
        </div>
      </div>

      <div className="sm:w-[30vw] sm:h-[48vw]">
        <Image
          src="/paintings/thoughts-action-matte.jpg"
          width={675}
          height={1080}
          alt="Thoughts and Action Conserved in Matte Black"
        />
        <div>
          <h1>Thoughts and Action Conserved in Matte Black</h1>
          <h2>2024 - 30" x 48"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[48vw]">
        <Image
          src="/paintings/singularity-rapture.jpg"
          width={1080}
          height={864}
          alt="There Sure Are a Lot of Similarities Between the Singularity and Rapture"
        />
        <div>
          <h1>
            There Sure Are a Lot of Similarities Between the Singularity and
            Rapture
          </h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[48vw] sm:h-[30vw]">
        <Image
          src="/paintings/watch-rainbow.jpg"
          width={1080}
          height={675}
          alt="Who Will Watch the Rainbows of the Light the Flames Provide?"
        />
        <div>
          <h1>Who Will Watch the Rainbows of the Light the Flames Provide?</h1>
          <h2>2024 - 48" x 30"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[16vw] sm:h-[20vw]">
        <Image
          src="/paintings/worm.jpg"
          width={864}
          height={1080}
          alt="Worm Finding His Way in Winter"
        />
        <div>
          <h1>Worm Finding His Way in Winter</h1>
          <h2>2024 - 8" x 10"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[48vw]">
        <Image
          src="/paintings/ghillie-suit.jpg"
          width={1080}
          height={864}
          alt="What a Ghillie Suit Means Will Be Our End"
        />
        <div>
          <h1>What a Ghillie Suit Means Will Be Our End</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[48vw]">
        <Image
          src="/paintings/forest-broad.jpg"
          width={1080}
          height={864}
          alt="Kissing the Forest with Broad Lips"
        />
        <div>
          <h1>Kissing the Forest with Broad Lips</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[60vw] sm:h-[48vw]">
        <Image
          src="/paintings/birth-sun-leaves.jpg"
          width={1080}
          height={864}
          alt="Birth by Means of Sun Shone Through Leaves"
        />
        <div>
          <h1>Birth by Means of Sun Shone Through Leaves</h1>
          <h2>2024 - 5' x 4'</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[16vw] sm:h-[48vw]">
        <Image
          src="/paintings/learning-name/learning-name.jpg"
          width={360}
          height={1080}
          alt="Paper Is the Medium Through Which We Learn Our Names"
        />
        <div>
          <h1>Paper is the Medium By Which We Learn Our Names</h1>
          <h2>2024 - 12" x 36"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[48vw] sm:h-[48vw]">
        <Image
          src="/paintings/boat.jpg"
          width={1080}
          height={1080}
          alt="Boat"
        />
        <div>
          <h1>BOAT</h1>
          <h2>2023 - 4' x 4'</h2>
          <h3>Acrylic & Pastel on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[28vw] sm:h-[36vw]">
        <Image
          src="/paintings/oil-petal.jpg"
          width={840}
          height={1080}
          alt="From Earth Bursts Forth Both Oil and Petal"
        />
        <div>
          <h1>From Earth Bursts Forth Both Oil and Petal</h1>
          <h2>2023 - 14" x 18"</h2>
          <h3>Mixed Media on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[36vw] sm:h-[36vw]">
        <Image
          src="/paintings/unfolding/unfolding.jpg"
          width={1080}
          height={1080}
          alt="Unfolding is the Movement By Which Edges Dissolve"
        />
        <div>
          <h1>Unfolding is the Movement By Which Edges Dissolve</h1>
          <h2>2023 - 12" x 12"</h2>
          <h3>Mixed Media on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[35vw] sm:h-[45vw]">
        <Image
          src="/paintings/grief.png"
          width={840}
          height={1080}
          alt="The Loss of a Loved One Is About Those Remaining"
        />
        <div>
          <h1>The Loss of a Loved One Is About Those Remaining</h1>
          <h2>2023 - 14" x 18"</h2>
          <h3>Acrylic & Pastel on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[45vw] sm:h-[35vw]">
        <Image
          src="/paintings/sun-atom-bomb.jpg"
          width={1080}
          height={802}
          alt="Sun as Atom Bomb Hurtling Towards Our Desires"
        />
        <div>
          <h1>Sun as Atom Bomb Hurtling Towards Our Desires</h1>
          <h2>2021 - 14" x 18"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>

      <div className="sm:w-[48vw] sm:h-[24vw]">
        <Image
          src="/paintings/flowers-flood.jpg"
          width={1080}
          height={536}
          alt="Flowers Lost in Flood Will Reincarnate as Waves"
        />
        <div>
          <h1>Flowers Lost in Flood Will Reincarnate as Waves</h1>
          <h2>2021 - 12" x 24"</h2>
          <h3>Acrylic on Canvas</h3>
        </div>
      </div>
    </Gallery>
  );
}
