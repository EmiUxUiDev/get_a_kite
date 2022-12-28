import React, {useContext} from "react";
import "../styles/counter.css";
import { TbShoppingCart } from "react-icons/tb";
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
        className={item.stock === 0 ? "disabled-btn":"add-cart-btn"}
        disabled={item.stock === 0}
        onClick={onAddItemToCartHandler}
      >Add to cart<i className="cart">
          <TbShoppingCart />
        </i>
      </button>
      <spam className="available">Total price $ {priceProds}</spam>
    </section>
  );
}
