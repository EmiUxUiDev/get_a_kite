import Item from "./Item";
import "../styles/itemlist.css";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'

export default function ItemList({ prods }) {
  const { categoryName } = useParams();
  const [routing, setRouting] = useState("")

  useEffect(()=>{
    setRouting(categoryName)
  },[categoryName])

  return (
    <>
      <h2 id="category-title">home / {routing} </h2>
      <ul className="wrapper_list">
        {prods.map((prod, index) => {
          return <Item kiteboard={prod} index={index} />;
        })}
      </ul>
    </>
  );
}
