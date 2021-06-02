


import React, { Component } from 'react';

class Status extends Component {

  render() {
    return (
    <div class="card h-100" >
  
        <h5 class="card-header">Featured</h5>
        <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51Bfy7Uy6HL._SX355_.jpg"></img>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
  
    </div>    
  )
  }
};

export default Status;

