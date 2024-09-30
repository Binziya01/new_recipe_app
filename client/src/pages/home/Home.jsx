import React from 'react'
import Hero from '../../components/Hero'
import CategoryWrapper from '../category/CategoryWrapper'
import FeaturedSection from './FeaturedSection'
import Header from '../../components/header/Header'
import CategoryList from '../../components/CategoryList'
import HorizontalCardRecipe from '../../components/HorizontalCardRecipe'


const Home = () => {
  const categories = ["breakfast", "lunch", "desserts", "drinks", "entrees"]
  return (
    <div className=' container mx-auto'>
        <div className='flex flex-col justify-center items-center w-full py-20'>
        <Hero/>
        <CategoryWrapper/>
        </div>

        {/* others component */}
        <FeaturedSection/>

        {/* <CategoryList/>
        <HorizontalCardRecipe category={"breakfast"}/> */}

        {categories.map(category => (
   <HorizontalCardRecipe key={category} category={category} />
))}
        
    </div>
  )
}

export default Home