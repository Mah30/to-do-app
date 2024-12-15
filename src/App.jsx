
import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  // const [count, setCount] = useState(0)

  return (
   
      <div style={{display: "flex", flexDirection: "column", height:'100vh'}}>
        <Navbar/>
        <div style={{display:'flex', flexGrow:2}}>
          <Sidebar/>
        </div>
        <Footer/>
      </div>

    
  )
}

export default App;

