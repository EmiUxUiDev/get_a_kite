import React from 'react'
import '../styles/preloader.css'


export default function Preloader({isLoading}) {

  return (
    <div className = {isLoading === true ? "preloader" : "display-none"}>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>
  )
}

