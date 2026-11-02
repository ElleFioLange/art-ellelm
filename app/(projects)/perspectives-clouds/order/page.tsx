"use client";

import Video from "@/components/video";
import Image from "next/image";
import { useState } from "react";

export default function Order() {
  const phase = useState<
    "landing" | "data" | "consultation" | "size" | "summary"
  >("landing");

  return (
    <main className="w-full h-dvh">
      <Video className="w-1/2" width={1080} height={1080}>
        <source
          src="/multiple/perspectives-clouds/3d/output-7.mov"
          type='video/mp4; codecs="hvc1"'
        ></source>
        <source
          src="/multiple/perspectives-clouds/3d/out2.webm"
          type="video/webm"
        ></source>
      </Video>
      <button>Begin {">"}</button>
    </main>
  );
}
