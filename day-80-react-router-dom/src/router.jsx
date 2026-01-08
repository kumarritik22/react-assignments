import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./App";
import Product from "./pages/Products";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import UserProfile from "./pages/UserProfile";
import Services from "./pages/Services";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {index: true, element: <Home /> },
                {path: "about", element: <About /> },
                {path: "contact", element: <Contact /> },
                {
                    path: "products", 
                    element: <Product />,
                    children: [
                        {path: "men", element: <Men /> },
                        {path: "Women", element: <Women /> },
                        {path: "Kids", element: <Kids /> },
                    ],
                },
                {path: "user/:id", element: <UserProfile /> },
                {
                    path: "services", 
                    element: <Services />,
                    children: [
                        {index: true, element: <Services /> },
                        {
                            path: ":serviceId", 
                            element: <ServiceList />,
                        },
                        {
                            path: ":serviceId/details", 
                            element: <ServiceDetail />, 
                        },
                    ],
                },
                {path: "*", element: <NotFound /> },
            ],
        },
    ]);

export default router
