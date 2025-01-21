import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-green-600 rounded-xl ">
            <div className="flex justify-between items-center ">
                <h3 className='bg-red-800 px-3 text-sm py-1 rounded  ' >{data.category}</h3>
                <h4 className='text-sm' >{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold ' >{data.taskTitle}</h2>
            <p className='text-sm mt-2 '  > {data.taskDescription} </p>
            <div className="mt-2">
                <button className='w-full bg-green-700 ' >Completed</button>
            </div>
    </div>
  )
}

export default CompleteTask