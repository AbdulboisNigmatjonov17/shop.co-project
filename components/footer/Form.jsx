import { MailOutline } from '@mui/icons-material'
 

export default function Form() {
    return (
        <section className='lg:w-full min-h-[180px] lg:px-16 px-6 py-3 bg-black text-white absolute lg:-top-[250px] -top-[280px] lg:left-0 left-0 md:left-20 mx-5 flex lg:flex-row flex-col items-center justify-between rounded-3xl'>
            <h1 className='max-w-[550px] lg:text-[40px] text-3xl font-bold leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className='max-w-[350px] flex flex-col gap-3.5'>
                <form className='text-[#00000066] rounded-[62px] bg-white w-full h-[50px] flex items-center gap-3 px-4'>
                    <MailOutline />
                    <input type="text" placeholder='Enter your email address' className='outline-none font-normal text-[16px] w-full pr-2' />
                </form>
                <button className='w-full h-[52px] rounded-[62px] cursor-pointer bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white transition duration-300 ease-in-out'>Subscribe to Newsletter</button>
            </div>
        </section>
    )
}
