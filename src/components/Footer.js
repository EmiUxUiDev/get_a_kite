import React from "react";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandDiscord,
} from "react-icons/tb";
import "../styles/footer.css";

export default function footer() {
  return (
    <footer>

      <div className="wrapper_footer">

        <div className="footer_us">
          <img src="logo125.png" alt="Getakite logo" />
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
      <hr />
      <p className="copyright">copyright 2022 - @emidev</p>
    </footer>
  );
}
