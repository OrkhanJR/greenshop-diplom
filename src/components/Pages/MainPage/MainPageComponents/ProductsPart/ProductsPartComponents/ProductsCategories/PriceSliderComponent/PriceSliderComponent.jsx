import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  setPriceRange,
  selectPriceRange,
} from "../../../../../../../../redux/slices/slice";    

const PriceSliderComponent = () => {
   
  
  const dispatch = useDispatch();
  const priceRange = useSelector(selectPriceRange);

  const handleChange = (event, newValue) => {
    dispatch(setPriceRange(newValue));
  };

  console.log("min:", priceRange.min);
  console.log("max:", priceRange.max);

  return (
    <Box>
      <Slider
        sx={{
          width: "80%",
          color: "#46a358",
          "& .MuiSlider-rail": {
            backgroundColor: "#46a358",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#46a358",
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "#46a358",
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#46a358",
            borderRadius: "4px",
          },
        }}
        getAriaLabel={() => 'Minimum distance'}
        min={parseFloat(priceRange.min)} // Use priceRange.min from Redux store
        max={parseFloat(priceRange.max)} // Use priceRange.max from Redux store
        value={priceRange} // Value should be an array with two elements: [min, max]
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
};

export default PriceSliderComponent;
