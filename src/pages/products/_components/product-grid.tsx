import HeroSection from "@/components/cards/hero-section";
import ProductCard from "@/components/cards/product-card";
import { plasticProducts } from "@/data/prduct-data";

const ProductGrid = () => {
  return (
    <div className="px-8 space-y-8">
      <HeroSection title="Plastic Pellet Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plasticProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
