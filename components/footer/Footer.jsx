"use client"
import { FooterData } from '@/helpers/FooterData'
import { FacebookOutlined, GitHub, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#F0F0F0] py-10'>
      <div className='Container h-[175px] flex flex-wrap justify-between'>
        <div className='h-full flex flex-col justify-between'>
          <Image width={165} height={25} src="/SHOP.CO.svg" alt="Logo" />
          <p>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className='flex gap-5'>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
              <Twitter />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
              <FacebookOutlined />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
              <Instagram />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'>
              <GitHub />
            </div>
          </div>
        </div>
        {
          FooterData.map((item) => (
            <ul key={item.id} className='h-full flex flex-col justify-between'>
              <h3>{item.title}</h3>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
              <li>{item.li4}</li>
            </ul>
          ))
        }
      </div>
      <hr className='max-w-[1280px] mx-auto my-10 text-[#0000001A]' />
      <div>
        <p className='text-[#00000099]'>Shop.co © 2000-2023, All Rights Reserved</p>
        <div>
          <img src="/cards/Visa.png" alt="VisaCard" />
          <img src="/cards/Mastercard.png" alt="MasterCard" />
          <img src="/cards/PayPal.png" alt="PayPalCard" />
          <img src="/cards/Pay.png" alt="PayCard" />
          <img src="/cards/GooglePay.png" alt="GooglePayCard" />
        </div>
      </div>
    </footer>
  )
}
