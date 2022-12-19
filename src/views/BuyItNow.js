import React, { useContext, useState, useRef, useEffect } from "react";
import bag from "../img/bag.png";
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
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";


export default function BuyItNow() {
  const {
    customer,
    setCustomer,
    cartProducts,
    cartTotalPrice,
    setCartProducts,
  } = useContext(CartContext);

  //VALIDAR FORM
  const [validate, setValidate] = useState(false);
  const [validateName, setValidateName] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePhone, setValidatePhone] = useState(false);

  const navigateTo = useNavigate();

  const txtName = useRef(null);
  const txtEmail = useRef(null);
  const txtPhone = useRef(null);
  const subminBtn = useRef(null);

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
    }).then((prom) => {
      alert(`TRANSACTION CODE: ${prom.id}`);

      setTimeout(() => {
        setCartProducts([]);
      }, 1300);
    });

    cartProducts.forEach((cartProd) => {
      databaseUpdate(cartProd.id, cartProd.stock);
    });
  };

  //ACTUALIZACION DE STOCK BASE DE DATOS
  const databaseUpdate = (id, newStock) => {
    const db = getFirestore();
    const updateStock = doc(db, "items", id);
    updateDoc(updateStock, { stock: newStock });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    order();
    setTimeout(() => {
      navigateTo("/");
    }, 500);
  };

  //VERIFICA VALIDACION DEL FORMULARIO Y HABILITA BTN SUBMIT
  useEffect(() => {
    validateName && validateEmail && validatePhone
      ? setValidate(true)
      : setValidate(false);
  }, [validateName, validateEmail, validatePhone]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCustomer((client) => {
      return { ...client, [name]: value };
    });
  };

  const validateNameHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (
        (!e.target.value === "" || e.target.value.length > 2) &&
        isNaN(e.target.value)
      ) {
        setValidateName(true);
        txtEmail.current.focus();
      }
       else {
        txtName.current.value = "";
        txtName.current.focus();
        setValidateName(false);
      }
    } else console.log(e.key);
  }

  const validateEmailHandler = (e) => {
    if(e.key === "Enter"){
      e.preventDefault()
      if (!e.target.value.includes("@") || e.target.value === "") {
        txtEmail.current.value = "";
        txtEmail.current.focus();
        setValidateEmail(false);
      } else {
        setValidateEmail(true);
        txtPhone.current.focus();
      }
    }else console.log(e.key);
  }

  const validatePhoneHandler = (e) => {
    if(e.key === "Enter"){
      e.preventDefault()
      if (isNaN(e.target.value.replace(/\s+/g, "")) || e.target.value === "") {
        txtPhone.current.value = "";
        txtPhone.current.focus();
        setValidatePhone(false);
      } else {
        setValidatePhone(true);
        subminBtn.current.focus();
      }
    }else console.log(e.key)
  }

  return (
    <Layout>
      <h2 id="category-title">home / buy</h2>
      <div className="wrapper-buy">
        <div className="wrapper-img-buy">
          <img src={bag} alt="Purchase bag"/>
          <p id="txt-title">Let's buy it!</p>
        </div>
        <form className="wrapper-form" onSubmit={onSubmitHandler}>
          <h2>insert your data</h2>
          <p className="small-info">*Press <strong>Enter</strong> to confirm</p>
          <div className="wrapper-inputs">
            <label for="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              maxLength="12"
              onChange={changeHandler}
              onKeyDown={validateNameHandler}
              placeholder="write your name here"
              ref={txtName}
            />

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="user123@user.com"
              name="email"
              onChange={changeHandler}
              onKeyDown={validateEmailHandler}
              ref={txtEmail}
            />

            <label for="tel">Phone number</label>
            <input
              type="tel"
              id="tel"
              placeholder="111 1234567 (code area(3) space phone(7))"
              name="phone"
              maxLength="11"
              onChange={changeHandler}
              onKeyDown={validatePhoneHandler}
              ref={txtPhone}
            />
          </div>
          <div className="wrapper-buy-btn">
            <button
              onClick={() => {
                navigateTo("/cart");
              }}
            >
              cancel
            </button>

            <button
              type="submit"
              ref={subminBtn}
              disabled={!validate}
              className={!validate ? "display-off" : ""}
            >
              <i>
                <TbShoppingCart />
              </i>
              buy it now
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
