import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryRecipe = () => {

    const params = useParams()
    
  return (
    <div>
        {
            params?.categoryName
        }
    </div>
  )
}

export default CategoryRecipe