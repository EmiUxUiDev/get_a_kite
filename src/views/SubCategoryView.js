import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import "../styles/category.css";
import kiteImg from "../img/subKite.webp";
import boardImg from "../img/subBoard.png";



export default function SubCategoryView() {
  const { kiteStyleName } = useParams();
  const { boardStyleName } = useParams();
  // const [items, setItems] = useState([]);
  const [subItems, setSubItems] = useState([]);
  const [bkgImg, setBkgImg] = useState("");

  // useEffect(() => {
  //   fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (!boardStyleName) {
  //         const result = data.filter((item) => item.category === "kite");
  //         setItems(result);
  //         setBkgImg(kiteImg);
  //         const subresult = items.filter((sub) => sub.style === kiteStyleName);
  //         setSubItems(subresult);
  //       } else {
  //         const result = data.filter((item) => item.category === "board");
  //         setItems(result);
  //         setBkgImg(boardImg);
  //         // console.log(boardStyleName)
  //         const subresult = items.filter((sub) => sub.style === boardStyleName);
  //         setSubItems(subresult);
  //       }
  //     })

  //     .catch((error) => console.log(error));
  // }, [items]);

  useEffect(()=>{
    const db = getFirestore("")
    const allItems = collection(db, "items")

    if (!boardStyleName) {
      //Consulta por sub categorias de KITE
      const qry = query(allItems, where("category", "==", "kite"), where("style", "==", kiteStyleName))
      //Extraccion de datos
      getDocs(qry).then((snapshot) => {
        const allProdsFiltered = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        //Actualizacion de estrados c/datos filtrados
        setSubItems(allProdsFiltered)
        setBkgImg(kiteImg)
        console.log(allProdsFiltered)
      });

    } else {
      //Consulta por sub categorias de BOARDS
      const qry = query(allItems, where("category", "==", "board"), where("style", "==", boardStyleName))
      
      getDocs(qry).then((snapshot) => {
        const allProdsFiltered = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setSubItems(allProdsFiltered)
        setBkgImg(boardImg)
        console.log(allProdsFiltered)
      });
    }

  }, [boardStyleName, kiteStyleName])


  return (
    <Layout>
      <div id="espacio" style={{ backgroundImage: `url(${bkgImg})` }}></div>
      <ItemList prods={subItems} />
    </Layout>
  );
}
