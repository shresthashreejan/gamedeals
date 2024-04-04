function openModal() {
    const modal = document.getElementById("attribution-modal");
    if (modal instanceof HTMLDialogElement) {
        modal.showModal();
    } else {
        console.error("Modal not found.");
    }
}

const Attribution = () => {
    return (
        <>
            <button className="btn btn-circle" onClick={openModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </button>
            <dialog id="attribution-modal" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                    <h1 className=" font-bold text-3xl uppercase">
                        Attribution
                    </h1>
                    <p className="py-4">
                        Powered by{" "}
                        <a
                            href="https://www.gamerpower.com/"
                            className=" underline"
                        >
                            GamerPower
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.freetogame.com/"
                            className=" underline"
                        >
                            FreeToGame
                        </a>
                        !
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default Attribution;
