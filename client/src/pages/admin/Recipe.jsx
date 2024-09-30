import React, { useEffect, useState } from 'react'
import UploadRecipe from '../../components/UploadRecipe'
import AdminRecipeCard from '../../components/AdminRecipeCard'

const AdminRecipe = () => {

  const [openUploadRecipe,setOpenUploadRecipe]=useState(false)
  const [allRecipe,setAllRecipe]=useState([])

  const fetchAllRecipe = async()=>{
    const response = await fetch('http://localhost:4000/api/v1/recipe/get-recipe')
    const dataResponse = await response.json()

    console.log("Fetched recipe data after update", dataResponse);
    

    setAllRecipe(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllRecipe()
  },[])

   return (
    <div>
       <div className='bg-white py-2 px-4 flex justify-between items-center'>
  <h2 className='font-bold text-lg'>All Recipe</h2>
  <button onClick={()=>setOpenUploadRecipe(true)} className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full'>Upload Recipes</button>

  </div>
  {/* All recipes */}

  <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
  {
    allRecipe.map((recipe,index)=>{
      return (
        <AdminRecipeCard data={recipe} key={index+"allRecipe"} fetchdata={fetchAllRecipe}/>
      )
    })
  }

  </div>

  {/* Upload recipe component */}

  {
    openUploadRecipe && (
      <UploadRecipe onClose={()=>setOpenUploadRecipe(false)} fetchdata={fetchAllRecipe}/>
    )
  }

    </div>
   

   )
 }

export default AdminRecipe