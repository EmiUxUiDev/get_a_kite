import React, { useState } from "react";
import "../styles/counter.css";

export default function Counter() {
  const [stock, setStock] = useState(5);
  const [amount, setAmount] = useState(0); 

  return (
    <section id="wrapper-counter">
      <h5>Product name</h5>
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

        <button className="add"
        disabled={amount >= stock}
        onClick={()=>{
          if(amount<=stock){setAmount(amount+1)}else{setAmount(amount)}
        }}
        >+</button>
      </div>
      <button id="add-cart" disabled={amount === 0}
      onClick={()=>{
        setStock(stock-amount)
        setAmount(0)
      }}
      >
        Add to cart
      </button>
      <spam className="available">Available stock : {stock}</spam>
    </section>
  );
}
