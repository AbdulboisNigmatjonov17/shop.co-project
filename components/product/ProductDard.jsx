import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StarRating from '../star/Star'

export default function ProductDard({ data }) {
    return (
        <div className="flex flex-col gap-3.5">
            {/* <Link href={`/product-detail/${data.id}`} className="w-[300px] h-[300px] overflow-hidden rounded-[20px]">
                <Image width={300} height={300} src={data.img.main} className="cursor-pointer object-cover hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
            </Link> */}
            <Link href={`/product-detail/${data.id}`} className="w-[300px] h-[300px] overflow-hidden rounded-[20px] block">
                <div className="w-full h-full cursor-pointer overflow-hidden rounded-[20px]">
                    <Image
                        width={300}
                        height={300}
                        src={data.img.main}
                        alt="card-img"
                        priority
                        className="object-cover w-full h-full hover:scale-110 transition duration-200 ease-in-out"
                    />
                </div>
            </Link>

            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">{data.title}</h3>
                <div className="flex gap-3">
                    <StarRating />
                </div>
                <div className="flex items-center gap-2.5">
                    <h3 className="font-bold text-2xl">${data.price}</h3>
                    {
                        data.discount === true ?
                            <>
                                <s className="font-bold text-2xl text-[#00000066]">${data.discount_price}</s>
                                <h4 className="bg-[#FF33331A] text-[#FF3333] py-1.5 px-3.5 rounded-[62px]">-{data.discount_percent}%</h4>
                            </>
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}
