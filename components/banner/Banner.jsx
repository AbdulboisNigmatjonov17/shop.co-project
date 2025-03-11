
export default function Banner() {
    return (
        <section className='Container bg-[#F0F0F0] p-[64px] rounded-[40px] '>
            <h1 className="text-center mb-5 font-bold text-[48px] uppercase">BROWSE BY dress STYLE</h1>
            <div className='w-full flex flex-col gap-5'>
                <div className='w-full flex gap-5'>
                    <div className='w-[400px] h-[290px] p-7 bg-[url(/banner/casual.png)] rounded-[20px] hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                        <h3 className="font-bold text-4xl">Casual</h3>
                    </div>
                    <div className='w-[685px] h-[290px] p-7 bg-[url(/banner/formal.png)] rounded-[20px] hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                        <h3 className="font-bold text-4xl">Formal</h3>
                    </div>
                </div>
                <div className='w-full flex gap-5'>
                    <div className='w-[685px] h-[290px] p-7 bg-[url(/banner/party.png)] rounded-[20px] hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                        <h3 className="font-bold text-4xl">Party</h3>
                    </div>
                    <div className='w-[400px] h-[290px] p-7 bg-[url(/banner/gym.png)] rounded-[20px] hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                        <h3 className="font-bold text-4xl">Gym</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
