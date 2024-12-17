import React from 'react';
import styles from './ListItem.module.css';




const ListItem  = ({taskObj, ondelete}) => {

    return ( 
        <li className= {styles.list}>

        {taskObj.completed ? "yes " : "no "}
        
        {taskObj.task}

        <button className= {styles.deleteButton} type='button' onClick={ondelete}>Delete</button>
        </li>
     );
}
 
export default ListItem ;