import React, { useEffect, useState } from 'react'
import fetchCategoryWiseRecipe from '../helpers/fetchCategoryWiseRecipe'
import Card from './Card'
import CardRecipe from './CardRecipe'

const HorizontalCardRecipe = ({category}) => {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(false)

    const loadingList= new Array(13).fill(null)

    const fetchData = async()=>{
        setLoading(true)
        const categoryRecipe = await fetchCategoryWiseRecipe(category)
        console.log("Fetched data: ", categoryRecipe);
        setLoading(false)

        setData(categoryRecipe?.data)
    }

    useEffect(()=>{
        fetchData()
    },[category])

  return (
    <div>
         <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {
            data && data?.map(item => (
              
              <CardRecipe item={item} key={item._id}/>
            ))
          }
        </ul>
    </div>
    // <div className='container mx-auto px-5 lg:px-10 my-6'>
    // {
    //     data.map((item)=>{
    //         return(
    //             <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow-md flex'>
    //     <div className='bg-slate-200 h-full p-2 min-w-[120px] md:min-w-[145px]'>
    //     {/* <img src={recipe.thumbnail_image?.[0]} alt="" /> */}
    //     <Card recipe={item} key={item._id}/>

    //     </div>
    //     <div>

    //     </div>

    //     </div>

    //         )
    //     })
    // }
        
    // </div>
  )
}

export default HorizontalCardRecipe