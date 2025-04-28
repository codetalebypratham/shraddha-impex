import { useRef, useEffect, useState } from "react";

const OurPartners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let scrollAmount = 0;
    let intervalId: NodeJS.Timeout;

    const startScrolling = () => {
      const container = containerRef.current;
      if (!container) return;

      intervalId = setInterval(() => {
        if (!isTabVisible || isHovering) return;

        scrollAmount += 0.2;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }, 10);
    };

    startScrolling();

    return () => {
      clearInterval(intervalId);
    };
  }, [isTabVisible, isHovering]);

  const partners = [
    "MMT Polypack",
    "IDMC Limited",
    "Trufill Polymers",
    "Shreya India Private Limited - Dadra",
    "Sun Plast",
    "EPC Industries Limited",
    "Shraddha Industries",
    "Shri Khemisathi Plastics Private Limited",
    "Shrinath Plastopack",
    "Raju Engineering",
    "Veer Plastic Pvt. Ltd.",
  ];

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap no-scrollbar transition-all"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-28 bg-accent rounded-xl flex items-center justify-center text-center px-2 text-sm font-medium shadow text-wrap"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
