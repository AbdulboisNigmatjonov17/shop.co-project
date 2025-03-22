import { Done, MoreHoriz } from '@mui/icons-material'
import React, { useState } from 'react'
import StarRating from '../star/Star'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

export default function CommentCard({ comment }) {
    const [showMenu, setShowMenu] = useState(false);
    const formattedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const handleDelete = async () => {
        await deleteDoc(doc(db, "comments", comment.id));
        setShowMenu(false); 
    };
    return (
        <div className='relative border border-[#0000001A] rounded-[20px] max-w-[610px] min-h-[200px] py-7 px-8 flex flex-col justify-between ml-5'>
            <div className='w-full flex justify-between'>
                <StarRating />
                <button onClick={() => setShowMenu(!showMenu)} aria-label="delete button">
                    <MoreHoriz className='cursor-pointer' />
                </button>
            </div>
            {showMenu && (
                <div className="absolute right-5 top-10 mt-2 bg-white border shadow-md rounded-md">
                    <button onClick={handleDelete} className="cursor-pointer w-[100px] h-[40px] bg-black text-white border border-[#00000099] hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        Delete
                    </button>
                </div>
            )}
            <div className='w-full flex flex-col gap-3 items-start'>
                <h3 className='flex gap-2 font-bold text-xl'>UserName <span className='w-[24px] h-[24px] flex items-center justify-center bg-green-500 text-white rounded-full'><Done fontSize='small' /></span></h3>
                <p className='text-[#00000099]'>"{comment.comment}"</p>
                <p>Posted on {formattedDate}</p>
            </div>
        </div>
    )
}
