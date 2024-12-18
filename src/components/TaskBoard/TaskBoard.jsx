import React from 'react';
import { useState } from 'react'
import styles from './TaskBoard.module.css';
import tasksData from '../../../tasks.json'
import ItemCard from '../ListItem/ListItem';
import TaskForm from '../Form/Form';



const TaskBoard = ({tasks, setTasks}) => {

    const Delete = (id) => {
        const updatedTasks = tasks.filter((taskObj) => 
        taskObj.id !== id);
        setTasks(updatedTasks);


    }

    return ( 
        <div>
            <h2>My Tasks</h2> 
            <ul>
                {tasks.map((taskObj, index) => (  
                    <ItemCard
                    key = {taskObj.id} 
                    taskObj={taskObj} 
                    ondelete={() => Delete(taskObj.id)} 
                    />
                ))}
            </ul>
        </div>

     ); 
}
 
export default TaskBoard;
