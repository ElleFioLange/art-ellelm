import useScrollIndicator from "@/utils/useScrollIndicator";
import { Children, cloneElement, ReactElement, RefObject } from "react";

export default function Pictures({
  ref,
  pictures,
}: {
  ref: RefObject<HTMLDivElement | null>;
  pictures: ReactElement[];
}) {
  const showScroll = useScrollIndicator();

  const render = () =>
    // Using Children.map gets rid of a "key-missing" error
    Children.map(pictures, (_picture, i) => {
      const picture = _picture as ReactElement<{
        className: string;
        id: string;
      }>;

      // This returns a key-missing error from React, but this can be ignored
      // because the array is static, so key is unnecessary (and I find it abhorrent
      // to add another DOM element just to add a key that is unnecessary)
      return cloneElement(picture, {
        className: `object-contain min-w-full sm:h-full sm:py-4 max-sm:max-h-full max-sm:px-4 ${
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
        // Using ID is necessary for applying scroll from anywhere on the page to the pictures section
        id="pictures"
        className="relative min-h-60dvh w-full max-h-full sm:overflow-y-auto sm:overflow-x-hidden sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex"
      >
        {render()}
      </section>
    </>
  );
}
