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
