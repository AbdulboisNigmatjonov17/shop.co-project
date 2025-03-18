"use client"
import Order from '@/components/Summary/Order'
// import YourCards from '@/components/your-cards/YourCards'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log("obj" + cart); // Savatchadagi mahsulotlarni tekshirish uchun

  return (
    <div>
      <div>Cart</div>
      <div className='Container flex justify-between'>
        {/* <YourCards /> */}
        <Order cart={cart}/>
      </div>
    </div>

  )
}
