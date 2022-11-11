import React from "react";
import Item from "./Item";
import "../styles/itemlist.css";


export default function ItemList({ products }) {

  return (
    <ul className="wrapper_list">

      {products.map((product, index) => {
        return <Item kiteboard={product} index={index} />;
      })}
      
    </ul>
  );
}
