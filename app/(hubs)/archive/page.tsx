import Image from "next/image";
import Link from "next/link";

export default function Archive() {
  return (
    <>
      <Link href="/painting">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Painting</h2>
      </Link>
      <Link href="/photography">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Photography</h2>
      </Link>
      <Link href="/generative">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Generative</h2>
      </Link>
      <Link href="/performance">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Performance</h2>
      </Link>
      <Link href="/design">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Design</h2>
      </Link>
      <Link href="/poetry">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Poetry</h2>
      </Link>
      <Link href="/sculpture">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Sculpture</h2>
      </Link>
      <Link href="/instructional">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Instructional</h2>
      </Link>
      <Link href="/video">
        <Image
          src="/paintings/straight-lines.jpg"
          alt="Every Straight Line on a Sphere Is a Circle"
          width={810}
          height={1080}
        />
        <h2>Video</h2>
      </Link>
    </>
  );
}
