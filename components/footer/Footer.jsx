"use client"
import { FooterData } from '@/helpers/FooterData'
import { FacebookOutlined, GitHub, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

import Form from './Form'

export default function Footer() {
  return (
    <footer className='w-full bg-[#F0F0F0] pt-40 pb-10 mt-20 text-[#00000099]'>
      <div className='Container min-h-[175px] flex flex-wrap justify-between relative lg:gap-0 gap-5 lg:px-0 px-5'>
        <Form />
        <div className='w-[250px] h-full flex flex-col justify-between lg:gap-10 gap-5'>
          <Link href={'/'}>
            <Image width={165} priority height={25} src="/SHOP.CO.svg" alt="Logo" />
          </Link>
          <p>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className='flex gap-5'>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer'>
              <Twitter />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer'>
              <FacebookOutlined />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer'>
              <Instagram />
            </div>
            <div className='border border-[#00000033] rounded-full w-[38px] h-[38px] flex justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer'>
              <GitHub />
            </div>
          </div>
        </div>
        {
          FooterData.map((item) => (
            <ul key={item.id} className='min-w-[150px] h-full flex flex-col justify-between gap-5'>
              <h3 className='font-medium text-[16px] leading-[18px] uppercase text-black mb-1'>{item.title}</h3>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
              <li>{item.li4}</li>
            </ul>
          ))
        }
      </div>
      <hr className='max-w-[1200px] mx-auto my-10 text-[#0000001A]' />
      <div className='Container flex lg:justify-between justify-center lg:gap-0 gap-3 flex-wrap'>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className='flex gap-5'>
          <Image width={70} height={50} className='cursor-pointer hover:scale-110' src="/cards/Visa.png" alt="VisaCard" />
          <Image width={70} height={50} className='cursor-pointer hover:scale-110' src="/cards/Mastercard.png" alt="MasterCard" />
          <Image width={70} height={50} className='cursor-pointer hover:scale-110' src="/cards/PayPal.png" alt="PayPalCard" />
          <Image width={70} height={50} className='cursor-pointer hover:scale-110' src="/cards/Pay.png" alt="PayCard" />
          <Image width={70} height={50} className='cursor-pointer hover:scale-110' src="/cards/GooglePay.png" alt="GooglePayCard" />
        </div>
      </div>
    </footer>
  )
}
