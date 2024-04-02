import { useState } from "react";
import { motion } from "framer-motion";
import FreeGameDeals from "../FreeGameDeals/FreeGameDeals";
import FreeToPlay from "../FreeToPlay/FreeToPlay";
import GameRecommendation from "../GameRecommendation/GameRecommendation";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import ThemeToggle from "../../components/ThemeToggle";
import Attribution from "../../components/Attribution";
import Footer from "../../components/Footer";

const Home = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <motion.div
                className="absolute top-4 right-4 overflow-hidden"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <ThemeToggle />
            </motion.div>
            <motion.div
                className="absolute top-20 right-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <Attribution />
            </motion.div>
            <header className="mt-12 text-6xl uppercase">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Navbar />
                </motion.div>
            </header>
            <main className="flex flex-col items-center">
                <div className="md:w-3/4 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Tabs
                            activeTab={activeTab}
                            onTabChange={handleTabChange}
                        />
                    </motion.div>
                </div>
                <section className="mt-12">
                    {activeTab === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <FreeGameDeals />
                        </motion.div>
                    )}
                    {activeTab === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <FreeToPlay />
                        </motion.div>
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
