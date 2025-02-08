import Project from "../components/project";
import Video from "@/components/video";

export default function PerspectivesClouds() {
  return (
    <Project>
      <h1>Perspectives on Clouds</h1>
      <h2>2025 - Mixed Media</h2>
      <p>
        Perspectives on clouds is a series centered on data, poetics,
        transformation, and metaphor.
        <br />
        ---
        <br />
        I will provide an in-depth technical description below, as well as a
        simplified explanation that accompanies the next few pictures. Scroll to
        see the simplified explanation.
        <br />
        ---
        <br />
        The pieces in this series consist of a body of text transformed into
        numerical embeddings using an auto-encoder, which is the system used by
        an LLM (e.g. ChatGPT) to encode language into a format compatible with
        its structures of intelligence. These embeddings are then reduced to a
        smaller, workable number of dimensions (either 3 or 4 dimensions) via a
        process called principal component analysis, which calculates the
        lower-dimensional subspace which, when the full-dimensional data is
        projected into it, compresses the data the least. These
        lower-dimensional embeddings are then interpreted spatially and are
        further transformed to introduce metaphors of continuum and perspective.
        Anchor points are chosen to define a subspace 1 dimension lower than the
        reduced space. For an N-dimensional space, N anchor points are chosen,
        with the first N - 1 anchor points defining the continuum and the last
        anchor defining the perspective point. The subspace is constructed by
        finding the plane or volume which contains the continuum anchors and is
        perpendicular to the perspective anchor. All points are then projected
        into the subspace, transforming the data into a metaphorical structure:
        <br />
        <em>datasdflaksj</em>
        {/* <i>
          <em>Data</em> along <em>continuum</em> from <em>perspective</em>
        </i> */}
      </p>
      <Video
        src="/multiple/perspectives-clouds/3d/render.mp4"
        width={1080}
        height={1080}
      />
    </Project>
  );
}
