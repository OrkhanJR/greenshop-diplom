import ProductStock from "./ProductsPartComponents/ProductStock/ProductStock";
import ProductCategories from "./ProductsPartComponents/ProductsCategories/ProductsCategories";

const ProductsPart = () => {
  return (
    <>
      <div className="products-wrapper">
        <ProductCategories />
        <ProductStock />
      </div>
    </>
  );
};

export default ProductsPart;
