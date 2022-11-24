import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import React, { createContext } from "react";

export const ContextCart = createContext("Hoola");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextCart.Provider value={"Lo que sea"}>
      <RouterProvider router={router} />
    </ContextCart.Provider>
    {/* <App /> */}
  </React.StrictMode>
);
