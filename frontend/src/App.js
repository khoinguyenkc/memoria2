import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.css'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Today from './components/Today';
import Past from './components/Past';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Router>
        <a href="/">Today</a>
        <a href="/past">Past</a>

        <Route exact path="/" component={Today} ></Route>
        <Route path="/past" component={Past} ></Route>

      </Router>


      </div>

    );
  
  }

}

export default App;

