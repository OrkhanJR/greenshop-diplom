import { useSelector } from "react-redux";
import {
  selectSelectedCategory,
  selectProducts,
} from "../../../../../../../redux/slices/slice";

const ProductStock = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const products = useSelector(selectProducts);

  const filteredProducts = products.filter((product) =>
    product.category.includes(selectedCategory)
  );

  return (
    <>
      <div>
        <h4>Products in {selectedCategory}</h4>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductStock;
