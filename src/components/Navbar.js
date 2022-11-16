import CartWidget from "./CartWidget";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="wrapper">
        <p className="wrapper_logo">
          GetAKite
          <img className="logo" src="logo125.png" alt="Getakite logo" />
        </p>

        <ul id="first_ul">
          <li id="wrapper_kite">
            <a className="first" href="#">KITES</a>
            <ul id="sub_kite">
              <li><a href="#">Freestyle</a></li>
              <li><a href="#">Big air</a></li>
              <li><a href="#">Drift</a></li>
            </ul>
          </li>
          <li id="wrapper_board">
            <a className="first" href="#">BOARDS</a> 
            <ul id="sub_board">
              <li><a href="#">Kiteboarding</a></li>
              <li><a href="#">Kitesurfing</a></li>
              <li><a href="#">Foil</a></li>
            </ul>
          </li>
          <li><a className="first" href="#">FOILS</a> </li>
          <li><a className="first" href="#">WINGS</a> </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
