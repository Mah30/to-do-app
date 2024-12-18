import React, { useState } from "react";


const TaskUpdateForm = ({task, onUpdate}) => {
    const [value, setValue] = useState(task);
    return ( 
       
        <form onSubmit={(event) => {
            onUpdate(value);
            event.preventDefault();
            return false;
        }}>
            Please, enter the updated task:
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Update</button>
        </form>


     );
}
 
export default TaskUpdateForm;