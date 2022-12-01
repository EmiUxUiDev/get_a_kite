import { MdOutlineShoppingCart } from "react-icons/md";
import "../styles/cartwidget.css";
import React, {useContext} from 'react'
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";



export default function CartWidget() {

  const {itemInCart} = useContext(CartContext)

  return (
    <Link to={'/cart'}>
      <div className="wrapper_cart">
      <div className="cart-icon">
        <MdOutlineShoppingCart />
      </div>

      <div className ='cart-item'>
        <button className={itemInCart() === 0 ? 'display-none' : 'display'}
        >{itemInCart()}</button>
      </div>
    </div>
    </Link>
  );
}
