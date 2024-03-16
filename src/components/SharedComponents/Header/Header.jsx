import logo from "../../../assets/Images/Logo/Logo.svg";
import cart from "../../../assets/Images/header/cart.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img
            onClick={() => {
              <Link to={"/"} />;
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="links-wrapper">
          <ul className="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Plant Care</Link>
            </li>
            <li>
              <Link to={"/"}>Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="login">
          <img className="cart" src={cart} alt="cart" />
          <Button className="login-button">Login</Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
