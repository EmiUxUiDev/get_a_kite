import React, { useContext, useState, useRef, useEffect} from "react";
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
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { toast } from "react-toastify";



export default function BuyItNow() {
  const {
    customer,
    setCustomer,
    cartProducts,
    cartTotalPrice,
    setCartProducts,
  } = useContext(CartContext);

  //VALIDAR FORM
  const [validate, setValidate] = useState(false)
  const [validateName, setValidateName] = useState(false)
  const [validateEmail, setValidateEmail] = useState(false)
  const [validatePhone, setValidatePhone] = useState(false)

  const navigateTo = useNavigate();

  const txtName = useRef(null)
  const txtEmail= useRef(null)
  const txtPhone = useRef(null)


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
  useEffect(()=>{
    validateName && validateEmail && validatePhone ? setValidate(true) : setValidate(false);
  },[validateName, validateEmail, validatePhone])

  const changeHandler = (e) => {
  
    const name = e.target.name;
    const value = e.target.value;
    
    setCustomer((client) => {
      return { ...client, [name]: value };
    });
  };

  const validateNameHandler = (e)=>{
    
    if((!e.target.value === "" || e.target.value.length > 2) && isNaN(e.target.value)){
      console.log('Valid name') 
      setValidateName(true)
    }else {
      toast.error('Write down a valid name!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      txtName.current.value = ""
      txtName.current.focus()
      setValidateName(false)
    }
  }

  const validateEmailHandler = (e)=>{
  
    if(!e.target.value.includes("@") || e.target.value === ""){
      toast.error('Write down a valid email!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      txtEmail.current.value = ""
      txtEmail.current.focus()
      setValidateEmail(false)
    }else{
      console.log('Valid email')
      setValidateEmail(true)
    }
  }


  const validatePhoneHandler = (e)=>{
    if(isNaN(e.target.value.replace(/\s+/g, '')) || e.target.value === ""){
      toast.error('Write down a valid phone number!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      txtPhone.current.value = ""
      txtPhone.current.focus()
      setValidatePhone(false)
      setValidate(false)
    }else{
      console.log('Valid phone number')
      setValidatePhone(true)
    }
  }

  return (
    <Layout>
      <div className="wrapper-buy">
        <h2 id="category-title">home / buy</h2>
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
              maxLength="12"
              onChange={changeHandler} onBlur={validateNameHandler}
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
              onBlur={validateEmailHandler}
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
              onBlur={validatePhoneHandler}
              ref={txtPhone}
            />
          </div>
          <div className="wrapper-buy-btn">
              <button onClick={()=>{
                navigateTo("/cart")
              }}>cancel</button>

            <button type="submit" disabled={!validate } className={!validate ? "display-off":""} >
              <i>
                <TbShoppingCart />
              </i>
              buy it now
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
