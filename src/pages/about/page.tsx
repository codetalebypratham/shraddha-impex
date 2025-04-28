import SectionWrapper from "@/components/cards/section-wrapper";

import VisionMission from "./_components/vision-mission";
import LicenseSection from "./_components/licence";

const AboutPage = () => {
  return (
    <div className="space-y-8 px-4">
      <SectionWrapper>
        <div className="flex flex-col items-center md:items-start justify-center gap-8 md:gap-16 md:flex-row">
          <div className="w-[280px] aspect-square md:w-[350px] rounded-full overflow-hidden bg-accent shrink-0"></div>
          <div className="space-y-4 text-center max-w-lg xl:max-w-xl">
            <div className="text-lg md:text-xl">Lorem, ipsum dolor.</div>
            <div className="text-sm md:text-base text-muted-foreground text-justify">
              Shraddha Impex is a proprietorship concern led by Shri Rajesh H.
              Doshi, a Commerce graduate with over 30 years of experience in
              trading plastic raw materials such as LDPE, HDPE, LLDPE,
              Polypropylene, and Calcium Carbonate. The company specializes in
              importing and marketing high-quality plastic granules and
              masterbatches, catering to industries like packaging, industrial
              fabrics, and automotive sectors. Shraddha Impex has successfully
              achieved an impressive turnover of ₹100–150 crores, funded solely
              through internal resources. The firm operates mainly through high
              seas sales, sourcing products from Singapore, Malaysia, the Middle
              East, and reputed suppliers like ExxonMobil and SABIC. It
              maintains a strong client base in Gujarat and beyond, with direct
              distribution to major industries. Associated firms like Shraddha
              Polymers and Shraddha Industries further strengthen its market
              presence. The company’s success is built on deep industry
              knowledge, a wide distribution network, and a consistent
              commitment to quality and customer satisfaction.
            </div>
          </div>
        </div>
      </SectionWrapper>
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
