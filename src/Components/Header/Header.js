import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-lime-500 py-3'>
            <h3 className='text-3xl font-bold font-serif'>Ema-John-Pro</h3>
             <Navbar></Navbar>
        </header>
    );
};

export default Header;