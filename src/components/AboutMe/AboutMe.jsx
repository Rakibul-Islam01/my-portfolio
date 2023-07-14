import React from 'react';

const AboutMe = () => {
    return (
        <div className='md:mx-12'>

            <div className='flex flex-col md:flex-row gap-8 my-12 justify-center items-center'>
                <div className='w-1/2 md:w-1/4'>
                    <img src="https://epic.uchicago.in/wp-content/uploads/2022/12/Passport-Size-Photo_Chirag-Ramesh.jpg" width={300} alt="" />
                </div>
                <div className='w-3/4'>
                    <h1 className='text-3xl font-semibold text-center md:text-start mb-2'>ABOUT ME:</h1>
                    <p className='text-justify md:text-lg'>Hi, I'm Rakibul Islam, a full stack web developer. Web design & development is my passion. I love to explore new tech things. I'm very passionate and dedicated to my work. I have expertise in Front-End and Back-End Web development too. I can design a website fully responsive & dynamic as per requirment. I enjoy every step of the design & development process from discussion and collaboration. I have experience in React JS, Next JS, Node JS, MongoDB, Experess, Tailwind CSS, Material UI, Bootstrap etc.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;