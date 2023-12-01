import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import cropped from '../images/cropped img.jpg'

const Home = () => {
  return (
    <div className='w-full h-screen pt-[100px]  bg-[#0a0a16]'>
        <div className=' mx-auto pl-8 pr-2 md:pl-[150px] h-full  flex flex-col justify-center '>
            <div className=' flex justify-center  items-center md:justify-end md:items-end mx-[100px]'>
                <img src={cropped} alt='pic' className=' object-fill w-[200px] h-[200px] rounded-full  '/>
            </div>
            <p className=' text-blue-400 font-bold font-serif text-2xl'>Hi, my name is</p>
            <h1 className='text-[bisque] font-mono font-bold text-3xl'>Reginald Nwachukwu</h1>
            <h2 className='text-3xl md:text-6xl  text-blue-400'>I'm a Front End Web Developer.</h2>
            <p className='lg:max-w-[800px] text-[bisque] sm:text-2xl  py-2 flex flex-col  flex-wrap'>I'm a front end web developer that specializies in building exceptional digital expericences. Currently, I'm focused on building a responsive react front end web applications. 
            </p>
            <p><button className='flex justify-between group items-center w-[130px] px-3 py-2 bg-blue-500 hover:bg-[bisque] text-black text-2xl font-semibold rounded-xl'>Work <HiArrowNarrowRight size={20} className=' group-hover:rotate-90 duration-300'/> </button>
            </p>

        </div>
    </div>
  )
}

export default Home