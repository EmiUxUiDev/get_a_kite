import React, { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const {
    cartProducts,
    removeItemToCart,
 
  } = useContext(CartContext);

  return cartProducts.length !== 0 ? (
    cartProducts.map((item) => { 
      return (
        <>
          <h2 id="category-title">home / cart</h2>
          <article className="wrapper-cart">
            <div className="secc-info">
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

              <button
                id="delete-btn"
                onClick={() => {
                  removeItemToCart(item.id);
                }}
              >
                Delete
              </button>
            </div>

            <div className="secc-calculate">
              <p id="xsmall">Quantity: {item.qty} </p>
              <p id="xsmall">Unit price: {`u$s${item.price}`} </p>
              <p className="background">total: {`u$s ${item.price * item.qty}`} </p>
            </div>
          </article>
        </>
      );
    })

  ) : (
    <>
      <h2 id="category-title">home / cart</h2>
      <section id="empty">
        <h1>Empty cart, go and add items! </h1>
      </section>
    </>
  );
}
