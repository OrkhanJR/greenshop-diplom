import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProducts } from "../../../../../redux/slices/slice";
import { addToCart } from "../../../../../redux/slices/cartSlice";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const [selectedSize] = useState(product ? product.sizes[0] : null);

  const navigate = useNavigate();

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart/checkout");
  };

  const handleAddToCart = () => {
    const price = calculatePrice(
      selectedSize.price,
      product.discountPercentage
    );

    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({ ...product, selectedSize, price, quantity: 1 }));
    }
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const calculatePrice = (price, discountPercentage) => {
    if (product && product.sale) {
      return (price * (1 - discountPercentage)).toFixed(2);
    }
    return price;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="info-wrapper">
        <div className="image">
          <img src={product.photos[0]} alt="product" />
        </div>
        <div className="about">
          <div className="title">
            <h3>{product.name}</h3>
            {product.sale === true ? (
              <span>Sale {product.discountPercentage * 100}% OFF </span>
            ) : (
              ""
            )}
          </div>

          <div className="price">
            {calculatePrice(selectedSize.price, product.discountPercentage)}
          </div>
          <div className="short-desc">
            <div className="short-desc-title">Short Description: </div>
            <div className="desc">{product.shortDescription}</div>
          </div>

          <div className="count-wrapper">
            <div className="counts">
              <button
                className="count-button"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              {quantity}
              <button
                className="count-button"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="checkout-wrapper">
              <button className="buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper">
        <span>Product Description:</span>
        <p className="description">{product.description}</p>
      </div>
    </>
  );
};

export default ProductInfo;
