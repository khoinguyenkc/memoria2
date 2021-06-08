import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import TodayPastSwitcher from './TodayPastSwitcher'

class Today extends Component {
  constructor(props) {
    super(props)
    this.state = {postsReceived: ""}
  }

  getPosts = () =>  {
    fetch("http://localhost:3000/api/posts").
    then( res => res.json()).
    then( json => this.setState({postsReceived: JSON.stringify(json)}))
  }


  render() {
    return (
        <div>
            <TodayPastSwitcher/>
            <h1>Today - NewsFeed feature</h1>
            <div>
              <button
                onClick={this.getPosts}
              >
                Get posts
              </button>
              <p>{this.state.postsReceived}</p>
            </div>

            <NewsFeed />
            {/* we're gonna pass data into newsfeed and let it do its thing. newsfeed is kinda of a container component*/}
        </div>
    )
  }
};

export default Today;