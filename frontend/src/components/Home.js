import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Today from './Today';
import Past from './Past';


class Home extends Component {
    render() {
      return (
          <div class="container-fluid">
              <div class="row">

                <div class="col-sm-3">
                    sidebar left
                </div>

                <div class="col-sm-6">
                <h1>Home Component</h1>

                    <Router>
                        <Route exact path="/" component={Today} ></Route>
                        <Route path="/past" component={Past} ></Route>
                    </Router>

                </div>

                <div class="col-sm-3">
                sidebar right

                </div>
    

            </div>

          </div>
  
      )
    }
}

export default Home;