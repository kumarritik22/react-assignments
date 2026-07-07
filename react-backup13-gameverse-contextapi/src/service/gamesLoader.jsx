import { api } from "../config/api.js";

export const gamesLoader = async () => {
    try {
        const response = await api.get("/games", {
            params: {
                key: import.meta.env.VITE_API_KEY
            },
        })

        return response

    } catch (error) {
        console.log(error.message);
    }
}

export const gameDetailsLoader = async ({params}) => {
    try {
        const response = await api.get(`/games/${params.id}`, {
            params: {
                key: import.meta.env.VITE_API_KEY
            },
        })

        return response
        
    } catch (error) {
        console.log(error.message);
    }
}