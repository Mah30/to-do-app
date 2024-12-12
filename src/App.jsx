
import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Sidebar from './components/Sidebar/Sidebar';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Sidebar/>
      
      <div style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
        <Navbar/>
        <p style = {{flexGrow:1}}>Get Things Done!</p>
        <Footer/>
      </div>

    </div>
  )
}

export default App;

