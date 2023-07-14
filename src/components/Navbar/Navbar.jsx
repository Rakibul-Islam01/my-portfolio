import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className='bg-cyan-400 py-3 sticky top-0 z-10'>
            <div onClick={()=>setOpen(!open)} className='md:hidden ml-4'>
                <span>
                    {open === true ? <XMarkIcon className="h-6 w-6 text-cyan-500" /> : <Bars3Icon className="h-6 w-6 text-base-500" />}
                </span>
                
                
            </div>
            <div className='md:flex items-center ml-3 justify-between'>
                <p className='hidden md:block font-bold'>Rakibul</p>
                <ul className={`md:flex gap-4 px-4 absolute md:static duration-500 bg-cyan-300 md:bg-cyan-400 md: ${open ? 'top-14' : '-top-36'}`}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
            </div>
            

        </nav>
    );
};

export default Navbar;