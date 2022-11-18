import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import "../styles/category.css";

export default function CategoryView() {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())
      .then((data) => {
        // Uso el Params del hook para filtrar.
        const result = data.filter((item) => item.category === categoryName);
        setItems(result);
      })
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <Layout>
      <div id="espacio"></div>
      <ItemList prods={items} />
    </Layout>
  );
}
