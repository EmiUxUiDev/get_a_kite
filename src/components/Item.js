import React from "react";
import "../styles/item.css";
import { TbTruckDelivery, TbCalculator } from "react-icons/tb";

export default function Item({ kiteboard, index }) {
  return kiteboard.price >= 1500 ? (
    <li id="item_wrapper" key={index}>
      <img
        className="item_img"
        src={kiteboard.img}
        alt={`Description img ${kiteboard.id}`}
      />
      <div className="line"></div>

      <p id="subject">{kiteboard.name}</p>
      <p id="price">{`$ U$S ${kiteboard.price}`}</p>
      <p className="item-available">Available: {kiteboard.stock}</p>

      <div className="wrapper-shipping">
        <div className="truck">
          <TbTruckDelivery />
        </div>
        <p>Free shipping</p>
      </div>
    </li>
  ) : (
    <li id="item_wrapper" key={index}>
      <img
        className="item_img"
        src={kiteboard.img}
        alt={`Description img ${kiteboard.id}`}
      />
      <div className="line"></div>

      <p id="subject">{kiteboard.name}</p>
      <p id="price">{`$ U$S ${kiteboard.price}`}</p>
      <p className="item-available">Available: {kiteboard.stock}</p>
      <div className="wrapper-shipping"> 
        <p>Calculate your shipping</p>
      </div>
    </li>
  );
}
