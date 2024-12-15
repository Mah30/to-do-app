import React from 'react';


const ItemCard  = ({taskObj, ondelete}) => {

    return ( 
        <li>
        {taskObj.completed ? "yes " : "no "}
        
        {taskObj.task}

        <button type='button' onClick={ondelete}>Delete</button>
    </li>
     );
}
 
export default ItemCard ;