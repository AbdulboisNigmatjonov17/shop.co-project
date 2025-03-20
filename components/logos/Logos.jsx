 

export default function Logos() {
    const logos = [
        {
            id: 1,
            img: '/logos/Versace.png',
        },
        {
            id: 2,
            img: '/logos/Zara.png',
        },
        {
            id: 3,
            img: '/logos/Gucci.png',
        },
        {
            id: 4,
            img: '/logos/Prada.png',
        },
        {
            id: 5,
            img: '/logos/CalvinKlein.png',
        },
    ]
    return (
        <section className='w-full min-h-[125px] bg-black flex items-center mb-10 lg:py-0 py-5'>
            <div className='Container w-full flex flex-wrap justify-center lg:gap-0 gap-8 lg:justify-between items-center'>
                {
                    logos.map((item) => (
                        <div key={item.id}>
                            <img src={item.img} alt="Brend logos" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
