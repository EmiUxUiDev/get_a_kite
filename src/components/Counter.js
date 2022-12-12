import React, {useContext} from "react";
import "../styles/counter.css";
import { TbShoppingCart, TbPackage } from "react-icons/tb";
import { CartContext } from "../context/cartContext";


export default function Counter({
  item,
  onSubHandler,
  onAddHandler,
  amountItems,
  onAddItemToCartHandler,
}) {

  const {priceProds} = useContext(CartContext)

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
          disabled={amountItems >= item.stock}
          onClick={onAddHandler}
        >
          +
        </button>
      </div>
      <button
        id="add-cart"
        disabled={amountItems === 0}
        onClick={onAddItemToCartHandler}
      >
        <span className="add-cart">Add to cart</span>
        <i className="cart">
          <TbShoppingCart />
        </i>
      </button>
      <spam className="available">Total price $ {priceProds}</spam>
    </section>
  );
}
