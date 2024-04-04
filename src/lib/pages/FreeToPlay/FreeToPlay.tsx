import React, { useEffect, useState } from "react";
import { fetchFreeToPlayGames } from "../../utils/FetchFreeToPlay";
import Card_F2P from "../../components/CARD_F2P";

interface Deal {
    title: string;
    platform: string;
    game_url: string;
    thumbnail: string;
}

interface Props {
    searchQuery: string;
}

const FreeToPlay: React.FC<Props> = ({ searchQuery }) => {
    const [loading, setLoading] = useState(true);
    const [deals, setDeals] = useState<Deal[]>([]);
    const [visibleDeals, setVisibleDeals] = useState<Deal[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dealsPerPage = 20;

    useEffect(() => {
        setLoading(true);
        fetchFreeToPlayGames().then((data) => {
            if (data) {
                setDeals(data);
                setVisibleDeals(data.slice(0, dealsPerPage));
            }
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (searchQuery) {
            filterDeals(searchQuery);
        } else {
            setVisibleDeals(deals.slice(0, dealsPerPage));
        }
    }, [searchQuery]);

    const filterDeals = (query: string) => {
        const filteredDeals = deals.filter((deal) =>
            deal.title.toLowerCase().includes(query.toLowerCase())
        );
        setVisibleDeals(filteredDeals);
        setCurrentPage(1);
    };

    const loadMoreDeals = () => {
        const nextPageDeals = deals.slice(
            currentPage * dealsPerPage,
            (currentPage + 1) * dealsPerPage
        );
        setVisibleDeals([...visibleDeals, ...nextPageDeals]);
        setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {loading && (
                    <div className="spinner">
                        <span className="loading loading-ring w-24 "></span>
                    </div>
                )}
                {!loading && visibleDeals.length === 0 && (
                    <p>No games found.</p>
                )}
                {!loading &&
                    visibleDeals.length > 0 &&
                    visibleDeals.map((deal, index) => (
                        <div key={index} className="m-4">
                            <Card_F2P deal={deal} />
                        </div>
                    ))}
            </div>
            <div>
                {!loading &&
                    visibleDeals.length < deals.length &&
                    visibleDeals.length !== 0 && (
                        <div className="text-center mt-4">
                            <button
                                onClick={loadMoreDeals}
                                className="btn btn-primary mt-4 mb-12 text-white"
                            >
                                Load More
                            </button>
                        </div>
                    )}
            </div>
        </>
    );
};

export default FreeToPlay;
