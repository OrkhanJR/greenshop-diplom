import { useSelector } from "react-redux";
import {
  selectTotalItems,
  selectTotalPrice,
  selectItems,
} from "../../../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import paymentMethods from "../../../../assets/Images/Checkout/image 17.png";

const ProductCheckout = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  const items = useSelector(selectItems);
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const totalPriceWithShipping = () => {
    return discountedPrice + 16;
  };

  const handleCoupon = () => {
    if (coupon === "itstep") {
      const discountPrice = totalPrice * 0.5;
      setDiscountedPrice(totalPrice - discountPrice);
    }
  };

  useEffect(() => {
    setDiscountedPrice(totalPrice);
  }, [items, totalPrice]);

  return (
    <>
      <div className="checkout-container">
        <h3>Your Order:</h3>

        <div className="checkout-products-container">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="checkout-products-wrapper">
                <div className="checkout-product-image">
                  <img src={item.photos[0]} alt={item.name} />
                </div>
                <div className="checkout-product-name">{item.name}</div>
                <div className="checkout-product-quantity">
                  (x{item.quantity})
                </div>
                <div className="checkout-product-price">
                  ${calculateTotalPrice(item).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="checkout-price-part">
          <p className="coupon">Coupon Apply</p>
          <div className="coupon-input">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={handleCoupon}>Apply</button>
          </div>
          <div className="price-part">
            <span>Subtotal </span>
            <span>
              <b>${totalPrice.toFixed(2)}</b>
            </span>
          </div>

          <div className="price-part">
            <span>Total items </span>
            <span>x{totalItems}</span>
          </div>

          <div className="price-part">
            <span>Coupon Discount</span>
            <span>(-){(totalPrice - discountedPrice).toFixed(2)}</span>
          </div>

          <div className="price-part">
            <span>Shipping</span>
            <span>
              <b>$16</b>
            </span>
          </div>
        </div>
        <hr />
        <div className="price-part total-price">
          <span>
            <b>Total</b>
          </span>
          <span className="total-price-value">
            ${totalPriceWithShipping().toFixed(2)}
          </span>
        </div>

        <h3>Payment Method</h3>

        <div className="payment-container">
          <div className="payment-method">
            <input
              type="radio"
              id="payment-card"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            <label htmlFor="payment-card">
              <img src={paymentMethods} alt="payment method" />
            </label>
          </div>

          <div className="payment-method">
            <input
              type="radio"
              id="payment-cash"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            <label htmlFor="payment-cash">Cash on delivery</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckout;
