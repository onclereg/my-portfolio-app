import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import github from '../images/github.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind.png';


const Skills = () => {
  return (
    <div className=' w-full h-screen flex flex-col justify-center md:pl-[110px] bg-[#0a0a16] text-[bisque] px-8 pt-[100px]'>
        <div className=' text-start '>
            <h3 > <span className=' text-2xl md:text-3xl font-semibold border-b-2 border-r-2 p-2 border-blue-400'>Skills</span></h3>
            <p className='my-6 font-semibold md:text-2xl'>These are the technologies i work with.</p>
        </div>
        <div className='grid grid-cols-3  text-center lg:gap-5 sm:overflow-hidden h-[70vh] lg:m-5 '>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={html} alt='html' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl md:text-2xl font-mono mt-3'>HTML</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={css} alt='css' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl md:text-2xl font-mono mt-3'>CSS</p>
            </div>
            <div className=' flex flex-col flex-wrap justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={javascript} alt='javascript' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl lg:text-2xl font-mono overflow-hidden mt-3 '>JAVASCRIPT</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={github} alt='github' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl md:text-2xl font-mono mt-3'>GITHUB</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={react} alt='react' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl md:text-2xl font-mono mt-3'>REACT</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={tailwind} alt='tailwind' className='max-w-[70px] max-h-[70px]'/>
                <p className=' font-semibold text-1xl md:text-2xl font-mono mt-3'>TAILWIND</p>
            </div>
        </div>
    </div>
  )
}

export default Skills