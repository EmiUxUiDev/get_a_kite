import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";



export default function ItemDetailContainer({ idDetail }) {
  const [item, setItem] = useState("");
  console.log(idDetail);

  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())

      .then((data) => {
        const result = data.filter((item) => item.id === Number(idDetail))
        console.log(result)
        setItem(result)
      })

      .catch((error) => console.log(error))
  }, [idDetail]);

  return item != "" ? (
    <ItemDetail item={item} />
  ) : (
    console.log("No devueve nada")
  );
}
