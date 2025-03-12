"use client"
import { ArrowDownward, ArrowForwardIos, ArrowUpward, Tune } from '@mui/icons-material'
import React, { useState } from 'react'
import PriceRangeSlider from './DualRange';

export default function Filter() {
    const [openItem, setOpenItem] = useState(false)

    const toggleOpen = () => {
        setOpenItem((prev) => !prev);
    };
    return (
        <div className='w-[20%] py-5 px-6 flex flex-col gap-6 rounded-[20px] border border-[#0000001A]'>
            <div className='w-full flex justify-between items-center'>
                <h3 className='text-[20px] font-bold'>Filters</h3>
                <Tune />
            </div>
            <hr />
            <div className='w-full flex flex-col gap-5 text-[#00000099]'>
                <div className='w-full flex justify-between items-center'>
                    <h4>T-shirts</h4>
                    <ArrowForwardIos fontSize='small' />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <h4>Shorts</h4>
                    <ArrowForwardIos fontSize='small' />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <h4>Shirts</h4>
                    <ArrowForwardIos fontSize='small' />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <h4>Hoodie</h4>
                    <ArrowForwardIos fontSize='small' />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <h4>Jeans</h4>
                    <ArrowForwardIos fontSize='small' />
                </div>
            </div>
            <hr />
            <div>
                <details className="" open={openItem}>
                    <summary
                        className="w-full flex justify-between items-center cursor-pointer"
                        onClick={toggleOpen} // Click bo‘lganda toggleOpen chaqiriladi
                    >
                        <h3 className="text-lg font-semibold">Price</h3>
                        <button className="cursor-pointer text-gray-600">
                            {openItem ? <ArrowUpward /> : <ArrowDownward />}
                        </button>
                    </summary>
                    <PriceRangeSlider />
                </details>
            </div>
        </div>
    )
}
