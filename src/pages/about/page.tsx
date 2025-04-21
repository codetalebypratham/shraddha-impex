import SectionWrapper from "@/components/cards/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

import {
  UserRound,
  Lightbulb,
  Target,
  Building2,
  Handshake,
  Search,
  BarChart3,
  Globe2,
} from "lucide-react";
import Timeline from "./_components/timeline";
import VisionMission from "./_components/vision-mission";
import LicenseSection from "./_components/licence";

const timelineData = [
  {
    year: "2020",
    title: "Company Founder",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: UserRound,
    color: "bg-orange-500",
  },
  {
    year: "2021",
    title: "Ideas & Organization",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Lightbulb,
    color: "bg-yellow-400",
  },
  {
    year: "2022",
    title: "Company Executive",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Target,
    color: "bg-yellow-400",
  },
  {
    year: "2023",
    title: "Regional Office Opened",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Building2,
    color: "bg-sky-400",
  },
  {
    year: "2024",
    title: "Sustaining Partnership",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Handshake,
    color: "bg-green-500",
  },
  {
    year: "2025",
    title: "Data Research",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Search,
    color: "bg-green-500",
  },
  {
    year: "2026",
    title: "Significant Growth",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: BarChart3,
    color: "bg-rose-500",
  },
  {
    year: "2027",
    title: "Enlarging Globally",
    description: "Sed ut ante mollis, commodo eros vitae.",
    icon: Globe2,
    color: "bg-red-500",
  },
];
const AboutPage = () => {
  return (
    <div className="space-y-8 px-4">
      <SectionWrapper>
        <div className="flex flex-col items-center md:items-start justify-center gap-8 md:gap-16 md:flex-row">
          <div className="w-[280px] aspect-square md:w-[350px] rounded-full overflow-hidden bg-accent shrink-0"></div>
          <div className="space-y-4 text-center max-w-lg xl:max-w-xl">
            <div className="text-lg md:text-xl">Lorem, ipsum dolor.</div>
            <div className="text-sm md:text-base text-muted-foreground text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nemo
              consequatur possimus vitae enim, accusantium rerum doloremque,
              illum neque quaerat quasi deserunt eius a qui ut similique quod
              atque? Repudiandae itaque numquam iure modi eaque unde nesciunt
              culpa fugit veniam debitis, eos totam! Debitis error quam officia
              illo veniam, obcaecati modi laborum velit! Molestias, dolorem hic
              pariatur laudantium consequuntur neque quo perspiciatis dolore,
              magnam minus rem exercitationem, soluta harum nisi fuga ab rerum!
              Totam, quae perferendis libero? Debitis vero itaque dolorum id
              adipisci doloribus esse ducimus repellendus laudantium. Sed,
              similique? Quae ducimus, at nemo fugit magnam illum rerum a esse
              aperiam ea doloribus nobis, nostrum aliquam deleniti possimus qui
              sint recusandae voluptates eveniet praesentium sapiente? Suscipit
              expedita sed omnis officia voluptas rem itaque assumenda corporis
              cum at ab hic animi accusamus quia a, earum, quod ullam. Vero,
              delectus eos tempora labore pariatur omnis?
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* <SectionWrapper bg>
        <Timeline />
      </SectionWrapper> */}
      <SectionWrapper bg>
        <VisionMission />
      </SectionWrapper>
      <SectionWrapper>
        <LicenseSection />
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
