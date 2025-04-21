export type Product = {
  name: string;
  image: string;
  description: string;
  category: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-accent rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden group border">
      <div className="relative">
        <img src={product.image} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-background bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
          <p className="text-foreground text-center font-semibold text-sm">
            {product.name}
          </p>
        </div>
        <span className="absolute top-2 left-2 bg-accent text-foreground text-xs px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-4 space-y-4">
        <div className="text-lg font-bold mb-1">{product.name}</div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
