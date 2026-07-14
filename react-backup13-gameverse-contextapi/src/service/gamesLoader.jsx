import { api } from "../config/api.js";

const API_KEY = import.meta.env.VITE_API_KEY;

export const gamesLoader = async ({request}) => {
    
    try {
        const url = new URL(request.url)

        const search = url.searchParams.get("search") || ""

        const page = Number(url.searchParams.get("page")) || 1;

        const params = {
            key: API_KEY,
            page: page,
            page_size: 12
        }
        
        if(search) {
            params.search = search
        }

        const response = await api.get("/games", {params})

        return response

    } catch (error) {
        console.error(error)
        throw(error);
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
        console.error(error)
        throw(error);
    }
}