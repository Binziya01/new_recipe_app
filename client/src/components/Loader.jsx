import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Loader = ({path="login"}) => {
    const [count,setCount]=useState(7)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=>--prevValue)
        },1000)
        count === 0 && navigate(`/${path}`,{state:location.pathname})
        return() => clearInterval(interval)
    },[count,navigate,location,path])
  return (
    
   <div className="flex flex-col gap-10 items-center justify-center h-screen">
  <div className="relative">
  
    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
    
    </div>
    
  </div>
  <h1 className='text-2xl'>{`Redirecting in ${count} sec`}</h1>
 
</div>


   
  )
}

export default Loader