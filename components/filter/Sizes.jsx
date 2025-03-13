import React, { useState } from 'react'

export default function Sizes() {
    const [selectSize, setSelectSize] = useState(null);

    const sizes = [
        {
            id: 1,
            text: 'XX-Small'
        },
        {
            id: 2,
            text: 'X-Small'
        },
        {
            id: 3,
            text: 'Small'
        },
        {
            id: 4,
            text: 'Medium'
        },
        {
            id: 5,
            text: 'Large'
        },
        {
            id: 6,
            text: 'X-Large'
        },
        {
            id: 7,
            text: 'XX-Large'
        },
        {
            id: 8,
            text: '3X-Large'
        },
        {
            id: 9,
            text: '4X-Large'
        },
    ]
    return (
        <div className='w-full flex flex-wrap justify-between items-center gap-2 mt-5'>
            {
                sizes.map((item) => (
                    <button onClick={() => setSelectSize(item.id)} key={item.id} className={`${selectSize === item.id ? 'text-[#F0F0F0] bg-black' : 'bg-[#F0F0F0] text-black'} py-2.5 px-5 rounded-full cursor-pointer`}>{item.text}</button>
                ))
            }
        </div>
    )
}