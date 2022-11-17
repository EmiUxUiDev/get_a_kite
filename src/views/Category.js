import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Item from '../views/Item'
import{ useParams } from 'react-router-dom'
import ItemView from '../views/Item'

export default function CategoryView() {
  const {categoryName} = useParams()
  const [items, setItems] = useState('')


  useEffect(() => {
    fetch("https://emiuxuidev.github.io/getakite_API/kitesurfing.json")
      .then((data) => data.json())
      .then((data) => {
        // Uso el Params del hook para filtrar.
        console.log(categoryName)
        const result = data.filter((item) => item.category === categoryName);
        console.log(result)
        setItems(result);
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <Layout>
      {items.map((card)=><ItemView kiteboard ={card} index={card.id}/>
      )}
    </Layout>
  )
}

 