import React from 'react';


const ItemCard  = ({taskObj, ondelete}) => {

    return ( 
        <li key = {taskObj.id}>
        {taskObj.completed ? "yes " : "no "}
        
        {taskObj.task}

        <button type='button' onClick={ondelete}>Delete</button>
    </li>
     );
}
 
export default ItemCard ;