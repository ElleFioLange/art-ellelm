import Image from "next/image";
import Project from "../components/project";
import Video from "@/components/video";

export default function TimeSpace() {
  return (
    <Project>
      <h1>Time-Space</h1>
      <h2>2024-2025 - Computational Video</h2>
      <p>
        Time-Space is a video series of temporally perpendicularized videos.
        This project was inspired by my theory of art and spirituality and is
        meant to illustrate the underlying metaphysics to my theory.
        <br />
        ---
        <br />
        The full videos can be viewed{" "}
        <a href="https://www.youtube.com/playlist?list=PL-gQ_rVFllNKvInUl4ORIff1YVica4LCn">
          here.
        </a>
      </p>
      <Video
        src="/computational/time-space/globe-light-glass.mp4"
        width={1280}
        height={720}
      />
      <h1>Explanation</h1>
      <h2>What is temporal perpendicularization?</h2>
      <p>
        A video is composed of a set of 2-dimensional frames aligned along a
        temporal dimension.
      </p>
      <Image
        src="/computational/time-space/explainers/1.png"
        width={1080}
        height={822}
        alt="An illustration of frames in a video as a series of rectangles stacked into a rectangular prism. At the bottom is an arrow labeled time, and the arrow points in the direction the frames are lined up against each other."
      />
      <p>
        Temporal perpendicularization is the re-encoding of a video file to
        pivot the time dimension 90°.
      </p>
      <Image
        src="/computational/time-space/explainers/2.png"
        width={1080}
        height={872}
        alt="An illustration of frames in a video as a series of rectangles stacked into a rectangular prism. At the bottom is an arrow labeled time, and the arrow points perpendicular to the direction the frames are lined up against each other."
      />
      <p>
        This involves creating new frames from slices of the original frames.
        <br />
        ---
        <br />
        Frame 1 of the new video is the left-most column of pixels from every
        frame of the original video lined up across the frame.
      </p>
      <Image
        src="/computational/time-space/explainers/3.png"
        width={1080}
        height={451}
        alt="An illustration of a new frame being constructed from slices of a series of frames from a video. The frames in the video have a thin slice on the left side highlighted pink, and the highlighted areas have arrows showing them being lined up horizontally to form a new frame."
      />
      <p>
        Frame N of the new video is the Nth column of pixels from every frame of
        the original video lined up against each other.
        <br />
        ---
        <br />
        When watching the video, you are seeing a specific spatial slice at
        every moment in time. As the video progresses, you are watching that
        slice slide across the width of the original video.
      </p>
      <Image
        src="/computational/time-space/explainers/4.gif"
        width={1080}
        height={1080}
        alt="An illustration of the new frame's relationship to the video. There is a series of frames lined up in one direction, and there is a perpendicular frame highlighted pink that cuts through all the original frames. The illustration is labeled Frame N."
      />
      <h1>Metaphysics</h1>
      <h2>A Theory of Art and Spirituality</h2>
      <p>
        We live in a 4-dimensional world, 3 spatial dimensions and 1 temporal
        dimension. Imagine a similar process taken upon our universe, a
        re-encoding of the information of our reality that perpendicularizes
        time. Places would become moments and moments would become spaces. I
        have had spiritual experiences, and I have witnessed great art, and I
        suspect I am witnessing the same thing in both. Perhaps the magical
        moments we encounter are re-encoded masterpieces. Perhaps our
        masterpieces are revelations for some re-encoded xenosapien. Perhaps we
        can imagine it and make it true.
      </p>
      <Video
        src="/computational/time-space/globe-light-glass.mp4"
        width={1280}
        height={720}
      />
      <h1>Time-Space</h1>
      <h2>Piano Burning - 2024</h2>
      <p>
        This is the first Time-Space video I created and is crafted from a video
        of a piano burning performed by the musical group Clipping.
        <br />
        ---
        <br />
        Video available{" "}
        <a href="https://youtu.be/coozBXhWFEA?si=Z_ZcPZAldbOGa28X">here.</a>
      </p>
      <Image
        src="/computational/time-space/piano-burning.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: Piano Burning"
      />
      <h2>Orange Line - 2024</h2>
      <p>
        This video was created from a shot of the orange line passing by my
        house. The consistent linear motion of the two trains translates into
        static horizontal sections of the transformed video. The waviness comes
        from the handheld nature of the original video.
        <br />
        ---
        <br />
        Video available{" "}
        <a href="https://youtu.be/OPN0BCi3Ddo?si=WuhIL38A5DkPuW_n">here.</a>
      </p>
      <Image
        src="/computational/time-space/orange-line.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: Orange Line"
      />
      <h2>Pasta - 2024</h2>
      <p>
        The original video for this piece was of pasta boiling. The sine-like
        object that appears ~40s in is the result of my circular stirring of the
        pasta with a wooden spoon. The split in character between the two halves
        of the video is due to a change in camera angle, where I zoomed in on
        the boiling bubbles in the later part of the original video.
        <br />
        ---
        <br />
        Video available{" "}
        <a href="https://youtu.be/LcMuwKUCvmI?si=S3bDhB9qIMNFjgTu">here.</a>
      </p>
      <Image
        src="/computational/time-space/pasta.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: Pasta"
      />
      <h2>Globe, Light, Glass - 2024</h2>
      <p>
        For this video, I waved a spinning party light around the frame while a
        friend held an empty glass up to the lens, resulting in diffuse and
        defracted lights in wave-like patterns floating throughout the frame.
        This piece in particular inspired another possible connection to physics
        through its wavy patterns. Quantum superposition and collapse imply some
        form of non-causality to the universe, and this has been tough to square
        with the classical mechanics that dictate Einstein's equations of
        relativity. In this video, a spinning sphere moving throughout space
        transforms into wavy patterns that remind me of wave-function
        simulations. Could the application of relativity to a true point
        particle result in the temporal and spatial dimensions overlapping and
        their distinction becoming blurred, thus creating an environment ripe
        for non-causality? Without a doubt this is not the case; I am not a
        physicist by any stretch of the imagination. But it's fun to think
        about.
        <br />
        ---
        <br />
        Video available <a href="https://youtu.be/sHJSXn7lA9w">here.</a>
      </p>
      <Video
        src="/computational/time-space/globe-light-glass.mp4"
        width={1280}
        height={720}
      />
      <h2>Purple Smoke - 2024</h2>
      <p>
        In the original video, two plumes of smoke emerge from the bottom of the
        frame into purple light. You can observe the two moments as the two
        separate bright purple sections in the video.
        <br />
        ---
        <br />
        Video available{" "}
        <a href="https://youtu.be/TIbzQLLwn40?si=ftFNZ0i5EbqciFQb">here.</a>
      </p>
      <Image
        src="/computational/time-space/purple-smoke.jpg"
        width={1280}
        height={720}
        alt="Time-Space: Purple Smoke"
      />
      <h2>The Shining - 2024</h2>
      <p>
        This video was made from a clip of The Shining, specifically when Jack
        first encounters Lloyd the bartender. This was the first video that I
        made that featured a human being and it is a dramatic and creepy effect.
        <br />
        ---
        <br />
        Video available <a href="https://youtu.be/1kM2bYprdpw">here.</a>
      </p>
      <Image
        src="/computational/time-space/the-shining.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: The Shining"
      />
      <h2>Jellyfish - 2024</h2>
      <p>
        The source for this is an Apple TV screensaver of jellyfish. This one
        was interesting because of how immediately recognizable the result is.
        So much of the sense of the original video is present in this one, more
        than any other piece in the series.
        <br />
        ---
        <br />
        Video available <a href="https://youtu.be/d9PQcGPPkwA">here.</a>
      </p>
      <Image
        src="/computational/time-space/jellyfish.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: Jellyfish"
      />
      <h2>Gilmore Girls - 2024</h2>
      <p>
        This video comes from a clip of Gilmore Girls, and features multiple
        camera angle cuts, lots of movement and color, and captions running
        across the bottom, all of which create substantially interesting results
        when temporally perpendicularized.
        <br />
        ---
        <br />
        Video available <a href="https://youtu.be/el2V9UD3JUQ">here.</a>
      </p>
      <Image
        src="/computational/time-space/gilmore-girls.jpg"
        width={1920}
        height={1080}
        alt="Time-Space: Gilmore Girls"
      />
      <h2>Fly Embryo Mitosis - 2025</h2>
      <p>
        This piece was formed from a video of a fly embryo undergoing mitosis,
        which was captured by{" "}
        <a href="https://www.nikonsmallworld.com/galleries/2024-small-world-in-motion-competition/mitotic-waves-fruit-fly-embryo">
          Dr. Bruno Vellutini.
        </a>{" "}
        Due to the resolution and framerate of the original video, the
        Time-Space version ends up with a resolution of 360 x 800 and is 64
        seconds long. All previous pieces have been created such that the width
        and number of frames would be identical, resulting in identical
        resolutions between the original and transformed videos, so this is a
        great example to illuminate that aspect of the transformation.
        <br />
        ---
        <br />
        Video available{" "}
        <a href="https://youtube.com/shorts/7lqF0CTN074?feature=share">here.</a>
      </p>
      <Image
        src="/computational/time-space/fly-mitosis.jpg"
        width={360}
        height={800}
        alt="Time-Space: Fly Embryo Mitosis"
      />
    </Project>
  );
}
