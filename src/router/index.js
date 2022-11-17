import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CategoryView from "../views/Category";
import ItemView from "../views/Item";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:categoryName",
        element: <CategoryView />,
    },
    {
        path: "/item/:id",
        element: <ItemView />,
    },
])