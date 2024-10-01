import React, { useEffect, useState } from 'react'
import CategoryWrapper from '../category/CategoryWrapper'
import axios from 'axios'
import { Card } from '@mui/material'
import HorizontalCardRecipe from '../../components/HorizontalCardRecipe'

const AllRecipes = () => {
  const categories = ["breakfast", "lunch", "desserts", "drinks", "entrees"]
  // const [items,setItems]=useState([])

  // useEffect(()=>{
  //   const getLatestItems =async()=>{
  //     const response = await axios.get('http://localhost:4000/api/v1/auth/all-items')
  //     console.log("Fetched items:", response.data);
  //     setItems(response.data)
  //   }

  //   getLatestItems()
    
  // },[])
  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>All Recipes</h1>
        <CategoryWrapper/>

        {categories.map(category => (
   <HorizontalCardRecipe key={category} category={category} />
))}

        {/* <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {
            items?.map((item)=> (
              <Card key={item._id} item={item}/>
            ))
          }
        </ul> */}
    </div>
  )
}

export default AllRecipes