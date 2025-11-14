import React from "react";

// Controls to increase and decrease temperature
function TemperatureControls({ increase, decrease }) {
  return (
    <div className="controls">
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default TemperatureControls;
