import React from 'react';
import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
 
        <div className= "sidebar" style ={{background: "#008ad6"}}>
            <h3 className="w3-bar-item">Tasks</h3>

        
            <ul >
                <li><Link to = "/">Add tasks</Link></li>
                <li><Link to = "/about">About</Link></li>
            </ul>

        </div>
    );
};







export default Sidebar;