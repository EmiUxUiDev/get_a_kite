import React from 'react'
import '../styles/counter.css'
export default function Counter() {
  return (
    <section id='wrapper-counter'>
        <h5>Product name</h5>
        <div className='wrapper-buttons'>
            <button>-</button>
            <p>0</p>
            <button>+</button>
        </div>
        <button id='add-btn'>Add to cart</button>
    </section>
  )
}

