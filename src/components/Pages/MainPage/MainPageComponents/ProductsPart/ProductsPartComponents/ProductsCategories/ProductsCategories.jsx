import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setSelectedCategory,
  setSelectedFilter,
} from "../../../../../../../redux/slices/slice";
import banner from "../../../../../../../assets/Images/products/SuperSaleBanner.png"

const ProductCategories = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(setSelectedFilter("all"));
  };

  const productCountsByCategory = products.reduce((counts, product) => {
    product.category.forEach((category) => {
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, {});

  return (
    <>
      <div className="categorie-box">
        <h4>Categories</h4>
        <div className="categorie-list-container">
          {Object.keys(productCountsByCategory).map((category) => (
            <div key={category} onClick={() => handleCategoryClick(category)}>
              <div className="categorie-list">
                <span>{category}</span>
                <span>({productCountsByCategory[category]})</span>
              </div>
            </div>
          ))}
        </div>
        <div className="banner">
          <img src={banner} alt="Super Sale" />
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
