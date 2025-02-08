import Image from "next/image";
import Project from "../components/project";

// Underscore so as not to overlap with next/image
export default function Image_() {
  return (
    <Project>
      <h1>Image</h1>
      <h2>Image I - 2021 - Hard Drive Platters & Mirror</h2>
      <p>
        This is the first piece I did in the Image series, the pieces of which
        consist of hard drive platters structured to create a mirror. The first
        two pieces use an existing mirror as the base, but I am working on a new
        piece that does not feature a pre-existing mirror. The series is titled
        Image in order to connect the separate but deeply linked concepts of
        "image" in both a visual-related and data-related sense. The raw data
        (i.e. ones and zeros) encoded in a hard drive is referred to as the hard
        drive's "image." To instantiate a hard drive with a specific set of data
        is called "imaging it." We all as human beings have images that
        correspond to us, in pictures, in the minds of those who interact with
        us, in our reflections, and relatively recently in the encoded data that
        relates to us. These pieces are about prompting the viewer to consider
        this new form of image our species has created, and to communicate more
        viscerally the sense of self that is latent in these data structures.
      </p>
      <Image
        src="/sculpture/image/1.jpg"
        alt="Image I"
        width={1080}
        height={884}
      />
      <h2>Image II - 2024 - Hard Drive Platters & Mirror</h2>
      <p>
        This second piece in the series came from a happy accident. When
        sourcing hard drive platters, I received a lot of platters that had been
        punctured in order to destroy any residual data on them. This extra step
        is sometimes taken for recycled hard drives that may have contained
        sensitive information. The resulting objects are more sculpturally
        dynamic, producing warped reflections and revealing the presence of
        physical violence in their history. In this piece I also experimented
        with using gold-coated platters for color variation, and broken shards
        of platters as both texture and symbolism.
      </p>
      <Image
        src="/sculpture/image/2-v.png"
        alt="Image II"
        width={229}
        height={1080}
      />
    </Project>
  );
}
