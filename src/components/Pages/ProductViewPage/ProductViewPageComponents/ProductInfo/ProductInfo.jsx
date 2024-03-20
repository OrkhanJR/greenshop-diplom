import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../../../../redux/slices/slice";

const ProductInfo = () => {
  const { productId } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = price * discountPercentage;
    return (price - discountAmount).toFixed(2);
  };

  return (
    <>
      <div className="info-wrapper">
        <div className="image">
          <img src={product.photos[0]} alt="product" />
        </div>
        <div className="about">
          <div className="title">{product.name}</div>
          <div className="sizes">
            {product.sizes.map((size) => (
              <button
                key={size.size}
                onClick={() => handleSizeChange(size)}
                className={selectedSize === size ? "selected" : ""}
              >
                {size.size}
              </button>
            ))}
          </div>
          <div className="price">
            {calculateDiscountedPrice(
              selectedSize.price,
              product.discountPercentage
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
