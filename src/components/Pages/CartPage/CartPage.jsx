import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import CartProducts from "./CartProducts/CartProducts";
import CartTotals from "./CartTotals/CartTotals";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="cart-page-wrapper">
        <CartProducts />
        <CartTotals />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
