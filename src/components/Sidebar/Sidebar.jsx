import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
 
        <div style ={{background: "black"}}>
            <h3 className="w3-bar-item">Menu</h3>
                <ul>
                    <li><a href="home" className="w3-bar-item w3-button">Home</a></li>
                    <li><a href="about" className="w3-bar-item w3-button">About</a></li>
                </ul>

        </div>
    );
};







export default Sidebar;