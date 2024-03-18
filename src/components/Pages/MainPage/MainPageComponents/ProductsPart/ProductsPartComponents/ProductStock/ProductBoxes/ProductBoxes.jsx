import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSelectedCategory,
  selectProducts,
  setSelectedCategory,
  selectSelectedFilter,
  selectSelectedSortingOption,
} from "../../../../../../../../redux/slices/slice";
import popUpCart from "../../../../../../../../assets/Images/header/cart.svg";
import popUpCartHover from "../../../../../../../../assets/Images/header/cart-hover-icon.svg";

const productsPerPage = 9;

const ProductBoxes = () => {
  const selectedFilter = useSelector(selectSelectedFilter);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedSortingOption = useSelector(selectSelectedSortingOption);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(setSelectedCategory("All"));
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory === "All") {
      if (selectedFilter === "New Arrivals") {
        filtered = filtered.filter((product) => product.newArrival);
      } else if (selectedFilter === "Sale") {
        filtered = filtered.filter((product) => product.sale);
      }
      setFilteredProducts(filtered);
    } else {
      if (selectedFilter === "New Arrivals") {
        filtered = filtered.filter(
          (product) =>
            product.category.includes(selectedCategory) && product.newArrival
        );
      } else if (selectedFilter === "Sale") {
        filtered = filtered.filter(
          (product) =>
            product.category.includes(selectedCategory) && product.sale
        );
      } else {
        filtered = filtered.filter((product) =>
          product.category.includes(selectedCategory)
        );
      }
      setFilteredProducts(filtered);
      setCurrentPage(1);
    }
  }, [selectedCategory, selectedFilter, products, selectedSortingOption]);

  const sortProductsByPrice = (option) => {
    const sortedProducts = [...filteredProducts];
    if (option === "Price Up") {
      sortedProducts.sort((a, b) => {
        return parseFloat(a.sizes[0].price) - parseFloat(b.sizes[0].price);
      });
    } else if (option === "Price Down") {
      sortedProducts.sort((a, b) => {
        return parseFloat(b.sizes[0].price) - parseFloat(a.sizes[0].price);
      });
    }
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    if (selectedSortingOption !== "Default") {
      sortProductsByPrice(selectedSortingOption);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSortingOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="product-boxes-wrapper">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-box">
            <div className="img-container">
              {product.sale && (
                <div className="product-discount">
                  {`-${product.discountPercentage * 100}% OFF`}
                </div>
              )}
              {product.newArrival && <div className="new-product">New</div>}
              <img src={product.photos[0]} alt={product.name} />
              <div className="popup">
                <img className="popup-img" src={popUpCart} alt="cart" />
                <img
                  className="popup-img-in-hover"
                  src={popUpCartHover}
                  alt="cart"
                />
              </div>
            </div>
            <div className="product-title">{product.name}</div>

            <div className="product-price">
              {product.sale ? (
                <>
                  <span className="new-price">
                    $
                    {(
                      parseFloat(product.sizes[0].price) *
                      (1 - product.discountPercentage)
                    ).toFixed(2)}
                  </span>
                  <span className="old-price">${product.sizes[0].price}</span>{" "}
                </>
              ) : (
                `$${product.sizes[0].price}`
              )}
            </div>
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
