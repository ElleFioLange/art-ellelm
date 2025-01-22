import type { Metadata } from "next";
import { Cormorant_Unicase, Cormorant } from "next/font/google";
import "swiper/css";
import "./css.css";

const cormorant = Cormorant({
  weight: "300",
  subsets: ["latin"],
  variable: "--cormorant",
});

const cormorant_unicase = Cormorant_Unicase({
  weight: ["300", "700"],
  subsets: ["latin"],
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
      className={`${cormorant_unicase.className} ${cormorant.variable}`}
    >
      {/* dvh = dynamic view height, accomodates url bar for mobile */}
      <body className="h-[100dvh]">{children}</body>
    </html>
  );
}
