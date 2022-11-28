import React from "react";
import Layout from "../components/Layout";
import Cart from "../components/Cart";
import '../styles/cartview.css'
import { Link } from "react-router-dom";


export default function CartView() {
  return (
    <Layout>
      <Cart />
      <Link to={"/"}><button id="back-shopping">Continue shopping</button></Link>
    </Layout>
  );
}
