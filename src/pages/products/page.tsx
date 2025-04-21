import SectionWrapper from "@/components/cards/section-wrapper";
import ProductGrid from "./_components/product-grid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductPage = () => {
  return (
    <div className="space-y-6 px-4">
      <SectionWrapper>
        <ProductGrid />
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

export default ProductPage;
