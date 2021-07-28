import React, { Component } from 'react';
import Status from './Status';



class PostUniView extends Component {
    // threecolumnstructure, like home page

    renderPost = () => {
        // fetch request to api (similar to getPosts)
        // and then pass the content to a Status component
        // <Status />

    }

    render() {
        return (
            <div class="container-fluid">

                <div class="row">
  
                  <div class="col-sm-3">
                      sidebar left
                  </div>
  
                <div class="col-sm-6">
                    Post content goes here
                    {this.renderPost()}
                </div>

                <div class="col-sm-3">
                      sidebar right
                  </div>

                </div>



            </div>

                  )}

}