"use client";

import React, { MouseEventHandler, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

const ROTATION_RANGE = 32.5;

const Platter = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    // stiffness: 300,
    // damping: 10,
    // mass: 2,
  };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove: MouseEventHandler = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - ROTATION_RANGE / 2) * -1;
    const rY = mouseX / width - ROTATION_RANGE / 2;

    console.log(rX, rY);

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="w-1/2 max-w-[50vh] flex justify-center items-center relative"
    >
      <div
        className="w-full h-full absolute bg-fg bg-opacity-5 rounded-lg"
        style={{
          transform: "translateZ(-31px) scale(1.08)",
          transformStyle: "preserve-3d",
        }}
      />
      <div
        className="w-full h-full absolute bg-[radial-gradient(circle,_rgba(0,0,0,0)_15%,_rgba(0,0,0,1)_30%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,0.35)_60%,_rgba(0,0,0,0.15)_65%,_rgba(0,0,0,0)_70%)]"
        style={{
          transform: "translateZ(-30px) scale(1.08)",
          transformStyle: "preserve-3d",
        }}
      />
      <Image
        src="/platter.png"
        className="object-contain absolute brightness-50"
        alt="Hard Drive Platter"
        width={2400}
        height={2400}
        style={{
          transform: "translateZ(-15px)",
          transformStyle: "preserve-3d",
        }}
      />
      <Image
        src="/platter.png"
        className="object-contain"
        alt="Hard Drive Platter"
        width={2400}
        height={2400}
      />
      <Link
        style={{
          transform: "translateZ(15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
        href="/projects/image"
        className="absolute text-xl top-1/4 left-1/4"
      >
        Image
      </Link>
      <Link
        style={{
          transform: "translateZ(15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
        href="/projects/cloudwatching"
        className="absolute text-xl top-1/4 left-3/4"
      >
        Cloudwatching
      </Link>
      <Link
        style={{
          transform: "translateZ(15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
        href="/projects/time-space"
        className="absolute text-xl top-3/4 left-1/4"
      >
        Time-Space
      </Link>
      <Link
        style={{
          transform: "translateZ(15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
        href="/projects/paintings"
        className="absolute text-xl top-3/4 left-3/4"
      >
        Paintings
      </Link>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        {/* Image container for sizing */}
        <Platter />
      </div>
    </main>
  );
}
