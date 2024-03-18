import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectSelectedCategory,
  selectProducts,
  // selectPriceRange,
} from "../../../../../../../../redux/slices/slice";
import popUpCart from "../../../../../../../../assets/Images/header/cart.svg";
import popUpCartHover from "../../../../../../../../assets/Images/header/cart-hover-icon.svg";

const ProductBoxes = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const products = useSelector(selectProducts);
  // const priceRange = useSelector(selectPriceRange);

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.category.includes(selectedCategory)
        )
      );
    }
  }, [selectedCategory, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <>
      <div className="product-boxes-wrapper">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-box">
            <div className="img-container">
              <img src={product.photos[0]} alt={product.name} />
              <div className="popup">
                <img className="popup-img" src={popUpCart} alt="cart" />
                <img className="popup-img-in-hover" src={popUpCartHover} alt="cart" />
              </div>
            </div>
            <div className="product-title">{product.name}</div>
            <div className="product-price">${product.sizes[0].price}</div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <ul className="pagination">
          {Array.from({
            length: Math.ceil(filteredProducts.length / productsPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                className={index + 1 === currentPage ? "active" : ""}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductBoxes;
