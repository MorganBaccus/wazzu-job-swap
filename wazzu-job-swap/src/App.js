import './App.css';
import React from "react";
import TinderCards from './components/TinderCards';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import Home from './components/Home'
//import About from './components/About' 
import Header from './components/Header' 

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
          <Route path="/about">
            <h1>about page</h1>
          </Route>

          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;