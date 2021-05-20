import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
        <div>
            <h1>Navbar</h1>
            <Router>
            <a href="/">Home</a>
            <a href="/settings">Settings</a>

            {/* <Route exact path="/" component={} ></Route>
            <Route path="/past" component={} ></Route> */}

            </Router>

        </div>
    )
  }
};

export default Navbar;