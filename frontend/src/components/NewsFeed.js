// both today and past will use this newsfeed component to display
import React, { Component } from 'react';
import Status from './Status';

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.posts)
  }

    renderPosts = () => {
      //should find out what kind of post(photo, photo series, status..) and render appropriately
      
      return this.props.posts.map( post => < Status post={post} key={post.id} />)
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