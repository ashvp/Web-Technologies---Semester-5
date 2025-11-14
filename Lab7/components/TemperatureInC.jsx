import { React, useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureControls from "./TemperatureControls";
import ConversionButton from "./ConversionButton";
import FahrenheitDisplay from "./FahrenheitDisplay";

// Main component for temperature conversion
function TemperatureInC() {
  const [celcius, setCelcius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState("");

  // Increases the temperature
  const increaseTemp = () => {
    setCelcius((prev) => prev + 1);
  };

  // Decreases the temperature
  const decreaseTemp = () => {
    setCelcius((prev) => prev - 1);
  };

  // Handles manual input
  const handleChange = (e) => {
    setCelcius(parseInt(e.target.value));
  };

  // Converts to Fahrenheit
  const convertToF = () => {
    const value = (celcius * 9) / 5 + 32;
    setFahrenheit(value.toFixed(2));
  };

  return (
    <div>
      <TemperatureDisplay temperature={celcius} onChange={handleChange} />
      <TemperatureControls increase={increaseTemp} decrease={decreaseTemp} />
      <br />
      <ConversionButton onClick={convertToF} />
      <br />
      <FahrenheitDisplay temperature={fahrenheit} />
    </div>
  );
}

export default TemperatureInC;
