import React, { createContext, useState} from "react";
export const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
  //Aca podemos usar la logica que nos haga falta, estados, funciones, etc.

  const initStateProd = [];

  const [cartProducts, setCartProducts] = useState(initStateProd);
  const [itemm, setItemm] = useState([]);
  const [purchase, setPurchase] = useState(false);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [itemInCart, setItemInCart] = useState(0)
  console.log(itemInCart);
  console.log(stock);
  console.log(itemm);
  


  // function addItemToCart() {
    
  //   const subs = stock - amount;

  //   if (subs >= 0) {
  //     setStock(subs)
  //     setItemm({...itemm, stock: stock, qty: amount})
  //     console.log(itemm);
  //     setCartProducts([...cartProducts, itemm]);
  //     setPurchase(true);
  //     setItemInCart(itemInCart+1)
  //   } else {
  //     alert("No hay suficiente stock");
  //   }

  // }
  // console.log(cartProducts);

    // function removeItemToCart(id) {
    //   setCartProducts(cartProducts.filter((item) => {
    //     return item.id !== id
    //   }))
    //   console.log(cartProducts)
    // }

  // function clearCart() {
  //   setCartProducts([])
  // }

  //   function isInCart(id) {
  //     return Boolean(cartProducts.find((item) => {
  //       item.id === id
  //     }))
  //   }

  return (
    <CartContext.Provider
      value={{
        purchase,
        setPurchase,
        itemm,
        setItemm,
        stock,
        setStock,
        amount,
        setAmount,
        price,
        setPrice,
        cartProducts,
        setCartProducts,
        itemInCart,
        setItemInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
