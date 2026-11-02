import { DetailedHTMLProps, ReactNode, VideoHTMLAttributes } from "react";

export default function Video(
  props:
    | DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
    | { children?: ReactNode }
) {
  return (
    <video autoPlay muted loop playsInline disablePictureInPicture {...props}>
      {props.children}
    </video>
  );
}
