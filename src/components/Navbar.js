import CartWidget from "./CartWidget";
import "../styles/navbar.css";
import logo125 from "../img/logo125.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Favorite from "./Favorite";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    console.log("Click en menu icon");
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav className="wrapper">
        <Link to={"/"} id="link">
          <p className="wrapper_logo">
            GetAKite
            <img className="logo" src={logo125} alt="Getakite logo" />
          </p>
        </Link>

        <ul id="first_ul" className="" ref={navRef}>
          <li id="wrapper_kite">
            <Link className="first" to={"/category/kite"}>
              KITES
            </Link>
            <ul id="sub_kite" ref={navRef}>
              <li>
                <Link to={"/category/kite/Freestyle"}>Freestyle</Link>
              </li>
              <li>
                <Link to={"/category/kite/Big air"}>Big air</Link>
              </li>
              <li>
                <Link to={"/category/kite/Freeride"}>Freeride</Link>
              </li>
              <li>
                <Link to={"/category/kite/Speed"}>Speed</Link>
              </li>
            </ul>
          </li>
          <li id="wrapper_board">
            <Link className="first" to={"/category/board"}>
              BOARDS
            </Link>
            <ul id="sub_board" ref={navRef}>
              <li>
                <Link to={"/category/board/Freestyle"}>Freestyle</Link>
              </li>
              <li>
                <Link to={"/category/board/Freeride"}>Freeride</Link>
              </li>
              <li>
                <Link to={"/category/board/Surfing"}>Surfing</Link>
              </li>
              <li>
                <Link to={"/category/board/Foil"}>Foil</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="first" to={"/category/Foil"}>
              FOILS
            </Link>{" "}
          </li>
          <li>
            <Link className="first" to={"/category/Wing"}>
              WINGS
            </Link>{" "}
          </li>
        </ul>
        <Link to={"/favorites"}>
          <Favorite />
        </Link>
        <i className="cart-icon">
          <CartWidget />
        </i>
        <div className="hamburger" onClick={showNavbar}>
          <spam className="bar"></spam>
          <spam className="bar"></spam>
          <spam className="bar"></spam>
        </div>
      </nav>
    </header>
  );
}
