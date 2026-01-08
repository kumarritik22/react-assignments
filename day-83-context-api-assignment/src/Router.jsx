import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import App from "./App";
import ProductContext from "./context/ProductContext";

const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProductContext>
                <App />
            </ProductContext>
        ),
        children: [
            {index: true, element: <Home /> },
            {path: "products", element: <Products /> },
            {path: "products/:productId", element: <ProductDetails /> },
        ]
    }
])

export default Router
