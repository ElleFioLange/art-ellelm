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
import Logo from "./icons/logo";

const Links = () => {
  return (
    <>
      {["Image", "Cloudwatching", "Time-Space", "Paintings"].map((name, i) => (
        <Link
          key={name}
          style={{
            transform: "translateZ(15px) translate(-50%, -50%)",
            transformStyle: "preserve-3d",
          }}
          href={`/projects/${name.toLowerCase()}`}
          className={`absolute xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs top-${
            i % 2 ? "3" : "1"
          }/4 left-${i > 1 ? "1" : "3"}/4`}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

const Platter = () => {
  return (
    <>
      <div
        className="w-full h-full absolute bg-[radial-gradient(circle,_rgba(0,0,0,0)_15%,_rgba(0,0,0,1)_30%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,0.35)_60%,_rgba(0,0,0,0.15)_65%,_rgba(0,0,0,0)_70%)]"
        style={{
          transform: "translateZ(-40px) scale(1.08)",
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
          transform: "translateZ(-10px) scale(1.005)",
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
          transform: "translateZ(-5px) scale(0.975)",
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
    </>
  );
};

const ROTATION_RANGE = 32.5;

const Motion = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

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
      className="w-1/2 max-w-[50vh] relative"
    >
      <div
        className="w-full h-full absolute bg-fg bg-opacity-5 rounded-lg"
        style={{
          transform: "translateZ(-41px) scale(1.1)",
          transformStyle: "preserve-3d",
        }}
      />
      <Logo
        className="w-1/12 absolute text-bg fill-current top-1/2 left-1/2"
        style={{
          transform: "translateZ(-15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
      />
      <Platter />
      <Links />
      {/* {["Image", "Cloudwatching", "Time-Space", "Paintings"].map((name, i) => (
        <Link
          key={name}
          style={{
            transform: "translateZ(15px) translate(-50%, -50%)",
            transformStyle: "preserve-3d",
          }}
          href={`/projects/${name.toLowerCase()}`}
          className={`absolute xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs top-${
            i < 2 ? "1" : "3"
          }/4 left-3/4`}
        >
          {name}
        </Link>
      ))} */}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Motion />
    </main>
  );
}
