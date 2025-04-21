// components/Licenses/LicenseItem.tsx
import HeroSection from "@/components/cards/hero-section";
import React from "react";

export type LicenseItemProps = {
  logo: string;
  title: string;
  description: string;
};

const certifications: LicenseItemProps[] = [
  {
    logo: "/images/licenses/iso.png",
    title: "ISO 9001:2015 CERTIFIED",
    description:
      "Provision of Logistics, Distribution and Supply of Chemicals, Solvents, Additives and Polymers",
  },
  {
    logo: "/images/licenses/crisil.png",
    title: "CRISIL CERTIFIED",
    description:
      'Short Term: A2+ & Long Term: A- (Stable). Our Company enjoys a rating of "A Category" with CRISIL, A Standard and Poor Company.',
  },
];

const licenses: LicenseItemProps[] = [
  {
    logo: "/images/licenses/fda.png",
    title: "FOOD AND DRUG LICENSE (FDA APPROVED)",
    description: "Poison Act, 1919 the Maharashtra Poisons Rules, 1972",
  },
  {
    logo: "/images/licenses/solvent.png",
    title: "SOLVENT ORDER LICENCE",
    description: "The District Magistrate Kachchh, Bhuj",
  },
  {
    logo: "/images/licenses/fssai.png",
    title: "FSSAI",
    description: "Food Safety & Standards Authority of India",
  },
  {
    logo: "/images/licenses/poison.png",
    title: "POISON LICENSE",
    description:
      "License/Permit under the Poisons Act 1952 is issued by the Pharmacy Enforcement at the State level.",
  },
  {
    logo: "/images/licenses/narcotics.png",
    title: "NARCOTICS LICENSE",
    description:
      "Permits issued by the Collectors concerned to Import / Export Narcotic Drugs.",
  },
];

const LicenseItem: React.FC<LicenseItemProps> = ({
  logo,
  title,
  description,
}) => (
  <div className="flex items-start gap-4 p-4 border-b-2 last:border-b-0 md:last:border-b-2">
    <img src={logo} alt={title} className="w-16 h-16 object-contain shrink-0" />
    <div className="space-y-2">
      <h4 className="font-bold text-muted-foreground text-sm md:text-base">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm md:text-base">
        {description}
      </p>
    </div>
  </div>
);

const LicenseSection = () => (
  <div className="max-w-6xl mx-auto px-6 py-16">
    <div className="mb-12 flex flex-col items-center gap-4">
      <HeroSection title="CERTIFICATIONS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <LicenseItem key={idx} {...cert} />
        ))}
      </div>
    </div>
    <div className="mb-12 flex flex-col items-center gap-4">
      <HeroSection title="LICENSES" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {licenses.map((license, idx) => (
          <LicenseItem key={idx} {...license} />
        ))}
      </div>
    </div>
  </div>
);

export default LicenseSection;
