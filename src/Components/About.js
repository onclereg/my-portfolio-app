import React from 'react';

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a0a16]'>
        <div className=' h-full mx-2 md:pl-[90px] flex flex-col justify-center items-center text-[bisque]'>
            <div className='m-5'>
                <span className='text-3xl border-b-2 border-r-2 border-blue-500 text-center md:text-left p-3 font-semibold my-9'> About</span>
            </div>
            <div className='grid md:grid-cols-2 justify-around max-w-[1000px]'>
                <div className=' text-2xl md:text-3xl  text-start px-5 font-semibold '>
                    Hi , I'm Reginald Nwachukwu, Nice to meet you, please take a look around.
                </div>
                <div className='px-5 py-6 md:py-1 font-serif'>
                    I am passionate about creating user-friendly and engaging interface that enhance overall user satisfaction and usability. I specialize in creating softwares with React, javaScript and Tailwind for clients ranging from individuals to large corporations.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About