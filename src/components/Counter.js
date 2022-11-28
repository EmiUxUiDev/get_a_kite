import React, {useContext} from "react";
import "../styles/counter.css";
import { TbShoppingCart, TbPackage } from "react-icons/tb";
import { CartContext } from "../context/cartContext";



export default function Counter({
  item,
  onSubHandler,
  onAddHandler,
  amountItems,
  // price
}) {

  const {purchase,
    setPurchase,
    itemm,
    setItemm,
    stock,
    setStock,
    amount,
    setAmount,
    price,
    setPrice,
    cartProducts,
    setCartProducts,
    itemInCart,
    setItemInCart} = useContext(CartContext)
  setItemm(item[0]);
  setStock(item[0].stock);

  function onAddItemToCart() {
    
    const subs = stock - amount;

    if (subs >= 0) {
      console.log(subs)
      setStock(subs)
      setItemm({...itemm, stock: subs, qty: amount})
      console.log(itemm);
      setCartProducts([...cartProducts, itemm]);
      setPurchase(true);
      setItemInCart(itemInCart+1)
    } else {
      alert("No hay suficiente stock");
    }

  }
  console.log(cartProducts);

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
        onClick={onAddItemToCart}
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
