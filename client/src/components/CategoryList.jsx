import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryList = () => {

  const [categoryRecipe,setCategoryRecipe]=useState([])
  const [loading,setLoading]=useState(false)

  const categoryLoading = new Array(13).fill(null)

  const fetchCategoryRecipe = async()=>{
    try {
      setLoading(true)
      const response = await fetch("http://localhost:4000/api/v1/recipe/get-categoryRecipe")
      const dataResponse = await response.json()
      setLoading(false)
      setCategoryRecipe(dataResponse?.data || [])  // Default to an empty array if data is undefined
    } catch (error) {
      setLoading(false)
      console.error("Error fetching category recipes:", error)
    }
  }

  useEffect(()=>{
    fetchCategoryRecipe()

  },[])
  return (
    <div className='container mx-auto px-5 lg:px-10'>
<div className='flex items-center gap-4 justify-between'>
      {
        loading ? (
          
            categoryLoading.map((el,index)=>{
              return(
                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>

          </div>
              )
            })
          
          
        ) : (
            categoryRecipe.length > 0 ? (
              categoryRecipe.map((recipe, index) => {
                return (
                  <Link to={"/recipe-category/" + recipe?.category} className='cursor-pointer' key={recipe.category}>
                    <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-3 bg-slate-200 flex items-center justify-center'>
                      <img src={recipe?.thumbnailImage[0]} alt={recipe.category} className='h-full object-scale-down object-fill mix-blend-multiply hover:scale-125 transition-all' />
                    </div>
                    <p className='text-center text-sm md:text-base capitalize'>
                      {recipe?.category}
                    </p>
                  </Link>
                )
              })
            ) : (
              <p>No categories available</p>
            )
          )
      
        
      }
</div>
    </div>
  )
}

export default CategoryList