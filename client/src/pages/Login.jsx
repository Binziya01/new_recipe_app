import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../store/authSlice'

const Login = () => {
    // states
    const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")

    // redux states
    const {loading, error} = useSelector((state)=>state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(()=>{
    //     dispatch(userAuth())
    // },[dispatch])

    // useEffect(()=>{
    //     dispatch(adminAuth())
    // },[dispatch])

    const handleLoginEvent = (e) => {
        e.preventDefault()
        let userCredentials={
            email,password
        }
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail('')
                setPassword('')
                alert("Successfully logged in")
                navigate('/')
            }
        })
    }
    // if(loading)
    //     return <div>Loading...</div>
    
  return (
    <section>
        <div className="flex flex-col justify-center min-h-screen items-center p-6 rounded-md sm:p-10 bg-[#F7EDE2] text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Login</h1>
		<p className="text-sm dark:text-gray-400">Login to access your account</p>
	</div>
	<form onSubmit={handleLoginEvent} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input onChange={(e)=>{setEmail(e.target.value)}} value={email} required type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="v69qef" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#v" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input onChange={(e)=>{setPassword(e.target.value)}} value={password} required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="o0l84" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#845644] text-gray-50" fdprocessedid="sup8rv">
                    {loading?'Loading...':'Login'}
                </button>
			</div>
            {error&&(
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{error}</strong>
      </div>
            )}
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link to="/signup" rel="noopener noreferrer" href="#v" className="hover:underline dark:text-red-600">Sign up</Link>.
			</p>
		</div>
	</form>
</div>
    </section>
  )
}

export default Login