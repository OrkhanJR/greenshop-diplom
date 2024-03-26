
import {
  selectItems,
  selectTotalItems,
  selectTotalPrice,
} from "../../../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartTotals = () => {
  const cartItems = useSelector(selectItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return null;
  }

  const checkoutNav = () => {
    navigate(`/cart/checkout`);
  };
  return (
    <>
      <div className="cart-summary">
        <p className="line">Cart Totals</p>

        <div className="cart-main">
          <div className="price-part">
            <div className="prices">
              <p>Items</p> <span> {totalItems}</span>
            </div>
            <div className="prices">
              <p>Subtotal</p> <span>$ {totalPrice.toFixed(2)}</span>
            </div>

            <div className="prices">
              <p>Shipping</p> <span className="shipping-price">$16.00</span>
            </div>

            <div className="total-price">
              <p>Total</p> <span>$ {(totalPrice + 16).toFixed(2)}</span>
            </div>
          </div>
          <div className="buttons">
            <button
              className="checkout-button"
              onClick={() => {
                checkoutNav();
              }}
            >
              Proceed To Checkout
            </button>
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
