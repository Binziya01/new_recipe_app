import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { adminAuth } from '../../store/authSlice'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckAuth from '../common/CheckAuth';


const DesktopNav = ({menuItems, Logo}) => {

    const dispatch=useDispatch()
  const { user }=useSelector(state => state.auth)

  const [openMenu,setOpenMenu]=useState(false)
	const navigate = useNavigate()

 

  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href='/'>
        <img src={Logo} alt="logo" className='w-40 h-40'/>

        </a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu,index)=>(
                   <li key={index}>
                   <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
                   </li>
                ))
            }
        </ul>

        {/* signup and login */}
        {/* <ul className='flex items-center gap-4 font-medium'>
            <li>
                <Link to='/login' className='px-4 py-2 text-secondary rounded'>Login</Link>
            </li>
            <li>
                <Link to='/signup' className='px-4 py-2 text-secondary rounded'>Sign up</Link>
            </li>
        </ul> */}

        {
				!user? 
				(
					<ul className='flex gap-6'>
					<li className="flex">
				<Link to="/login" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Login</Link>
			</li>
			<li className="flex">
				<Link to="/signup" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Sign up</Link>
			</li>
					</ul>
				):(
					<ul className='flex gap-6'>
					
			<div className='flex gap-2'>
			<AccountCircleIcon className='mt-5'/><p className='py-5 text-orange-500 font-semibold text-xl'>{user.name}</p>
			</div>

			<div onClick={()=>{setOpenMenu(!openMenu)}} className='flex flex-col justify-center relative py-6'>
				<div className='flex'>
				<span className='flex items-center -mb-1 text-lg cursor-pointer'>{user?.role || "No role found"}</span><ArrowDropDownIcon/>
				</div>
				{
					openMenu ? (
						<div className='flex flex-col absolute top-20 right-18 gap-4 text-lg mt-2'>
							<Link to={`/dashboard/${user.role === "ADMIN" ? "admin" : "user"}`}>Dashboard</Link>
							<Link to="/profile">Profile</Link>
						</div>
					) : ("")
				}
				
			</div>
            </ul>
            )
        }
    </div>
  )
}

export default DesktopNav