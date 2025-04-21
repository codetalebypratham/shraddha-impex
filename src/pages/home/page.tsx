import SectionWrapper from "@/components/cards/section-wrapper";
import MainCarousel from "./_components/main-carousel";
import { Button } from "@/components/ui/button";
import OurPartners from "./_components/partner-carousel";
import NewsletterSection from "./_components/news-latter";
import { plasticProducts } from "@/data/prduct-data";
import ProductCard from "@/components/cards/product-card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <MainCarousel />
      <SectionWrapper
        heroTitle="lorem"
        heroDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis recusandae inventore ipsa et, nihil, ipsam quod cupiditate error eaque nulla cum alias atque, qui facere!"
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
      <SectionWrapper
        heroTitle="grid"
        heroDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis recusandae inventore ipsa et, nihil, ipsam quod cupiditate error eaque nulla cum alias atque, qui facere!"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 md:p-4 grid-flow-dense">
          {[...new Array(4)].map((_, index) => (
            <div
              className="w-full min-h-20 h-fit bg-accent rounded-md"
              key={index}
            ></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        heroTitle="our partners"
        heroDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis recusandae inventore ipsa et, nihil, ipsam quod cupiditate error eaque nulla cum alias atque, qui facere!"
        bg
      >
        <OurPartners />
      </SectionWrapper>
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
