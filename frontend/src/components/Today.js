import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import TodayPastSwitcher from './TodayPastSwitcher'

class Today extends Component {

  render() {
    return (
        <div>
            <TodayPastSwitcher/>
            <h1>Today - NewsFeed feature</h1>
            <NewsFeed />
            {/* we're gonna pass data into newsfeed and let it do its thing. newsfeed is kinda of a container component*/}
        </div>
    )
  }
};

export default Today;