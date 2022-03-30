import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
            
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden '>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`md:flex justify-center absolute md:static w-full bg-lime-500 ${open ? 'top-14 right-0' : 'top-[-120px]'}`}>

                <CustomLink className='mr-5 font-serif' to='/'>Home</CustomLink>
                <CustomLink className='mr-5 font-serif' to='/shop'>Shop</CustomLink>
                <CustomLink className='mr-5 font-serif' to='/order'>Order</CustomLink>
                <CustomLink className='mr-5 font-serif' to='/contact'>Contact us</CustomLink>
                <CustomLink className='mr-5 font-serif' to='/about'>About us</CustomLink>

            </div>


        </nav>
    );
};

export default Navbar;