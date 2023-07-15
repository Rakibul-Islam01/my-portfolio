import React from 'react';
import Typewriter from 'typewriter-effect';
import { HiDownload } from "react-icons/hi";


const Banner = () => {
    return (
        <div>
            <div className="bg-base-200 px-5 md:py-16">

                <div className="hero-content md:mx-12 flex-col lg:flex-row-reverse ">
                    <div className='w-full md:w-2/5 items-center'>
                        <img width={300} src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" />
                        {/* <Lottie loop={true} animationData={developer} /> */}
                    </div>
                    <div className='w-full md:w-1/2 mx-auto'>
                        <h1 className="text-5xl font-bold">Hi There! </h1>
                        <h2 className='text-2xl mt-4'>I am Rakibul Islam.</h2>
                        <div className='text-2xl text-red-700 font-semibold pb-4'>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer.', 'Web Designer.', 'React js Developer.', 'Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: '|',
                                    delay: 50,
                                }}
                            />
                        </div>
                        <a href="resume.pdf" target='_blank'>
                            <button className="btn bg-[#39cae4] mt-8"> <HiDownload className="h-6 w-6 text-light-500" />Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;