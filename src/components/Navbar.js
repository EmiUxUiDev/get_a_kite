import CartWidget from "./CartWidget";
import "../styles/navbar.css";
import logo125 from "../img/logo125.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="wrapper">
        <Link to={"/"} id="link">
          <p className="wrapper_logo">
            GetAKite
            <img className="logo" src={logo125} alt="Getakite logo" />
          </p>
        </Link>

        <ul id="first_ul">
          <li id="wrapper_kite">
            <Link className="first" to={"/category/kite"}>
              KITES
            </Link>
            <ul id="sub_kite">
              <li>
                <a href="#">Freestyle</a>
              </li>
              <li>
                <a href="#">Big air</a>
              </li>
              <li>
                <a href="#">Drift</a>
              </li>
            </ul>
          </li>
          <li id="wrapper_board">
            <Link className="first" to={"/category/board"}>
              BOARDS
            </Link>
            <ul id="sub_board">
              <li>
                <a href="#">Kiteboarding</a>
              </li>
              <li>
                <a href="#">Kitesurfing</a>
              </li>
              <li>
                <a href="#">Foil</a>
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
        <CartWidget />
      </nav>
    </header>
  );
}
