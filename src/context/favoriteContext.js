import React, { createContext, useState } from "react";

export const FavoriteContext = createContext("");

export const FavoriteContextProvider = ({ children }) => {

    //LOGICA

    return (
        <FavoriteContext.Provider
          value={{
            
          }}
        >
          {children}
        </FavoriteContext.Provider>
      );

}