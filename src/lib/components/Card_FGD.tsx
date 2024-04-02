import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Deal {
    title: string;
    image: string;
    platforms: string;
    open_giveaway: string;
    end_date: string;
    worth: string;
}

const Card_FGD = ({ deal }: { deal: Deal }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    let platformsArray;
    if (deal.platforms) {
        platformsArray = deal.platforms
            .split(",")
            .map((platform) => platform.trim());
    }

    function redirectTo(url: string): void {
        window.open(url, "_blank");
    }

    useEffect(() => {
        const img = new Image();
        img.src = deal.image;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [deal.image]);

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-neutral">
                <figure className="px-8">
                    {!imageLoaded && (
                        <div className="skeleton w-[460px] h-[215px] shrink-0"></div>
                    )}
                    {imageLoaded && (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src={deal.image}
                            alt="Cover Image"
                            className={"rounded-xl"}
                        />
                    )}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{deal.title}</h2>
                    <div className="flex flex-wrap gap-2">
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
                    <div>
                        {deal.worth !== "N/A"
                            ? `Original Price: ${deal.worth}`
                            : null}
                    </div>
                    <div>
                        {deal.end_date !== "N/A"
                            ? `Ends: ${deal.end_date}`
                            : null}
                    </div>
                    <div className="card-actions justify-start">
                        <button
                            className="btn btn-primary mt-4 text-white"
                            onClick={() => {
                                redirectTo(deal.open_giveaway);
                            }}
                        >
                            Claim
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card_FGD;
