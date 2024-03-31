import { useEffect, useState } from "react";
import { fetchFreeGameDeals } from "../../utils/FetchFreeGameDeals";
import Card from "../../components/Card";

interface Deal {
    title: string;
    image: string;
    platforms: string;
    open_giveaway: string;
    end_date: string;
    worth: string;
}

const FreeGameDeals = () => {
    const [deals, setDeals] = useState<Deal[]>([]);
    useEffect(() => {
        fetchFreeGameDeals().then((data) => {
            if (data) {
                setDeals(data);
            }
        });
    }, []);
    return (
        <>
            {deals.length > 0 &&
                deals.slice(0, 10).map((deal, index) => (
                    <div key={index} className="mb-8">
                        <Card deal={deal} />
                    </div>
                ))}
        </>
    );
};

export default FreeGameDeals;
