// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { selectProducts } from "../../../redux/slices/slice";

// const ProductViewPage = () => {
//   const { productId } = useParams();
//   const products = useSelector(selectProducts);
//   const product = products.find((product) => product.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>

//       <p>Price: ${product.sizes[0].price}</p>
//       <p>Category: {product.category.join(", ")}</p>

//     </div>
//   );
// };

// export default ProductViewPage;

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
