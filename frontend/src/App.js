import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContent from './components/ThreeColWire';
import Navbar from './components/Navbar';
import Today from './components/Today';
import Past from './components/Past';
import TestComponent from './components/TestComponent';
import Login from './components/auth/Login';
import PostUniView from './components/PostUniView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navbar/>


        <Switch>
        <Route exact path="/" component={Today} ></Route>
        <Route path="/posts/:postid" component={PostUniView} ></Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/testcomponent" component={TestComponent} ></Route>

        </Switch>


      </Router>


      </div>

    );
  
  }

}

export default App;

