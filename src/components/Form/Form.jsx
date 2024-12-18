import React, { useState } from "react";


const TaskForm = ({onCreate}) => {
    const [value, setValue] = useState("");
    return ( 
       
        <form onSubmit={(event) => {
            onCreate(value);
            event.preventDefault();
            return false;
        }}>
            Please, enter new task:
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Create</button>
        </form>


     );
}
 
export default TaskForm;