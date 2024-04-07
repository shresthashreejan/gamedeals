import React, { useEffect, useState } from "react";

interface TabsProps {
    activeTab: number;
    onTabChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    let darkThemeTextColor;

    useEffect(() => {
        setIsDarkTheme((prevState) => !prevState);
    }, [document.documentElement.getAttribute("data-theme")]);

    useEffect(() => {
        darkThemeTextColor = isDarkTheme ? "text-white" : "text-black";
    }, [isDarkTheme]);

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
                    <div
                        className={`uppercase text-lg ${
                            activeTab === 0
                                ? "text-white"
                                : `${darkThemeTextColor}`
                        }`}
                    >
                        Free Game Deals
                    </div>
                </a>
                <a
                    role="tab"
                    className={`tab ${
                        activeTab === 1 ? "tab-active" : ""
                    } transition-all`}
                    onClick={() => onTabChange(1)}
                >
                    <div
                        className={`uppercase text-lg ${
                            activeTab === 1
                                ? "text-white"
                                : `${darkThemeTextColor}`
                        }`}
                    >
                        Free To Play Games
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Tabs;
