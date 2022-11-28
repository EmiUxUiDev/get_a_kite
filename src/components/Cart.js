import React, { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const { cartProducts, setCartProducts, itemInCart, setItemInCart } =
    useContext(CartContext);
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
            <p>{item.id}</p>
            <p id="model-txt">{item.model}</p>
            <p id="available-txt">{`available ${item.stock}`}</p>
          </div>
        </div>

        <p>Quantity: {item.qty} </p>
        <button
          id="delete-btn"
          onClick={() => {
            setCartProducts(
              cartProducts.filter((i) => {
                return i.id !== item.id;
              })
            );
            setItemInCart(itemInCart-1)
          }}
        >
          Delete
        </button>
      </article>
    );
  });
}
