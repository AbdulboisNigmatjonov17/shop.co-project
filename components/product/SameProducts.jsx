"use client"
import { CardData } from "@/helpers/CardData";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductDard from "./ProductDard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SameProducts({ text }) {
    const [randomCards, setRandomCards] = useState([]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
    };

    useEffect(() => {
        const shuffled = [...CardData].sort(() => 0.5 - Math.random());
        setRandomCards(shuffled.slice(0, 4));
    }, []);

    return (
        <section className="Container">
            <h1 className="font-bold text-5xl text-center my-10 uppercase">{text}</h1>

            {/* Large ekranlarda oddiy grid */}
            <div className="hidden lg:flex justify-between gap-5">
                {randomCards.map((item) => (
                    <ProductDard key={item.id} data={item} />
                ))}
            </div>

            {/* LG dan kichik ekranlarda carousel */}
            <div className="lg:hidden ml-10">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                >
                    {
                        randomCards.map((item) => (
                            <ProductDard key={item.id} data={item} />
                        ))
                    }
                </Carousel>
            </div>

            <div className="w-full flex justify-center items-center">
                <Link href={'/category'}>
                    <button className="w-[220px] h-[52px] rounded-[62px] cursor-pointer bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out border border-[#0000001A] my-10">
                        View All
                    </button>
                </Link>
            </div>
        </section>
    )
}
