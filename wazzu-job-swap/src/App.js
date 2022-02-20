import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About' 
import Header from './components/Header' 

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
