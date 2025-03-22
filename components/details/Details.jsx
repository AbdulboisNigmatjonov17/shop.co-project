"use client";
import { useState } from "react";
import Faqs from "./Faqs";
import ProductDetail from "./ProductDetail";
import Comment from "../comment/Comment";

const tabs = [
    { id: "details", label: "Product Details" },
    { id: "reviews", label: "Rating & Reviews" },
    { id: "faqs", label: "FAQs" },
];

export default function Details({ data }) {
    const [activeTab, setActiveTab] = useState("reviews");

    return (
        <div className="w-full my-10 border-b border-gray-300">
            <div className="w-full flex justify-between border-b border-[#0000001A] gap-8 text-gray-500">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-[33%] pb-2 text-lg cursor-pointer ${activeTab === tab.id
                            ? "border-b-2 border-black font-semibold text-black"
                            : "text-gray-400"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-6 text-center">
                {activeTab === "details" && <ProductDetail />}
                {activeTab === "reviews" && <Comment />}
                {activeTab === "faqs" && <Faqs data={data} />}
            </div>
        </div>
    );
}
