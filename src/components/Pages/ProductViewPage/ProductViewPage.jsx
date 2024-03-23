

import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import ProductInfo from "./ProductViewPageComponents/ProductInfo/ProductInfo";

const ProductViewPage = () => {
  return (
    <>
      <Header />
      <div className="product-view-wrapper">
        <ProductInfo />
      </div>
      <Footer />
    </>
  );
};

export default ProductViewPage;
