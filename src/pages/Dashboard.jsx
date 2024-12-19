import React from 'react';
import TaskForm from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({tasks, setTasks}) => {

    const navigate = useNavigate();

    const createTask = (task) => {
        const id = tasks.length === 0 ? 0 : (tasks[tasks.length-1].id + 1);
        const updatedTasks = tasks.slice();
        updatedTasks.push(
            {id: id, task: task, completed: false},
        )
        setTasks(updatedTasks);
        navigate("/");
    }

    return ( 

        <div>
            <h2>New Task</h2>
            <TaskForm onCreate={createTask} ></TaskForm>
        </div>
     );
}
 
export default Dashboard;