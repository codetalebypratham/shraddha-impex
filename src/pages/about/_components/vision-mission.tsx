// components/VisionMission/Vision.tsx
import React from "react";
import { CheckSquare, LucideIcon, Settings, Users } from "lucide-react";
import HeroSection from "@/components/cards/hero-section";
import HeroDescription from "@/components/cards/hero-description";
const values = [
  {
    title: "QUALITY SERVICES",
    text: "We are committed to ensuring that our products and services conform to quality standards to deliver efficiency.",
  },
  {
    title: "RELIABILITY",
    text: "Our specialists deliver dependable products and services across diverse industries.",
    highlighted: true,
  },
  {
    title: "FELLOWSHIP",
    text: "We foster collaboration to build strong, long-lasting enterprises through innovative processes.",
  },
];

const missionPoints = [
  {
    icon: CheckSquare,
    text: "We aspire to continuously grow by 20% – 25% YoY irrespective of market conditions.",
  },
  {
    icon: Settings,
    text: "Develop new business processes and constantly innovate by keeping up with the latest available technology.",
  },
  {
    icon: CheckSquare,
    text: "Enhance customer experience by providing competitive prices, value-addition services and up-to-date market information.",
  },
  {
    icon: Users,
    text: "Build a diverse and creative team in order to have a positive impact on social communities.",
  },
];
const Vision = () => (
  <div className="mb-16 text-center space-y-10">
    <HeroSection title="VISION" />
    <HeroDescription
      description={`“To be the leading chemical distributor locally and globally by providing
      best-in-class quality services and building strong relationships with our
      partners whilst upholding our core values.”`}
    />
  </div>
);

type MissionPointProps = {
  icon: LucideIcon;
  text: string;
};

const MissionPoint: React.FC<MissionPointProps> = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-4 min-h-20 border p-4 rounded-lg">
    <Icon className="w-5 h-5 shrink-0 mt-2" />
    <p className="text-muted-foreground">{text}</p>
  </div>
);

const Mission = () => (
  <div className="mb-20 text-center space-y-12">
    <HeroSection title="MISSION" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {missionPoints.map((point, idx) => (
        <MissionPoint key={idx} {...point} />
      ))}
    </div>
  </div>
);

type CoreValueCardProps = {
  title: string;
  text: string;
};

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, text }) => (
  <div
    className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition text-center`}
  >
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{text}</p>
  </div>
);

const CoreValues = () => (
  <div className="text-center space-y-11">
    <HeroSection title="CORE VALUES" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {values.map((val, idx) => (
        <CoreValueCard key={idx} {...val} />
      ))}
    </div>
  </div>
);

const VisionMission = () => (
  <div className="max-w-6xl mx-auto px-6 py-16">
    <Vision />
    <Mission />
    <CoreValues />
  </div>
);

export default VisionMission;
