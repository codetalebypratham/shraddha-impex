// hooks/useGsapFadeInScroll.ts
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeInScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
  options?: { start?: string; end?: string; delay?: number }
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: options?.start || "top bottom",
        end: options?.end || "bottom top",
        scrub: 4,
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });

    timeline
      .fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: options?.delay || 0,
          ease: "power2.out",
        }
      )
      .to(element, { opacity: 0, y: -50, duration: 1, ease: "power2.in" });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [ref, options]);
};
