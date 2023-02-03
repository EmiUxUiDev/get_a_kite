import React from "react";
import "../styles/item.css";
import { TbTruckDelivery} from "react-icons/tb";
import { BsHeartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from 'react'
import { FavoriteContext } from "../context/favoriteContext";
import { useContext } from "react";
import {
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

export default function Item({ kiteboard, index }) {
  const favoriteRef = useRef()
  const {addFavorite, favoriteProducts} = useContext(FavoriteContext)

  const toggleFavoriteHandler = ()=>{
    favoriteRef.current.classList.toggle("toggle-favorite")
    console.log(kiteboard);
    addFavorite(kiteboard)
    favorite()
} 

// CARGA DE DATOS EN BD REMOTA/FIRESTORE
const favorite = () => {
  //Base de datos
  const db = getFirestore();
  //Coleccion de la bd dnd voy a guardar
  const favoritesCollection = collection(db, "favorites");
  //Datos que voy a guardar
  console.log(favoriteProducts);
  addDoc(favoritesCollection, {
    favorites: favoriteProducts,
  })
}


  return kiteboard.price >= 1001 ? (
    <li id="item_wrapper" key={index}>
      <div className="favorite" onClick={toggleFavoriteHandler} ref={favoriteRef}><i><BsHeartFill /></i></div>
      <Link to={`/item/${kiteboard.id}`}>
        <img
          className="item_img"
          src={kiteboard.path}
          alt={`Description img ${kiteboard.id}`}
        />
      </Link>
      <div className="line"></div>
      <section className="wrapper-text">
        <div className="wrapper-info">
          <p id="subject">{kiteboard.model}</p>
          <p id="price">{`U$S ${kiteboard.price}`}</p>
          <p className="item-available">Available: {kiteboard.stock}</p>
        </div>

        <div className="wrapper-shipping">
          <div className="truck">
            <TbTruckDelivery />
          </div>
          <p>Free shipping</p>
        </div>
      </section>
    </li>
  ) : (
    <li id="item_wrapper" key={index}>
      <div className="favorite" onClick={toggleFavoriteHandler} ref={favoriteRef}><i><BsHeartFill /></i></div>
      <Link to={`/item/${kiteboard.id}`}>
        <img
          className="item_img"
          src={kiteboard.path}
          alt={`Description img ${kiteboard.id}`}
        />
      </Link>
      <div className="line"></div>
      <section className="wrapper-text">
        <div className="wrapper-info">
          <p id="subject">{kiteboard.model}</p>
          <p id="price">{`U$S ${kiteboard.price}`}</p>
          <p className="item-available">Available: {kiteboard.stock}</p>
        </div>

        <div className="wrapper-shipping">
          <p>Calculate your shipping</p>
        </div>
      </section>
    </li>
  );
}
