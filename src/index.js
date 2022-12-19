import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routing } from "./router";
import { CartContextProvider } from "./context/cartContext";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// FIREBASE
import { initializeApp } from "firebase/app";
import { FavoriteContextProvider } from "./context/favoriteContext";

// Firebase configuration - TODO: change settings to hide this values
const firebaseConfig = {
  apiKey: "AIzaSyA-S3PI3z3ajvbV7jzpEUiAZOELKfu1tqQ",
  authDomain: "getakite-db.firebaseapp.com",
  projectId: "getakite-db",
  storageBucket: "getakite-db.appspot.com",
  messagingSenderId: "794680106705",
  appId: "1:794680106705:web:8bc7d3e6dd86271f3ceff0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FavoriteContextProvider>
      <CartContextProvider>
        <RouterProvider router={routing} />
        <ToastContainer />
      </CartContextProvider>
    </FavoriteContextProvider>
);
