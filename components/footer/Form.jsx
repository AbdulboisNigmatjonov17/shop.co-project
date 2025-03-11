import { MailOutline } from '@mui/icons-material'
import React from 'react'

export default function Form() {
    return (
        <section className='w-full h-[180px] px-16 bg-black text-white absolute -top-[250px] flex items-center justify-between rounded-3xl'>
            <h1 className='max-w-[550px] text-[40px] font-bold leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className='max-w-[350px] flex flex-col gap-3.5'>
                <form className='text-[#00000066] rounded-[62px] bg-white w-full h-[50px] flex items-center gap-3 px-4'>
                    <MailOutline />
                    <input type="text" placeholder='Enter your email address' className='outline-none font-normal text-[16px] w-full pr-2' />
                </form>
                <button className='w-full h-[52px] rounded-[62px] cursor-pointer bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out'>Subscribe to Newsletter</button>
            </div>
        </section>
    )
}
