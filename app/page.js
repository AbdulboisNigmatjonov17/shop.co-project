import Banner from '@/components/banner/Banner'
import HeroBanner from '@/components/hero/HeroBanner'
import Logos from '@/components/logos/Logos'
import SameProducts from '@/components/product/SameProducts'


export default function Home() {
  return (
    <>
      <HeroBanner />
      <Logos />
      <SameProducts text={'NEW ARRIVALS'}/>
      <hr className='Container text-[#0000001A]' />
      <SameProducts text={'top selling'}/>
      <Banner />
    </>
  )
}
