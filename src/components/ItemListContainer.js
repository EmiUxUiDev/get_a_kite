import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import { useState } from "react";
import ItemList from "./ItemList";



export default function ItemListContainer({ user, subs }) {
  const [prods, setProds] = useState([]);

 
  fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
  .then(data=>data.json())

  .then((data) => {
    setProds(data)
  })

  .catch(error=>console.error(error))


  return (
    <main>
      <section className="wrapper_section">
        <div className="wrapper_img">
          <img className="main_card_img" src={kite} alt="Kite cabrinha" />
        </div>
        <div id="wrapper-championship">
        <p className="bigair">big air</p>
        <p className="championship">world championship</p>
        <div id="wrapper-downtext">
        <p>tarifa 2022</p>
        <p>BiBo beach</p>
        </div>
        </div>
        <h4>
          Subscription: <b className="sub-user">{subs}</b> - Hey <b className="sub-user">{user}</b>, welcome to our
          platafform!
        </h4>
        <p>
          This's ItemListContainer. Here we're gonna to display all items that
          will sail on this plataform.
        </p>
      </section>
      
      <h3>
        online store{" "}
      </h3>
      <ItemList prods={prods} />
    </main>
  );
}
