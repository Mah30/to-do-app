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
            <p>{taskObj.task} ({taskObj.completed ? "yes" : "no"}) </p>

            <h2>Update task</h2>
            <TaskUpdateForm task={taskObj.task} onUpdate={onUpdate} ></TaskUpdateForm>
            
        </div>
     );
}
 
export default ItemDetails;