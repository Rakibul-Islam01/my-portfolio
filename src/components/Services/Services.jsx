import React from 'react';
import { HiCode } from "react-icons/hi";


const Services = () => {
    return (
        <div className='py-12 my-16 bg-gray-100'>
            <h2 className='uppercase text-3xl font-bold text-center mb-8'>Services</h2>
            <div className='flex flex-col md:flex-row gap-6 text-center'>
                <div className='p-10 border-rose-600 bg-cyan-200 rounded-md mx-4'>
                    <HiCode className="h-6 w-6 text-cyan-500 mx-auto mb-2"/>
                    <h2 className='text-2xl font-semibold mb-1'>Web Design</h2>
                    <p>I can make a fully responsive frontend and static website like Portfolio, e-commerce and others.</p>
                </div>
                <div className='p-10 border-rose-600 bg-cyan-200 rounded-md mx-4'>
                    <HiCode className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                    <h2 className='text-2xl font-semibold mb-1'>Full Stack Development</h2>
                    <p>I can make a fully responsive frontend and static website like Portfolio, e-commerce and others.</p>
                </div>
                <div className='p-10 border-rose-600 bg-cyan-200 rounded-md mx-4'>
                    <HiCode className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                    <h2 className='text-2xl font-semibold mb-1'>UI/UX Design</h2>
                    <p>I can make a fully responsive frontend and static website like Portfolio, e-commerce and others.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;