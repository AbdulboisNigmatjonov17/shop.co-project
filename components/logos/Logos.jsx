 

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
        <section className='w-full h-[125px] bg-black flex items-center mb-10'>
            <div className='Container w-full flex justify-between items-center'>
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
