import React from 'react'
import Layout from '../components/Layout'
import { useContext } from 'react'
import { FavoriteContext } from '../context/favoriteContext'
import '../styles/favoriteview.css'

export default function FavoritesView() {

const {favoriteProducts} = useContext(FavoriteContext) 
console.log(favoriteProducts)   
  return (
    <Layout>
        <h2 id="category-title">home / favorites</h2>
        {
            favoriteProducts?.map((fav)=>{
                return(
                    <>
                        <article className='wrapper-favorite'>
                            <img className='img-favorite' src={fav.path} alt={fav.model} />
                            <div className='favorite-info'>
                                <p>{fav.brand}</p>
                                <p>{fav.model}</p>
                                <p>{fav.price}</p>
                            </div>
                        </article>
                    </>
                )
            })
        }
    </Layout>
  )
}
