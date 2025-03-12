import { CardData } from '@/helpers/CardData'
import React from 'react'
import ProductDard from './ProductDard'

export default function AllProducts() {
    return (
        <div className='w-[80%]'>
            <div>
                <h2>Casual</h2>
            </div>
            <div className='w-full grid grid-cols-3 justify-between'>
                {
                    CardData.map((item) => {
                        console.log(item);
                        
                        return (
                            <ProductDard key={item.id} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
