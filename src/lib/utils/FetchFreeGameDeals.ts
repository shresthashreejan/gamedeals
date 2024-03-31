import axios from "axios";

const url = import.meta.env.VITE_FGD_API_URL || "";
const key = import.meta.env.VITE_FGD_API_KEY || "";
const host = import.meta.env.VITE_FGD_API_HOST || "";

const options = {
    method: "GET",
    url: url,
    params: {
        platform: "epic-games-store.steam.ps4.ps5.xbox-series-xs.xbox-one.gog",
        type: "game",
        "sort-by": "latest",
        status: "Active",
    },
    headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
    },
};

export async function fetchFreeGameDeals(): Promise<[]> {
    let data = [];
    try {
        const response = await axios.request(options);
        data = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return data;
}
