import React, { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);
  return cartProducts.map((item) => {
    return (
      <article className="wrapper-main">
        <img id="thumblenail" src={item.path} alt="" />

        <div className="wrapper-info-cart">
          <div>
            <p id="category-txt">{item.category}</p>
            <p id="brand-txt">{item.brand}</p>
          </div>
          <div id="wrapper-model-cart">
          <p id="model-txt">{item.model}</p>
          <p id="available-txt">{`available ${item.stock}`}</p>
          </div>
        </div>

        <p>Quantity: {item.qty} </p>
        <button id="delete-btn">Delete</button>
      </article>
    );
  });
}
