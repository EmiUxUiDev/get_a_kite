import React from 'react'
import Layout from '../components/Layout'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { useParams } from 'react-router-dom'


export default function ItemView() {
const {idDetail} = useParams()

  return ( 
    <Layout>
      <ItemDetailContainer idDetail={idDetail}/>
    </Layout>
  )
}

