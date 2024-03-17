import { useSelector } from "react-redux";
import {
  selectSelectedCategory,
  selectProducts,
} from "../../../../../../../../redux/slices/slice";

const ProductBoxes = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const products = useSelector(selectProducts);

  const filteredProducts = products.filter((product) =>
    product.category.includes(selectedCategory)
  );

  return (
    <>
      <div className="product-boxes-wrapper">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-box">
            <div className="img-container">
              <img src={product.photos[0]} alt={product.name} />
            </div>
            <div className="product-title">{product.name}</div>
            <div className="product-price">${product.sizes[0].price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBoxes;
