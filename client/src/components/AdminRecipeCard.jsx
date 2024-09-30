import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditRecipe from './AdminEditRecipe';

const AdminRecipeCard = ({data, fetchdata}) => {

    const [editRecipe,setEditRecipe]=useState(false)

  return (
    <div>
        <div className='bg-white p-4 rounded'>
        <div className='w-40'>
        <div className='w-32 h-32 flex justify-center items-center'>
        <img src={data?.thumbnailImage[0]} width={190} height={190} className='w-fit mx-auto object-fill h-full' />
        </div>
          <h1 className='line-clamp-2 text-ellipsis'>{data.recipeName}</h1>

          <div>
          <p className='font-semibold'>
            {data.category}
          </p>
          <div className='w-fit ml-auto p-2 bg-green-100 cursor-pointer hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditRecipe(true)}>
          <MdModeEditOutline />
          </div>
          </div>
          
        </div>
         

          {
            editRecipe && (
                <AdminEditRecipe dataRecipe={data} onClose={()=>setEditRecipe(false)} fetchdata={fetchdata} />
            )
          }

        </div>
    </div>
  )
}

export default AdminRecipeCard