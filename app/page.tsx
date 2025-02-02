"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/icons/logo";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MobileView = dynamic(() => import("../utils/mobile-view"), {
  ssr: false,
});

const Links = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full xl:text-2xl lg:text-xl md:text-lg *:no-underline hover:*:underline *:-translate-x-1/2 *:-translate-y-1/2 *:absolute transform-3d"
      style={{
        transform: "translateZ(15px)",
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
      <Link href="/paintings" className="top-[39%] left-[20%]">
        Paintings
      </Link>
    </div>
  );
};

const Platter = () => {
  const loaded = useState(false);
  return (
    <>
      {loaded[0] && (
        <>
          {/* Background */}
          <div
            className="w-full h-full absolute bg-fg bg-opacity-5 rounded-lg transform-3d"
            style={{
              transform: "translateZ(max(-20vw, -25dvh)) scale(1.1)",
            }}
          />
          {/* Shadow */}
          <div
            className="w-full h-full absolute bg-[radial-gradient(circle,_rgba(0,0,0,0)_15%,_rgba(0,0,0,0.4)_30%,_rgba(0,0,0,0.4)_50%,_rgba(0,0,0,0.35)_60%,_rgba(0,0,0,0.15)_65%,_rgba(0,0,0,0)_70%)] transform-3d"
            style={{
              transform: "translateZ(max(-20vw, -25dvh)) scale(1.08)",
            }}
          />
          {/* Adds depth to outer edge */}
          <Image
            src="/platter.png"
            className="absolute brightness-50 transform-3d"
            alt="Hard Drive Platter"
            width={2400}
            height={2400}
            style={{
              transform: "translateZ(max(-2.5vw, -3dvh)) scale(1.005)",
            }}
          />
          {/* Adds depth to inner edge */}
          <Image
            src="/platter.png"
            className="absolute brightness-50 transform-3d"
            alt="Hard Drive Platter"
            width={2400}
            height={2400}
            style={{
              transform: "translateZ(max(-1.25vw, -1.5vdh)) scale(0.975)",
            }}
          />
        </>
      )}
      {/* Main platter image */}
      <Image
        priority
        src="/platter.png"
        className="transform-3d drop-shadow-lg"
        alt="Hard Drive Platter"
        width={2400}
        height={2400}
        onLoad={() => loaded[1](true)}
      />
    </>
  );
};

const Motion = ({ engine }: { engine: "mouse" | "gyro" | null }) => {
  const ROTATION_RANGE = 30;

  const ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: ref });

  // Mouse movement handler
  const handleMouseMove = contextSafe((e: MouseEvent) => {
    if (engine !== "mouse" || !ref.current) return;

    const {
      offsetWidth: width,
      offsetHeight: height,
      offsetLeft: left,
      offsetTop: top,
    } = ref.current;

    const mouseX = (e.clientX - left) / width;
    const mouseY = (e.clientY - top) / height;

    // handleMouseMove seems to be triggering when the mouse isn't actually over the element?
    // Not sure why, but this should fix it
    if (0 > mouseX || 0 > mouseY || mouseX > 1 || mouseY > 1) return;

    const rotationX = (mouseY * ROTATION_RANGE - ROTATION_RANGE / 2) * -1;
    const rotationY = mouseX * ROTATION_RANGE - ROTATION_RANGE / 2;

    gsap.to(ref.current, {
      rotationX,
      rotationY,
      duration: 3,
      ease: "elastic.out(1.2, 0.5)",
    });
  });

  // Reset function to return card to neutral position
  const resetRotation = contextSafe(() => {
    gsap.to(ref.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 3,
      ease: "elastic.out(1.2, 0.5)",
    });
  });

  // Mouse leave handler
  const handleMouseLeave = contextSafe(() => {
    if (engine !== "mouse") return;
    resetRotation();
  });

  // Gyroscope handler
  useGSAP(() => {
    // Phones/tablets usually held ~30deg
    const BETA_REST_ANGLE = 30;

    if (!ref.current || engine !== "gyro") return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (engine !== "gyro" || !e.beta || !e.gamma) return;

      const rotationX = Math.max(
        Math.min(e.beta - BETA_REST_ANGLE, ROTATION_RANGE),
        -ROTATION_RANGE
      );
      const rotationY = -Math.max(
        Math.min(e.gamma, ROTATION_RANGE),
        -ROTATION_RANGE
      );

      gsap.to(ref.current, {
        rotationX,
        rotationY,
        duration: 3,
        ease: "elastic.out(1.2, 0.5)",
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    // Cleanup
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [engine]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-3/4 max-w-[60dvh] relative transform-3d will-change-transform"
    >
      <Logo
        className="w-1/12 absolute text-fg opacity-5 fill-current top-1/2 left-1/2 transform-3d"
        style={{
          transform: "translateZ(max(-3.75vw, -4.5dvh)) translate(-50%, -50%)",
        }}
      />
      <Platter />
      <Links />
    </div>
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

  // useEffect(() => localStorage.setItem("shown-scroll", ""));

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
