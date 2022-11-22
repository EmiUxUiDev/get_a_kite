import "../styles/itemlistcontainer.css";
import kite from "../img/dice_cc01.webp";
import { useState } from "react";
import ItemList from "./ItemList";

const kites = [
  {   id: 1,
          category: "kite",
          brand: "Cabrinha",
          model: "FX2 yellow",
          style: "Freestyle",
          description: "Fast powerful loops with the ability to catch you on the way down.  Height and hang time that this kite has not seen before.",
          price: 1950,
          stock: 5,
          path: "/assets/cabrinha_fx02.webp"
      },
          {   id: 2,
          category: "kite",
          brand: "Cabrinha",
          model: "FX2 red",
          style: "Freestyle",
          description: "Fast powerful loops with the ability to catch you on the way down.  Height and hang time that this kite has not seen before.",
          price: 1950,
          stock: 2,
          path: "/assets/cabrinha_fx01.webp"
      },
          {   id: 3,
          category: "kite",
          brand: "Cabrinha",
          model: "FX2 turquoise",
          style: "Freestyle",
          description: "Fast powerful loops with the ability to catch you on the way down.  Height and hang time that this kite has not seen before.",
          price: 1950,
          stock: 4,
          path: "/assets/cabrinha_fx03.webp"
      },
  {   "id": 4,
          "category": "kite",
          "brand": "Duotone",
          "model": "Dice",
          "style": "Freestyle",
          "description": "The Dice is the kite for you if you’re an advanced rider, you love to do freestyle but also want a kite that can handle huge airs and smash some waves!",
          "price": 2150,
          "stock": 3,
          "path": "/assets/dice_cc01.webp"
      },
          {   "id": 5,
          "category": "kite", 
          "brand": "Duotone",
          "model": "Vegas",
          "style": "Freestyle",
          "description": " Incredible for unhooked tricks and perfect for powerful kite loops, the Vegas will push your level beyond what you thought was possible.",
          "price": 2150,
          "stock": 3,
          "path": "/assets/vegas_cc05.webp"
      },
          {   "id": 6,
          "category": "kite", 
          "brand": "Duotone",
          "model": "Rebel SLS Porsche",
          "style": "Big air",
          "description": "Easy to jump, with huge hangtime, now even a kite looping machine and a big air monster, a favourite of our pro riders for boosting to the moon and winning in Big Air competitions.",
          "price": 2600,
          "stock": 2,
          "path": "/assets/rebel_porsche.webp"
      },
          {   "id": 7,
          "category": "kite", 
          "brand": "Duotone",
          "model": "Rebel SLS green",
          "style": "Big air",
          "description": "No matter how you choose to ride, the Rebel SLS has a well-deserved legendary status! Easy to jump, with huge hangtime, now even a kite looping machine and a big air monster.",
          "price": 2450,
          "stock": 9,
          "path": "/assets/rebel_sls_c04.webp"
      },
          {   "id": 8,
          "category": "kite", 
          "brand": "Duotone",
          "model": "Rebel SLS white",
          "style": "Big air",
          "description": "No matter how you choose to ride, the Rebel SLS has a well-deserved legendary status! Easy to jump, with huge hangtime, now even a kite looping machine and a big air monster.",
          "price": 2450,
          "stock": 5,
          "path": "/assets/rebel_sls_c06.webp"
      },
          {   "id": 9,
          "category": "kite", 
          "brand": "Duotone",
          "model": "Rebel SLS yellow",
          "style": "Big air",
          "description": "No matter how you choose to ride, the Rebel SLS has a well-deserved legendary status! Easy to jump, with huge hangtime, now even a kite looping machine and a big air monster.",
          "price": 2450,
          "stock": 3,
          "path": "/assets/rebel_sls_c08.webp"
      },
          {   "id": 10,
          "category": "kite", 
          "brand": "F-one",
          "model": "Bandit S4",
          "style": "Freeride",
          "description": "Highly responsive, intuitive, and capable of super drift, the profile of this kite is incredibly smooth and brings about sharper performances and more stability and efficiency than ever before.",
          "price": 1900,
          "stock": 8,
          "path": "/assets/bandit_cc3.png"
      },
          {   "id": 11,
          "category": "kite", 
          "brand": "F-one",
          "model": "Furtive V1",
          "style": "Speed",
          "description": "Optimized upwind speed/angle compromise with an unbelievable traction towards the edge of the window. Maximum power and acceleration thanks to the high aspect ratio and moderate ARC",
          "price": 3500,
          "stock": 3,
          "path": "/assets/furtive_01.png"
      },
          {   "id": 12,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Xcal Carbon",
          "style": "Freestyle",
          "description": "With the strategic use of our exclusive Japanese Toray Carbon we’ve fine tuned the response of the board, leading to an explosive pop and fast locked in landings.",
          "price": 950,
          "stock": 8,
          "path": "/assets/xcalCarbon.png"
      },
          {   "id": 13,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Stylus",
          "style": "Freeride",
          "description": "Its clever design allows you to generate speed and power in minimal wind speeds and the offset binding positioning enhances edging and allows greater control over the board. ",
          "price": 600,
          "stock": 15,
          "path": "/assets/stylus.png"
      },
          {   "id": 14,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Spectrum",
          "style": "Freeride",
          "description": " What’s so special about the spectrum is how easy it is to ride and the vast range of use and ability levels it caters for. ",
          "price": 750,
          "stock": 14,
          "path": "/assets/spectrum.png"
      },
          {   "id": 15,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Tronic",
          "style": "Freeride",
          "description": " What’s so special about the spectrum is how easy it is to ride and the vast range of use and ability levels it caters for. ",
          "price": 750,
          "stock": 7,
          "path": "/assets/tronic.png"
      },
          {   "id": 16,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Spade",
          "style": "Surfing",
          "description": " What’s so special about the spectrum is how easy it is to ride and the vast range of use and ability levels it caters for. ",
          "price": 1200,
          "stock": 11,
          "path": "/assets/spadedeck.png"
      },
          {   "id": 17,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Cutlass pro",
          "style": "Surfing",
          "description": "With a slightly wider nose and wide point just front of center, the Cutlass puts a lot of flow and style into your surfing.",
          "price": 1250,
          "stock": 7,
          "path": "/assets/cutlass.png"
      },
          {   "id": 18,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "XBreed",
          "style": "Surfing",
          "description": "Symmetrical tip and tail design but to enhance its freestyle capability in the surf or on flat water we have lowered the rocker line and have added a center bottom channel.",
          "price": 1300,
          "stock": 5,
          "path": "/assets/breeddeck.png"
      },
          {   "id": 19,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Autopilot",
          "style": "Foil",
          "description": "The higher volume of the Autopilot makes paddling a simple task when surfing, while the concave deck shape keeps your feet as close to the hydrofoil as possible.",
          "price": 900,
          "stock": 6,
          "path": "/assets/autopilot_foil.png"
      },
          {   "id": 20,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Macro",
          "style": "Foil",
          "description": "We’ve optimized the volume distribution to put the float exactly where it's needed to quickly fly while creating a balanced and nimble board once you are up on the foil.",
          "price": 1100,
          "stock": 9,
          "path": "/assets/macro_foil.png"
      },
          {   "id": 21,
          "category": "board", 
          "brand": "Cabrinha",
          "model": "Surfing",
          "style": "Wing foiling",
          "description": "We’ve optimized the volume distribution to put the float exactly where it's needed to quickly fly while creating a balanced and nimble board once you are up on the foil.",
          "price": 1050,
          "stock": 12,
          "path": "/assets/macroair_foil.png"
      },
          {   "id": 22,
          "category": "board", 
          "brand": "F-one",
          "model": "Big one",
          "style": "Freeride",
          "description": "With early planing abilities and a grippy footing, this board is incredibly stable and reliable so you can ride at any time in full confidence.",
          "price": 1250,
          "stock": 5,
          "path": "/assets/bigone.png"
      },
          {   "id": 23,
          "category": "board", 
          "brand": "F-one",
          "model": "Magnet carbon",
          "style": "Freestyle",
          "description": "With early planing abilities and a grippy footing, this board is incredibly stable and reliable so you can ride at any time in full confidence.",
          "price": 1850,
          "stock": 7,
          "path": "/assets/magnet_carbon.png"
      },
          {   "id": 24,
          "category": "board", 
          "brand": "F-one",
          "model": "Mitu pro carbon",
          "style": "Surfing",
          "description": "It is a must-have for any rider who wants to combine high-performance wave riding with some serious strapless freestyle and air game.",
          "price": 1550,
          "stock": 5,
          "path": "/assets/mitu_procarbon.png"
      },
          {   "id": 25,
          "category": "board", 
          "brand": "F-one",
          "model": "Mitu pro flex",
          "style": "Surfing",
          "description": "HD Foam Flex construction offer the fantastic MITU shape that brings the sensation of a traditional surfboard with incredible versatility and durability for unrivalled comfort and flow on the water..",
          "price": 1850,
          "stock": 18,
          "path": "/assets/mitu_proflex.png"
      },
          {   "id": 26,
          "category": "board", 
          "brand": "F-one",
          "model": "One",
          "style": "Freeride",
          "description": "Accessible and intuitive, the ONE is the perfect kitesurfing board for freeride and twin tip beginners, as well as for fun sessions on light wind days.",
          "price": 1570,
          "stock": 14,
          "path": "/assets/one.png"
      },
          {   "id": 27,
          "category": "board", 
          "brand": "F-one",
          "model": "Papeno",
          "style": "Surfing",
          "description": "It allows you to surf with a paddle, with or without a foil as well as windsurf or wingsurf in no time!",
          "price": 1850,
          "stock": 11,
          "path": "/assets/papenoo_foil.png"
      },
          {   "id": 28,
          "category": "board", 
          "brand": "F-one",
          "model": "Slice bamboo",
          "style": "Surfing",
          "description": "Is a compact surf in a bamboo sandwich construction which does an excellent job of covering both strapless freestyle and small to medium-sized wave surfing.",
          "price": 1850,
          "stock": 11,
          "path": "/assets/slice_bamboo.png"
      },
          {   "id": 29,
          "category": "board", 
          "brand": "Duotone",
          "model": "Free",
          "style": "Freeride",
          "description": "The perfect board for entry-level riders, looking for an easy board to advance quickly.",
          "price": 1100,
          "stock": 5,
          "path": "/assets/free_foil.webp"
      },
          {   "id": 30,
          "category": "board", 
          "brand": "Duotone",
          "model": "Indy",
          "style": "Foil",
          "description": "A high performance race foil board and the top of the range, designed for speed.",
          "price": 2100,
          "stock": 3,
          "path": "/assets/indy_foil.webp"
      },
          {   "id": 31,
          "category": "board", 
          "brand": "Duotone",
          "model": "Jaime",
          "style": "Freestyle",
          "description": "Perfect for riders who want to boost big air, throw the latest freestyle tricks and have loads of fun on the water!",
          "price": 1450,
          "stock": 7,
          "path": "/assets/jaime.webp"
      },
          {   "id": 32,
          "category": "Foil", 
          "brand": "Duotone",
          "model": "Spirit GT",
          "style": "Speed foil",
          "description": "The Spirit 3.0 series is a solid aluminium mast offering loads of control and stability at incredible speed.",
          "price": 1250,
          "stock": 7,
          "path": "/assets/spirit_gt.webp"
      },
          {   "id": 33,
          "category": "Foil", 
          "brand": "Duotone",
          "model": "Fusion",
          "style": "Freeride",
          "description": "With its blend of full carbon and EPS core construction, low aspect Ratio wings and extruded aluminum fuselage with Heli coils, the DA850 allows for a slower planing speed",
          "price":1650,
          "stock": 7,
          "path": "/assets/fusion.webp"
      },
          {   "id": 34,
          "category": "Foil", 
          "brand": "Duotone",
          "model": "Spirit SLS GT",
          "style": "Speed foil",
          "description": "The Spirit SLS is a true inspiration in the SLS (strong light superior) segment, offering an ultra light carbon mast with a glued top plate and a carbon fuselage form fit connection system",
          "price": 1550,
          "stock": 9,
          "path": "/assets/spirit_sls.webp"
      },
          {   "id": 35,
          "category": "Foil", 
          "brand": "Duotone",
          "model": "Spirit freeride",
          "style": "Freeride",
          "description": "The Spirit 3.0 series is a solid aluminium mast offering loads of control and stability at incredible speed.",
          "price": 1400,
          "stock": 14,
          "path": "/assets/spirit_freeride.webp"
      },
          
          {   "id": 36,
          "category": "Foil", 
          "brand": "Duotone",
          "model": "Spirit Carve",
          "style": "Surf foil",
          "description": "The Spirit 3.0 series is a solid aluminium mast offering loads of control and stability at incredible speed.",
          "price": 1650,
          "stock": 14,
          "path": "/assets/spirit_carve.webp"
      },  
          {   "id": 37,
          "category": "Wing", 
          "brand": "Duotone",
          "model": "Green Slick SLS",
          "style": "Surf foil/window ",
          "description": "A new, fun way to enjoy water sports!Freedon in the air",
          "price": 950,
          "stock": 11,
          "path": "/assets/foilwing02.webp"
      },  
          {   "id": 38,
          "category": "Wing", 
          "brand": "Duotone",
          "model": "Pink Slick SLS",
          "style": "Surf foil/window",
          "description": "A new, fun way to enjoy water sports! Freedon in the air",
          "price": 950,
          "stock": 5,
          "path": "/assets/foilwing03.webp"
      },  
          {   "id": 39,
          "category": "Wing", 
          "brand": "Duotone",
          "model": "Yellow Slick SLS",
          "style": "Surf foil/windowless",
          "description": "A new, fun way to enjoy water sports!Freedon in the air",
          "price": 950,
          "stock": 2,
          "path": "/assets/foilwing04.webp"
      },  
          {   "id": 40,
          "category": "Wing", 
          "brand": "F-one",
          "model": "Orange Slick SLS",
          "style": "Surf foil/windowless",
          "description": "This brand new wing offers more lightness and comfort while being very accessible as well as performing for all riders!",
          "price": 1050,
          "stock": 4,
          "path": "/assets/swing01.png"
          },  
          {   "id": 41,
          "category": "Wing", 
          "brand": "F-one",
          "model": "Blue Slick SLS",
          "style": "Surf foil/windowless",
          "description": "This brand new wing offers more lightness and comfort while being very accessible as well as performing for all riders!",
          "price": 1050,
          "stock": 5,
          "path": "/assets/swing02.png"
          },  
          {   "id": 42,
          "category": "Wing", 
          "brand": "F-one",
          "model": "Strong Slick SLS",
          "style": "Surf foil/windowless",
          "description": "This brand new wing offers more lightness and comfort while being very accessible as well as performing for all riders!",
          "price": 1050,
          "stock": 7,
          "path": "/assets/swing03.png"
          }
  ]

export default function ItemListContainer({ user, subs }) {
  const [prods, setProds] = useState([]);

  const prodList = new Promise((resolve) => {
      resolve(kites);
  });
  // fetch("./kites.json")
  prodList.then(data=>data.json())

  prodList.then((data) => {
    setProds(data)
  })

  .catch(error=>console.error(error))


  return (
    <main>
      <section className="wrapper_section">
        <div className="wrapper_img">
          <img className="main_card_img" src={kite} alt="Kite cabrinha" />
        </div>
        <div id="wrapper-championship">
        <p className="bigair">big air</p>
        <p className="championship">world championship</p>
        <div id="wrapper-downtext">
        <p>tarifa 2022</p>
        <p>BiBo beach</p>
        </div>
        </div>
        <h4>
          Subscription: <b className="sub-user">{subs}</b> - Hey <b className="sub-user">{user}</b>, welcome to our
          platafform!
        </h4>
        <p>
          This's ItemListContainer. Here we're gonna to display all items that
          will sail on this plataform.
        </p>
      </section>
      
      <h3>
        online store{" "}
      </h3>
      <ItemList prods={prods} />
    </main>
  );
}
