import { MdOutlineShoppingCart } from "react-icons/md";
import "../styles/cartwidget.css";
import React, {useContext} from 'react'
import { CartContext } from "../context/cartContext";



export default function CartWidget() {

  const {itemInCart} = useContext(CartContext)
  return (
    <div className="wrapper_cart">
      <div className="cart-icon">
        <MdOutlineShoppingCart />
      </div>

      <div className ='cart-item'>
        {console.log(itemInCart)}
        <button>{itemInCart}</button>
      </div>
    </div>
  );
}
