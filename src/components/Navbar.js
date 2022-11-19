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
            <ul id="sub_board">
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
        <CartWidget />
      </nav>
    </header>
  );
}
