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

const MobileView = dynamic(() => import("./utils/mobile-view"), { ssr: false });

const Links = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full xl:text-2xl lg:text-xl md:text-lg *:-translate-x-1/2 *:-translate-y-1/2 *:absolute"
      style={{
        transform: "translateZ(15px)",
        transformStyle: "preserve-3d",
      }}
    >
      <Link href="/featured" className="top-[20%] left-[36%]">
        Featured
      </Link>
      <Link href="/about" className="top-[20%] left-[64%]">
        About
      </Link>
      <Link href="/contact" className="top-[39%] left-[80%]">
        Contact
      </Link>
      <Link href="/performance" className="top-[61%] left-[80%]">
        Performance
      </Link>
      <Link href="/design" className="top-[80%] left-[64%]">
        Design
      </Link>
      <Link href="/sculpture" className="top-[80%] left-[36%]">
        Sculpture
      </Link>
      <Link href="/photography" className="top-[61%] left-[20%]">
        Photography
      </Link>
      <Link href="/painting" className="top-[39%] left-[20%]">
        Painting
      </Link>
    </div>
  );
};

// Design
// Photography
// Performance
// Featured
//   Image
//   Cloudwatching
//   White Feather
//   Time-Space
// About
// Contact
// Paintings
// Sculpture

const Platter = () => {
  const loaded = useState(false);
  return (
    <>
      {loaded[0] && (
        <>
          {/* Background */}
          <div
            className="w-full h-full absolute bg-fg bg-opacity-5 rounded-lg"
            style={{
              transform: "translateZ(-41px) scale(1.08)",
              transformStyle: "preserve-3d",
            }}
          />
          {/* Shadow */}
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
        </>
      )}
      <Image
        src="/platter.png"
        className="object-contain"
        alt="Hard Drive Platter"
        style={{ transformStyle: "preserve-3d" }}
        width={2400}
        height={2400}
        onLoadingComplete={() => loaded[1](true)}
      />
    </>
  );
};

const ROTATION_RANGE = 32.5;

const Motion = ({ engine }: { engine: "mouse" | "gyro" | null }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove: MouseEventHandler = (e) => {
    if (engine !== "mouse") return;

    if (!ref.current) return [0, 0];

    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const mouseX = (e.clientX - left) * ROTATION_RANGE;
    const mouseY = (e.clientY - top) * ROTATION_RANGE;

    const rX = (mouseY / height - ROTATION_RANGE / 2) * -1;
    const rY = mouseX / width - ROTATION_RANGE / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    if (engine !== "mouse") return;

    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (engine === "gyro") {
      const handleOrientation = (e: DeviceOrientationEvent) => {
        if (!e.beta || !e.gamma) return;
        x.set(
          Math.max(Math.min(e.beta - 37.5, ROTATION_RANGE), -ROTATION_RANGE)
        );
        y.set(-Math.max(Math.min(e.gamma, ROTATION_RANGE), -ROTATION_RANGE));
      };

      window.addEventListener("deviceorientation", handleOrientation);

      return () =>
        window.removeEventListener("deviceorientation", handleOrientation);
    } else return () => {};
  }, [engine]);

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

const GyroPermission = ({
  callback,
}: {
  callback: (access: PermissionState) => void;
}) => {
  const show = useState(false);

  useEffect(() => {
    const dme = DeviceMotionEvent as {
      requestPermission?: () => Promise<PermissionState>;
    };

    if (typeof dme.requestPermission === "function") {
      show[1](true);
    } else {
      callback("granted");
    }
  }, []);

  const onClick = async () => {
    // Typescript
    const dme = DeviceMotionEvent as {
      requestPermission?: () => Promise<PermissionState>;
    };

    if (typeof dme.requestPermission !== "function") return;

    const access = await dme.requestPermission();
    show[1](false);
    callback(access);
  };

  console.log(show[0]);

  return (
    <div
      className={`w-full h-[25dvh] min-h-min bottom-0 left-0 fixed bg-bg bg-opacity-50 text-center p-8 transition-opacity duration-200 ${
        show[0] ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h2 className="font-cormorant pb-2">
        This page is more beautiful when it can feel your movement
      </h2>
      <div className="grid grid-cols-2">
        <button
          className="text-red"
          onClick={() => {
            callback("denied");
            show[1](false);
          }}
        >
          No thanks
        </button>
        <button onClick={onClick} className="text-green">
          Accept
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const engine = useState<"mouse" | "gyro" | null>("mouse");

  const gyroCallback = (access: PermissionState) => {
    if (access === "granted") engine[1]("gyro");
    else if (access === "denied") engine[1](null);
  };

  return (
    <main className="w-full h-full flex justify-center items-center animate-fade-in">
      <Motion engine={engine[0]} />
      <MobileView>
        <GyroPermission callback={gyroCallback} />
      </MobileView>
    </main>
  );
}
