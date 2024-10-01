import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
    
      const response = await axios.post('http://localhost:4000/api/v1/auth/logout');
      console.log("Logout API response:", response.data);
      
      dispatch(logout());
      navigate('/login')

      // window.location.href = '/login';
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
    <button className='lg:hidden sm:block'>
    <IoIosMenu />
    <span className='sr-only'>Toggle Menu</span>
    </button>
    <div className='flex flex-1 justify-end'>
      <button onClick={handleLogout}>
      <AiOutlineLogout /></button>
      
    </div>
    

    </header>
    
  )
}

export default AdminHeader