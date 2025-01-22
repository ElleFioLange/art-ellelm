"use client";

import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import Logo from "./icons/logo";
import dynamic from "next/dynamic";
import { useDeviceOrientation } from "./utils/useOrientation";
import { useMobileOrientation } from "react-device-detect";

const MobileView = dynamic(() => import("./utils/mobile-view"), { ssr: false });

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
          className={`absolute xl:text-2xl lg:text-xl md:text-lg ${
            i % 2 ? "top-3/4" : "top-1/4"
          } ${i > 1 ? "left-1/4" : "left-3/4"}`}
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

    // Working with radius because we can assume circle
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

  const { orientation, requestAccess } = useDeviceOrientation();

  useEffect(() => {
    requestAccess();
  });

  useEffect(() => {
    console.log(orientation);
    if (orientation && orientation.beta && orientation.gamma) {
      x.set(orientation.beta - 30);
      y.set(-orientation.gamma);
    }
  });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="w-3/4 max-w-[60vh] relative"
    >
      {/* <div
        className="w-full h-full absolute bg-fg bg-opacity-5 rounded-full"
        style={{
          transform: "translateZ(-41px) scale(1.25)",
          transformStyle: "preserve-3d",
        }}
      /> */}
      <Logo
        className="w-1/12 absolute text-fg opacity-5 fill-current top-1/2 left-1/2"
        style={{
          transform: "translateZ(-15px) translate(-50%, -50%)",
          transformStyle: "preserve-3d",
        }}
      />
      <Platter />
      <Links />
    </motion.div>
  );
};

// const GyroPermission = ({
//   callback,
// }: {
//   callback: (access: "granted" | "denied") => void;
// }) => {
//   const show = useState(false);
//   const test = useState("testing");

//   useEffect(() => {
//     // Typescript
//     const dme = DeviceMotionEvent as {
//       requestPermission?: () => Promise<"granted" | "denied">;
//     };

//     if (typeof dme.requestPermission == "function")
//       dme.requestPermission().then((access) => {
//         test[1](access);
//       });

//     show[1](dme.requestPermission ? true : false);
//   }, []);

//   const onClick = () => {
//     // Typescript
//     const dme = DeviceMotionEvent as {
//       requestPermission?: () => Promise<"granted" | "denied">;
//     };

//     if (typeof dme.requestPermission !== "function") return;

//     dme.requestPermission().then((access) => {
//       show[1](false);
//       callback(access);
//     });
//   };

//   return (
//     <div
//       className={`w-full h-full top-0 left-0 fixed bg-bg flex justify-center items-center flex-col text-center font-cormorant p-8 gap-8 transition-opacity duration-200 ${
//         show[0] ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//     >
//       <h1>{test[0]}</h1>
//       {/* <h1>This page is more beautiful when it can sense your movement</h1> */}
//       <button onClick={onClick}>Accept</button>
//       <button onClick={() => show[1](false)}>No thanks</button>
//     </div>
//   );
// };

export default function Home() {
  const gyroCallback = (access: "granted" | "denied") => {};

  return (
    <main className="w-full h-full flex justify-center items-center">
      <Motion />
      <MobileView>
        {/* <GyroPermission callback={gyroCallback} /> */}
      </MobileView>
    </main>
  );
}
