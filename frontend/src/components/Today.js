import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import TodayPastSwitcher from './TodayPastSwitcher';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

// import { addPost } from '../actions/posts'
class Today extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  getPosts = () =>  {
    //eventually, make sure it only get recent posts of user, not all posts
    // const configObject = { 
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    //     }
    //   }

    // fetch("http://localhost:3000/api/posts", configObject).
    // then( res => res.json()).
    // then( json => {
    //   //refactor this to store in redux instead 
    //   console.log(JSON.stringify(json));
    //   console.log(json)
    //   // this.setState({postsReceived: JSON.stringify(json)})
    // }
    //   )
    this.props.getPosts({type: "recent"})


  }


  render() {
    return (
        <div>
            <TodayPastSwitcher/>
            <h1>Today - NewsFeed feature</h1>
            <div>
              <button onClick={this.getPosts}>
                Get posts
              </button>
              {/* <p>Posts received: {this.props.postsReceived}</p> */}

              <p>current user token: {localStorage.getItem("userToken")}</p>
            </div>

            <NewsFeed posts={this.props.postsReceived}/>
            {/* we're gonna pass data into newsfeed and let it do its thing. newsfeed is kinda of a container component*/}
        </div>
    )
  }
};


const mapStateToProps = (state) => {

  return { postsReceived : state.posts.posts }
}

  
const mapDispatchToProps = (dispatch) => {
  return { 
    getPosts: (specObject) => dispatch(getPosts(specObject))
   }
  
};


export default connect(mapStateToProps, mapDispatchToProps)(Today);