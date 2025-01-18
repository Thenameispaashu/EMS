import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className=" border-2 border-emerald-600 p-20 rounded-xl ">
            <form onSubmit={(e)=>{
                e.preventDefault()
                handleLogin(email, password)
                setEmail("")
                setPassword("")
            }} className='flex flex-col items-center justify-center ' >
                <input 
                required 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className=' border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl ' placeholder='Enter your email' type="email" />
                <input 
                required 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className=' border-2 border-emerald-600 rounded-full outline-none bg-transparent mt-3 placeholder:text-gray-400 py-4 px-5 text-xl ' type="password"  placeholder='Enter your password' />
                <button className=' mt-7 w-full  text-white border-none bg-emerald-600 rounded-full outline-none placeholder:text-gray-400 py-2 px-8 text-lg ' >Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login