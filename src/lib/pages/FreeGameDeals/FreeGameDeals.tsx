import { useEffect, useState } from "react";
import { fetchFreeGameDeals } from "../../utils/FetchFreeGameDeals";

interface Deal {
    data: {
        title: string;
    };
}

const FreeGameDeals = () => {
    const [deals, setDeals] = useState<Deal[]>([]);
    useEffect(() => {
        fetchFreeGameDeals().then((data) => {
            setDeals(data);
        });
    }, []);
    return (
        <>
            <div>
                {deals
                    .slice(2)
                    .slice(0, 10)
                    .map((deal, index) => (
                        <div key={index}>{deal.data.title}</div>
                    ))}
            </div>
        </>
    );
};

export default FreeGameDeals;
