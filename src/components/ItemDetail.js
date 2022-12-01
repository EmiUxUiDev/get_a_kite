import React, { useEffect, useState, useContext } from "react";
import "../styles/itemdetail.css";
import Counter from "./Counter";
import { TbX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";



export default function ItemDetail( { item }) {

  const {id, category, brand, model, price, stock, path} = item[0]
console.log(item)


  //Inicio el booleano de compras en false, no hay compras cuando carga
   const [purchase, setPurchase] = useState(false);

  //Inicia el contador en 1
  const [amount, setAmount] = useState(1);

  //Traigo lo que necesito del contexto
  const { cartProducts, addItemToCart, setPrice, priceProds } = useContext(CartContext);


    const addToCart = () => {
      //Creo variable con los campos que necesito para el carrito
      let cleanItem = {
        id,
        category,
        brand,
        model,
        price,
        stock,
        path,
        qty:amount
       }
      setPurchase(true);
      addItemToCart(cleanItem)
    
    };  

  const subHandler = () => {
    if (amount >= 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };

  const addHandler = () => {
    if (amount <= item[0].stock) {
      setAmount(amount + 1);
    } else {
      setAmount(amount);
    }
  };


  useEffect(() => {
    setPrice(item[0].price * amount);
    console.log(priceProds);
  }, [addHandler, subHandler]);



  return purchase ? (
    <>
      <h2 id="category-title">home / item </h2>
      <section className="wrapper-main">
        <div className="wrapper-detail">
          <img
            className="img"
            src={item[0].path}
            alt={`${item[0].product} created by ${item[0].brand}`}
          />
          <div className="wrapper-description">
            <article>{item[0].description}</article>
          </div>
        </div>

        <div id="v-line"></div>

        <div className="wrapper-content">
          <div className="wrapper-text">
            <h3>
              {item[0].brand} {item[0].product}
            </h3>
            <h2>{item[0].model}</h2>
            <p id="text">u$s {item[0].price}</p>
            <p id="available">{`Available: ${item[0].stock - amount}`}</p>
          </div>
          <div>
            <Link to={"/cart"}>
              <button
                className="go-to-cart"
                onClick={() => (setPurchase(false), setAmount(1))}
              >
                <span className="add-cart">Go to cart</span>
              </button>
            </Link>
            <Link to={"/"} onClick={() => (setPurchase(false), setAmount(1))}>
              <button className="go-to-cart ">
                <span className="add-cart continue-shopping">
                  Continue shopping!
                </span>
              </button>
            </Link>
          </div>
        </div>

        <Link to={"/"}>
          <button id="close" onClick={() => (setPurchase(false), setAmount(1))}>
            <TbX />
          </button>
        </Link>
      </section>
    </>
  ) : (
    <>
      <h2 id="category-title">home / item </h2>
      <section className="wrapper-main">
        <div className="wrapper-detail">
          <img
            className="img"
            src={item[0].path}
            alt={`${item[0].product} created by ${item[0].brand}`}
          />
          <div className="wrapper-description">
            <article>{item[0].description}</article>
          </div>
        </div>

        <div id="v-line"></div>

        <div className="wrapper-content">
          <div className="wrapper-text">
            <h3>
              {item[0].brand} {item[0].product}
            </h3>
            <h2>{item[0].model}</h2>
            <p id="text">u$s {item[0].price}</p>
            <p id="available">{`Available: ${item[0].stock}`}</p>
          </div>
          <Counter
            item={item}
            onSubHandler={subHandler}
            onAddHandler={addHandler}
            onAddItemToCartHandler={addToCart}
            amountItems={amount}
            price={price}
          />
        </div>

        <Link to={"/"}>
          <button id="close">
            <TbX />
          </button>
        </Link>
      </section>
    </>
  );
}
