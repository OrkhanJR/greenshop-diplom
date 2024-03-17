import ProductBoxes from "./ProductBoxes/ProductBoxes";
import ProductStockSorting from "./ProductStockSorting/ProductStockSorting";

const ProductStock = () => {
  return (
    <>
      <div className="stock-container">
        <ProductStockSorting />
        <ProductBoxes />
      </div>
    </>
  );
};

export default ProductStock;
