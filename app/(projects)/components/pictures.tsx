import { ReactNode, RefObject } from "react";

export default function Pictures({
  ref,
  children,
}: {
  ref: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  return (
    <>
      <section
        ref={ref}
        // Using ID is necessary for applying scroll from anywhere on the page to the pictures section
        // Also for converting vertical scrolling to horizontal scrolling
        id="pictures"
        className="relative min-h-60dvh w-full max-h-full sm:overflow-y-auto sm:overflow-x-hidden sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex"
      >
        {children}
      </section>
    </>
  );
}
