import useScrollIndicator from "@/utils/useScrollIndicator";
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  RefObject,
} from "react";

export default function Pictures({
  ref,
  children,
}: {
  ref: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  const showScroll = useScrollIndicator();

  const renderChildren = () =>
    Children.toArray(children)
      .filter((child) => {
        if (
          !child ||
          typeof child !== "object" ||
          Symbol.iterator in child ||
          "then" in child
        )
          return false;

        switch (child.type) {
          case "h1":
          case "h2":
          case "p":
            return false;
        }

        return true;
      })
      .map((_picture, i) => {
        const picture = _picture as ReactElement<{
          className: string;
          id: string;
        }>;

        // This returns a key-missing error from React, but this can be ignored
        // because the array is static, so key is unnecessary (and I find it abhorrent
        // to add another DOM element just to add a key that is unnecessary)
        return cloneElement(picture, {
          className: `object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4 ${
            i === 0 && showScroll
              ? "sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
              : ""
          }`,
          id: `image-${i}`,
        });
      });

  return (
    <>
      <section
        ref={ref}
        // Using ID is necessary for applying scroll from anywhere on the page to the
        // pictures section, also for converting vertical scrolling to horizontal scrolling
        id="pictures"
        className="relative min-h-60dvh w-full max-h-full sm:overflow-y-auto sm:overflow-x-hidden sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex"
      >
        {renderChildren()}
      </section>
    </>
  );
}
