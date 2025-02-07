import {
  Children,
  createRef,
  ReactNode,
  RefObject,
  useMemo,
  useRef,
} from "react";
import useViewport from "@/utils/useViewport";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Timeline } from "@/utils/types";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Text({
  children,
  picturesRef,
}: {
  children: ReactNode;
  picturesRef: RefObject<HTMLDivElement | null>;
}) {
  // Tracked to recalculate GSAP if layout changes from vertical to horizontal
  const { viewport } = useViewport();

  // Targets for GSAP
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const contentElements = {
    title: titleRef,
    subtitle: subtitleRef,
    paragraph: paragraphRef,
  };

  const keyframes = useMemo(() => {
    const keyframes: {
      title?: string;
      subtitle?: string;
      paragraph?: string;
    }[] = [{}];
    var imgIndex = 0;

    // Iterates through children
    // If child is h1, h2, or p, add the content to the current keyframe
    // Else add a new keyframe
    Children.forEach(children, (child) => {
      if (
        !child ||
        typeof child !== "object" ||
        Symbol.iterator in child ||
        "then" in child
      )
        return;

      // This ends up being undefined if the child is an image
      // but it is only used if it is not an image
      const { children: content } = child.props as {
        children:
          | string
          // <p> supports <a> and <br> tags
          | (
              | string
              | { type: "a"; props: { href: string; children: string } }
              | { type: "br" }
            )[];
      };

      switch (child.type) {
        case "h1": {
          keyframes[imgIndex].title = content as string;
          break;
        }
        case "h2": {
          keyframes[imgIndex].subtitle = content as string;
          break;
        }
        case "p": {
          if (Array.isArray(content)) {
            // Parses the different possible children and converts each to a string form
            // then array reduces into one string
            keyframes[imgIndex].paragraph = content
              .map((item) => {
                if (typeof item === "string") return item;
                else if (item.type === "a")
                  return `<a href=${item.props.href}>${item.props.children}</a>`;
                else return "<br/>";
              })
              .reduce((a, b) => a + b);
          } else keyframes[imgIndex].paragraph = content;
          break;
        }
        default: {
          keyframes.push({});
          imgIndex += 1;
        }
      }
    });

    // There will be an extra object at the end, so pop it off
    keyframes.pop();

    return keyframes;
  }, [children]);

  const timelines = useRef<RefObject<Timeline | null>[]>(
    Array(keyframes.length).fill(null)
  );

  // snapTL is separate so that scroll will snap to every
  // item instead of just items with keyframes
  const snapTl = useRef<Timeline>(null);

  useGSAP(
    () => {
      if (!viewport.w) return;
      const horizontal = viewport.w < 640;

      // onSnapComplete add a little animation or sound? Nintendo Switch sound / something satisfying?
      snapTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#image-0",
          start: "center center",
          endTrigger: `#image-${keyframes.length - 1}`,
          end: "center center",
          scroller: picturesRef.current,
          horizontal,
          snap: {
            snapTo: 1 / (keyframes.length - 1),
            duration: 1,
            delay: 0.05,
            ease: "elastic.inOut(0.85, 1.5)",
            directional: false,
          },
        },
      });

      // This can probably be simplified to a single timeline
      for (let i = 0; i < keyframes.length; i++) {
        timelines.current[i] = createRef<Timeline>();
        const tl = timelines.current[i];
        const keyframe = keyframes[i];

        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: `#image-${i}`,
            scroller: picturesRef.current,
            start: horizontal ? "left right" : "top bottom",
            horizontal,
            end: "center center",
            scrub: 0.25,
          },
        });

        for (const [section, text] of Object.entries(keyframe)) {
          if (section === "step") continue;

          // Disgusting type casting here sorry
          const element =
            contentElements[section as keyof typeof contentElements].current;

          tl.current.to(
            element,
            {
              text: text as string,
              duration: 2,
            },
            0
          );
        }
      }
    },
    { scope: picturesRef, dependencies: [viewport] }
  );

  const { title, subtitle, paragraph } = keyframes[0];

  return (
    <>
      <section
        // Added this to get rid of a react "key missing" error
        // I have no idea why this is necessary?
        // React is going to send me to the psych ward
        key="text"
        className="sm:py-8 max-sm:mx-4 overflow-auto max-h-full"
      >
        <h1 ref={titleRef} className="leading-none">
          {title}
        </h1>
        <h2 ref={subtitleRef} className="leading-none">
          {subtitle}
        </h2>
        <div className="w-full h-2" />
        <p ref={paragraphRef}>{paragraph}</p>
      </section>
      <div className="sm:w-px sm:h-3/4 sm:max-h-[40rem] max-sm:w-3/4 max-sm:h-px bg-fg opacity-20 place-self-center" />
    </>
  );
}
