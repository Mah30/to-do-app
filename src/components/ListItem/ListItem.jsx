import React from 'react';
import styles from './ListItem.module.css';
import { Link } from 'react-router-dom';




const ListItem  = ({taskObj, ondelete}) => {

    return ( 
        <li className= {styles.list}>

        {taskObj.completed ? "yes " : "no "}
        
        <Link to={"/item/" + taskObj.id}>{taskObj.task}</Link>

        <button className= {styles.deleteButton} type='button' onClick={ondelete}>Delete</button>
        </li>
     );
}
 
export default ListItem ;