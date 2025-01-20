import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen' >
        <div className=" w-[45%] bg-red-500 rounded-xl px-9 py-6 ">
            <h2 className='text-2xl font-semibold ' >{data.taskCounts.newTask} </h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>
        <div className=" w-[45%] bg-blue-500 rounded-xl px-9 py-6 ">
            <h2 className='text-2xl font-semibold ' >{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium' >Completed Task</h3>
        </div>
        <div className=" w-[45%] bg-green-500 rounded-xl px-9 py-6 ">
            <h2 className='text-2xl font-semibold ' >{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium' >Accepted Task</h3>
        </div>
        <div className=" w-[45%] bg-yellow-500 rounded-xl px-9 py-6 ">
            <h2 className='text-2xl font-semibold ' >{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium' >Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber