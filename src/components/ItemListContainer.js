import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import Counter from "./Counter";

export default function ItemListContainer({ user, subs }) {
  return (
    <main>
      <section className="wrapper_section">
        <div className="wrapper_img">
          <img className="main_card_img" src={kite} alt="Kite cabrinha" />
        </div>
        <h4>
          Subscription: {subs} - Hey {user}, welcome to our platafform!
        </h4>
        <p>
          This's ItemListContainer. Here we're gonna to display all items that
          will sail on this plataform.
        </p>
      </section>
      <Counter />
    </main>
  );
}
