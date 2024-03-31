interface Deal {
    title: string;
    image: string;
    platforms: string;
    open_giveaway: string;
    end_date: string;
    worth: string;
}

const Card = ({ deal }: { deal: Deal }) => {
    let platformsArray;
    if (deal.platforms) {
        platformsArray = deal.platforms
            .split(",")
            .map((platform) => platform.trim());
    }

    function redirectTo(url: string): void {
        window.open(url, "_blank");
    }

    return (
        <>
            <div className="card lg:card-side bg-base-100 border-2 border-neutral p-4">
                <figure>
                    <img
                        src={deal.image}
                        alt="Cover Image"
                        className=" rounded-xl"
                    />
                </figure>
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title">{deal.title}</h2> <div></div>
                    <div className="flex flex-wrap gap-1">
                        {" "}
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
                            className="btn btn-primary mt-4"
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

export default Card;
