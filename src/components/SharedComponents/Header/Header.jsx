import logo from "../../../assets/Images/Logo/Logo.svg";
import cart from "../../../assets/Images/header/cart.svg";
import { Link, useNavigate } from "react-router-dom";
// import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../../redux/slices/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate(`/cart`);
  };

  const navigateToHome = () => {
    navigate(`/`);
  };

  const totalItems = useSelector(selectTotalItems);
  return (
    <>
      <div className="header-wrapper">
        <div className="logo" onClick={navigateToHome}>
          <img src={logo} alt="logo" />
        </div>
        <div className="links-wrapper">
          <ul className="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {/* <li>
              <Link to={"/"}>Plant Care</Link>
            </li> */}
            <li>
              <Link to={"/blog"}>Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="login">
          <div className="cart" onClick={navigateToCart}>
            <span className="cart-count">{totalItems}</span>
            <img src={cart} alt="cart" />
          </div>
          
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
