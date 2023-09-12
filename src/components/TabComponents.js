import React, { useState } from 'react';
import './styles/Tabs.css';

const TabComponents = () => {
    const [activeTab, setActiveTab] = useState(0); // Initially set the first tab as active

    const tabs = [
        'Omnichannel Marketing',
        'Chatbot AI',
        'Live Chat',
        'Royalty Program',
        'Whatsapp Business API',
    ];
    // FaCheckSquare
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="tabs-container">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`tab ${activeTab === index ? 'active' : ''} font-size-90-percent`}
                   
                    onClick={() => handleTabClick(index)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
}

export default TabComponents;
