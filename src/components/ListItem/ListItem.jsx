import React from 'react';
import styles from './ListItem.module.css';
import { Link } from 'react-router-dom';




const ListItem  = ({taskObj, ondelete}) => {

    return ( 
        <li className= {styles.list}>

        {taskObj.completed ? 
        <i className="fa-solid fa-check" style={{color: "#008b00", padding: "3px"}}></i>
        : 
        <i className="fa-solid fa-xmark" style={{color: "#8b0000", padding: "3px"}}></i>
        }
        
        <Link to={"/item/" + taskObj.id}>{taskObj.task}</Link>

        <button className= {styles.deleteButton} type='button' onClick={ondelete}>Delete</button>
        </li>
     );
}
 
export default ListItem ;