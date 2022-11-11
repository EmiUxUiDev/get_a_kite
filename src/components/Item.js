import React from "react";
import "../styles/item.css";


export default function Item({ kiteboard, index }) {

  return (
    <li id="item_wrapper" key={index}>
      <img
        className="item_img"
        src={kiteboard.img}
        alt={`Description img ${kiteboard.id}`}
      />

      <p id="subject">{kiteboard.name}</p>

      <p className="item-available">Available: {kiteboard.stock}</p>
    </li>
  );
}
