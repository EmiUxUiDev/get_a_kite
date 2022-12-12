import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//Importo los componentes 
import CategoryView from "../views/Category";
import SubCategoryView from "../views/SubCategoryView";
import ItemView from "../views/Item";
import CartView from "../views/CartView"
import ErrorView from "../views/ErrorView";
import BuyItNow from "../views/BuyItNow";

export const routing = createBrowserRouter([
    
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
        element: <SubCategoryView />,
    },
    {
        path: "/category/board/:boardStyleName",
        element: <SubCategoryView />,
    },
    {
        path: "/item/:idDetail",
        element: <ItemView />,
    },
    {
        path: "/cart",
        element: <CartView />,
    },
    {
        path: "/buy",
        element: <BuyItNow />,
    },
    {
        path: "*",
        element: <ErrorView />,
    }
    
])