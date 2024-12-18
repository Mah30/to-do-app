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

    const createTask = (task) => {
        const id = tasks.length === 0 ? 0 : (tasks[tasks.length-1].id + 1);
        const updatedTasks = tasks.slice();
        updatedTasks.push(
            {id: id, task: task, completed: false},
        )
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

            <h2>New Task</h2>
            <TaskForm onCreate={createTask} ></TaskForm>
        </div>

     ); 
}
 
export default TaskBoard;
