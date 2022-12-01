import React from "react";
import { Link } from "react-router-dom";
import "../styles/errorview.css";
import bkg404 from "../img/404.jpg";

function ErrorView() {
  return (
    <div className="wrapper-error">
      <img
        id="bkg404"
        src={bkg404}
        alt="Wave hit a surfer, error 404 background img"
      />
      <h2 className="error404">404</h2>
      <p className="error-info">We're sorry, page not found! Follow the link below to</p>
    
      <Link to="/" className="link">
        home
        <img src="/logo125.png" alt="kite svg logo" className="error-img" />
      </Link>
    </div>
  );
}

export default ErrorView;
