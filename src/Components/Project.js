import React from 'react';
import foodpic from '../images/foodpic.PNG';
import foodapp2 from '../images/foodapp2.PNG';
import animalapp from '../images/animalapp pic.PNG';
import cardpic from '../images/cardpic.PNG';
import searchapp from '../images/searchapp pic.PNG';
import tradeapp from '../images/tradeapp pic.PNG';

const Project = () => {
  return (
    <div className=' flex flex-col  w-full h-screen pt-[80px] px-1 text-[bisque] bg-[#0a0a16]'>
      <div className=' md:pl-[100px] px-auto  text-start'>
        <h3> <span  className=' font-semibold  border-r-2 px-2 border-b-2 border-blue-500 text-2xl md-3xl'>Work</span></h3>
        <p className=' font-semibold text-1xl m-2'>Check out some of my works</p>

        <div className=' grid grid-cols-2 lg:grid-cols-3 pt-[10px] px-1 md:px-3 gap-3 h-[70vh]  font-semibold'>

        <div className='relative  rounded-xl flex flex-col justify-end items-center'>
            <img src={foodapp2} alt='cardpic' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2 bg-white/80 hover:bg-blue-500/60  text-black '><a href='https://foodapp-phi.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2 bg-white/80 hover:bg-blue-500/60  text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div>

          <div className='relative  rounded-xl flex flex-col justify-end items-center'>
            <img src={tradeapp} alt='tradeapp' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/80 hover:bg-blue-500/60  text-black '><a href='https://tradeapp-roan.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/80 hover:bg-blue-500/60  text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div> 

          <div className='relative  rounded-xl flex flex-col justify-end items-center'>
            <img src={searchapp} alt='searchapp' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/80 hover:bg-blue-500/60  text-black '><a href='https://searchapp-plum.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/80 hover:bg-blue-500/60 text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div>

          <div className='relative rounded-xl flex flex-col justify-end items-center'>
            <img src={cardpic} alt='cardpic' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/60 hover:bg-blue-500/60 text-black '><a href='https://profile-card-app-beta.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/60 hover:bg-blue-500/60 text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div>

          <div className='relative  rounded-xl flex flex-col justify-end items-center'>
            <img src={foodpic} alt='food' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/60 hover:bg-blue-500/60  text-black '><a href='https://foodapp-phi.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2  bg-white/60 hover:bg-blue-500/60  text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div>

          <div className='relative rounded-xl flex flex-col justify-end items-center overflow-hidden'>
            <img src={animalapp} alt='animalapp' className='absolute h-full w-full rounded-xl hover:scale-105 duration-300'/>
            <div className='z-10 flex flex-col md:flex-row space-x-10 items-center'>
            <button className=' rounded-xl px-4 py-2 mb-2 bg-white/60 hover:bg-blue-500/60  text-black '><a href='https://animal-app-gold.vercel.app/' target='_blank' rel='noreferrer'>Website</a></button>
            <button className=' rounded-xl px-4 py-2 mb-2 bg-white/60 hover:bg-blue-500/60  text-black'><a href='https://github.com/onclereg'  target='_blank' rel='noreferrer'>Code</a></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project