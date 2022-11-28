import React, { useEffect, useState, useContext } from "react";
import "../styles/itemdetail.css";
import Counter from "./Counter";
import { TbX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbShoppingCart, TbPackage } from "react-icons/tb";
import { CartContext } from "../context/cartContext";

export default function ItemDetail({ item }) {
  // const [amount, setAmount] = useState(1);
  // const [stock, setStock] = useState(item[0].stock);
  // const [price, setPrice] = useState(0);

  const {
    purchase,
    setPurchase,
    stock,
    amount,
    setAmount,
    price,
    setPrice,
  } = useContext(CartContext);


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

  // const addToCartHandler = ({addItemToCart}) => {
  //   const subs = stock - amount;
  //   if (subs >= 0) {
  //     setStock(stock - amount);
  //     item[0].stock = stock;
  //     console.log(item)

  //     setPurchase(true);
  //   } else {
  //     alert("No hay suficiente stock");
  //   }
  // };

  useEffect(() => {
    setPrice(item[0].price * amount);
  }, [addHandler, subHandler]);

  // , addToCartHandler

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
            <p id="available">{`Available: ${stock}`}</p>
          </div>
          <div>
          <Link to={"/cart"}>
            <button className="go-to-cart" onClick={()=>(
              setPurchase(false), setAmount(1)
              )}>
              <span className="add-cart">Go to cart</span>    
            </button>
          </Link>
          <Link to={"/"} onClick={()=>(
            setPurchase(false), setAmount(1)
            )}>
            <button className="go-to-cart " >
              <span className="add-cart continue-shopping">Continue shopping!</span>
            </button>
          </Link>
          </div>
         
        </div>

        <Link to={"/"}>
          <button id="close" onClick={()=>(
            setPurchase(false), setAmount(1)
            )}>
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
            amountItems={amount}
            price={price}
            // onAddToCartHandler={addToCartHandler}
          />
        </div>

        <Link to={"/"}>
          <button id="close" >
            <TbX />
          </button>
        </Link>
      </section>
    </>
  );
}
