import { useEffect, useState } from "react";
import { fetchFreeToPlayGames } from "../../utils/FetchFreeToPlay";
import Card_F2P from "../../components/CARD_F2P";

interface Deal {
    title: string;
    platform: string;
    game_url: string;
    thumbnail: string;
}

const FreeToPlay = () => {
    const [loading, setLoading] = useState(true);
    const [deals, setDeals] = useState<Deal[]>([]);
    useEffect(() => {
        fetchFreeToPlayGames().then((data) => {
            if (data) {
                setDeals(data);
            }
            setLoading(false);
        });
    }, []);
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {loading && (
                    <div className="spinner">
                        <span className="loading loading-ring w-24 "></span>
                    </div>
                )}
                {!loading && deals.length === 0 && <p>No games found.</p>}
                {!loading &&
                    deals.length > 0 &&
                    deals.map((deal, index) => (
                        <div key={index} className="mb-8">
                            <Card_F2P deal={deal} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default FreeToPlay;
