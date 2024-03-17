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

// import { useSelector } from "react-redux";
// import {
//   selectSelectedCategory,
//   selectProducts,
// } from "../../../../../../../redux/slices/slice";

// const selectedCategory = useSelector(selectSelectedCategory);
// const products = useSelector(selectProducts);

// const filteredProducts = products.filter((product) =>
//   product.category.includes(selectedCategory)
// );

// {filteredProducts.map((product) => (
//   <li key={product.id}>{product.name}</li>
// ))}
