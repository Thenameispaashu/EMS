import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10">
        {data.tasks.map((e)=>{
            if(e.active){
                return <AcceptTask key={idx} />
            }else if(e.newTask){
                return <NewTask key={idx} />
            }else if(e.completed){
                return <CompleteTask key={idx} />
            }else if(e.failed){
                return <FailedTask key={idx} />
            }
        })}
    </div>
  )
}

export default TaskList