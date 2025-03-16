"use client"
import { CardData } from "@/helpers/CardData";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductDard from "./ProductDard";

export default function SameProducts({ text }) {
    const [randomCards, setRandomCards] = useState([]);

    useEffect(() => {
        const shuffled = [...CardData].sort(() => 0.5 - Math.random());
        setRandomCards(shuffled.slice(0, 4));
    }, []);
    return (
        <section className="Container">
            <h1 className="font-bold text-5xl text-center my-10 uppercase">{text}</h1>
            <div className="flex justify-between gap-5">
                {
                    randomCards.map((item) => (
                        <ProductDard key={item.id} data={item} />
                    ))
                }
            </div>
            <div className="w-full flex justify-center items-center">
                <Link href={'/category'}>
                    <button className="w-[220px] h-[52px] rounded-[62px] cursor-pointer bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out border border-[#0000001A] my-10">View All</button>
                </Link>
            </div>
        </section>
    )
}
