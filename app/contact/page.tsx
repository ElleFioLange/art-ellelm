"use client";

import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";

import useViewport from "@/utils/useViewport";
import useTheme from "@/utils/useTheme";
import { useRef, useState } from "react";

export default function Contact() {
  const open = useState(true);
  const sent = useState(false);
  const drawing = useState<CanvasPath[]>([]);

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const { w: _w, h: _h } = useViewport();
  // This gives w and h as 0 if they are undefined
  const { w, h } = { w: _w || 0, h: _h || 0 };

  const theme = useTheme();

  const handleSend = () => {
    open[1](false);
    setTimeout(() => sent[1](true), 1000);
  };

  return (
    <main className="font-cormorant w-full h-full flex justify-center gap-2 items-center flex-col p-4">
      To get in contact, please email me at{" "}
      <a href="mailto:elle.fio.lange@gmail.com">elle.fio.lange@gmail.com</a> or
      you can send me a message below:
      <div
        className={`w-full h-px bg-fg max-w-xl ease-in-out transition-all duration-1000 ${
          open[0] ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`w-full max-w-xl h-full ${
          open[0] ? "max-h-96 opacity-100 mb-0" : "max-h-0 opacity-0 -mt-4"
        } transition-all duration-1000 ease-in-out relative`}
      >
        <ReactSketchCanvas
          ref={canvasRef}
          // Raisin bBlack
          strokeColor="rgb(32 34 36)"
          // Baby Powder
          canvasColor="rgb(251 249 244)"
          onChange={drawing[1]}
        />
        {drawing[0].length ? (
          <button
            onClick={canvasRef.current?.undo}
            className={`rounded-md bg-raisin-black text-baby-powder py-1 px-4 flex justify-center w-min h-min items-center absolute bottom-4 right-4 ${
              open[0] ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
          >
            Undo
          </button>
        ) : null}
      </div>
      <button
        className={`font-cormorant-uni bg-accent-bg py-1 flex justify-center items-center rounded-md ${
          sent[0] ? "animate-flash px-5" : "px-4"
        }`}
        onClick={handleSend}
      >
        {sent[0] ? "Sent!" : "Send >"}
      </button>
      {/* {sent[0] && } */}
    </main>
  );
}
