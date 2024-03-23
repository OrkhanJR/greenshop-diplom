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
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../../../../../../redux/slices/cartSlice";

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
    }

    if (selectedSortingOption === "Price Up") {
      filtered.sort((a, b) => {
        const priceA = a.sale
          ? parseFloat(a.sizes[0].price) * (1 - a.discountPercentage)
          : parseFloat(a.sizes[0].price);
        const priceB = b.sale
          ? parseFloat(b.sizes[0].price) * (1 - b.discountPercentage)
          : parseFloat(b.sizes[0].price);
        return priceA - priceB;
      });
    } else if (selectedSortingOption === "Price Down") {
      filtered.sort((a, b) => {
        const priceA = a.sale
          ? parseFloat(a.sizes[0].price) * (1 - a.discountPercentage)
          : parseFloat(a.sizes[0].price);
        const priceB = b.sale
          ? parseFloat(b.sizes[0].price) * (1 - b.discountPercentage)
          : parseFloat(b.sizes[0].price);
        return priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedFilter, products, selectedSortingOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();

  const navigateToView = (productId) => {
    navigate(`/products/${productId}/details`);
  };

  const handleAddToCart = (product) => {
    const smallSize = product.sizes.find((size) => size.size === "S");

    if (smallSize) {
      const price = product.sale
        ? parseFloat(smallSize.price) * (1 - product.discountPercentage)
        : parseFloat(smallSize.price);
      dispatch(
        addToCart({ ...product, selectedSize: smallSize, price, quantity: 1 })
      );
    }
  };

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
              <div className="popup" onClick={() => handleAddToCart(product)}>
                <img className="popup-img" src={popUpCart} alt="cart" />
                <img
                  className="popup-img-in-hover"
                  src={popUpCartHover}
                  alt="cart"
                />
              </div>
            </div>
            <div
              className="product-title"
              onClick={() => {
                navigateToView(product.id);
              }}
            >
              {product.name}
            </div>

            <div
              className="product-price"
              onClick={() => {
                navigateToView(product.id);
              }}
            >
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
