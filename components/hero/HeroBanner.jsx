import Image from 'next/image'

import Button from '../btn/Button'
import Link from 'next/link'

export default function HeroBanner() {
    return (
        <section className='w-full bg-[#F2F0F1] min-h-[660px]'>
            <div className='Container h-full flex lg:flex-row flex-col justify-between items-center overflow-hidden lg:pb-0 pb-10'>
                <div className='lg:w-[50%] w-full h-full flex flex-col justify-center gap-5 my-auto px-4 lg:pt-0 pt-10'>
                    <h1 className='font-extrabold lg:text-6xl text-4xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href={'/category'}>
                        <Button text={'Shop Now'} style={'lg:w-[210px] md:w-[210px] w-full'} />
                    </Link>
                    <div className='w-full flex lg:justify-between justify-center flex-wrap'>
                        <div>
                            <h2 className='font-bold text-[40px]'>200+</h2>
                            <p className='text-[#00000099] font-normal'>International Brands</p>
                        </div>
                        <div className='border-x border-x-[#0000001A] px-10'>
                            <h2 className='font-bold text-[40px]'>2,000+</h2>
                            <p className='text-[#00000099] font-normal'>High-Quality Products</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-[40px]'>30,000+</h2>
                            <p className='text-[#00000099] font-normal'>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full'>
                    <Image width={600} height={660} src="/Hero.png" alt="Hero Image" className='object-cover' priority />
                </div>
            </div>
        </section>
    )
}
