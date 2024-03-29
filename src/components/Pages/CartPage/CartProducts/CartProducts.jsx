import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../../../../redux/slices/cartSlice";

import deleteIcon from "../../../../assets/Images/cartPage/Delete.svg";

const CartProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <>
      <div className="cart-products-wrapper">
        <div className="product-container">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-product">
                <div className="product-image">
                  <img src={item.photos[0]} alt="product" />
                </div>
                <p className="product-name">{item.name}</p>
                <p className="product-price">
                  Price: ${(Number(item.price) || 0).toFixed(2)}{" "}
                </p>
                <div className="quantity">
                  Quantity:
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    className="count-button"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="count-button"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <div className="product-price">
                  total: ${calculateTotalPrice(item).toFixed(2)}{" "}
                </div>

                <img
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="delete-icon"
                  src={deleteIcon}
                  alt="delete item"
                />
              </div>
            ))
          )}
        </div>

        <button className="clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default CartProducts;
