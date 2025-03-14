import Image from "next/image";
import Link from "next/link";

export default function SameProducts({ text, data }) {
    return (
        <section className="Container">
            <h1 className="font-bold text-5xl text-center my-10 uppercase">{text}</h1>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col gap-3.5">
                    <div className="overflow-hidden rounded-[20px]">
                        <Image width={300} height={300} src="/cards-img/card1/main.png" priority className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h3>
                        <div className="flex gap-3">
                            <img src="/stars.png" alt="star" />
                            <p>4.5/<span className="text-[#00000099]">5</span></p>
                        </div>
                        <h3 className="font-bold text-2xl">$120</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5">
                    <div className="overflow-hidden rounded-[20px]">
                        <Image width={300} height={300} src="/cards-img/card1/main.png" priority className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h3>
                        <div className="flex gap-3">
                            <img src="/stars.png" alt="star" />
                            <p>4.5/<span className="text-[#00000099]">5</span></p>
                        </div>
                        <h3 className="font-bold text-2xl">$120</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5">
                    <div className="overflow-hidden rounded-[20px]">
                        <Image width={300} height={300} src="/cards-img/card1/main.png" priority className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h3>
                        <div className="flex gap-3">
                            <img src="/stars.png" alt="star" />
                            <p>4.5/<span className="text-[#00000099]">5</span></p>
                        </div>
                        <h3 className="font-bold text-2xl">$120</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5">
                    <div className="overflow-hidden rounded-[20px]">
                        <Image width={300} height={300} src="/cards-img/card1/main.png" priority className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out" alt="card-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">T-SHIRT WITH TAPE DETAILS</h3>
                        <div className="flex gap-3">
                            <img src="/stars.png" alt="star" />
                            <p>4.5/<span className="text-[#00000099]">5</span></p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-bold text-2xl">$120</h3>
                            <h3 className="font-bold text-2xl text-[#00000066]">$260</h3>
                            <h4 className="bg-[#FF33331A] text-[#FF3333] py-1.5 px-3.5 rounded-[62px]">-20%</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Link href={'/category'}>
                    <button className="w-[220px] h-[52px] rounded-[62px] cursor-pointer bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out border border-[#0000001A] my-10">View All</button>
                </Link>
            </div>
        </section>
    )
}
