import Image from "next/image";
import Link from "next/link";

export default function Archive() {
  return (
    <>
      <Link href="/painting">
        <Image
          src="/painting/straight-lines.jpg"
          alt="A painting titled: Every Straight Line on a Sphere Is a Circle. The painting is abstract and has a washed out blue and orange background. It has abstract drawings in black marker across the canvas, and is adorned with reflective disk hard drive platters."
          width={810}
          height={1080}
        />
        <h2>Painting</h2>
      </Link>
      <Link href="/photography">
        <Image
          src="/photography/angels-glow-clouds.jpg"
          alt="A photograph titled: Angels Glow by Floating Clouds. The photo is of clouds at sunset. The warm peach red of the sunset is very vivid. There is a tree with birds in the bottom right corner."
          width={1080}
          height={810}
        />
        <h2>Photography</h2>
      </Link>
      <Link href="/computational">
        <Image
          src="/multiple/perspectives-clouds/2d/love-hate-faith.png"
          alt="An image titled: The Religious Texts of the Abrahamic Faiths Along the Continuum From Love to Hate From the Perspective of Faith. It is a cloud of multi-colored circles on a white background."
          width={1200}
          height={1056}
        />
        <h2>Computational</h2>
      </Link>
      <Link href="/performance">
        <Image
          src="/performance/white-feather.jpg"
          alt="An image titled: The White Feather. It has a dark gray/brown background and the text The White Feather on the left. The text is glowing white, and it has a blurry trail up to the top of the image."
          width={1080}
          height={606}
        />
        <h2>Performance</h2>
      </Link>
      <Link href="/design">
        <Image
          src="/design/glasses.jpg"
          alt="An image titled: Glasses. It is a digital illustration that has 4 shapes. 2 at the top look like different styles of glasses from the top-down. 2 at the bottom look like a wine glass and a beer glass. In juxtaposition with each other, it is clear that the top 2 look like male pectoral muscles and female breasts, and the bottom 2 look like male and female genitalia."
          width={810}
          height={1080}
        />
        <h2>Design</h2>
      </Link>
      <Link href="/sculpture">
        <Image
          src="/sculpture/image/1.jpg"
          alt="A sculpture titled: Image. The sculpture is a mirror with reflective disc hard drive platters affixed to it."
          width={1080}
          height={884}
        />
        <h2>Sculpture</h2>
      </Link>
    </>
  );
}
