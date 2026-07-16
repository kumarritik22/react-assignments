import axios from "axios";

export const fetchUser = async () => {
    const response = await axios.get("http://localhost:3000/api/users");
    return response.data;
}