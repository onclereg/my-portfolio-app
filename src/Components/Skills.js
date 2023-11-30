import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import github from '../images/github.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind.png';


const Skills = () => {
  return (
    <div className=' w-full  flex flex-col bg-[#0a0a16] text-[bisque] px-8 pt-[100px]'>
        <div className=' text-start md:ml-[110px]'>
            <h3 > <span className=' text-2xl md:text-3xl font-semibold border-b-2 border-r-2 p-2 border-blue-400'>Skills</span></h3>
            <p className='my-6 font-semibold md:text-2xl'>These are the technologies i work with.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 text-center gap-[70px]  max-w-[1000px] mx-auto py-[50px]'>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={html} alt='html' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>HTML</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={css} alt='css' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>CSS</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={javascript} alt='javascript' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>JAVASCRIPT</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={github} alt='github' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>GITHUB</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={react} alt='react' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>REACT</p>
            </div>
            <div className=' flex flex-col justify-center items-center hover:scale-125 duration-500 shadow-md shadow-[#0f0f1a] p-4'>
                <img src={tailwind} alt='tailwind' className=' w-[60px] h-[60px]'/>
                <p className=' font-semibold font-mono mt-3'>TAILWIND</p>
            </div>
        </div>
    </div>
  )
}

export default Skills