import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routing } from "./router";
import { CartContextProvider} from "./context/cartContext";
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={routing} />
      <ToastContainer />
    </CartContextProvider>
    {/* <App /> */}
  </React.StrictMode>
);
