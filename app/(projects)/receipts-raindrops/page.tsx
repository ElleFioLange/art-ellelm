import Image from "next/image";
import Project from "../components/project";
import Video from "@/components/video";
import Link from "next/link";

export default function ReceiptsRaindrops() {
  return (
    <Project>
      <h1>Receipts as Raindrops</h1>
      <h2>2024 - Interactive Sculpture</h2>
      <p>
        In the fall of 2024 I attended a partial hospitalization program
        following a mental health crisis. This is a picture I took while there.
        <br />
        ---
        <br />
        The program consisted of 5 hours of group therapy 5 days a week for 2
        weeks. During the experience, I often doodled and wrote little sentences
        inspired by the topics of discussion.
        <br />
        ---
        <br />
        Here is a selection from the 119 sentences I wrote:
        <br />
        - written rights are more respected than unwritten
        <br />
        - men need therapy because women need them to
        <br />
        - your relationship with God will mirror your relationship with your
        father
        <br />
        - what do you think of in view of the moon
        <br />
        - ethnicity is often treated as shades of gray
        <br />
        - bedbugs were just bugs before beds
        <br />
        - take time but give more
        <br />
        - Love is a thing best shared in the sun
        <br />
        - when the skin is pressed it changes color and your heart is the same,
        most things are
        <br />- smoke 'em if you don't want 'em
        <br />
        ---
        <br />
        The full list of sentences can be viewed{" "}
        <Link href="/receipts-raindrops/sentences">here.</Link>
      </p>
      <Image
        src="/multiple/receipts-raindrops/hospital.jpg"
        width={1080}
        height={810}
        alt="A hospital building"
      />
      <p>
        I took these sentences and generated an image via the process I
        developed in my series{" "}
        <a href="/perspectives-clouds">Perspectives on Clouds.</a> This image
        was formed along the continuum from the past to the future from the
        perspective of the present. I then used it to create the interactive
        piece <i>Receipts as Raindrops.</i>
        <br />
        ---
        <br />
        When a viewer selects a point from the image, a receipt printer will
        print out the sentence it corresponds to, allowing viewers to
        interrogate the image to read its source material and find connections
        between the position, color, and size of the points with the content of
        their source sentence. The receipt printer adds a dimension of
        physicality to the piece, as well as creates a gift for the viewer to
        take home.
      </p>
      <Video
        src="/multiple/receipts-raindrops/receipts-raindrops.mp4"
        width={720}
        height={720}
      />
    </Project>
  );
}
