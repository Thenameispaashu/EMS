import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
            <form onSubmit={(e)=>{
                e.preventDefault()
                setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, newTask:true, failed:false, completed:false} )
                const data = userData

                userData.forEach((e) => {
                    if(assignTo == e.firstName) {
                        e.tasks.push(newTask)
                        e.taskCounts.newTask = e.taskCounts.newTask + 1
                    }
                });
                setUserData(data)
                console.log(data);
                

                setTaskTitle('')
                setTaskDescription('')
                setTaskDate('')
                setAssignTo('')
                setCategory('')
            }} 

            className='flex flex-wrap items-start w-full justify-between' >
                <div className="w-1/2">
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input  
                            value={taskTitle}
                            onChange={(e)=>setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                        <input 
                            value={taskDate}
                            onChange={(e)=>setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-400 ' type="date" />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Assign to</h3>
                        <input 
                            value={assignTo}
                            onChange={(e)=>setAssignTo(e.target.value)}
                            type="text" 
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' placeholder='Employee Name' />
                    </div>
                    <div className="">
                        <h3 className='text-sm text-gray-300 mb-0.5' >Category </h3>
                        <input 
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            type="text" 
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' placeholder='Design, Development, etc...' />
                    </div>
                </div>
                
                <div className="w-1/2">
                    <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e)=>setTaskDescription(e.target.value)}
                        className='text-sm py-1 px-2 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' ></textarea>
                    <button className='bg-emerald-600 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full ' >Create Task</button>
                </div>
                
               
            </form>
        </div>
  )
}

export default CreateTask