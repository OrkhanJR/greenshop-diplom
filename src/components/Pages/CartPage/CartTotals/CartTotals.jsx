import { useEffect, useState } from "react";
import {
  selectItems,
  selectTotalItems,
  selectTotalPrice,
} from "../../../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const cartItems = useSelector(selectItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);

  const totalPriceWithShipping = () => {
    return discountedPrice + 16;
  };

  const handleCoupon = () => {
    if (coupon === "itstep") {
      const discountPrice = totalPrice * 0.5; 
      setDiscountedPrice(totalPrice - discountPrice); 
    }
  };

  useEffect(()=> {
    setDiscountedPrice(totalPrice)
  }, [cartItems, totalPrice])

  if (cartItems.length === 0) {
    return null;
  }
  return (
    <>
      <div className="cart-summary">
        <p className="line">Cart Totals</p>

        <div className="cart-main">
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
            <div className="prices">
              <p>Items</p> <span> {totalItems}</span>
            </div>
            <div className="prices">
              <p>Subtotal</p> <span>$ {totalPrice.toFixed(2)}</span>
            </div>

            <div className="prices">
              <p>Coupon Discount</p> <span>(-) {(totalPrice - discountedPrice).toFixed(2)}</span>
            </div>
            <div className="prices">
              <p>Shipping</p> <span className="shipping-price">$16.00</span>
            </div>

            <div className="total-price">
              <p>Total</p> <span>$ {totalPriceWithShipping().toFixed(2)}</span>
            </div>
          </div>
          <div className="buttons">
            <button className="checkout-button">Proceed To Checkout</button>
            <Link to={`/`} className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
