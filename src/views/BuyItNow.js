import React, { useContext } from "react";
import bag from "../img/kite-travel-bags.jpg";
import "../styles/buyitnow.css";
import { TbShoppingCart } from "react-icons/tb";
import { CartContext } from "../context/cartContext";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { Link } from "react-router-dom";



export default function BuyItNow() {
  const { customer, setCustomer, cartProducts, cartTotalPrice } =
    useContext(CartContext);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCustomer((client) => {
      return { ...client, [name]: value };
    });
  };

  console.log(customer);

  //FUNCION CARGA DE DATOS EN BD REMOTA/FIRESTORE
  const order = () => {
    //Base de datos
    const db = getFirestore();
    //Coleccion de la bd dnd voy a guardar
    const ordersCollection = collection(db, "orders");
    //Datos que voy a guardar
    addDoc(ordersCollection, {
      customer: customer,
      items: cartProducts,
      total: cartTotalPrice(),
      date: serverTimestamp(),
    })
    .then(prom => {
      alert(`TRANSACTION CODE: ${prom.id}`)
    }
      ) 
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    order();
  };

  return (
    <div className="wrapper-buy">
      <div
        className="wrapper-img-buy"
        style={{ backgroundImage: `url(${bag})` }}
      >
        <p>Let's prepare your purchase!</p>
      </div>
      <form className="wrapper-form" onSubmit={onSubmitHandler}>
        <h2>insert your data</h2>
        <div className="wrapper-inputs">
          <label for="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            placeholder="write your name here"
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="user123@user.com"
            name="email"
            onChange={changeHandler}
          />

          <label for="tel">Phone number</label>
          <input
            type="tel"
            id="tel"
            placeholder="111 1234567890"
            name="phone"
            onChange={changeHandler}
          />
        </div>
        <div className="wrapper-buy-btn">
          <Link to={"/cart"}>
            <button>cancel</button>
          </Link>

          
            <button type="submit">
              <i>
                <TbShoppingCart />
              </i>
              buy it now
            </button>
          
        </div>
      </form>
    </div>
  );
}
