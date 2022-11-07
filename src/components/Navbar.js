import CartWidget from "./CartWidget";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="wrapper">
        <img className="logo" src="logo125.png" alt="Getakite logo" />
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
