import { DetailedHTMLProps, VideoHTMLAttributes } from "react";

export default function Video(
  props: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
) {
  return (
    <video autoPlay muted loop playsInline disablePictureInPicture {...props} />
  );
}
