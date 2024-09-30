import React, { useEffect } from 'react'
import StatusCode from '../utils/StatusCode'
import { clearRecipeDetails, getRecipeById } from '../store/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

    
  const { id }=useParams()
  const dispatch=useDispatch()
  const { recipeDetails, status }=useSelector(state => state.recipes)
  console.log("details",recipeDetails);
  

  useEffect(()=>{
    dispatch(getRecipeById(id))
    

    return ()=>{
      dispatch(clearRecipeDetails())
    }
  },[dispatch, id])

 if(status === StatusCode.LOADING){
    return <p>Loading....</p>
}

if(status === StatusCode.ERROR){
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Something went wrong!</strong>
    <span className="block sm:inline"> Try again later.</span>
  </div>
  
}
  return (
    <div>
        
    </div>
    // <section className='min-h-dvh md:flex justify-center items-center'>
    // <article>
    //     <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
    //         <picture>
    //             <img src={recipeDetails?.data.thumbnailImage[0]} className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto'/>
    //         </picture>
    //         <div className='px-8'>
    //         <h1 className='text-4xl mt-12 text-secondary'>{recipeDetails.recipeName}</h1>
    //         </div>

    //         {/* <div className='mt-5'>
    //             <h3 className='text-xl font-semibold ml-2'>Ingredients</h3>
    //             <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
    //                 {
    //                     recipeDetails?.ingredients.map((ingredient, index)=>{
    //                         <li key={index} className='pl-4 mt-2'>
    //                             <span>{ingredient?.name}</span>
    //                             <span> {ingredient?.quantity}</span>
    //                         </li>
    //                     })
    //                 }
    //             </ul>
    //         </div> */}
    //     </div>
    // </article>

    // </section>
  )
}

export default RecipeDetails