import type { INekoImage } from "../hook/TNekoImageList";

type Product = INekoImage

type ProductListProps = {
  products: Product[];
  selectedProductIndex: number;
  handleProductClick: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProductIndex,
  handleProductClick,
}) => {
  return (
    <div className="bg-white max-h-96 overflow-y-scroll resultProductContainer">
      {products.map((product, index) => (
        <div
          key={product.tags.join(',')}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer ${
            selectedProductIndex === index ? "bg-gray-200 " : ""
          }`}
          onClick={() => handleProductClick(product)}
        >
          <p className="font-medium">{product.tags}</p>
          <img src={product.image.original.url} alt="" className=" w-8" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
