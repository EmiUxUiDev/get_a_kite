import Item from "./Item";
import "../styles/itemlist.css";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'

export default function ItemList({ prods }) {
  const { categoryName, kiteStyleName, boardStyleName } = useParams();
  const [routing, setRouting] = useState("")

  useEffect(()=>{
    if( !categoryName && !kiteStyleName && !boardStyleName){
      setRouting('')
    }else if(categoryName && !kiteStyleName && !boardStyleName){
      setRouting(categoryName)
    }else if(!categoryName && kiteStyleName && !boardStyleName){
      setRouting(` kite/ ${kiteStyleName}`)}else if(!categoryName && !kiteStyleName && boardStyleName){
        setRouting(` board/ ${boardStyleName}`)
      }
  },[categoryName, kiteStyleName, boardStyleName])

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
