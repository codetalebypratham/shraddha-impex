import SectionWrapper from "@/components/cards/section-wrapper";
import MainCarousel from "./_components/main-carousel";
import { Button } from "@/components/ui/button";
import OurPartners from "./_components/partner-carousel";
import NewsletterSection from "./_components/news-latter";
import { plasticProducts } from "@/data/prduct-data";
import ProductCard from "@/components/cards/product-card";
import { Link } from "react-router-dom";
import Stats from "./_components/stats";

const HomePage = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <MainCarousel />
      <SectionWrapper
        heroTitle="Products"
        heroDescription="We meet the critical input needs of industries, serving leading players across key sectors with a full range of products and services."
        bg
      >
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-4 p-3 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {plasticProducts.slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full h-16">
            <Button variant={"secondary"} asChild>
              <Link to={"/products"}>Load more!</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper heroTitle="Our Statistics">
        <Stats />
      </SectionWrapper>

      <SectionWrapper heroTitle="Our Prior customers" bg>
        <OurPartners />
      </SectionWrapper>
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
