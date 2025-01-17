import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className=" border-2 border-emerald-600 p-20 rounded-xl ">
            <form onSubmit={()=>{
                
            }} className='flex flex-col items-center justify-center ' >
                <input required className=' border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl ' placeholder='Enter your email' type="email" />
                <input required className=' border-2 border-emerald-600 rounded-full outline-none bg-transparent mt-3 placeholder:text-gray-400 py-4 px-5 text-xl ' type="password"  placeholder='Enter your password' />
                <button className=' mt-7  text-white border-none bg-emerald-600 rounded-full outline-none placeholder:text-gray-400 py-2 px-8 text-lg ' >Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login