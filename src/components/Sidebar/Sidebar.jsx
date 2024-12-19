import React from 'react';
import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
 
        <div style ={{
            background: "#5fa8d3",
            width:"160px",
            padding:"20px",
            flexShrink:"0",
        
         
            }}>
            
            <h3>Tasks</h3>

        
            <ul >
                <li><Link to = "/">Show tasks</Link></li>
                <li><Link to = "/dashboard">Add tasks</Link></li>
                <li><Link to = "/about">About</Link></li>
            </ul>

        </div>
    );
};







export default Sidebar;