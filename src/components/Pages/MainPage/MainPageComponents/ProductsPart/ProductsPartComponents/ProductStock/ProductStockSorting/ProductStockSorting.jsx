import { useState } from "react";
import ArrowDown from "../../../../../../../../assets/Images/products/Arrow-Down.svg";

const ProductStockSorting = () => {
  const [selectedOption, setSelectedOption] = useState("Default");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Default", value: "Default" },
    { label: "Price Up", value: "Price Up" },
    { label: "Price Down", value: "Price Down" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <>
      <div className="sort-wrapper">
        <div className="categories">
          <span>New Arrivals</span>
          <span>Sale</span>
        </div>

        <div className="custom-dropdown">
            Sort By:
          <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
            {selectedOption}
            <span className={`arrow ${isOpen ? "up" : "down"}`}>
              <img src={ArrowDown} alt="" />
            </span>
          </div>
          {isOpen && (
            <div className="options">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`option ${
                    selectedOption === option.value ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductStockSorting;
