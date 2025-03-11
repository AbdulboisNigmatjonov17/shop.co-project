import Image from 'next/image'
import React from 'react'

export default function ProductDard({ data }) {
    return (
        <div className="flex flex-col gap-3.5">
            <div className="overflow-hidden rounded-[20px]">
                <Image width={300} height={300} src="/cards-img/card1/main.png" className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="flex gap-3">
                    <img src="/stars.png" alt="star" />
                    <p>4.5/<span className="text-[#00000099]">5</span></p>
                </div>
                <div className="flex items-center gap-2.5">
                    <h3 className="font-bold text-2xl">$120</h3>
                    <h3 className="font-bold text-2xl text-[#00000066]">$260</h3>
                    <h4 className="bg-[#FF33331A] text-[#FF3333] py-1.5 px-3.5 rounded-[62px]">-20%</h4>
                </div>
            </div>
        </div>
    )
}
