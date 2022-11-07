import CartWidget from "./CartWidget";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="wrapper">
        <p className="wrapper_logo">GetAKite
          <img className="logo" src="logo125.png" alt="Getakite logo" />
        </p>

        <ul>
          <li>KITES</li>
          <li>BOARDS</li>
          <li>FOILS</li>
          <li>WINGS</li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
