import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "../styles/modalconfirmation.css";
import { TbTrash } from "react-icons/tb";

export default function ModalConfirmation() {
  const { removeAllItems, display, setDisplay} = useContext(CartContext);

  return (
    <div className={!display ? "overlay hide" : "overlay"}>
      
      <section className="wrapper-modal">
      <i><TbTrash /></i>
        
        <div className="modal-btn">
        <h2 className="modal-tile">
          remove all products?
        </h2>
        <Link to={"/cart"}>
          <button
            className="yes"
            onClick={() => {
              removeAllItems();
            }}
          >
            yes
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


