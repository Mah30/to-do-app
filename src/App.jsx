
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import TaskBoard from './components/TaskBoard/TaskBoard';
import tasksData from '../tasks.json';
import ItemDetails from './pages/ItemDetails';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';






function App() {
  const [tasks, setTasks] = useState(tasksData);

  return (
   
   
      <div style={{display: "flex", flexDirection: "column", height:'100vh'}}>
        <Navbar/>
        <div style={{display:'flex', flexGrow:2}}>
          <Sidebar/>

          <Routes> 
            <Route path = "/" element = {<TaskBoard tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/item/:id" element = {<ItemDetails tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/about" element = {<AboutPage/>} />
            <Route path = "/" element = {<Dashboard/>} />
            <Route path = "*" element = {<NotFoundPage/>}/>
          </Routes>
       
        </div>

        <Footer/>
      </div>
    
    
    
  );
}

export default App;
