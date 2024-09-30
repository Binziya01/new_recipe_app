import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Header from './header/Header';
import { Outlet } from 'react-router-dom';


const Hero = () => {
  return (
      <div className='px-5 xl:px-10 md:w-1/2 mb-10 flex flex-col gap-10'>
        <div className='flex flex-col justify-center items-center gap-2 text-[#2A3342] text-center leading-normal leading-relaxed'>
        <h1 className='text-xl font-semibold'>get ready to</h1>
        <h1 className='text-5xl font-extrabold'>SPRING IT ON</h1>
        <h3>Treat yourself to our latest seasonal fare.</h3>
        </div>

       <div className='pt-9'>
       <form action="/search" className='bg-white p-4 rounded relative flex items-center'>
            <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-300'/>
            <input className='outline-none w-full placeholder:text-[#1b2629]' name="query" type="search" placeholder='Search for a recipe' id='search' required />
        </form>
       </div>
    </div>
  
  )
}

export default Hero