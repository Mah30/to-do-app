import React from 'react';
import { useState } from 'react'
import styles from './TaskBoard.module.css';
import tasksData from '../../../tasks.json'
import ItemCard from '../TaskCard/ItemCard';



const TaskBoard = () => {
    const [tasks, setTasks] = useState(tasksData);

    const Delete = (id) => {
        const updatedTasks = tasks.filter((taskObj) => 
        taskObj.id !== id);
        setTasks(updatedTasks);
    }

    return ( 
        <div> 
            <ul>
                {tasks.map((taskObj, index) => (  
                    <ItemCard taskObj={taskObj} ondelete={() => Delete(taskObj.id)} />
                ))}
            </ul>
        </div>

     ); 
}
 
export default TaskBoard;
