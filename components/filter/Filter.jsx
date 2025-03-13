"use client";
import { ArrowDownward, ArrowForwardIos, ArrowUpward, Tune } from "@mui/icons-material";
import React, { useState } from "react";
import PriceRangeSlider from "./DualRange";
import Colors from "./Colors";
import Sizes from "./Sizes";
import Button from "../btn/Button";

export default function Filter() {
    const [openPrice, setOpenPrice] = useState(false);
    const [openColors, setOpenColors] = useState(false);
    const [openSizes, setOpenSizes] = useState(false);
    const [openDressStyle, setOpenDressStyle] = useState(false);

    return (
        <div className="w-[20%] min-h-[700px] py-5 px-6 flex flex-col gap-6 rounded-[20px] border border-[#0000001A]">
            <div className="w-full flex justify-between items-center">
                <h3 className="text-[20px] font-bold">Filters</h3>
                <Tune />
            </div>
            <hr className="text-[#0000001A]" />

            <div className="w-full flex flex-col gap-5 text-[#00000099]">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item, index) => (
                    <div key={index} className="w-full flex justify-between items-center">
                        <h4>{item}</h4>
                        <ArrowForwardIos fontSize="small" />
                    </div>
                ))}
            </div>

            <hr className="text-[#0000001A]" />

            {/* Price Filter */}
            <details open={openPrice}>
                <summary className="w-full flex justify-between items-center cursor-pointer" onClick={() => setOpenPrice(!openPrice)}>
                    <h3 className="text-lg font-semibold">Price</h3>
                    <button className="cursor-pointer text-gray-600">{openPrice ? <ArrowUpward /> : <ArrowDownward />}</button>
                </summary>
                <PriceRangeSlider />
            </details>

            <hr className="text-[#0000001A]" />

            {/* Colors Filter */}
            <details open={openColors}>
                <summary className="w-full flex justify-between items-center cursor-pointer" onClick={() => setOpenColors(!openColors)}>
                    <h3 className="text-lg font-semibold">Colors</h3>
                    <button className="cursor-pointer text-gray-600">{openColors ? <ArrowUpward /> : <ArrowDownward />}</button>
                </summary>
                <Colors />
            </details>

            <hr className="text-[#0000001A]" />

            {/* Sizes Filter */}
            <details open={openSizes}>
                <summary className="w-full flex justify-between items-center cursor-pointer" onClick={() => setOpenSizes(!openSizes)}>
                    <h3 className="text-lg font-semibold">Sizes</h3>
                    <button className="cursor-pointer text-gray-600">{openSizes ? <ArrowUpward /> : <ArrowDownward />}</button>
                </summary>
                <Sizes />
            </details>

            <hr className="text-[#0000001A]" />

            {/* Dress Style Filter */}
            <details open={openDressStyle}>
                <summary className="w-full flex justify-between items-center cursor-pointer" onClick={() => setOpenDressStyle(!openDressStyle)}>
                    <h3 className="text-lg font-semibold">Dress Style</h3>
                    <button className="cursor-pointer text-gray-600">{openDressStyle ? <ArrowUpward /> : <ArrowDownward />}</button>
                </summary>
                <div className="w-full flex flex-col gap-5 text-[#00000099] mt-5">
                    <div className='w-full flex flex-col gap-5 text-[#00000099] '>
                        <div className='w-full flex justify-between items-center'>
                            <h4>Casual</h4>
                            <ArrowForwardIos className='cursor-pointer' fontSize='small' />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h4>Formal</h4>
                            <ArrowForwardIos className='cursor-pointer' fontSize='small' />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h4>Party</h4>
                            <ArrowForwardIos className='cursor-pointer' fontSize='small' />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h4>Gym</h4>
                            <ArrowForwardIos className='cursor-pointer' fontSize='small' />
                        </div>
                    </div>
                </div>
            </details>

            <hr className="text-[#0000001A]" />

            <Button text={"Apply Filter"} />
        </div>
    );
}
