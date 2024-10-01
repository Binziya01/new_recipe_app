import React, { Fragment } from 'react'
import { SiGoogleanalytics } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";

export const AdminSidebarMenuItems = [
  {
      id : 'dashboard',
  label : 'Dashboard',
  path: '/dashboard/admin',
  icon: <LuLayoutDashboard />
  },
  // {
  //     id : 'category',
  // label : 'Category',
  // path: '/dashboard/admin/create-category'
  // },
  {
      id : 'recipe',
  label : 'Recipe',
  path: '/dashboard/admin/recipe'
  }
   
]

function MenuItems() {
  const navigate=useNavigate()

  return <nav className='mt-8 flex-col flex gap-2'>
    {
      AdminSidebarMenuItems.map(menuItem=> <div key={menuItem.id} onClick={()=>navigate(menuItem.path)} className='text-xl cursor-pointer flex items-center gap-2 rounded-md px-3 py-2'>
      {menuItem.icon}
      <span>{menuItem.label}</span>

      </div>)
    }
  </nav>
}

function AdminSidebar() {

  const navigate = useNavigate()
  return (
    <Fragment>
    
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex customShadow'>
      <div onClick={()=>navigate('/dashboard/admin')} className='flex items-center cursor-pointer gap-2'>
      <SiGoogleanalytics size={30}/>
      <h1 className='text-2xl font-extrabold'>Admin Panel</h1>

      </div>
      <MenuItems/>

      </aside>
    </Fragment>
  )
}

export default AdminSidebar