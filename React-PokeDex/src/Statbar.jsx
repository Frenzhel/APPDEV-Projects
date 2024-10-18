import React from 'react';
import './StatBar.css';

const Statbar = ({ label, value, color }) => {
    const maxStatValue = 255;
    const percentage = (value / maxStatValue) * 100;

    return (
        <div className="stat-bar">
            <label id="stat-label">{label}: </label>
            <div className="bar-container">
                <div 
                    className="bar" 
                    style={{ 
                        width: `${percentage}%`, 
                        backgroundColor: color 
                    }} 
                />
            </div>
            <label id="stat-value"> {value}</label>
        </div>
    );
};

export default Statbar;
