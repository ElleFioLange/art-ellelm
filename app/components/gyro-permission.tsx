import { useEffect, useState } from "react";

export default ({
  callback,
}: {
  callback: (access: "granted" | "denied") => void;
}) => {
  const show = useState(false);

  useEffect(() => {
    // Typescript
    const dme = DeviceMotionEvent as {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    // show[1](dme.requestPermission ? true : false);
  }, []);

  const onClick = () => {
    // Typescript
    const dme = DeviceMotionEvent as {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    if (typeof dme.requestPermission !== "function") return;

    dme.requestPermission().then((access) => {
      show[1](false);
      callback(access);
    });
  };

  return (
    <div
      className={`w-full h-full top-0 left-0 fixed bg-bg flex justify-center items-center flex-col text-center font-cormorant p-8 gap-8 transition-opacity duration-200`}
    >
      <h1>This page is more beautiful when it can sense your movement</h1>
      <button onClick={onClick}>Accept</button>
      <button onClick={() => show[1](false)}>No thanks</button>
    </div>
  );
};
