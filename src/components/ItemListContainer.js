import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Preloader from '../components/Preloader.js'

export default function ItemListContainer({ user, year }) {
  const [prods, setProds] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
 
  
//  useEffect(()=>{
//   setIsLoading(true)
 
//   setTimeout(() => {
//     fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
//     .then(data=>data.json())
  
//     .then((data) => {
//       setProds(data)
//     })
//     .catch(error=>console.error(error))
//     .finally(()=>setIsLoading(false))
//   }, 3000);

//  },[])
  


  //BUSCO TODOS LOS PRODUCTOS DE LA TABLA EN LA BD DE FIRESTORE
  useEffect(()=>{
    setIsLoading(true)
    const db = getFirestore()
    const allItems = collection(db, 'items')

    getDocs(allItems).then((snapshot)=>{
      const allProdsColleted = snapshot.docs.map((doc)=>
        ({id: doc.id, ...doc.data()})
      )

      setProds(allProdsColleted)
    })
    .catch(error => console.log(error))
    .finally(()=>{setIsLoading(false)})
  },[])
 

  return (
    <>
      <Preloader isLoading={isLoading}/>
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
          Welcome to our <b className="sub-user">{year}</b> COLLECTION - Hey <b className="sub-user">{user}, ready?!</b>, 
        
        </h4>
        <p>
        Whether you prefer wave riding, big air adrenaline rush, landing your best tricks with your Twin-Tip. We have what you need.
        </p>
      </section>
      
      <h3>
        online store{" "}
      </h3>
      <ItemList prods={prods} />
    </main>
    </>
  );
}
