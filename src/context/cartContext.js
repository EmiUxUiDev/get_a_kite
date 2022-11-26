import React, { createContext, useState } from "react";
export const CartContext = createContext("");

export const CartContextProvider = ({children})=>{
    //Aca podemos usar la logica que nos haga falta, estados, funciones, etc.
    const [cartItem, setCartItem] = useState('Parrafo alojado en CartContext')
    
    return(
        <CartContext.Provider
         value={{
            cartItem
            }}>
            {children}
        </CartContext.Provider>
    )
}


 