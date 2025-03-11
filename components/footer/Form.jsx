import { MailOutline } from '@mui/icons-material'
import React from 'react'

export default function Form() {
    return (
        <section>
            <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div>
                <form className='text-[#00000066]'>
                    <MailOutline />
                    <input type="text" placeholder='Enter your email address' />
                </form>
                <button>Subscribe to Newsletter</button>
            </div>
        </section>
    )
}
