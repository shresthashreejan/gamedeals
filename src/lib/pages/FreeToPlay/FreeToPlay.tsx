import { useEffect, useState } from "react";
import { fetchFreeToPlayGames } from "../../utils/FetchFreeToPlay";

interface Deal {
    title: string;
}

const FreeToPlay = () => {
    const [deals, setDeals] = useState<Deal[]>([]);
    useEffect(() => {
        fetchFreeToPlayGames().then((data) => {
            setDeals(data);
        });
    }, []);
    return (
        <>
            <div>
                {deals.slice(0, 10).map((deal, index) => (
                    <div key={index}>{deal.title}</div>
                ))}
            </div>
        </>
    );
};

export default FreeToPlay;
