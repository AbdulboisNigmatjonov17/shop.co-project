 
import Search from '../search/Search'
import { AccountCircleOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='Container h-[10dvh] py-10 flex justify-between items-center'>
            <Link href={'/'}>
                <img src="/SHOP.CO.svg" alt="logo" />
            </Link>
            <ul className='flex items-center gap-6 cursor-pointer'>
                <li className='cursor-pointer hover:font-semibold'>Shop</li>
                <li className='cursor-pointer hover:font-semibold'>On Sale</li>
                <li className='cursor-pointer hover:font-semibold'>New Arrivals</li>
                <li className='cursor-pointer hover:font-semibold'>Brands</li>
            </ul>
            <Search />
            <div className='flex gap-3.5'>
                <ShoppingCartOutlined className='cursor-pointer hover:scale-125' />
                <AccountCircleOutlined className='cursor-pointer hover:scale-125' />
            </div>
        </nav>
    )
}