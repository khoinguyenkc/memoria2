import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import TodayPastSwitcher from './TodayPastSwitcher'
import { connect } from 'react-redux';

class Today extends Component {
  constructor(props) {
    super(props)
    this.state = {postsReceived: ""}
  }

  getPosts = () =>  {
    console.log(this.props.whatever)
    //eventually, make sure it only get recent posts of user, not all posts
    const configObject = { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      }

    fetch("http://localhost:3000/api/posts", configObject).
    then( res => res.json()).
    then( json => this.setState({postsReceived: JSON.stringify(json)}))
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
              <p>Posts received: {this.state.postsReceived}</p>

              <p>current user token: {localStorage.getItem("userToken")}</p>
              <p>{this.state.postsReceived}</p>
            </div>

            <NewsFeed />
            {/* we're gonna pass data into newsfeed and let it do its thing. newsfeed is kinda of a container component*/}
        </div>
    )
  }
};


const mapStateToProps = (state) => {

  return { userToken : state.userToken.token }
}



export default connect(mapStateToProps)(Today);