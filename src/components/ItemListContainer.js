import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { TbColumnInsertLeft } from "react-icons/tb";


export default function ItemListContainer({ user, subs }) {
  const [prods, setProds] = useState([]);

 
  // fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
  // .then(data=>data.json())

  // .then((data) => {
  //   setProds(data)
  // })

  // .catch(error=>console.error(error))


  //BUSCO TODOS LOS PRODUCTOS DE LA TABLA EN LA BD DE FIRESTORE
  useEffect(()=>{
    const db = getFirestore()
    const allItems = collection(db, 'items')

    getDocs(allItems).then((snapshot)=>{
      const allProdsColleted = snapshot.docs.map((doc)=>
        ({id: doc.id, ...doc.data()})
      )

      setProds(allProdsColleted)
      console.log(allProdsColleted)
    })

  },[])
 

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
