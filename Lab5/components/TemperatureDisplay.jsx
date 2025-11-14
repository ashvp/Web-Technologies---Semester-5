import React from "react";

function TemperatureDisplay({ temperature, onChange }) {
  return (
    <div className="temperature-input">
      <span>Enter the Temperature in C</span>
      <input type="number" value={temperature} onChange={onChange}></input>
    </div>
  );
}

export default TemperatureDisplay;
