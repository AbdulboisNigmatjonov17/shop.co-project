"use client"
import { Search } from '@mui/icons-material'
 

export default function SearchBar() {
    return (
        <form className='rounded-[62px] bg-[#F0F0F0] max-w-[570px] min-w-[250px] w-full h-[50px] text-[#00000066] flex items-center gap-3 px-4'>
            <Search fontSize='large'/>
            <input type="text" placeholder='Search for products...' className='outline-none font-normal text-[16px] w-full pr-2'/>
        </form>
    )
}
