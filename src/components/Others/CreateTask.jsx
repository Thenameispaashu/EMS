import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
            <form className='flex flex-wrap items-start w-full justify-between' >
                <div className="w-1/2">
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-400 ' type="date" />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Assign to</h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' placeholder='Employee Name' />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Category </h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' placeholder='Design, Development, etc...' />
                    </div>
                </div>
                
                <div className="w-1/2">
                    <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
                    <textarea name=""  id="" className='text-sm py-1 px-2 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' ></textarea>
                    <button className='bg-emerald-600 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full ' >Create Task</button>
                </div>
                
               
            </form>
        </div>
  )
}

export default CreateTask