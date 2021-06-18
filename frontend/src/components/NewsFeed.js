// both today and past will use this newsfeed component to display
import React, { Component } from 'react';
import Status from './Status';

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.posts)
  }

    renderPosts = () => {
      console.log(this.props.posts)

      return this.props.posts.map( post => < Status post={post} />)
    };

    
    render() {
      return (
          <div>
              <h1>NewsFeed Component</h1>
              {this.renderPosts()}
          </div>
      )
    }
  };
  
  export default NewsFeed;