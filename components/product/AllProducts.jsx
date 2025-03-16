import { CardData } from '@/helpers/CardData'
import React from 'react'
import ProductDard from './ProductDard'
import { ArrowDownward } from '@mui/icons-material';
import Pagination from '../filter/Pagination';

export default function AllProducts() {
    return (
        <div className='w-[80%]'>
            <div className='w-full flex items-center justify-between mb-5'>
                <h2 className='font-bold text-3xl'>Casual</h2>
                <div className='flex items-center text-[#00000099] gap-2'>
                    <h3>Showing 1-10 of 100 Products</h3>
                    <div className='flex items-center'>
                        <h3>Sort by: <span className='text-black'>Most Popular</span></h3>
                        <ArrowDownward />
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 justify-between gap-9'>
                {
                    CardData.map((item) => {
                        return (
                            <ProductDard key={item.id} data={item} />
                        )
                    })
                }
            </div>
            <hr className='my-10 text-[#0000001A]' />
            <Pagination />
        </div>
    )
}
