import SectionWrapper from "@/components/cards/section-wrapper";
import IndustryGrid from "./_components/industry-grid";
import PartnerGrid from "./_components/partner-grid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IndustryPage = () => {
  return (
    <div className="space-y-4 px-4">
      <SectionWrapper heroTitle="Industry Scope">
        <IndustryGrid />
      </SectionWrapper>
      <SectionWrapper>
        <PartnerGrid />
      </SectionWrapper>
      <div className="flex items-center justify-center py-8">
        <Button asChild variant={"secondary"}>
          <Link to={"/contact-us"}>
            <div>Partner with us</div>
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IndustryPage;
