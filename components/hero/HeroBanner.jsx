import Image from 'next/image'

import Button from '../btn/Button'
import Link from 'next/link'

export default function HeroBanner() {
    return (
        <section className='bg-[#F2F0F1] h-[660px] '>
            <div className='Container h-full flex justify-between items-center overflow-hidden'>
                <div className='w-[50%] h-full flex flex-col justify-center gap-5 my-auto'>
                    <h1 className='font-bold text-[64px] leading-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href={'/category'}>
                        <Button text={'Shop Now'} style={'w-[210px]'} />
                    </Link>
                    <div className='w-full flex justify-between'>
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
                <div>
                    <Image width={600} height={660} src="/Hero.png" alt="Hero Image" className='object-cover' />
                </div>
            </div>
        </section>
    )
}
