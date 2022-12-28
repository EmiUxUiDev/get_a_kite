import React from "react";
import { BiHeart } from "react-icons/bi";
import '../styles/favorite.css'
import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";

export default function Favorite() {
  const { heart } = useContext(FavoriteContext)
  console.log(heart);
  return (
    <div className="wrapper-heart" >
      <spam className={heart?"favorite-true":"favorite-false"}></spam>
      <i><BiHeart /></i>
    </div>
  )
}
