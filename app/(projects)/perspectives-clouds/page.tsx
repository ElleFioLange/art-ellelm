import Image from "next/image";
import Project from "../components/project";
import Video from "@/components/video";

export default function PerspectivesClouds() {
  return (
    <Project>
      <h1>Perspectives on Clouds</h1>
      <h2>2021-current - Mixed Media</h2>
      <p>
        <i>Perspectives on Clouds</i> is a series centered on data, poetics,
        transformation, and metaphor. The pieces consist of images, 3D
        renderings, and printed sculptures. They are generated from data that
        has been transformed so as to introduce metaphors of continuum and
        perspective. Through that transformation, the data is imbued with a more
        powerful symbolism, described in their titles with the format:
        <br />
        <b>Data</b> along <b>continuum</b> from <b>perspective</b>
      </p>
      <Video
        src="/multiple/perspectives-clouds/3d/render.mp4"
        width={1080}
        height={1080}
      />
      <p>
        The pieces start from a body of text.
        <br />
        <br />
        In the example given, the source is the religious texts of the Abrahamic
        faiths.
        <br />
        <br />
        This text is then transformed into a series of high-dimensional
        coordinates (hundreds of dimensions) using an auto-encoder, which is the
        system used by a large language model (e.g. ChatGPT) to encode language
        into a format it understands.
        <br />
        <br />
        In this example, each point is a verse from the texts.
        <br />
        <br />
        These points are then reduced to 3 or 4 dimensions using a technique
        called principal component analysis, which projects the points onto the
        subspace which loses the least amount of information from the original
        data.
      </p>
      <Image
        src="/multiple/perspectives-clouds/explainers/1.png"
        width={1080}
        height={1020}
        alt="A 3D plot of a cloud of points"
      />
      <p>
        These lower-dimensional embeddings are then interpreted spatially and
        are further transformed to introduce metaphors of continuum and
        perspective. Anchor points are chosen to define a subspace 1 dimension
        lower than the current space.
      </p>
      <Image
        src="/multiple/perspectives-clouds/explainers/2.png"
        width={1080}
        height={982}
        alt="A 3D plot of a cloud of points with 3 highlighted points"
      />
      <p>
        In this example, 2 continuum points and 1 perspective point define a 2D
        plane that the points are projected onto. The continuum points are
        defined as the points "Love" and "Hate," and the perspective point is
        "Faith."
      </p>
      <Image
        src="/multiple/perspectives-clouds/explainers/3.png"
        width={1080}
        height={766}
        alt="A 3D plot of a cloud of points with 3 highlighted points"
      />
      <p>
        The subspace is constructed by finding the plane or volume which
        contains the continuum anchors and is perpendicular to the perspective
        anchor.
      </p>
      <Image
        src="/multiple/perspectives-clouds/explainers/4.png"
        width={1080}
        height={766}
        alt="A 3D plot of a cloud of points with 3 highlighted points. Lines are drawn connecting 2 of the points, and another line is drawn perpendicular to the first and passing through the 3rd point."
      />
      <p>All points are then projected onto the subspace.</p>
      <Image
        src="/multiple/perspectives-clouds/explainers/5.png"
        width={1080}
        height={766}
        alt="A 2D plot of points with 3 highlighted points. The 3 points are co-linear and the line the sit on is perfectly horizontal."
      />
      <h1>
        The Religious Texts of the Abrahamic Faiths Along the Continuum From
        Love to Hate From the Perspective of Faith
      </h1>
      <h2>2021 - Computational Image</h2>
      <p>
        In the 2D case, the points are given color based on their original 3D
        coordinates and size based on their distance to the plane. The anchor
        points are marked using cyan, magenta, and yellow circles.
      </p>
      <Image
        src="/multiple/perspectives-clouds/2d/love-hate-faith.png"
        width={1080}
        height={951}
        alt="The Religious Texts of the Abrahamic Faiths Along the Continuum From Love to Hate From the Perspective of Faith"
      />
      <h1>
        The Religious Texts of the Abrahamic Faiths Along the Continuum From
        East to West From the Perspective of the Sun
      </h1>
      <Image
        src="/multiple/perspectives-clouds/2d/east-west-sun.png"
        width={1064}
        height={1080}
        alt="The Religious Texts of the Abrahamic Faiths Along the Continuum From Love to Hate From the Perspective of Faith"
      />
      <h1>
        The Religious Texts of the Abrahamic Faiths Along the Continuum From God
        to Satan From the Perspective of Man
      </h1>
      <Image
        src="/multiple/perspectives-clouds/2d/god-satan-man.png"
        width={1080}
        height={1007}
        alt="The Religious Texts of the Abrahamic Faiths Along the Continuum From Love to Hate From the Perspective of Faith"
      />
      <h1>
        Human Activities Along the Planar Continuum of Man, Woman, and Human
        From the Perspective of Artificial Intelligence
      </h1>
      <h2>2025 - Computational Digital Render</h2>
      <p>
        In the 3D case, the anchor points are depicted as icosahedrons instead
        of spheres.
        <br />
        ---
        <br />
        The data source for this piece began as a list of verbs I wrote down in
        an effort to understand men. These are present in my painting{" "}
        <a href="/painting/ghillie-suit.jpg">
          <i>What a Ghillie Suit Means Will Be Our End.</i>
        </a>{" "}
        I later expanded this list beyond verbs with connotations of masculinity
        to include verbs that are more generically human. The gendered source
        for this content and the later expansion inspired the continuum anchor
        points of <i>Man, Woman, and Human.</i> The perspective point was chosen
        to create a symbolism related to the embedding system used in this
        series. The piece is made to be a metaphor for how we are understood by
        the AI systems that are beginning to weigh heavily on our lives{" "}
        <b>made out of the material of that very understanding.</b>
      </p>
      <Video
        src="/multiple/perspectives-clouds/3d/render.mp4"
        width={1080}
        height={1080}
      />
      <h2>In Progress - 3D Printed Resin Sculpture</h2>
      <p>
        I am currently in the process of perfecting a physical sculpture. I have
        been working with a resin 3D printer to create cubes with hollow
        spheres/icosahedrons inside representing the data points. I intend to
        sell these, as well as take commissions for sculptures that are built
        from text that is significant to the commissioner. If you are interested
        in being notified when these becomes available, please{" "}
        <a href="/contact">contact</a> me to let me know.
      </p>
      <Image
        src="/multiple/perspectives-clouds/3d/resin-sculpture.png"
        width={1080}
        height={1051}
        alt="Human Activities Along the Planar Continuum of Man, Woman, and Human
        From the Perspective of Artificial Intelligence"
      />
      <h1>Early prototypes</h1>
      <p>Here are some early prototypes of the sculpture.</p>
      <Video
        src="/multiple/perspectives-clouds/3d/early-1.mp4"
        width={720}
        height={720}
      />
      <Image
        src="/multiple/perspectives-clouds/3d/early-2.jpg"
        width={1080}
        height={1080}
        alt="An early iteration of the resin sculpture"
      />
      <h1>Process</h1>
      <p>And here's a video of some of the process of creating them.</p>
      <Video
        src="/multiple/perspectives-clouds/3d/process.mp4"
        width={720}
        height={1280}
      />
    </Project>
  );
}
