import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

const AdminHeader = () => {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
    <button className='lg:hidden sm:block'>
    <IoIosMenu />
    <span className='sr-only'>Toggle Menu</span>
    </button>
    <div className='flex flex-1 justify-end'>
      <button>
      <AiOutlineLogout /></button>
      
    </div>
    

    </header>
    
  )
}

export default AdminHeader