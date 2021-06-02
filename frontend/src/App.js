import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.css'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Today from './components/Today';
import Past from './components/Past';
import TestComponent from './components/TestComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navbar/>
        
        <Route path="/" component={Home} ></Route>
        {/* <Route path="/home" component={Home} ></Route> */}
        <Route path="/testcomponent" component={TestComponent} ></Route>


      </Router>


      </div>

    );
  
  }

}

export default App;

