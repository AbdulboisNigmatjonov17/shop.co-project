"use client"
import { CardData } from '@/helpers/CardData'
import ProductDard from './ProductDard'
import { ArrowDownward, Tune } from '@mui/icons-material';
import Pagination from '../filter/Pagination';

export default function AllProducts({ setOpenFilter }) {
    return (
        <div className='md:w-[80%] w-full'>
            <div className='w-full flex items-center justify-between mb-5 md:px-0 px-3'>
                <h2 className='font-bold text-3xl'>Casual</h2>
                <div className='flex items-center text-[#00000099] gap-2'>
                    <h3>Showing 1-10 of 100 Products</h3>
                    <div className='hidden md:flex items-center'>
                        <h3>Sort by: <span className='text-black'>Most Popular</span></h3>
                        <ArrowDownward />
                    </div>
                    <button className='md:hidden flex' onClick={() => setOpenFilter(prev => !prev)}>
                        <Tune />
                    </button>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 lg:justify-between justify-center lg:gap-9 gap-3.5'>
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
