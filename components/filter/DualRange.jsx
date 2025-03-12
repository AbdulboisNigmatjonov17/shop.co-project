"use client";
import React, { useState } from "react";

function PriceRangeSlider() {
    const [minValue, setMinValue] = useState(50);
    const [maxValue, setMaxValue] = useState(200);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 10);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 10);
        setMaxValue(value);
    };

    return (
        <div className="relative w-full mx-auto">
            {/* Slider chizig'i */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-md -translate-y-1/2"></div>

            {/* Aktiv (qora chiziq) */}
            <div
                className="absolute top-1/2 bg-black h-2 rounded-md -translate-y-1/2"
                style={{
                    left: `${(minValue / 300) * 100}%`,
                    right: `${100 - (maxValue / 300) * 100}%`,
                }}
            ></div>

            {/* Min slider */}
            <input
                type="range"
                min="0"
                max="300"
                value={minValue}
                onChange={handleMinChange}
                className="range absolute w-full appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 3 }}
            />

            {/* Max slider */}
            <input
                type="range"
                min="0"
                max="300"
                value={maxValue}
                onChange={handleMaxChange}
                className="range absolute w-full appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 3 }}
            />

            {/* Qiymatlar */}
            <div className="w-full h-[40px]"></div>
            <div className="flex justify-between text-lg font-semibold text-black">
                <span>${minValue}</span>
                <span>${maxValue}</span>
            </div>
        </div>
    );
}

export default PriceRangeSlider;
