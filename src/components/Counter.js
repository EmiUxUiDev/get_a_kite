import React from "react";
import "../styles/counter.css";
import { TbShoppingCart, TbPackage } from "react-icons/tb";

export default function Counter({
  item,
  onSubHandler,
  onAddHandler,
  amountItems,
  price,
  onAddToCartHandler,
}) {
  return (
    <section id="wrapper-counter">
      <h5>Quantity</h5>
      <div className="wrapper-buttons">
        <button
          className="sub"
          disabled={amountItems === 0}
          onClick={onSubHandler}
        >
          -
        </button>

        <p>{amountItems}</p>

        <button
          className="add"
          disabled={amountItems >= item[0].stock}
          onClick={onAddHandler}
        >
          +
        </button>
      </div>
      <button
        id="add-cart"
        disabled={amountItems === 0}
        onClick={onAddToCartHandler}
      >
        <span className="add-cart">Add to cart</span>
        <i className="cart">
          <TbShoppingCart />
        </i>
      </button>
      <spam className="available">Total price $ {price}</spam>
    </section>
  );
}
