import React from "react";

interface TabsProps {
    activeTab: number;
    onTabChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="relative">
            <div role="tablist" className="tabs tabs-boxed">
                <a
                    role="tab"
                    className={`tab ${
                        activeTab === 0 ? "tab-active" : ""
                    } transition-all`}
                    onClick={() => onTabChange(0)}
                >
                    Free Game Deals
                </a>
                <a
                    role="tab"
                    className={`tab ${
                        activeTab === 1 ? "tab-active" : ""
                    } transition-all`}
                    onClick={() => onTabChange(1)}
                >
                    Free To Play Games
                </a>
                <a
                    role="tab"
                    className={`tab ${
                        activeTab === 2 ? "tab-active" : ""
                    } transition-all`}
                    onClick={() => onTabChange(2)}
                >
                    Game Recommendation
                </a>
            </div>
        </div>
    );
};

export default Tabs;
