
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import TaskBoard from './components/TaskBoard/TaskBoard';
import tasks from '../tasks.json';
/* import AboutPage from './pages/AboutPage'; */
/* import NotfoundPage from './pages/NotFoundPage'; */






function App() {
  // const [count, setCount] = useState(0)

  return (
   
   
      <div style={{display: "flex", flexDirection: "column", height:'100vh'}}>
        <Navbar/>
        <div style={{display:'flex', flexGrow:2}}>
          <Sidebar/>

          <Routes> 
            <Route path = "/" element = {<TaskBoard/>} />
            {/* <Route path = "/" element = {<AboutPage/>} /> */}
            {/*  <Route path = "/" element = {<TaskBoard/>} /> */}
          </Routes>

         


         
           
      


       
        </div>

        <Footer/>
      </div>
    
    
    
  );
}

export default App;
