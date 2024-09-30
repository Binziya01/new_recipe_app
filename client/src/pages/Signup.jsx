import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Signup = () => {
	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const [phone,setPhone]=useState("")
	const [address,setAddress]=useState("")
	const navigate=useNavigate()


	const handleSubmit = async(e)=>{
		e.preventDefault()
		try{
			const {data} = await axios.post("/api/v1/auth/signup",{name,email,password,phone,address})
			if(data.success){
				toast.success(data.message)
				navigate("/login")
			}else{
				toast.error(data.error)
			}

		}catch(error){
			console.log(error);
			toast.error("Something went wrong while signing up")

		}
		
	}

  return (

	<section>
      <div className="flex flex-col justify-center items-center rounded-md sm:p-10 dark:text-gray-50 dark:bg-gray-800">
	  {/* <Link to="/" className='absolute left-0 top-0'>
		<img src={Logo} alt="" className='w-56 h-56'/>
		</Link> */}
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm dark:text-gray-400">Create your account</p>
	</div>
	<form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
    <div>
				<label htmlFor="email" className="block mb-2 text-sm">Username</label>
				<input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name={name} id="email" placeholder="leroy" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="bonlr" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name={email} id="email" placeholder="leroy@jenkins.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="bonlr" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name={password} id="password" placeholder="*****" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="gel1yj" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Phone</label>
					
				</div>
				<input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="text" name={phone} id="password" placeholder="+91" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="gel1yj" />
		
		</div>
		<div>
				<label htmlFor="email" className="block mb-2 text-sm">Address</label>
				<input onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" name={address} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="bonlr" />
			</div>
		</div>
		
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-full dark:bg-red-500 dark:text-gray-50" fdprocessedid="taabys">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<Link to="/login" rel="noopener noreferrer" href="#v" className="hover:underline dark:text-red-600">Login</Link>.
			</p>
			
		</div>
	</form>
</div>
    </section>

  )
}

export default Signup