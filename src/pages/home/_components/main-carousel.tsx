import { useIsDesktop } from "@/hooks/useMedia";
import { useEffect, useRef, useState } from "react";

const cardsData = [
  {
    image:
      "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=",
    content: ["Left card 1 content", "Right card 1 content"],
  },
  {
    image:
      "https://images.freeimages.com/image/previews/fa5/spiraling-abstract-backdrop-5690801.jpg?fmt=webp&w=500",
    content: ["Left card 2 content", "Right card 2 content"],
  },
  {
    image:
      "https://images.freeimages.com/variants/EH9hhx3qiNr99B1G98couYFq/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500",
    content: ["Left card 3 content", "Right card 3 content"],
  },
];

export default function FlippingCard() {
  const [rotation, setRotation] = useState(0);
  const [fade, setFade] = useState(false);
  const [cardsMove, setCardsMove] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const timeouts = useRef<NodeJS.Timeout[]>([]);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const isDesk = useIsDesktop();

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    if (interval.current) clearInterval(interval.current);
  };

  const animate = () => {
    const update = () => {
      setCurrentIndex((prev) => (prev + 1) % cardsData.length);
      setFade(true);
      setCardsMove(true);
    };

    update();
    timeouts.current.push(
      setTimeout(() => {
        setFade(false);
        setCardsMove(false);

        timeouts.current.push(
          setTimeout(() => {
            setRotation((r) => r + 180);
            timeouts.current.push(setTimeout(update, 1000));
          }, 300)
        );
      }, 1500)
    );

    interval.current = setInterval(() => {
      setFade(false);
      setCardsMove(false);

      timeouts.current.push(
        setTimeout(() => {
          setRotation((r) => r + 180);
          timeouts.current.push(setTimeout(update, 1000));
        }, 300)
      );
    }, 5000);
  };

  useEffect(() => {
    const onVisible = () => {
      clearTimers();
      if (document.visibilityState === "visible") animate();
    };

    animate();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearTimers();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <div className="px-4 sm:px-10 w-full h-fit mt-16 lg:px-20">
      <div className="aspect-video w-full md:h-[400px] lg:h-[650px] mx-auto relative perspective-distant">
        <div
          className="w-full h-full border rounded-lg bg-accent shadow-xl transition-transform duration-700"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full relative">
            {isDesk && cardsData[currentIndex] && (
              <>
                {[
                  "left-0 2xl:left-[-40px]  2xl:-translate-x-1/2",
                  "right-0 2xl:-right-[40px]  2xl:translate-x-1/2",
                ].map((pos, i) => {
                  const topValue =
                    i === 0
                      ? "top-[33%] -translate-y-1/2"
                      : "bottom-[33%] translate-y-1/2";

                  const defaultValue =
                    i === 0
                      ? "top-0 -translate-y-1/2"
                      : "bottom-0 translate-y-1/2";

                  return (
                    <div
                      key={i}
                      className={`absolute w-80 h-20 bg-muted/20 text-foreground font-bold text-center flex items-center justify-center transition-all duration-700 ease-in-out z-10 backdrop-blur-3xl rounded-md drop-shadow-2xl border ${
                        cardsMove
                          ? `${topValue} opacity-100 delay-[${i * 200}ms]`
                          : `${defaultValue} opacity-0`
                      } ${pos}`}
                    >
                      {cardsData[currentIndex].content[i]}
                    </div>
                  );
                })}
              </>
            )}

            <div className="absolute inset-0 flex items-center justify-center h-full w-full">
              <div
                className={`transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                } flex flex-col items-center text-center h-full w-full`}
              >
                <img
                  src={cardsData[currentIndex].image}
                  alt={`Card ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
