import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About' 

function App() {
  return (
    <div>
      <p>hullo</p>
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
