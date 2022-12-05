import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import "../styles/category.css";
import def from "../img/Kiteboarding_overview.webp"
import kite from "../img/kite.webp"
import board from "../img/board.png"
import foil from "../img/foil.webp"
import wing from "../img/wings.png"

export default function CategoryView() {

  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [bkgImg, setBkgImg] = useState('');

  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())
      .then((data) => {
        // Uso el Params del hook para filtrar.
        const result = data.filter((item) => item.category === categoryName);
        setItems(result);
      })
      .catch((error) => console.log(error));

      switch(categoryName){
        case 'kite':
          setBkgImg(kite)
        break
        case 'board':
          setBkgImg(board)
        break
        case 'Foil':
          setBkgImg(foil)
        break
        case 'Wing':
          setBkgImg(wing)
        break
        default:
          setBkgImg(def)
      }
  }, [categoryName]);
  console.log(categoryName)
  console.log(items.id)
  return (
    <Layout>
      <div id="espacio" style={{ backgroundImage: `url(${bkgImg})` }}></div>
      <ItemList prods={items} />
    </Layout>
  );
}

