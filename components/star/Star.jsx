"use client"
import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div className="flex gap-1 text-yellow-500 text-2xl">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => setRating(starValue)}
                        className={`cursor-pointer ${starValue <= rating ? "text-yellow-500" : "text-gray-400"
                            }`}
                    >
                        ★
                    </span>
                );
            })}
            <p className="ml-2 text-black">{rating}/5</p>
        </div>
    );
};

export default StarRating;
