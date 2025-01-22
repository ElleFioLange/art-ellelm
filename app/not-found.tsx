"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function _404() {
  const router = useRouter();
  return (
    <main className="w-full h-full text-center flex justify-center items-center flex-col gap-8 p-8">
      <h1>Looks like you're lost</h1>
      <a onClick={() => router.back()}>Go back a step</a>
      <Link href="/">Head home</Link>
    </main>
  );
}
