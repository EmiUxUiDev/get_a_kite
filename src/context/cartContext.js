import React, { createContext, useState } from "react";
export const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
  //Productos en carrito
  const [cartProducts, setCartProducts] = useState([]);

  //Para actualizar contador cartwidget
  const [itemInCart, setItemInCart] = useState(0);

  //Item actual para borrar
  const [currentItem, setCurrentItem] = useState('')

  //Precio total de productos en carrito
  const [totalPrice, setTotalPrice] = useState(0)

  //***************ADD PRODUCTS TO CART**************************
  ////////////////////////////////////////////////////////////////////////
  const addItemToCart = (i) => {
    //Verifico si existen dos items iguales(true/false)
    const isInCart = cartProducts.some((item) => item.id === i.id);

    if (isInCart) {
      //Si existe, mapeo el array para, una vez encontrado el item, sumarle solo la cantidad
      const updatedCartProducts = cartProducts.map((item) => {
        if (item.id === i.id) {
          return { ...item, qty: item.qty + i.qty };
        } else {
          return item;
        }
      });

      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([...cartProducts, i]);
      setItemInCart(itemInCart + 1);
    }
  };
  ////////////////////////////////////////////////////
  //******************************************************

  //***************REMOVE PRODUCT TO CART **************************
  ////////////////////////////////////////////////////////////////////////

  const removeItemToCart = (id) => {
    setCartProducts(cartProducts.filter((i) => {
        return i.id !== id;
      })
    );
    setItemInCart(itemInCart - 1);
  };

  ////////////////////////////////////////////////////
  //******************************************************

  //***************REMOVE ALL PRODUCTS **************************
  ////////////////////////////////////////////////////////////////////////

  const removeAllItems = () => {
    setCartProducts([]);
    setItemInCart(0);
  };

  ////////////////////////////////////////////////////
  //******************************************************


  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItemToCart,
        removeAllItems,
        itemInCart,
        removeItemToCart,
        setCurrentItem,
        totalPrice,
        setTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
