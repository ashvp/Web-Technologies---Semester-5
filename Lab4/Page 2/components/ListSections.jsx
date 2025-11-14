import React from "react";
import ListItems from "./ListItems";

function ListSections({ title, items }) {
  return (
    <div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="sections">
        {items.map((index, item) => (
          <ListItems
            key={item}
            name={index.name}
            price={index.price}
            inStock={index.inStock}
          ></ListItems>
        ))}
      </div>
    </div>
  );
}

export default ListSections;
