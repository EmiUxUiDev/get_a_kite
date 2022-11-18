import Navbar from './Navbar'
import Footer from './Footer'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Layout({children}) {
  const { categoryName } = useParams();
  const [bkgImg, setBkgImg] = useState('../img/Kiteboarding_overview.webp');

  useEffect(()=>{
    switch(categoryName){
      case 'kite':
        setBkgImg('../img/kite.webp')
      break
      case 'board':
        setBkgImg('../img/board.png')
      break
      case 'Foil':
        setBkgImg('../img/foil.webp')
      break
      case 'Wing':
        setBkgImg('../img/wing.png')
      break
      default:
        setBkgImg('../img/Kiteboarding_overview.webp')
    }
  }, [categoryName])

  console.log(bkgImg)
  return (
    <body style={{backgroundImage: `'url(${bkgImg})'`}}>
        <Navbar />
          {children}
        <Footer />
    </body>
  )
}

