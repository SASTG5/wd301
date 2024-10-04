import './TaskCard.css'

const TaskCard = (props)=>{
    return(
        <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded-md shadow-md">
            <div>
            <h2 className="text-xl font-semibold">{props.title}</h2>
            <p>
            {props.completedAtDate ? ( 
                <div>Completed on: {props.completedAtDate}</div>  
            ) : (  
            <div>Due on: {props.dueDate}</div>  
            )}
            </p>
            <p>Assignee : {props.assigneeName}</p>
            </div>
        </div>
    )
}

export default TaskCard
