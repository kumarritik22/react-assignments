import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Courses from "../pages/Courses"
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "*",
                element: <Error />
            },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "register/:id",
                        element: <Register />
                    }
                ]
            }
        ]
    }
])