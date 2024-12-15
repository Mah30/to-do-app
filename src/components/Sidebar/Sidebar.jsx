import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
 
        <div style ={{background: "#008ad6"}}>
            <h3 className="w3-bar-item">Menu</h3>

            <ul className="sidebar-menu">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
            </ul>

        </div>
    );
};







export default Sidebar;