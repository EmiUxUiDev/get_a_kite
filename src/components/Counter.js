import React, { useState } from "react";
import "../styles/counter.css";

export default function Counter({ item }) {
  const [stock, setStock] = useState(item[0].stock);
  const [amount, setAmount] = useState(0);

  return (
    <section id="wrapper-counter">
      <h5>Quantity</h5>
      <div className="wrapper-buttons">
        <button
          className="sub"
          disabled={amount === 0}
          onClick={() => {
            if (amount > 0) {
              setAmount(amount - 1);
            } else {
              setAmount(0);
            }
          }}
        >
          -
        </button>

        <p>{amount}</p>

        <button
          className="add"
          disabled={amount >= item[0].stock}
          onClick={() => {
            if (amount <= item[0].stock) {
              setAmount(amount + 1);
            } else {
              setAmount(amount);
            }
          }}
        >
          +
        </button>
      </div>
      <button
        id="add-cart"
        disabled={amount === 0}
        onClick={() => {
          setStock(item[0].stock - amount);
          setAmount(0);
        }}
      >
        Add to cart
      </button>
      <spam className="available">Total price $ {item[0].price*amount}</spam>
    </section>
  );
}
