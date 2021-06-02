// both today and past will use this newsfeed component to display
import React, { Component } from 'react';
import Status from './Status';

class NewsFeed extends Component {


    renderPosts = () => {

    };

    
    render() {
      return (
          <div>
              <h1>NewsFeed Component</h1>
              <Status />
              <Status />
          </div>
      )
    }
  };
  
  export default NewsFeed;