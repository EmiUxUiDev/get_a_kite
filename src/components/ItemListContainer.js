import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import Counter from "./Counter";
import { useState } from "react";
import ItemList from "./ItemList";

const kiteboards = [
  {
    id:"01",
    name:"Cabrinha fx01",
    description: "Free style kite fx01",
    stock: 3,
    img: "./cabrinha_fx01.webp"
  },
  {
    id:"02",
    name:"Cabrinha fx02",
    description: "Free style kite fx03",
    stock: 5,
    img: "./cabrinha_fx03.webp"
  },
  {
    id:"03",
    name:"Tronic",
    description: "Free style board",
    stock: 2,
    img: "./tronic.webp"
  },
  {
    id:"04",
    name:"Xcal Carbon",
    description: "Free style carbon board",
    stock: 2,
    img: "./xcalCarbon.webp"
  }
]

export default function ItemListContainer({ user, subs }) {
  const [prods, setProds] = useState([])

  const prodList = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(kiteboards)
    }, 2000)
  })

  prodList.then((data)=>{
      setProds(data)
  })

  return (
    <main>
      <section className="wrapper_section">
        <div className="wrapper_img">
          <img className="main_card_img" src={kite} alt="Kite cabrinha" />
        </div>
        <h4>
          Subscription: {subs} - Hey {user}, welcome to our platafform!
        </h4>
        <p>
          This's ItemListContainer. Here we're gonna to display all items that
          will sail on this plataform.
        </p>
      </section>
      <ItemList products = {prods}/>
      <Counter />
    </main>
  );
}
