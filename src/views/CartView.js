import React, {useContext} from "react";
import Layout from "../components/Layout";
import Cart from "../components/Cart";
import "../styles/cartview.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";



export default function CartView() {
  const {removeAllItems, cartProducts,totalPrice} = useContext(CartContext)
 
  return (
    <Layout>
      <Cart />
      <div className="wrapper-btn-cart">
        <h2> {`total price ${totalPrice}`}</h2>
        <button className={cartProducts.length === 0 ? "display-off" : "back-shopping all-products"} onClick={removeAllItems}>Remove all products</button>
        <Link to={"/"}>
          <button className="back-shopping">Continue shopping</button>
        </Link>
      </div>
    </Layout>
  );
}
