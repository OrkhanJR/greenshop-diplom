import React, { useState } from "react";
import logo from "../../../assets/Images/Logo/Logo.svg";
import cart from "../../../assets/Images/header/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../../redux/slices/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <li>
              <Link to={"/cart"}> Cart </Link>
            </li>
            <li>
              <Link to={"/blog"}>Blogs</Link>
            </li>
          </ul>

          <div className="burger-menu" onClick={toggleMenu}>
            <div> &#9776; </div>
            {isMenuOpen && (
              <div className="burger-links">
                <ul className="mobile-links">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/cart"}> Cart </Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blogs</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
