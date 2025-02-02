import type { Metadata } from "next";
import { Cormorant_Unicase, Cormorant } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./css.css";
import Nav from "@/components/nav";

gsap.registerPlugin(useGSAP);

const cormorant = Cormorant({
  weight: "300",
  subsets: ["latin"],
  variable: "--cormorant",
});

const cormorant_unicase = Cormorant_Unicase({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--cormorant-unicase",
});

// Mute logs in PROD
if (process.env.NODE_ENV === "production") console.log = () => {};

export const metadata: Metadata = {
  title: "Elle",
  description: "Art - Elle Fiorentino-Lange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant_unicase.className} ${cormorant_unicase.variable} ${cormorant.variable}`}
    >
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
