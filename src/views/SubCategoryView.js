import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import "../styles/category.css";
import kiteImg from "../img/subKite.webp";
import boardImg from "../img/subBoard.png";

export default function SubCategoryView() {
  const { kiteStyleName } = useParams();
  const { boardStyleName } = useParams();
  const [items, setItems] = useState([]);
  const [subItems, setSubItems] = useState([]);
  const [bkgImg, setBkgImg] = useState("");

  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())
      .then((data) => {
        if (!boardStyleName) {
          const result = data.filter((item) => item.category === "kite");
          setItems(result);
          setBkgImg(kiteImg);
          const subresult = items.filter((sub) => sub.style === kiteStyleName);
          setSubItems(subresult);
        } else {
          const result = data.filter((item) => item.category === "board");
          setItems(result);
          setBkgImg(boardImg);
          // console.log(boardStyleName)
          const subresult = items.filter((sub) => sub.style === boardStyleName);
          setSubItems(subresult);
        }
      })

      .catch((error) => console.log(error));
  }, [items]);

  return (
    <Layout>
      <div id="espacio" style={{ backgroundImage: `url(${bkgImg})` }}></div>
      <ItemList prods={subItems} />
    </Layout>
  );
}
