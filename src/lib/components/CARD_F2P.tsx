import { useState, useEffect } from "react";

interface Deal {
    title: string;
    platform: string;
    game_url: string;
    thumbnail: string;
}

const Card_F2P = ({ deal }: { deal: Deal }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    let platformsArray;
    if (deal.platform) {
        platformsArray = deal.platform
            .split(",")
            .map((platform) => platform.trim());
    }

    function redirectTo(url: string): void {
        window.open(url, "_blank");
    }

    useEffect(() => {
        const img = new Image();
        img.src = deal.thumbnail;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [deal.thumbnail]);

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    {!imageLoaded && (
                        <div className="skeleton w-[365px] h-[206px] shrink-0"></div>
                    )}
                    {imageLoaded && (
                        <img
                            src={deal.thumbnail}
                            alt="Cover Image"
                            className={"rounded-xl"}
                        />
                    )}
                </figure>
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title">{deal.title}</h2>
                    <div className="flex flex-wrap gap-1">
                        {platformsArray &&
                            platformsArray.map((platform, index) => (
                                <div
                                    key={index}
                                    className="badge badge-primary badge-outline"
                                >
                                    {platform}
                                </div>
                            ))}
                    </div>
                    <div className="card-actions justify-start">
                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => {
                                redirectTo(deal.game_url);
                            }}
                        >
                            Play
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card_F2P;
