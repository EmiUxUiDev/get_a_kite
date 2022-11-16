import React from "react";
import Item from "./Item";
import "../styles/itemlist.css";


export default function ItemList({ prods }) {

  return (
    <ul className="wrapper_list">

      {prods.map((prod, index) => {
        return <Item kiteboard={prod} index={index} />;
      })}
      
    </ul>
  );
}
