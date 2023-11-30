import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a0a16] pt-[80px] px-5 md:px-[120px]'>
        <form className='md:mr-[200px]' method="POST" action='https://getform.io/f/bbca6da3-87a6-487a-a101-ac7a01dc0744'>
            <div className=' flex flex-col text-[bisque]  '>
                <p> <span  className='text-2xl font-semibold md:text-3xl border-blue-500 border-b-2 border-r-2 pr-2 '>Contact</span></p>
                <p className='text-1xl font-semibold my-3'>Submit the form below or send me a mail -<br/><span className=' text-2xl text-blue-500'>nwachukwureg05@gmail.com</span>  </p>
            </div>
            <div className='flex flex-col '>
            <input className='my-2 p-2 rounded-xl bg-gray-300 font-semibold' type='text' placeholder='name' name='name'/>
            <input className='my-2 p-2 rounded-xl bg-gray-300 font-semibold' type='text' placeholder='email' name='email'/>
            <textarea  className='my-2 p-2 rounded-xl bg-gray-300 font-semibold' rows='8' cols='10' name='message' placeholder='message' ></textarea>
            <p><button className='flex justify-center group items-center w-[220px] px-3 py-2 bg-blue-500 hover:bg-[bisque] text-black text-1xl font-semibold rounded-xl'>Let's Collaborate </button>
            </p>
            </div>
        </form>
    </div>
  )
}

export default Contact