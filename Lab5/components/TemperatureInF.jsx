import React from 'react';

const TemperatureInF = ({ celcius }) => {
  const fahrenheit = (celcius * 9) / 5 + 32;

  return (
    <div className="fahrenheit-display">
      <span>Temperature in F: </span>
      <label>{fahrenheit.toFixed(2)}</label>
    </div>
  );
};

export default TemperatureInF;
