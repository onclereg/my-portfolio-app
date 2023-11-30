import React from 'react';
// import About from './About';
// import Contact from './Contact';
// import Home from './Home';
// import Project from './Project';
// import Skills from './Skills';
import okenwalogo from '../images/okenwalogo.PNG';
import {FaBars , FaTimes ,FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { useState } from 'react';
import { Link ,Outlet} from 'react-router-dom';

const NavBar = () => {
    const [nav ,setNav] =useState(false);
    const handleClick=()=>setNav(!nav);
  return (
    <div className='cursor-pointer relative '>
    <nav className='w-full h-[80px] z-20 flex justify-between items-center bg-[#0a0a16] p-2 fixed text-[bisque]'>
        <div>
           <img className='w-[100px] h-[60px] object-contain' src={okenwalogo} alt='logo'/>
        </div>
        <ul className='hidden md:flex font-semibold'>
            <li className='px-6 mx-2 hover:text-black hover:bg-blue-400 py-2 scale-105 duration-300 rounded-xl'> <Link to='/'>Home</Link></li>
            <li className='px-6 mx-2 hover:text-black hover:bg-blue-400 py-2 scale-105 duration-300 rounded-xl'> <Link to='/About'>About</Link></li>
            <li className='px-6 mx-2 hover:text-black hover:bg-blue-400 py-2 scale-105 duration-300 rounded-xl'> <Link to='/Skill'>Skills </Link></li>
            <li className='px-6 mx-2 hover:text-black hover:bg-blue-400 py-2 scale-105 duration-300 rounded-xl'> <Link to='/Projects'>Projects</Link></li>
            <li className='px-6 mx-2 hover:text-black hover:bg-blue-400 py-2 scale-105 duration-300 rounded-xl'><Link to='/Contact'>Contact </Link></li>
        </ul>
        <div className='z-30  md:hidden' onClick={handleClick}>
            {!nav?<FaBars/>:<FaTimes/>}
        </div>
        <ul onClick={handleClick} className={!nav? 'hidden' :'md:hidden flex flex-col w-full h-screen bg-[#0a0a16] absolute top-0 left-0 justify-center z-20 items-center' }>
            <li className='py-6 hover:text-[#c4c4f0] text-2xl font-semibold'><Link to='/'>Home</Link></li>
            <li className='py-6 hover:text-[#c4c4f0] text-2xl font-semibold'><Link to='/About'>About</Link></li>
            <li className='py-6 hover:text-[#c4c4f0] text-2xl font-semibold'><Link to='/Skill'>Skills </Link></li>
            <li className='py-6 hover:text-[#c4c4f0] text-2xl font-semibold'><Link to='/Projects'>Projects</Link></li>
            <li className='py-6 hover:text-[#c4c4f0] text-2xl font-semibold'><Link to='/Contact'>Contact </Link></li>
        </ul>
    </nav>
        <ul className =' absolute hidden md:fixed md:flex flex-col w-[150px] h-screen top-[35px] left-0 justify-center  text-[bisque] '>
            <li className='ml-[-49px] hover:ml-[-1px] duration-300 w-full py-1'><a href='https://github.com/onclereg' target='_blank' rel='noreferrer' className='flex '>Github <FaGithub size={30} className=' bg-black/80 mx-2'/></a></li>
            <li className='ml-[-57px] hover:ml-[-1px] duration-300 w-full py-1'><a href='https://www.linkedin.com/in/reginald-nwachukwu-243169258/'  target='_blank' rel='noreferrer' className='flex'>linkedin <FaLinkedin size={30} className=' bg-blue-700 mx-2 '/></a></li>
            <li className='ml-[-39px] hover:ml-[-1px] duration-300 w-full bg-[peach] py-1'><a href='mailto:nwachukwureg05@gmail.com'  target='_blank' rel='noreferrer' className='flex'>Email <HiOutlineMail size={30} className=' bg-[#f75757] mx-2 '/></a></li>
            <li className='ml-[-57px] hover:ml-[-1px] duration-300 w-full py-1'><a href='tel:+2348062506385'  target='_blank' rel='noreferrer' className='flex'>Contact <BsFillPersonLinesFill size={30} className=' bg-[grey] mx-2'/></a></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default NavBar