import Order from '@/components/Summary/Order'
import YourCards from '@/components/your-cards/YourCards'
import React from 'react'

export default function Cart() {
  return (
    <div>
      <div>Cart</div>
      <div className='w-full flex justify-between'>
        {/* <YourCards /> */}
        <Order />
      </div>
    </div>

  )
}
