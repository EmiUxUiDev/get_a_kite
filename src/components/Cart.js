import React from "react";
import { CartContext } from "../context/cartContext";
import "../styles/cart.css";

export default function Cart() {
  return (
    <CartContext.Consumer>
      {({ cartItem }) => {
        return (
          <section className="wrapper-cart">
            <div className="">
              <p>{cartItem}</p>
            </div>
          </section>
        );
      }}
    </CartContext.Consumer>
  );
}
