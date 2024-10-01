import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth ({isLoggedIn, user, children}) {
    const location = useLocation()
    console.log(location.pathname, isLoggedIn);
    
    if(!isLoggedIn &&
        !(location.pathname.includes('/login') ||
        location.pathname.includes('/signup'))
    ){
  return <Navigate to="/login"/>
    }

    if(isLoggedIn && (location.pathname.includes('/login') || location.pathname.includes('/signup'))){
        if(user?.role === "ADMIN"){
            return <Navigate to="/dashboard/admin"/>
        } else {
            return <Navigate to="/"/>
        }
    }

    if(isLoggedIn && user?.role !== "ADMIN" && location.pathname.includes('admin')){
        return <Navigate to="/unauth-page"/>
    }

    if(isLoggedIn && user?.role === "ADMIN" && location.pathname.includes('/')){
        return <Navigate to="/dashboard/admin"/>
    }

    return <div>{children}</div>
}

export default CheckAuth