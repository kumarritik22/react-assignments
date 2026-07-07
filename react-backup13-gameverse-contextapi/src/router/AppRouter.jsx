import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Games from "../pages/Games";
import MainLayout from "../layout/MainLayout";
import { gameDetailsLoader, gamesLoader } from "../service/gamesLoader";
import GameDetails from "../pages/GameDetails";

export const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        hydrateFallbackElement: <h1>Loading...</h1>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: gamesLoader
            },
            {
                path: "favourite",
                element: <Favourite />
            },
            {
                path: "games",
                element: <Games />
            },
            {
                path: "gameDetails/:id",
                element: <GameDetails />,
                loader: gameDetailsLoader
            },
        ]
    }
])