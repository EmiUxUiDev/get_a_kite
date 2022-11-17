import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// const mock = {
//     id: "04",
//     product:"kite",
//     name: "Rebel sls c06",
//     brand:"Cabrinha",
//     description: "Free style carbon board to enjoy your freestyle skills",
//     price: 1680,
//     stock: 7,
//     img: "./assets/tronic.webp"
//   }

export default function ItemDetailContainer() {
  const [item, setItem] = useState("");

  // useEffect(()=>{
  //     new Promise((resolve)=>{
  //         setTimeout(()=>{
  //             resolve(mock)
  //         },2000)
  //     })

  //     .then((data)=>{
  //         setItem(data)
  //     })
  // },[])

  // if(!item){return<p>Loading...</p>}

  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())
      .then((data) => {
        const result = data.filter((item) => item.id === 24);
        console.log(result);
        setItem(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    item != "" ?
  <ItemDetail item={item} />
  :console.log("No devueve nada")
  );
}