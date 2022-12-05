import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "../styles/modalconfirmation.css";


function ModalConfirmation() {
  const { removeAllItems, display, setDisplay} = useContext(CartContext);

  return (
    <div className={!display ? "overlay hide" : "overlay"}>
      <section className="wrapper-modal">
        <h2 className="modal-tile">
          Are you sure you want to remove all products?
        </h2>
        <div className="modal-btn">
        <Link to={"/cart"}>
          <button
            className="yes"
            onClick={() => {
              removeAllItems();
            }}
          >
            confirm
          </button>
        </Link>

        <Link to={"/cart"}>
          <button className="cancel" onClick={()=>{
            setDisplay(false)
          }}>cancel</button>
        </Link>
        </div>
      </section>
    </div>
  );
}

export default ModalConfirmation;
