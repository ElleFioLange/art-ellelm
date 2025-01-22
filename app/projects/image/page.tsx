import Image from "next/image";

// Underscore so as not to overlap with next/imagef
export default function _Image() {
  return (
    <>
      <section className="">
        <h1>Image</h1>
        <h2>Mirros and platters nblah alsdkf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section
        id="pictures"
        className="h-full sm:overflow-y-auto  max-sm:overflow-x-auto max-sm:flex"
      >
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
        <Image src="/platter.png" alt="test" width={1000} height={1000} />
      </section>
    </>
  );
}
