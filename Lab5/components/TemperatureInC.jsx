import { React, useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureControls from "./TemperatureControls";
import TemperatureInF from "./TemperatureInF";

function TemperatureInC() {
  const [celcius, setCelcius] = useState(25);

  const increaseTemp = () => {
    setCelcius((prev) => prev + 1);
  };
  const decreaseTemp = () => {
    setCelcius((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setCelcius(parseInt(e.target.value));
  };

  return (
    <div>
      <TemperatureDisplay temperature={celcius} onChange={handleChange} />
      <TemperatureControls increase={increaseTemp} decrease={decreaseTemp} />
      <br />
      <TemperatureInF celcius={celcius} />
    </div>
  );
}

export default TemperatureInC;
