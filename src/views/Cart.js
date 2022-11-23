import React from "react";
import img from "../img/cabrinha.png";
import  "../styles/cart.css"


export default function Cart() {
  return (
    <section className="wrapper-cart">
      <div className="wrapper-subject">
        <h2>Item cart subject</h2>
        <p>
          Nulla orci eros, malesuada non porttitor sit amet, consectetur ac
          nulla.
        </p>
      </div>
      <div className="wrapper-articles">
        <article className="article">
          <div className="wrapper-img">
          <img className="article-img" src={img} alt="hhh"></img>
          </div>
          <div className="article-data">Article data</div>
          <button>Delete</button>
        </article>

        <article className="article">
          <div className="wrapper-img">
          <img className="article-img" src={img} alt="hhh"></img>
          </div>
          <div className="article-data">Article data</div>
          <button>Delete</button>
        </article>

        <article className="article">
          <div className="wrapper-img">
          <img className="article-img" src={img} alt="hhh"></img>
          </div>
          <div className="article-data">Article data</div>
          <button>Delete</button>
        </article>
        
      </div>
    </section>
  );
}
