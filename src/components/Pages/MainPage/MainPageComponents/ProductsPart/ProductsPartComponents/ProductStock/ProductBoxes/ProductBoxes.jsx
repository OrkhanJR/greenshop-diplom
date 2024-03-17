import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSelectedCategory, selectProducts } from "../../../../../../../../redux/slices/slice";

const ProductBoxes = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const products = useSelector(selectProducts);

  const productsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(product =>
    product.category.includes(selectedCategory)
  );


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);


  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="product-boxes-wrapper">
      {currentProducts.map((product) => (
        <div key={product.id} className="product-box">
          <div className="img-container">
            <img src={product.photos[0]} alt={product.name} />
          </div>
          <div className="product-title">{product.name}</div>
          <div className="product-price">${product.sizes[0].price}</div>
        </div>
      ))}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBoxes;
