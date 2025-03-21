"use client"
import Search from '../search/Search'
import { AccountCircleOutlined, ExpandMore, ShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='lg:max-w-[1200px] mx-auto w-full min-h-[60px] py-4 px-4 flex justify-between items-center gap-5 lg:gap-0'>
            {/* Mobil menyu tugmasi */}
            <div className='lg:hidden'>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon fontSize="large" className='text-black' />
                </IconButton>
            </div>

            {/* Logo */}
            <Link href={'/'}>
                <img src="/SHOP.CO.svg" alt="logo" className="h-10 w-auto" />
            </Link>

            {/* Katta ekran menyusi */}
            <ul className='hidden lg:flex items-center gap-6 cursor-pointer'>
                <Link href={'/category'}>
                    <li className='cursor-pointer hover:font-semibold flex items-center'>
                        Shop <ExpandMore />
                    </li>
                </Link>
                <li className='cursor-pointer hover:font-semibold'>On Sale</li>
                <li className='cursor-pointer hover:font-semibold'>New Arrivals</li>
                <li className='cursor-pointer hover:font-semibold'>Brands</li>
            </ul>

            {/* Search component */}
            <div className="hidden sm:block lg:w-full max-w-[300px]">
                <Search />
            </div>

            {/* Icons */}
            <div className='flex gap-3.5 items-center'>
                <Link href={'/cart'} aria-label="see to cart">
                    <ShoppingCartOutlined className='cursor-pointer hover:scale-110 transition-transform' />
                </Link>
                <AccountCircleOutlined className='cursor-pointer hover:scale-110 transition-transform' />
            </div>

            {/* Mobil menyu (Drawer) */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <List className="w-64 h-full bg-[#F6F6F7] text-black flex flex-col">
                    {[
                        { text: "Shop", href: "/category" },
                        { text: "On Sale", href: "/" },
                        { text: "New Arrivals", href: "/" },
                        { text: "Brands", href: "/" },
                    ].map(({ text, href }, index) => (
                        <ListItem
                            key={index}
                            className="hover:bg-[#e2e2e2]"
                            onClick={() => setOpen(false)}
                            component={Link}
                            href={href}
                        >
                            <ListItemText primary={text} className="cursor-pointer" />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </nav>
    );
}
