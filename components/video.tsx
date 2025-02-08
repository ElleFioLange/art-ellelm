export default function Video({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <video
      src={src}
      width={width}
      height={height}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
    />
  );
}
