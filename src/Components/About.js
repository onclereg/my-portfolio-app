import React from 'react';

const About = () => {
  return (
    <div className='bg-[#0a0a16]'>
        <div className='w-full h-screen flex flex-col justify-center items-center text-[bisque]'>
            <div className='text-3xl border-b-2 border-r-2 border-blue-500 text-center md:text-left p-3 font-semibold my-9'>
                About
            </div>
            <div className='grid md:grid-cols-2 justify-around max-w-[1000px]'>
                <div className=' text-2xl md:text-3xl  text-start px-5 font-semibold '>
                    Hi , I'm Reginald Nwachukwu, Nice to meet you, please take a look around.
                </div>
                <div className='px-5 py-6 md:py-1 font-serif'>
                    I am passionate about building excellent softwares that improves the lifes of those around me. I specialize in creating softwares with React, javaScript and Tailwind for clients ranging from individuals to large corporations.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About