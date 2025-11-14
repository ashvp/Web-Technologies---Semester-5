import React from "react";

function ListItems({ name, sciName, weight, eats }) {
  return (
    <div className="animal-card">
      <span className="name">{name}</span>
      <br />
      <span className="sciName"> {sciName}</span>
      <br />
      <span className="weight"> {weight}kg</span>
      <br />
      <span className="eats"> {eats}</span>
    </div>
  );
}

export default ListItems;
