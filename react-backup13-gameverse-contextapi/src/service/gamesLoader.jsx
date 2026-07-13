import { api } from "../config/api.js";

const API_KEY = import.meta.env.VITE_API_KEY;

export const gamesLoader = async ({request}) => {
    
    try {
        const url = new URL(request.url)

        const search = url.searchParams.get("search") || ""

        const params = {
            key: API_KEY
        }
        
        if(search) {
            params.search = search
        }

        const response = await api.get("/games", {params})

        return response

    } catch (error) {
        console.log(error.message);
    }
}

export const gameDetailsLoader = async ({params}) => {
    try {
        const response = await api.get(`/games/${params.id}`, {
            params: {
                key: API_KEY
            },
        })

        return response
        
    } catch (error) {
        console.log(error.message);
    }
}