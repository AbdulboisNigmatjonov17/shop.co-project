"use client"

import React, { useState } from "react";

export default function Colors() {
    const [selectedColor, setSelectedColor] = useState(null);

    const colors = [
        { id: 1, color: "bg-green-500 text-white" },
        { id: 2, color: "bg-red-500 text-white" },
        { id: 3, color: "bg-yellow-500 text-white" },
        { id: 4, color: "bg-orange-500 text-white" },
        { id: 5, color: "bg-blue-300 text-white" },
        { id: 6, color: "bg-blue-700 text-white" },
        { id: 7, color: "bg-fuchsia-500 text-white" },
        { id: 8, color: "bg-pink-500 text-white" },
        { id: 9, color: "bg-white border border-gray-400 text-black" },
        { id: 10, color: "bg-black text-white" },
    ];

    return (
        <div className="w-full flex flex-wrap justify-between items-center gap-2 mt-5">
            {colors.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setSelectedColor(item.id)}
                    className={`${item.color} w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-105 flex justify-center items-center
                        }`}
                >
                    {selectedColor === item.id && (
                        <span className="text-[15px] font-bold">✓</span>
                    )}
                </div>
            ))}
        </div>
    );
}
