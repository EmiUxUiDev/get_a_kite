import React from "react";
import "../styles/item.css"
export default function Item({ kiteboard }) {
  return (
    <div id="item_wrapper">
      <img className="item_img" src={kiteboard.img} alt={`Description img ${kiteboard.id}`} />
      <li>{kiteboard.name}</li>
      <p className="item-available">Available: {kiteboard.stock}</p>
    </div>
  );
}
