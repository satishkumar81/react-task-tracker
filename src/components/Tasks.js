import Task from './Task'

const Tasks= ({tasks,onDelete, onTogle})=>{
    return (
        <>
           {tasks.map((task,index)=>(
           <Task key={task.id} 
           task={task} 
           onDelete={onDelete} 
           onTogle={onTogle} />))}
        </>
    )
}

export default Tasks
