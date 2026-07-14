import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import MainLayout from "../layout/MainLayout";
import { gameDetailsLoader, gamesLoader } from "../service/gamesLoader";
import GameDetails from "../pages/GameDetails";

export const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: gamesLoader,
                hydrateFallbackElement: <h1 className="text-white font-semibold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>
            },
            {
                path: "favourite",
                element: <Favourite />
            },
            {
                path: "gameDetails/:id",
                element: <GameDetails />,
                loader: gameDetailsLoader,
                hydrateFallbackElement: <h1 className="text-white font-semibold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>
            },
        ]
    }
])