import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Preloader from '../components/Preloader.js'


export default function ItemDetailContainer({ idDetail }) {
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //USO DE REPO  DE GITHUB PARA SIMULAR API
  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
  //     .then((data) => data.json())

  //     .then((data) => {
  //       const result = data.filter((item) => item.id === Number(idDetail))
  //       console.log(result)
  //       setItem(result)
  //     })

  //     .catch((error) => console.log(error))
  //     .finally(()=>{setIsLoading(false)})

  // }, [idDetail]);


  useEffect(()=>{

    setIsLoading(true)
    const db = getFirestore()
    const itemSelected = doc(db, 'items', idDetail)

    getDoc(itemSelected).then((snapshot)=>{
      if(snapshot.exists()){
        setItem({id: idDetail, ...snapshot.data()})
        
      }else {console.log('Item not found')}
    })

    .catch(error => console.log(error))
    .finally(()=>{setIsLoading(false)})

  },[idDetail])



  return item != "" ? (
    <>
    <Preloader isLoading={isLoading}/>
    <ItemDetail item={item} />
    </>
  ) : (
    console.log("No devueve nada")
  );
}
