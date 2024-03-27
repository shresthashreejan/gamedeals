import { useState } from "react";
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
                    {activeTab === 0 && <div>Free Game Deals</div>}
                    {activeTab === 1 && <div>Free To Play Games</div>}
                    {activeTab === 2 && <div>Game Recommendation</div>}
                </section>
            </main>
            <div className="flex justify-center">
                <Footer />
            </div>
        </>
    );
};

export default Home;
