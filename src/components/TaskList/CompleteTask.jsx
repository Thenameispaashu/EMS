import React from 'react'

const CompleteTask = () => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-green-600 rounded-xl ">
            <div className="flex justify-between items-center ">
                <h3 className='bg-red-800 px-3 text-sm py-1 rounded  ' >High</h3>
                <h4 className='text-sm' >20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold ' >Make a Youtube Video</h2>
            <p className='text-sm mt-2 '  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vel magni dolorem. Eum, recusandae tenetur! </p>
            <div className="mt-2">
                <button className='w-full bg-green-700 ' >Completed</button>
            </div>
    </div>
  )
}

export default CompleteTask