"use client"
import { FooterData } from '@/helpers/FooterData'
import { FacebookOutlined, GitHub, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Form from './Form'

export default function Footer() {
  return (
    <footer className='bg-[#F0F0F0] pt-40 pb-10 mt-20 text-[#00000099]'>
      <div className='Container min-h-[175px] flex flex-wrap justify-between relative '>
        <Form />
        <div className='w-[250px] h-full flex flex-col justify-between gap-10'>
          <Link href={'/'}>
            <Image width={165} height={25} src="/SHOP.CO.svg" alt="Logo" />
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
      <hr className='max-w-[1280px] mx-auto my-10 text-[#0000001A]' />
      <div className='Container flex'>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div>
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </div>
      </div>
    </footer>
  )
}
