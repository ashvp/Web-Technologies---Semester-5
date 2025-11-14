import React from "react";

// Button to trigger the conversion
const ConversionButton = ({ onClick }) => {
  return (
    <div className="conversion-button">
      <button onClick={onClick}>Convert to Fahrenheit</button>
    </div>
  );
};

export default ConversionButton;
