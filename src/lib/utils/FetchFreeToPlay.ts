import axios from "axios";

const url = import.meta.env.VITE_F2P_API_URL || "";
const key = import.meta.env.VITE_F2P_API_KEY || "";
const host = import.meta.env.VITE_F2P_API_HOST || "";

const options = {
    method: "GET",
    url: url,
    params: {
        "sort-by": "popularity",
    },
    headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
    },
};

export async function fetchFreeToPlayGames(): Promise<[]> {
    let data = [];
    const storedData = localStorage.getItem("freeToPlayGames");
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        try {
            const response = await axios.request(options);
            data = response.data;
            localStorage.setItem("freeToPlayGames", JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return data;
}
