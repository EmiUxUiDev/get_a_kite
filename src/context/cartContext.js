import React, { createContext, useState } from "react";


export const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
  //Productos en carrito
  const [cartProducts, setCartProducts] = useState([]);

    //Lo uso para que me de info del precio total segun cantidad en el contador
    const [priceProds, setPrice] = useState(0);

    // const[available, setAvailable] = useState(0)



  //***************ADD PRODUCTS TO CART**************************
  ////////////////////////////////////////////////////////////////////////
  const addItemToCart = (i) => {
    //Verifico si existen dos items iguales(true/false)
    const isInCart = cartProducts.some((item) => item.id === i.id);

    if (isInCart) {
      //Si existe, mapeo el array para, una vez encontrado el item, sumarle solo la cantidad
      const updatedCartProducts = cartProducts.map((item) => {
        if (item.id === i.id) {
          return { ...item, qty: item.qty + i.qty, stock: item.stock - i.qty};
        } else {
          return item;
        }
      });
      console.log(updatedCartProducts);
      setCartProducts(updatedCartProducts);
    } else {
      i.stock =  i.stock-i.qty
      setCartProducts([...cartProducts, i]);
      console.log(i);
    }
    
  };
  //******************************************************



  //***************REMOVE PRODUCT TO CART **************************
  ////////////////////////////////////////////////////////////////////////

  const removeItemToCart = (id) => {
    setCartProducts(cartProducts.filter((i) => {
        return i.id !== id;
      })
    );
  };
  //******************************************************




  //***************REMOVE ALL PRODUCTS **************************
  ////////////////////////////////////////////////////////////////////////

  const removeAllItems = () => {
    setCartProducts([]);
  };
  //******************************************************





  //***************ITEMS EN EL CARRITO **************************
  ////////////////////////////////////////////////////////////////////////

  const itemInCart = () => {
    return cartProducts.reduce((stored, item)=>
      stored += item.qty, 0
    )
  };
  //******************************************************





    //***************PRECIO TOTAL CARRITO **************************
  ////////////////////////////////////////////////////////////////////////

  const cartTotalPrice = () => {
    return cartProducts.reduce((stored, item)=>
      stored += item.qty*item.price, 0
    )
  };
console.log(cartTotalPrice());
  //******************************************************



  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItemToCart,
        removeAllItems,
        itemInCart,
        removeItemToCart,
        cartTotalPrice,
        priceProds,
        setPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
