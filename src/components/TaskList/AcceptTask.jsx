import React from 'react'

const AcceptTask = () => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-red-600 rounded-xl ">
            <div className="flex justify-between items-center ">
                <h3 className='bg-red-800 px-3 text-sm py-1 rounded  ' >High</h3>
                <h4 className='text-sm' >20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold ' >Make a Youtube Video</h2>
            <p className='text-sm mt-2 '  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vel magni dolorem. Eum, recusandae tenetur! </p>
            <div className="flex justify-between mt-5 " >
                <button className='bg-green-700 py-1 px-2 text-sm' >Mark as Completed</button>
                <button className='bg-red-700 py-1 px-2 text-sm' >Mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask