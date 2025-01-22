import Link from "next/link";

export default function _404() {
  return (
    <main className="w-full h-full text-center flex justify-center items-center flex-col gap-8 p-8">
      <h1>Looks like you're lost</h1>
      <Link href="javascript:history.back()">Go back a step</Link>
      <Link href="/">Head home</Link>
    </main>
  );
}
