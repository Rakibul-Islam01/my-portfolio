import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaChrome, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoNetlify } from "react-icons/bi";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import './Skills.css'


const Skills = () => {
    return (
        <div className='my-12 text-center'>
            <h2 className='text-3xl font-bold text-center uppercase'>Skills</h2>
            <div className='flex justify-center mt-10 flex-col md:flex-row gap-12'>
                <div className='border mx-4 border-red-300 p-4 text-center rounded-md'>
                    <h2 className='text-2xl font-bold mb-6'>Front End Development</h2>
                    <div className='grid grid-cols-3 gap-x-8 gap-y-4 '>
                        <div>
                            <FaHtml5 className='text-orange-500 mx-auto' size={60}></FaHtml5>
                            <h3 className='text-center font-semibold mb-4'>HTML5</h3>
                        </div>
                        <div>
                            <FaCss3Alt className='text-blue-500 mx-auto' size={60}></FaCss3Alt>
                            <h3 className='text-center font-semibold mb-4'>CSS3</h3>
                        </div>
                        <div>
                            <FaJs className='text-yellow-500 mx-auto' size={60}></FaJs>
                            <h3 className='text-center font-semibold mb-4'>JavaScipt</h3>
                        </div>
                        <div>
                            <FaBootstrap className='text-[#563d7c] mx-auto' size={60}></FaBootstrap>
                            <h3 className='text-center font-semibold mb-4'>Bootstrap5</h3>
                        </div>
                        <div>
                            <BiLogoTailwindCss className='text-[#38bdf8] mx-auto' size={60}></BiLogoTailwindCss>
                            <h3 className='text-center font-semibold mb-4'>Tailwind</h3>
                        </div>
                        <div>
                            <FaReact className='text-[#61DBFB] mx-auto' size={60}></FaReact>
                            <h3 className='text-center font-semibold mb-4'>React</h3>
                        </div>
                    </div>
                </div>
                <div className='border mx-4 border-red-300 p-4 text-center rounded-md'>
                    <h2 className='text-2xl font-bold mb-6'>Back End Development</h2>
                    <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
                        <div>
                            <FaNodeJs className='text-[#68a063] mx-auto' size={60}></FaNodeJs>
                            <h3 className='text-center font-semibold mb-4'>Node Js</h3>
                        </div>
                        <div>
                            <SiExpress className='text-[#303030] mx-auto' size={60}></SiExpress>
                            <h3 className='text-center font-semibold mb-4'>Express Js</h3>
                        </div>
                        <div>
                            <SiMongodb className='text-[#4DB33D] mx-auto' size={60}></SiMongodb>
                            <h3 className='text-center font-semibold mb-4'>MongoDB</h3>
                        </div>
                        <div>
                            <SiFirebase className='text-[#FFA611] mx-auto' size={60}></SiFirebase>
                            <h3 className='text-center font-semibold mb-4'>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='border mx-4 border-red-300 p-4 text-center rounded-md'>
                    <h2 className='text-2xl font-bold mb-6'>Development Tools</h2>
                    <div className='grid grid-cols-3 gap-x-8 gap-y-4 text-center mx-auto'>
                        <div>
                            <TbBrandVscode className='text-[#0078d7] text-center mx-auto' size={60}></TbBrandVscode>
                            <h3 className='text-center font-semibold mb-4'>Vs Code</h3>
                        </div>
                        <div>
                            {/* <FaChrome className='text-blue-500 mx-auto' size={60}></FaChrome> */}
                            <img className='mx-auto' width={60} src="https://d33wubrfki0l68.cloudfront.net/38b5c953a4667366685d55db55d057c86db1fc54/a0fdc/static/acae6b24d940347661ca901ea07f47c1/chrome-dev-logo-icon.png" alt="" />
                            <h3 className='text-center text-[13px] font-semibold mb-4'>Chr. Dev tools</h3>
                        </div>
                        <div>
                            <FaGitAlt className='text-[#F1502F] mx-auto' size={60}></FaGitAlt>
                            <h3 className='text-center font-semibold mb-4'>Git</h3>
                        </div>
                        <div>
                            <FaGithub className='text-[#171515] mx-auto' size={60}></FaGithub>
                            <h3 className='text-center font-semibold mb-4'>Github</h3>
                        </div>
                        <div>
                            <BiLogoNetlify className='text-[#49aaa2] mx-auto' size={60}></BiLogoNetlify>
                            <h3 className='text-center font-semibold mb-4'>Netlify</h3>
                        </div>
                        <div>
                            {/* <FaFigma className='text-[#F24E1E] mx-auto' size={60}></FaFigma> */}
                            <img className='mx-auto' width={40} height={40} src="https://miro.medium.com/v2/resize:fit:320/1*j3GPPrDmy2CqnxPw-NtWHg.png" alt="" />
                            <h3 className='text-center font-semibold mb-4'>Figma</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;