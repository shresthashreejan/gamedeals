import { useState } from "react";
import FreeGameDeals from "../FreeGameDeals/FreeGameDeals";
import FreeToPlay from "../FreeToPlay/FreeToPlay";
import GameRecommendation from "../GameRecommendation/GameRecommendation";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import ThemeToggle from "../../components/ThemeToggle";
import Footer from "../../components/Footer";

const Home = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <header className="mt-12 text-6xl uppercase">
                <Navbar />
            </header>
            <main className="flex flex-col items-center">
                <div className="md:w-3/4 mt-8">
                    <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                </div>
                <section className="mt-12">
                    {activeTab === 0 && (
                        <div>
                            <FreeGameDeals />
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div>
                            <FreeToPlay />
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            <GameRecommendation />
                        </div>
                    )}
                </section>
            </main>
            <div className="flex justify-center">
                <Footer />
            </div>
        </>
    );
};

export default Home;
