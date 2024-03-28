import axios from "axios";

const url = import.meta.env.VITE_FGD_API_URL || "";

const options = {
    method: "GET",
    url: url,
};

export async function fetchFreeGames(): Promise<[]> {
    let data = [];
    const storedData = localStorage.getItem("freeGames");
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        try {
            const response = await axios.request(options);
            data = response.data;
            localStorage.setItem("freeGames", JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return data.data.children;
}
