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
      
      return this.props.posts.map( post => { 
        //this.props.users is currently undefined... why? 
        console.log(this.props.users)       
        const elem = this.props.users.filter( (elem) => { return elem.id === post.user_id});
        console.log(elem)
        const username =  elem[0].fullname;
        const avatar = elem[0].avatar
        console.log(username)
        // const username = 'dummy username';
        return < Status 
        username={username} 
        avatar={avatar}
        users={this.props.users}
        post={post} 
        key={post.id} />})
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