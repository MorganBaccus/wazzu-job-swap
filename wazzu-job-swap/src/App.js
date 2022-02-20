import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About' 
import Header from './components/Header' 

function App() {
  return (
    <div className="App">

      <Header/>
      <Router>
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;