// import required from "../../../../assets/Images/Checkout/_.svg";

const ProductCheckoutAddress = () => {
  return (
    <>
      <div className="address-wrapper">
        <h3>Billing Address</h3>

        <div className="inputs">
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>

          <label>
            Country / Region
            <select name="country" id="country-select">
              <option>Select a country / region</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Turkey">Turkey</option>
            </select>
          </label>
          <label>
            Town / City
            <input type="text" />
          </label>

          <label>
            Street Address
            <input type="text" placeholder="House number and street name" />
          </label>
          <label>
            Additional street information
            <input
              placeholder="Appartment, suite, unit, etc. (optional)"
              type="text"
            />
          </label>
          <label>
            Your Email address
            <input type="email" />
          </label>
        </div>
      </div>
    </>
  );
};

export default ProductCheckoutAddress;
