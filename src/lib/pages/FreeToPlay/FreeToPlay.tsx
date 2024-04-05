import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(
        null
    );
    const [filterUsed, setFilterUsed] = useState<boolean>(false);
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

    useEffect(() => {
        if (selectedPlatform) {
            const filteredDeals = deals.filter((deal) =>
                deal.platform
                    .toLowerCase()
                    .includes(selectedPlatform.toLowerCase())
            );
            setVisibleDeals(filteredDeals);
            setCurrentPage(1);
        }
    }, [selectedPlatform]);

    const filterDeals = (query: string) => {
        const filteredDeals = deals.filter((deal) =>
            deal.title.toLowerCase().includes(query.toLowerCase())
        );
        setVisibleDeals(filteredDeals);
        setCurrentPage(1);
        setSelectedPlatform(null);
    };

    const loadMoreDeals = () => {
        const nextPageDeals = deals.slice(
            currentPage * dealsPerPage,
            (currentPage + 1) * dealsPerPage
        );
        setVisibleDeals([...visibleDeals, ...nextPageDeals]);
        setCurrentPage(currentPage + 1);
    };

    const uniquePlatforms: string[] = Array.from(
        new Set(
            deals.flatMap((deal) =>
                deal.platform.split(",").map((platform) => platform.trim())
            )
        )
    );

    const clearFilters = () => {
        setSelectedPlatform(null);
        setVisibleDeals(deals.slice(0, dealsPerPage));
    };

    useEffect(() => {
        if (selectedPlatform !== null) {
            setFilterUsed(true);
        } else {
            setFilterUsed(false);
        }
    }, [selectedPlatform]);

    return (
        <>
            {!loading && uniquePlatforms.length > 0 && (
                <motion.div
                    className="absolute top-36 right-4 dropdown dropdown-left dropdown-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <button className="btn btn-circle" tabIndex={0}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52"
                    >
                        {uniquePlatforms.map((platform, index) => (
                            <li>
                                <a
                                    key={index}
                                    onClick={() =>
                                        setSelectedPlatform(platform)
                                    }
                                >
                                    {platform}
                                </a>
                            </li>
                        ))}
                        {filterUsed && (
                            <li>
                                {" "}
                                <a onClick={clearFilters}>Clear Filters</a>
                            </li>
                        )}
                    </ul>
                </motion.div>
            )}
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
