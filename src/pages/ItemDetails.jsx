import React from 'react';
import { useParams } from 'react-router-dom';
import TaskUpdateForm from '../components/Form/UpdateForm';

const ItemDetails = ({tasks, setTasks}) => {

    const {id} = useParams ();
    const taskObj = tasks.find(task => task.id == id);

    const onUpdate = (task) => {
        const updatedTask = { id: id, task: task, completed: taskObj.completed };
        const updatedTasks = tasks.map(
            otherTaskObj => (otherTaskObj.id == id) ? updatedTask : otherTaskObj
        );
        setTasks(updatedTasks);
    }

    return ( 
        
        <div>
            <h2>Tasks Details</h2>
            <p>Details of an item selected from {id}</p>
            <p>
                {taskObj.completed ? 
                    <i className="fa-solid fa-check" style={{color: "#008b00", padding: "3px"}}></i>
                    : 
                    <i className="fa-solid fa-xmark" style={{color: "#8b0000", padding: "3px"}}></i>
                }
                    {taskObj.task}
            </p>

            <h2>Update task</h2>
            <TaskUpdateForm task={taskObj.task} onUpdate={onUpdate} ></TaskUpdateForm>
            
        </div>
     );
}
 
export default ItemDetails;