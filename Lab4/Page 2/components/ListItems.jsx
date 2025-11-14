import React from "react";

function ListItems({ name, price, inStock }) {
  return (
    <div className="rows">
      <span className="name">
        <strong>{name}</strong>
      </span>
      <span style={{ color: inStock ? "black" : "red" }}>: {price}</span>
    </div>
  );
}

export default ListItems;
