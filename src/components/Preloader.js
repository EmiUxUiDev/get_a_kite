import React from 'react'
import '../styles/preloader.css'


export default function Preloader(visual) {
  return (
    <div className={visual ? "preloader" : "display-none"}>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>
  )
}

