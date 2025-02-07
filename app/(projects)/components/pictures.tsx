import useScrollIndicator from "@/utils/useScrollIndicator";
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
} from "react";

export default function Pictures({
  ref,
  children,
}: {
  ref: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  const showScroll = useScrollIndicator();

  const renderChildren = useCallback(() => {
    return Children.map(children, (_child, i) => {
      const child = _child as ReactElement<{
        className: string;
        id: string;
      }>;

      return cloneElement(child, {
        className: `object-contain w-full sm:h-full max-sm:max-h-full max-sm:px-4 ${
          i === 0 && showScroll
            ? "sm:animate-indicate-scroll-y max-sm:animate-indicate-scroll-x"
            : ""
        }`,
        id: `image-${i}`,
      });
    });
  }, [children, showScroll]);
  return (
    <>
      <section
        ref={ref}
        // Using ID is necessary for applying scroll from anywhere on the page to the pictures section
        // Also for converting vertical scrolling to horizontal scrolling
        id="pictures"
        className="relative min-h-60dvh w-full max-h-full sm:overflow-y-auto sm:overflow-x-hidden sm:no-scrollbar sm:h-full max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:flex"
      >
        {renderChildren()}
      </section>
    </>
  );
}
