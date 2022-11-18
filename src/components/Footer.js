import React from "react";
import {Link} from 'react-router-dom'
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandDiscord,
  TbBrandWhatsapp
} from "react-icons/tb";
import "../styles/footer.css";
import logo125 from "../img/logo125.png"

export default function footer() {
  return (
    <footer>
      <div className="wrapper_footer">
        <div className="footer_us">
          <div className="wrapper-logo-img">
            <Link to={"/"}>GetAKite</Link>
            <img src={logo125} alt="Getakite logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet. Cum eveniet dolorum est distinctio
            maxime vel numquam consequatur vel corrupti galisum.
          </p>
        </div>

        <div className="footer_nav">
          <a href="#">Kites</a>

          <a href="#">Boards</a>

          <a href="#">Foils</a>

          <a href="#">Wings</a>
        </div>

        <div className="social">
          <a href="#">
            <TbBrandTwitter /> Twitter
          </a>
          <a href="#">
            <TbBrandInstagram /> Instagram
          </a>
          <a href="#">
            <TbBrandDiscord /> Discord
          </a>
        </div>
      </div>
      <hr/>
      <p className="copyright">copyright 2022 - @emidev - <TbBrandWhatsapp /> +54 9 351 3441306</p>
      
    </footer>
  );
}
