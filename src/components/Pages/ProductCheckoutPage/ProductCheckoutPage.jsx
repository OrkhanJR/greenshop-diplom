import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import ProductCheckout from "./ProductCheckout/ProductCheckout";
import ProductCheckoutAddress from "./ProductCheckoutAddress/ProductCheckoutAddress";

const ProductCheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="checkout-wrapper">
        <ProductCheckoutAddress />
        <ProductCheckout />
      </div>
      <Footer />
    </>
  );
};

export default ProductCheckoutPage;
