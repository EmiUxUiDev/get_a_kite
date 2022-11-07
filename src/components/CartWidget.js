import { MdOutlineShoppingCart } from "react-icons/md";
import "../styles/cartwidget.css";

export default function CartWidget() {
  return (
    <div className="wrapper_cart">
      <div className="cart-icon">
        <MdOutlineShoppingCart />
      </div>

      <div className ='cart-item'>
        <button>00</button>
      </div>
    </div>
  );
}
