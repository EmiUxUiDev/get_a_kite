import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//Importo los componentes 
import CategoryView from "../views/Category";
import CategoryViewStyle from "../views/CategoryStyle";
import ItemView from "../views/Item";




export const router = createBrowserRouter([
    {
        //Path q voy a usar en navbar
        path: "/",
        //Componente que importe
        element: <App />,
    },
    {
        path: "/category/:categoryName",
        element: <CategoryView />,
    },
    {
        path: "/category/kite/:kiteStyleName",
        element: <CategoryViewStyle />,
    },
    {
        path: "/category/board/:boardStyleName",
        element: <CategoryViewStyle />,
    },
    {
        path: "/item/:idDetail",
        element: <ItemView />,
    },
])