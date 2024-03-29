import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormValidity } from "../../../../redux/slices/formSlice";
import { clearCart, selectItems } from "../../../../redux/slices/cartSlice";
import required from "../../../../assets/Images/Checkout/_.svg";
import { useNavigate } from "react-router-dom";

const ProductCheckoutAddress = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectItems);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    dispatch(setFormValidity(!isRequiredFieldEmpty()));
  };

  const handlePayment = () => {
    dispatch(clearCart());
    alert("We received your order!");
    navigate("/");
  };

  const isRequiredFieldEmpty = () => {
    return (
      !firstName || !lastName || !country || !city || !streetAddress || !email
    );
  };

  return (
    <form>
      <div className="address-wrapper">
        <p>
          <img src={required} alt="required" /> - Required Fields
        </p>
        <h3>Billing Address</h3>

        <div className="inputs">
          <label>
            <span>
              First Name <img src={required} alt="required field" />
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
            />
          </label>

          <label>
            <span>
              Last Name <img src={required} alt="required field" />
            </span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
            />
          </label>

          <label>
            <span>
              Country / Region <img src={required} alt="required field" />
            </span>
            <select
              name="country"
              id="country-select"
              value={country}
              onChange={(e) => handleInputChange(e, setCountry)}
            >
              <option value="">Select a country / region</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Turkey">Turkey</option>
            </select>
          </label>

          <label>
            <span>
              Town / City <img src={required} alt="required field" />
            </span>
            <input
              type="text"
              value={city}
              onChange={(e) => handleInputChange(e, setCity)}
            />
          </label>

          <label>
            <span>
              Street Address <img src={required} alt="required field" />{" "}
            </span>
            <input
              type="text"
              value={streetAddress}
              onChange={(e) => handleInputChange(e, setStreetAddress)}
              placeholder="House number and street name"
            />
          </label>

          <label>
            Additional street information
            <input
              placeholder="Apartment, suite, unit, etc. (optional)"
              type="text"
            />
          </label>

          <label>
            <span>
              Your Email address <img src={required} alt="required field" />{" "}
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </label>
        </div>

        <div className="order-button">
          <button
            disabled={
              items.length === 0 ||
              !firstName ||
              !lastName ||
              !country ||
              !city ||
              !streetAddress ||
              !email
            }
            onClick={handlePayment}
          >
            Place Order
          </button>
        </div>
      </div>

      {isRequiredFieldEmpty() && <p>Please fill out all required fields</p>}
    </form>
  );
};

export default ProductCheckoutAddress;
