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
      <div className="bg-fg sm:h-1/3 sm:w-px max-sm:w-2/3 max-sm:h-px place-self-center" />
      <section
        ref={ref}
        // Using ID is necessary for applying scroll from anywhere on the page to the pictures section
        // Also for converting vertical scrolling to horizontal scrolling
        id="pictures"
        className="relative min-h-0 max-h-full sm:overflow-y-auto sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex"
      >
        {children}
      </section>
    </>
  );
}
