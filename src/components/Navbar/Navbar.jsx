import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        
      <div className={styles.nav}>
        <img className={styles.logo} src="./src/assets/img/logo2.png"></img>
        
        <h1 className={styles.appName}>To Do App</h1>


      </div>
    


    );
};





export default Navbar;