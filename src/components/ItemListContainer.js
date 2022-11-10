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
    img: "assets/cabrinha_fx01.webp"
  },
  {
    id:"02",
    name:"Cabrinha fx02",
    description: "Free style kite fx03",
    stock: 5,
    img: "assets/cabrinha_fx03.webp"
  },
  {
    id:"03",
    name:"Tronic",
    description: "Free style board",
    stock: 2,
    img: "assets/tronic.webp"
  },
  {
    id:"04",
    name:"Xcal Carbon",
    description: "Free style carbon board",
    stock: 2,
    img: "assets/xcalCarbon.webp"
  },
  {
    id:"05",
    name:"Foilwing Mantis 03",
    description: "Foilwing Cabrinha window ",
    stock: 7,
    img: "assets/foilwing03.webp"
  },
  {
    id:"06",
    name:"Foilwing Mantis 04",
    description: "Foilwing Cabrinha window",
    stock: 0,
    img: "assets/foilwing04.webp"
  },
  {
    id:"07",
    name:" Fusion carbon",
    description: "Entire carbon foil",
    stock: 8,
    img: "assets/fusion.webp"
  },
  {
    id:"08",
    name:"Slick SLS 01",
    description: "Foilwing Cabrinha windowless",
    stock: 4,
    img: "assets/slick_sls01.webp"
  },
  {
    id:"09",
    name:"Slick SLS 03 xTreme",
    description: "Foilwing Cabrinha windowless",
    stock: 1,
    img: "assets/slick_sls03.webp"
  },
  {
    id:"10",
    name:"Spirit Carve",
    description: "Shore ",
    stock: 4,
    img: "assets/spirit_carve.webp"
  },
  {
    id:"11",
    name:"Spirit Gt",
    description: "Drifter foil",
    stock: 8,
    img: "assets/spirit_gt.webp"
  },
  {
    id:"12",
    name:"Neo D Lab",
    description: "For kitesurfing, drive the waves ",
    stock: 3,
    img: "assets/neo_d_lab.webp"
  },
  {
    id:"13",
    name:"Bullit v02",
    description: "Free surfing and waves",
    stock: 2,
    img: "assets/bullit_v02.png"
  },
  {
    id:"14",
    name:"Bandit s4",
    description: "Free style surfing and waves",
    stock: 4,
    img: "assets/bandit_s4_01.png"
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
          Subscription: <b>{subs}</b> - Hey <b>{user}</b>, welcome to our platafform!
        </h4>
        <p>
          This's ItemListContainer. Here we're gonna to display all items that
          will sail on this plataform.
        </p>
      </section>
      
      <h3><p className="big-text">GetAKite</p>online store </h3>
      <ItemList products = {prods}/>
      <Counter />
    </main>
  );
}
