"use client";

import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const open = useState(true);
  const sendState = useState<
    "unsent" | "pending" | "sending" | "sent" | "error"
  >("unsent");
  const drawing = useState<CanvasPath[]>([]);

  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendPending = () => {
    sendState[1]("pending");
    inputRef.current?.focus();
  };

  const handleSend = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (inputRef.current?.reportValidity()) {
      sendState[1]("sending");
      open[1](false);

      // The png string is prepended with data:image/png;base64, so slice at 22
      const png = ((await canvasRef.current?.exportImage("png")) || "").slice(
        22
      );
      const email = inputRef.current?.value;

      const start = Date.now();
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ png, email }),
      });
      const end = Date.now();

      console.log(await response.json());

      // Make sure there's at least a 1.5 second delay so the animations feel natural
      if (end - start < 1000) {
        setTimeout(() => {
          if (response.status === 200) sendState[1]("sent");
          else sendState[1]("error");
        }, 1500 - (end - start));
      }
    }
  };

  return (
    <main className="font-cormorant w-full h-full flex justify-center gap-2 items-center flex-col p-4">
      To get in contact, please email me at
      <a href="mailto:elle.fio.lange@gmail.com">elle.fio.lange@gmail.com</a>
      or you can send me a message below:
      <div
        className={`w-full h-px bg-fg max-w-xl ease-in-out transition-all duration-1000 ${
          open[0] ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`w-full select-none max-w-xl h-full ${
          open[0] ? "max-h-96 opacity-100 mb-0" : "max-h-0 opacity-0 -mt-4"
        } transition-all duration-1000 ease-in-out relative`}
      >
        <ReactSketchCanvas
          ref={canvasRef}
          // Raisin Black
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
      <div
        className={`font-cormorant-uni py-1 px-1 flex justify-center items-center rounded-md transition-all duration-300
          ${sendState[0] === "pending" ? "w-64 gap-1" : "w-24 gap-0"}
          ${sendState[0] === "sent" ? "animate-flash" : ""}
          ${
            sendState[0] === "error" ? "animate-flash bg-red" : "bg-accent-bg"
          }`}
      >
        <form
          className={`h-full ${
            sendState[0] === "pending"
              ? "opacity-100 pointer-events-auto w-full"
              : "opacity-0 pointer-events-none w-0"
          }`}
          onSubmit={handleSend}
        >
          <input
            className={`font-cormorant bg-accent-bg rounded-sm w-full transition-all
              ${sendState[0] === "pending" ? "px-1 mr-1" : "px-0 mr-0"}`}
            ref={inputRef}
            type="email"
            placeholder="Email..."
          />
        </form>
        <button
          className={`text-nowrap transition-all duration-300 rounded-sm
            ${
              sendState[0] === "pending"
                ? "px-4 bg-accent-fg w-min"
                : `px-0 w-full 
              ${sendState[0] === "error" ? "text-baby-powder" : ""}`
            }`}
          onClick={(e) => {
            e.preventDefault();
            if (sendState[0] === "unsent") {
              sendPending();
            } else if (sendState[0] === "pending") {
              handleSend();
            }
          }}
          type="submit"
        >
          {sendState[0] === "unsent" ? "Send >" : ""}
          {sendState[0] === "pending" ? ">" : ""}
          {sendState[0] === "sending" ? "Sending..." : ""}
          {sendState[0] === "sent" ? "Sent!" : ""}
          {sendState[0] === "error" ? "Error :(" : ""}
        </button>
      </div>
    </main>
  );
}
