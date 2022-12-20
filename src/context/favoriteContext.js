import React, { createContext, useState } from "react";

export const FavoriteContext = createContext("");

export const FavoriteContextProvider = ({ children }) => {
  //Favorite products List
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  //ADD/REMOVE FROM FAVORITE
  const addFavorite = (i) => {
    
    //Verifico si existen dos items iguales(true/false)
    const isInFavorite = favoriteProducts.some((item) => item.id === i.id);
    
    if (isInFavorite) {
      //Si existe, recorro y elimino el producto de favorito
      setFavoriteProducts(favoriteProducts.filter((fav)=>{
        return fav.id !== i.id
      }))
      console.log(favoriteProducts);
    } else {
      //Si no existe, lo agrego a favorito
      console.log(i);
      console.log(favoriteProducts);
      setFavoriteProducts([...favoriteProducts, i]);
      console.log(favoriteProducts);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        addFavorite,
        favoriteProducts
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
