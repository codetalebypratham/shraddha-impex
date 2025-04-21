import { cn } from "@/lib/utils";
import React from "react";
import HeroSection from "./hero-section";
import HeroDescription from "./hero-description";

const SectionWrapper = ({
  heroTitle,
  heroDescription,
  children,
  bg,
}: {
  heroTitle?: string;
  heroDescription?: string;
  children: React.ReactNode;
  bg?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-fit space-y-6 py-8 md:py-10",
        bg ? "bg-accent/20 rounded-md" : ""
      )}
    >
      <div className="flex items-center justify-center flex-col text-center">
        <div className="max-w-xl mx-auto space-y-4">
          {heroTitle && <HeroSection title={heroTitle} />}
          {heroDescription && <HeroDescription description={heroDescription} />}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-fit">
        <div className="w-full h-fit">{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
