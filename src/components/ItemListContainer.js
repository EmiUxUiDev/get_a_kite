import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import { useState } from "react";
import ItemList from "./ItemList";


// const kiteboards = [
//   {
//     id: "01",
//     name: "Cabrinha fx01",
//     description: "Free style kite fx01",
//     price: 2050,
//     stock: 3,
//     img: "assets/cabrinha_fx01.webp",
//   },
//   {
//     id: "02",
//     name: "Cabrinha fx03",
//     description: "Free style kite fx03",
//     price: 2150,
//     stock: 5,
//     img: "assets/cabrinha_fx03.webp",
//   },
//   {
//     id: "03",
//     name: "Tronic",
//     description: "Free style board",
//     price: 550,
//     stock: 2,
//     img: "assets/tronic.webp",
//   },
//   {
//     id: "04",
//     name: "Xcal Carbon",
//     description: "Free style carbon board",
//     price: 680,
//     stock: 2,
//     img: "assets/xcalCarbon.webp",
//   },
//   {
//     id: "05",
//     name: "Foilwing Mantis 03",
//     description: "Foilwing Cabrinha window ",
//     price: 720,
//     stock: 7,
//     img: "assets/foilwing03.webp",
//   },
//   {
//     id: "06",
//     name: "Foilwing Mantis 04",
//     description: "Foilwing Cabrinha window",
//     price: 1250,
//     stock: 0,
//     img: "assets/foilwing04.webp",
//   },
//   {
//     id: "07",
//     name: " Fusion carbon",
//     description: "Entire carbon foil",
//     price: 860,
//     stock: 8,
//     img: "assets/fusion.webp",
//   },
//   {
//     id: "08",
//     name: "Slick SLS 01",
//     description: "Foilwing Cabrinha windowless",
//     price: 2200,
//     stock: 4,
//     img: "assets/slick_sls01.webp",
//   },
//   {
//     id: "09",
//     name: "Slick SLS 03 xTreme",
//     description: "Foilwing Cabrinha windowless",
//     price: 2870,
//     stock: 1,
//     img: "assets/slick_sls03.webp",
//   },
//   {
//     id: "10",
//     name: "Spirit Carve",
//     description: "Shore ",
//     price: 2540,
//     stock: 4,
//     img: "assets/spirit_carve.webp",
//   },
//   {
//     id: "11",
//     name: "Spirit Gt",
//     description: "Drifter foil",
//     price: 3100,
//     stock: 8,
//     img: "assets/spirit_gt.webp",
//   },
//   {
//     id: "12",
//     name: "Neo D Lab",
//     description: "For kitesurfing, drive the waves ",
//     price: 1505,
//     stock: 3,
//     img: "assets/neo_d_lab.webp",
//   },
//   {
//     id: "13",
//     name: "Bullit v02",
//     description: "Free surfing and waves",
//     price: 1800,
//     stock: 2,
//     img: "assets/bullit_v02.png",
//   },
//   {
//     id: "14",
//     name: "Bandit s4",
//     description: "Free style surfing and waves",
//     price: 2150,
//     stock: 4,
//     img: "assets/bandit_s4_01.png",
//   },
//   {
//     id: "15",
//     name: "Bandit",
//     description: "Free style surfing waves and shores",
//     price: 2560,
//     stock: 8,
//     img: "assets/bandit_cc3.png",
//   },
//   {
//     id: "16",
//     name: "Dice",
//     description: "Free style surfing waves and big air",
//     price: 2205,
//     stock: 5,
//     img: "assets/dice_cc01.webp",
//   },
// ];

export default function ItemListContainer({ user, subs }) {
  const [prods, setProds] = useState([]);

  // const prodList = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(kiteboards);
  //   }, 2000);
  // });
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
