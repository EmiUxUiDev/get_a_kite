import React from "react";
import "../styles/itemdetail.css";
import Counter from "./Counter";
import { TbX } from "react-icons/tb";

export default function ItemDetail({ item }) {

  return (
    <>
      <section className="wrapper-main">

        <div className="wrapper-detail">
          <img
            className="img"
            src={item[0].path}
            alt={`${item[0].product} created by ${item[0].brand}`}
          />
          <div className="wrapper-description">
            <article>{item[0].description}</article>
          </div>
        </div>
        <div id="v-line"></div>
        <div className="wrapper-content">
          <div className="wrapper-text">
            <h3>{item[0].brand} {item[0].product}</h3>
            <h2>{item[0].model}</h2>
            <p id="text">u$s {item[0].price}</p>
            <p id="available">{`Available: ${item[0].stock}`}</p>
          </div>
          <Counter item={ item }/>
        </div>
        <button id="close"><TbX /></button>
      </section>
    </>
  );
}
