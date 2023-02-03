import React, { createContext, useState } from "react";

export const FavoriteContext = createContext("");

export const FavoriteContextProvider = ({ children }) => {
  //Favorite products List
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [heart, setHeart] = useState(false);

  //ADD/REMOVE FROM FAVORITE
  const addFavorite = (i) => {
    //Verifico si existen dos items iguales(true/false)
    const isInFavorite = favoriteProducts.some((item) => item.id === i.id);
    console.log(isInFavorite);
    console.log(favoriteProducts.length);
    if (isInFavorite) {
      //Si existe, recorro y elimino el producto de favorito
      setFavoriteProducts(
        favoriteProducts.filter((fav) => {
          return fav.id !== i.id;
        })
      );
      console.log(favoriteProducts.length);
      if (favoriteProducts.length === 0) {
        setHeart(false);
      } else {
        console.log("Left favorites items yet");
      }
    } else {
      //Si no existe, lo agrego a favorito
      setFavoriteProducts([...favoriteProducts, i]);
      console.log(favoriteProducts);
      setHeart(true);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        addFavorite,
        favoriteProducts,
        heart,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
