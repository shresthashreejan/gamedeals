import { useEffect, useState } from "react";
import { fetchFreeGameDeals } from "../../utils/FetchFreeGameDeals";
import Card_FGD from "../../components/Card_FGD";

interface Deal {
    title: string;
    image: string;
    platforms: string;
    open_giveaway: string;
    end_date: string;
    worth: string;
}

const FreeGameDeals = () => {
    const [loading, setLoading] = useState(true);
    const [deals, setDeals] = useState<Deal[]>([]);
    useEffect(() => {
        fetchFreeGameDeals().then((data) => {
            if (data) {
                setDeals(data);
            }
            setLoading(false);
        });
    }, []);
    return (
        <>
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
                        <Card_FGD deal={deal} />
                    </div>
                ))}
        </>
    );
};

export default FreeGameDeals;
