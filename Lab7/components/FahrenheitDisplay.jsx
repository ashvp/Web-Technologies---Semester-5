import React from 'react';

const FahrenheitDisplay = ({ temperature }) => {
  return (
    <div>
      <span>Temperature in F: </span>
      <input type="text" value={temperature} readOnly />
    </div>
  );
};

export default FahrenheitDisplay;