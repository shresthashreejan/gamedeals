import React, { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <>
            <input
                id="search-bar"
                type="text"
                placeholder="Search here"
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={handleSearch}
            />
        </>
    );
};

export default SearchBar;
